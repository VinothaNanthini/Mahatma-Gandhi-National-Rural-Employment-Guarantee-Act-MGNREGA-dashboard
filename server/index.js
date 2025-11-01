require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const NodeCache = require("node-cache");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.DATA_GOV_API_KEY;
const RESOURCE_ID = "ee03643a-ee4c-48c2-ac30-9f2ff26ab722"; // replace with actual ID
const cache = new NodeCache({ stdTTL: 3600 }); // 1-hour cache

app.use(express.static(path.join(__dirname, "../client")));

const limiter = rateLimit({ windowMs: 60 * 1000, max: 60 });
app.use("/api/", limiter);

// ---------- Proxy endpoint ----------
app.get("/api/mgnrega/district", async (req, res) => {
  try {
    const { districtCode, fin_year } = req.query;
    if (!districtCode) return res.status(400).json({ ok: false, msg: "districtCode required" });
    const cacheKey = `${districtCode}_${fin_year}`;
    const cached = cache.get(cacheKey);
    if (cached) return res.json({ ok: true, fromCache: true, data: cached });

    const apiUrl = `https://api.data.gov.in/resource/${RESOURCE_ID}?filters[district_code]=${districtCode}&filters[fin_year]=${fin_year}&api-key=${API_KEY}&format=json`;
    const r = await fetch(apiUrl);
    const data = await r.json();
    cache.set(cacheKey, data);
    res.json({ ok: true, fromCache: false, data });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ---------- Reverse Geocode ----------
app.get("/api/reverse-geocode", async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ ok: false, msg: "lat/lon required" });
  try {
    const cacheKey = `revgeo_${lat}_${lon}`;
    const cached = cache.get(cacheKey);
    if (cached) return res.json({ ok: true, data: cached });
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;
    const r = await fetch(url, { headers: { "User-Agent": "MGNREGA-app" } });
    const json = await r.json();
    cache.set(cacheKey, json);
    res.json({ ok: true, data: json });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));
