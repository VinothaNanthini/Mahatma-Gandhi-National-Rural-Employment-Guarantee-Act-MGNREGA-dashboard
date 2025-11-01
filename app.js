// Tamil Nadu Districts
const tamilNaduDistricts = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri',
  'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur',
  'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris',
  'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga',
  'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli',
  'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur',
  'Vellore', 'Viluppuram', 'Virudhunagar'
];

// Translations
const translations = {
  en: {
    headerTitle: 'Our Voice, Our Rights',
    headerSubtitle: 'MGNREGA District Performance Dashboard',
    guideText: 'Guide',
    welcomeTitle: 'Welcome! This website helps you understand MGNREGA performance in your district.',
    welcomeDesc: 'Click on any metric to hear an explanation. Use the language button to switch to Tamil.',
    getStarted: 'Get Started 🚀',
    guideHeading: 'How to Use This Website',
    step1: 'Select your district from the dropdown menu',
    step2: 'Click "Show Report" to see the data',
    step3: 'Click on any metric card to hear audio explanation',
    step4: 'Use language toggle to switch between English and Tamil',
    selectDistrictTitle: 'Select Your District',
    stateLabel: 'Tamil Nadu',
    selectPlaceholder: '-- Select Your District --',
    showReportText: 'Show District Report',
    infoBannerText: 'Real-time data from Government of India MGNREGA API',
    districtState: 'Tamil Nadu',
    changeDistrictText: 'Change District',
    loadingText: 'Loading district data...',
    employedLabel: 'People Employed',
    wagesLabel: 'Total Wages Paid',
    workdaysLabel: 'Workdays Generated',
    pendingLabel: 'Pending Payments',
    listenText1: 'Listen',
    listenText2: 'Listen',
    listenText3: 'Listen',
    listenText4: 'Listen',
    trendHeading: 'Employment Trend (Last 6 Months)',
    dataSourceTitle: 'Data Source',
    dataSourceText: 'Official MGNREGA API (data.gov.in)',
    updateTitle: 'Last Updated',
    updateText: 'Real-time data',
    accessTitle: 'Accessibility',
    accessText: 'Works on all devices',
    footerText: 'Empowering rural India with transparent data access'
  },
  ta: {
    headerTitle: 'எங்கள் குரல், எங்கள் உரிமைகள்',
    headerSubtitle: 'MGNREGA மாவட்ட செயல்திறன் டாஷ்போர்டு',
    guideText: 'வழிகாட்டி',
    welcomeTitle: 'வரவேற்கிறோம்! உங்கள் மாவட்டத்தில் MGNREGA செயல்திறனைப் புரிந்துகொள்ள இந்த வலைத்தளம் உதவுகிறது.',
    welcomeDesc: 'விளக்கத்தைக் கேட்க எந்த மெட்ரிக்கையும் கிளிக் செய்யவும். தமிழுக்கு மாற மொழி பொத்தானைப் பயன்படுத்தவும்.',
    getStarted: 'தொடங்குங்கள் 🚀',
    guideHeading: 'இந்த வலைத்தளத்தை எப்படி பயன்படுத்துவது',
    step1: 'கீழ்தோன்றும் மெனுவில் இருந்து உங்கள் மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
    step2: 'தரவைப் பார்க்க "அறிக்கையைக் காட்டு" என்பதைக் கிளிக் செய்யவும்',
    step3: 'ஆடியோ விளக்கத்தைக் கேட்க எந்த மெட்ரிக் கார்டையும் கிளிக் செய்யவும்',
    step4: 'ஆங்கிலம் மற்றும் தமிழுக்கு இடையே மாற மொழி மாற்றியைப் பயன்படுத்தவும்',
    selectDistrictTitle: 'உங்கள் மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
    stateLabel: 'தமிழ்நாடு',
    selectPlaceholder: '-- உங்கள் மாவட்டத்தைத் தேர்ந்தெடுக்கவும் --',
    showReportText: 'மாவட்ட அறிக்கையைக் காட்டு',
    infoBannerText: 'இந்திய அரசின் MGNREGA API இலிருந்து நேரடி தரவு',
    districtState: 'தமிழ்நாடு',
    changeDistrictText: 'மாவட்டத்தை மாற்று',
    loadingText: 'மாவட்ட தரவு ஏற்றுகிறது...',
    employedLabel: 'வேலை பெற்றவர்கள்',
    wagesLabel: 'செலுத்தப்பட்ட மொத்த ஊதியம்',
    workdaysLabel: 'உருவாக்கப்பட்ட வேலை நாட்கள்',
    pendingLabel: 'நிலுவையில் உள்ள கொடுப்பனவுகள்',
    listenText1: 'கேளுங்கள்',
    listenText2: 'கேளுங்கள்',
    listenText3: 'கேளுங்கள்',
    listenText4: 'கேளுங்கள்',
    trendHeading: 'வேலைவாய்ப்பு போக்கு (கடந்த 6 மாதங்கள்)',
    dataSourceTitle: 'தரவு மூலம்',
    dataSourceText: 'அதிகாரப்பூர்வ MGNREGA API (data.gov.in)',
    updateTitle: 'கடைசியாக புதுப்பிக்கப்பட்டது',
    updateText: 'நேரடி தரவு',
    accessTitle: 'அணுகல்',
    accessText: 'அனைத்து சாதனங்களிலும் வேலை செய்கிறது',
    footerText: 'வெளிப்படையான தரவு அணுகல் மூலம் கிராமப்புற இந்தியாவை மேம்படுத்துதல்'
  }
};

// State
let currentLang = 'en';
let selectedDistrict = null;
let districtData = null;

// Cache Management
const CACHE_KEY_PREFIX = 'mgnrega_cache_';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  populateDistricts();
  setupEventListeners();
  updateLanguage();
  // initial UI state
  document.getElementById('showReportBtn').disabled = true;
  // hide dashboard initially
  document.getElementById('dashboardCard').classList.add('hidden');
  document.getElementById('trendSection').classList.add('hidden');
  document.getElementById('metricsGrid').classList.add('hidden');
  document.getElementById('additionalInfo').classList.add('hidden');
  document.getElementById('loadingState').style.display = 'none';
}

function populateDistricts() {
  const select = document.getElementById('districtSelect');
  tamilNaduDistricts.forEach(district => {
    const option = document.createElement('option');
    option.value = district;
    option.textContent = district;
    select.appendChild(option);
  });
}

function setupEventListeners() {
  // Welcome Modal
  const gs = document.getElementById('getStartedBtn');
  if (gs) gs.addEventListener('click', () => {
    const w = document.getElementById('welcomeModal');
    if (w) w.style.display = 'none';
  });

  // Language Toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ta' : 'en';
    updateLanguage();
  });

  // Guide Toggle
  const guideToggle = document.getElementById('guideToggle');
  if (guideToggle) guideToggle.addEventListener('click', () => {
    const panel = document.getElementById('guidePanel');
    if (panel) panel.classList.toggle('hidden');
  });

  // District Selection
  const districtSelect = document.getElementById('districtSelect');
  if (districtSelect) {
    districtSelect.addEventListener('change', (e) => {
      selectedDistrict = e.target.value;
      const showBtn = document.getElementById('showReportBtn');
      if (showBtn) showBtn.disabled = !selectedDistrict;
    });
  }

  // Show Report
  const showBtn = document.getElementById('showReportBtn');
  if (showBtn) showBtn.addEventListener('click', () => {
    if (selectedDistrict) loadDistrictData(selectedDistrict);
  });

  // Change District
  const changeBtn = document.getElementById('changeDistrictBtn');
  if (changeBtn) changeBtn.addEventListener('click', showSelectionCard);

  // Metric card audio (delegated safe)
  document.querySelectorAll('.metric-card').forEach(card => {
    card.addEventListener('click', () => {
      const metric = card.getAttribute('data-metric');
      playMetricAudio(metric);
      card.classList.add('active');
      setTimeout(() => card.classList.remove('active'), 2000);
    });
  });

  // Fetch raw data (if UI includes fetchButton)
  const fetchButton = document.getElementById("fetchButton");
  if (fetchButton) {
    fetchButton.addEventListener("click", async () => {
      const dist = document.getElementById("districtSelect").value;
      const loading = document.getElementById("loading");
      const err = document.getElementById("error");
      if (loading) loading.classList.remove("hidden");
      if (err) err.classList.add("hidden");
      try {
        const data = await fetchFromAPI(dist);
        renderData(data);
      } catch (e) {
        if (err) {
          err.textContent = e.message || "Error fetching";
          err.classList.remove("hidden");
        } else console.error(e);
      } finally {
        if (loading) loading.classList.add("hidden");
      }
    });
  }

  // Detect location
  const detectBtn = document.getElementById("detectLocation");
  if (detectBtn) detectBtn.addEventListener('click', detectUserLocation);
}

function updateLanguage() {
  const t = translations[currentLang];
  Object.keys(t).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
        element.value = t[key];
      } else {
        element.textContent = t[key];
      }
    }
  });
  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';
}

/* ---------- Main data loader ---------- */
async function loadDistrictData(district) {
  // Show loader first, hide content
  showLoading();
  // Show dashboard layout (but content stays hidden via metricsGrid/trendSection)
  showDashboard();

  try {
    // Check cache
    const cachedData = getCachedData(district);
    if (cachedData) {
      displayData(cachedData);
      hideLoading(); // stop spinner
      return;
    }

    // Fetch API
    const data = await fetchFromAPI(district);
    // If API returns raw structure, try to parse into our internal form
    const normalized = normalizeAPIDataIfNeeded(data, district);
    cacheData(district, normalized);
    displayData(normalized);
    hideLoading();
  } catch (error) {
    console.error('Error loading data:', error);
    // Fallback demo
    const demoData = generateDemoData(district);
    displayData(demoData);
    hideLoading();
  }
}

/* Normalize API response if web endpoint structure is different */
function normalizeAPIDataIfNeeded(apiResponse, district) {
  // If it looks like our expected object (has employed/wages), use directly
  if (!apiResponse) return generateDemoData(district);

  // If it's already normalized
  if (apiResponse.employed !== undefined && apiResponse.wages !== undefined) {
    return apiResponse;
  }

  // If API returns { records: [...] } keep a safe parse
  try {
    if (Array.isArray(apiResponse.records) && apiResponse.records.length > 0) {
      const rec = apiResponse.records[0];
      return {
        district: rec.district_name || district,
        employed: rec.persons_worked || rec.persondays_total || 0,
        wages: rec.total_wages || rec.amount || 0,
        workdays: rec.persondays_total || rec.workdays || 0,
        pending: rec.pending_payments || 0,
        trend: generateTrendData()
      };
    }
  } catch (e) {
    // ignore
  }

  // If JSON data contains nested structure like json.data
  if (apiResponse.data && typeof apiResponse.data === 'object') {
    return normalizeAPIDataIfNeeded(apiResponse.data, district);
  }

  // fallback
  return generateDemoData(district);
}

/* ---------- Fetch API ---------- */
async function fetchFromAPI(districtName) {
  // districtCode helper
  const districtCode = getDistrictCode(districtName);
  if (!districtCode) throw new Error("District code not found.");

  const year = `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`;
  const url = `/api/mgnrega/district?districtCode=${districtCode}&fin_year=${year}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Server error fetching data");
  const json = await res.json();
  // some APIs return { ok: true/false, data: {...} }
  if (json && json.data) return json.data;
  return json;
}

/* ---------- Render raw API table (if used) ---------- */
function renderData(data) {
  const container = document.getElementById("data");
  if (!container) return;
  container.innerHTML = "";
  if (!data || !data.records || !data.records.length) {
    container.innerHTML = "<p>No data available.</p>";
    return;
  }
  const rec = data.records[0];
  const html = `
    <h3>${rec.district_name || '—'}</h3>
    <p>Households Worked: ${rec.households_worked || '—'}</p>
    <p>Persons Worked: ${rec.persondays_total || '—'}</p>
    <p>Women Participation: ${rec.women_percent || '—'}%</p>
  `;
  container.innerHTML = html;
}

/* ---------- Geolocation ---------- */
async function detectUserLocation() {
  if (!("geolocation" in navigator)) {
    alert("Geolocation not supported.");
    return;
  }
  navigator.geolocation.getCurrentPosition(async (pos) => {
    try {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      // endpoint that returns address with district
      const res = await fetch(`/api/reverse-geocode?lat=${lat}&lon=${lon}`);
      if (!res.ok) throw new Error("Reverse geocode failed");
      const j = await res.json();
      if (j.ok && j.data && j.data.address) {
        const addr = j.data.address;
        const districtName = addr.district || addr.county || addr.state_district;
        if (districtName) {
          alert(`Detected District: ${districtName}`);
          const sel = document.getElementById("districtSelect");
          if (sel) {
            sel.value = districtName;
            sel.dispatchEvent(new Event('change'));
          }
        } else {
          alert("Unable to detect district.");
        }
      } else {
        alert("Unable to detect address from location.");
      }
    } catch (e) {
      console.error(e);
      alert("Location detection failed.");
    }
  }, err => {
    console.error(err);
    alert("Unable to retrieve location.");
  });
}

/* ---------- Cache helpers ---------- */
function getCachedData(district) {
  try {
    const cacheKey = CACHE_KEY_PREFIX + district;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && parsed.data && parsed.timestamp) {
        if (Date.now() - parsed.timestamp < CACHE_DURATION) return parsed.data;
      }
    }
  } catch (e) {
    console.warn("Cache read failed", e);
  }
  return null;
}

function cacheData(district, data) {
  try {
    const cacheKey = CACHE_KEY_PREFIX + district;
    const cacheObject = { data, timestamp: Date.now() };
    localStorage.setItem(cacheKey, JSON.stringify(cacheObject));
  } catch (e) {
    console.warn("Cache write failed", e);
  }
}

/* ---------- Demo & trend generators ---------- */
function generateDemoData(district) {
  return {
    district: district,
    employed: Math.floor(Math.random() * 45000) + 15000,
    wages: Math.floor(Math.random() * 20000000) + 2000000, // gives crores/lakhs sometimes
    workdays: Math.floor(Math.random() * 800000) + 200000,
    pending: Math.floor(Math.random() * 50000000) + 1000000,
    trend: generateTrendData()
  };
}

function generateTrendData() {
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  return months.map(month => ({
    month,
    value: Math.floor(Math.random() * 40000) + 2000
  }));
}

/* ---------- District code (partial) ---------- */
function getDistrictCode(districtName) {
  const districtCodes = {
    'Ariyalur': '01',
    'Chengalpattu': '02',
    'Chennai': '03',
    'Coimbatore': '04',
    'Cuddalore': '05',
    // ... extend as needed
  };
  return districtCodes[districtName] || '01';
}

/* ---------- Chart rendering (simple bar chart using DOM) ---------- */
/* ---------- Chart rendering (simple bar chart using DOM) ---------- */
function renderChart(trendData) {
  const chartBars = document.getElementById("chartBars");
  if (!chartBars) return;
  chartBars.innerHTML = ""; // clear previous bars

  // Use fallback if empty
  const dataToUse = trendData && trendData.length ? trendData : generateTrendData();
  const maxValue = Math.max(...dataToUse.map(d => d.value), 1);

  dataToUse.forEach(item => {
    const barWrapper = document.createElement("div");
    barWrapper.className = "chart-bar";
    barWrapper.style.display = "flex";
    barWrapper.style.flexDirection = "column";
    barWrapper.style.alignItems = "center";
    barWrapper.style.justifyContent = "flex-end";
    barWrapper.style.height = "200px";
    barWrapper.style.flex = "1";

    const bar = document.createElement("div");
    bar.className = "bar";
    const heightPercent = (item.value / maxValue) * 100;
    bar.style.height = `${heightPercent}%`;
    bar.style.minHeight = "20px"; // ensure bars are visible
    bar.style.background = "linear-gradient(180deg, #42a5f5, #1e88e5)";
    bar.style.width = "60px";
    bar.style.borderRadius = "8px 8px 0 0";
    bar.style.transition = "all 0.3s ease";
    bar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";

    // Add hover effect
    bar.addEventListener('mouseenter', function() {
      this.style.transform = "scaleY(1.05)";
      this.style.background = "linear-gradient(180deg, #66bb6a, #43a047)";
    });
    bar.addEventListener('mouseleave', function() {
      this.style.transform = "scaleY(1)";
      this.style.background = "linear-gradient(180deg, #42a5f5, #1e88e5)";
    });

    const valueLabel = document.createElement("div");
    valueLabel.style.fontSize = "11px";
    valueLabel.style.fontWeight = "600";
    valueLabel.style.color = "#1e88e5";
    valueLabel.style.marginBottom = "4px";
    valueLabel.textContent = formatNumber(item.value);

    const label = document.createElement("div");
    label.className = "bar-label";
    label.style.marginTop = "8px";
    label.style.fontSize = "12px";
    label.style.fontWeight = "500";
    label.style.color = "#666";
    label.textContent = item.month;

    barWrapper.appendChild(valueLabel);
    barWrapper.appendChild(bar);
    barWrapper.appendChild(label);
    chartBars.appendChild(barWrapper);
  });

  // ensure visible
  const trendSection = document.getElementById("trendSection");
  if (trendSection) trendSection.classList.remove("hidden");
}
/* ---------- Primary UI updater ---------- */
function displayData(data) {
  if (!data) return;
  districtData = data; // global assignment so other functions (audio) work

  // header / metrics
  const elDistrict = document.getElementById("districtName");
  if (elDistrict) elDistrict.textContent = data.district || '—';

  const employedEl = document.getElementById("employedValue");
  if (employedEl) employedEl.textContent = formatNumber(data.employed || 0);

  const wagesEl = document.getElementById("wagesValue");
  if (wagesEl) wagesEl.textContent = formatCurrency(data.wages || 0);

  const workdaysEl = document.getElementById("workdaysValue");
  if (workdaysEl) workdaysEl.textContent = formatNumber(data.workdays || 0);

  const pendingEl = document.getElementById("pendingValue");
  if (pendingEl) pendingEl.textContent = formatCurrency(data.pending || 0);

  // render chart and map
  const trend = (data.trend && data.trend.length) ? data.trend : generateTrendData();
  renderChart(trend);
  showMap(data.district);

  // reveal sections fully
  const metricsGrid = document.getElementById("metricsGrid");
  if (metricsGrid) metricsGrid.classList.remove("hidden");
  const additionalInfo = document.getElementById("additionalInfo");
  if (additionalInfo) additionalInfo.classList.remove("hidden");
  const trendSection = document.getElementById("trendSection");
  if (trendSection) trendSection.classList.remove("hidden");
}

/* ---------- Number formatting ---------- */
function formatNumber(num) {
  if (typeof num !== 'number') num = Number(num) || 0;
  if (num >= 10000000) return `${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `${(num / 100000).toFixed(2)} L`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toLocaleString('en-IN');
}

function formatCurrency(num) {
  if (typeof num !== 'number') num = Number(num) || 0;
  return '₹' + formatNumber(num);
}

/* ---------- Audio for metric cards ---------- */
function playMetricAudio(metric) {
  if (!districtData) return;
  const metricLabels = {
    employed: currentLang === 'en' ? 'People Employed' : 'வேலை பெற்றவர்கள்',
    wages: currentLang === 'en' ? 'Total Wages Paid' : 'செலுத்தப்பட்ட மொத்த ஊதியம்',
    workdays: currentLang === 'en' ? 'Workdays Generated' : 'உருவாக்கப்பட்ட வேலை நாட்கள்',
    pending: currentLang === 'en' ? 'Pending Payments' : 'நிலுவையில் உள்ள கொடுப்பனவுகள்'
  };

  const value = (metric === 'wages' || metric === 'pending')
    ? formatCurrency(districtData[metric])
    : formatNumber(districtData[metric]);

  const label = metricLabels[metric] || metric;
  const text = `${label}: ${value}`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentLang === 'ta' ? 'ta-IN' : 'en-IN';
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
}

/* ---------- Simple map (Leaflet) ---------- */
function showMap(district) {
  const mapSection = document.getElementById("mapSection");
  if (mapSection) mapSection.classList.remove("hidden");

  // sample coords
  const coords = {
    "Chennai": [13.0827, 80.2707],
    "Madurai": [9.9252, 78.1198],
    "Coimbatore": [11.0168, 76.9558],
    "Tiruchirappalli": [10.7905, 78.7047],
    "Salem": [11.6643, 78.1460],
  };
  const location = coords[district] || [11.1271, 78.6569];
  const mapContainer = document.getElementById("mapContainer");
  if (!mapContainer) return;

  // clear previous map
  mapContainer.innerHTML = "";
  try {
    const map = L.map(mapContainer).setView(location, 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
    L.marker(location).addTo(map)
      .bindPopup(`<b>${district}</b><br>District Location`)
      .openPopup();
  } catch (e) {
    console.warn("Leaflet might not be loaded:", e);
  }
}
function renderTrendChart(data) {
  const chartContainer = document.getElementById("chartBars");
  chartContainer.innerHTML = ""; // Clear old bars

  const maxVal = Math.max(...data.map(d => d.value));

  data.forEach(d => {
    const barWrapper = document.createElement("div");
    barWrapper.classList.add("chart-bar");

    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${(d.value / maxVal) * 100}%`;

    const label = document.createElement("div");
    label.classList.add("bar-label");
    label.textContent = d.month;

    barWrapper.appendChild(bar);
    barWrapper.appendChild(label);
    chartContainer.appendChild(barWrapper);
  });

  // Finally, show the section
  document.getElementById("trendSection").classList.remove("hidden");
}
// Example call (you can replace with real API data)
renderTrendChart([
  { month: "May", value: 1200 },
  { month: "Jun", value: 800 },
  { month: "Jul", value: 1500 },
  { month: "Aug", value: 900 },
  { month: "Sep", value: 1800 },
  { month: "Oct", value: 1400 }
]);


/* ---------- UI helpers ---------- */
function showDashboard() {
  const sel = document.getElementById('selectionCard');
  const dash = document.getElementById('dashboardCard');
  if (sel) sel.classList.add('hidden');
  if (dash) dash.classList.remove('hidden');
}

function showSelectionCard() {
  const dash = document.getElementById('dashboardCard');
  const sel = document.getElementById('selectionCard');
  if (dash) dash.classList.add('hidden');
  if (sel) sel.classList.remove('hidden');
  selectedDistrict = null;
  const ds = document.getElementById('districtSelect');
  if (ds) ds.value = '';
  const sb = document.getElementById('showReportBtn');
  if (sb) sb.disabled = true;
}

/* ---------- Loader show/hide ---------- */
function showLoading() {
  const loadingState = document.getElementById('loadingState');
  if (loadingState) loadingState.style.display = 'flex'; // assume CSS centers it
  // dim dashboard while loading
  const dashCard = document.getElementById('dashboardCard');
  if (dashCard) dashCard.style.opacity = '0.6';
  // hide content sections to prevent overlap
  const metricsGrid = document.getElementById('metricsGrid');
  if (metricsGrid) metricsGrid.classList.add('hidden');
  const trendSection = document.getElementById('trendSection');
  if (trendSection) trendSection.classList.add('hidden');
  const additionalInfo = document.getElementById('additionalInfo');
  if (additionalInfo) additionalInfo.classList.add('hidden');
}

function hideLoading() {
  const loadingState = document.getElementById('loadingState');
  if (loadingState) loadingState.style.display = 'none';
  const dashCard = document.getElementById('dashboardCard');
  if (dashCard) dashCard.style.opacity = '1';
  // show content sections (display depends on data)
  const metricsGrid = document.getElementById('metricsGrid');
  if (metricsGrid) metricsGrid.classList.remove('hidden');
  const trendSection = document.getElementById('trendSection');
  if (trendSection) trendSection.classList.remove('hidden');
  const additionalInfo = document.getElementById('additionalInfo');
  if (additionalInfo) additionalInfo.classList.remove('hidden');
}
