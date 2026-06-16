// LDBAA - Positions & Fixture Logic

// Default initialization data
const DEFAULT_GROUPS = {
  masculino: {
    "Grupo 1": [
      "Spencer",
      "Ventanas",
      "Napoles",
      "Palmeiras",
      "White Lion",
      "River Plate",
    ],
    "Grupo 2": [
      "Dinamo",
      "Veorbo",
      "Portoviejo",
      "Inter",
      "Fluminense",
      "Lakers",
    ],
    "Grupo 3": [
      "Independiente",
      "Oriental",
      "Almaguer",
      "Manchester",
      "Roba Crew",
    ],
    "Grupo 4": [
      "Argentina",
      "Estudiantes",
      "AC Latinos",
      "Solo Panas",
      "Alianza J",
    ],
  },
  femenino: {
    "Grupo 1": [
      "Manchester",
      "Remanso D Amor",
      "Oriental",
      "AC Latinos",
      "Palmeiras",
    ],
    "Grupo 2": ["Dep Spencer", "Fluminense", "Inter", "Spencer", "Ventanas"],
  },
};

// Static Fixture Template as per the Excel layout (Ida Matches)
const FIXTURES_TEMPLATE = {
  masculino: {
    "Grupo 1": [
      {
        matches: [
          { home: "Ventanas", away: "Spencer" },
          { home: "White Lion", away: "Napoles" },
          { home: "Palmeiras", away: "River Plate" },
        ],
        bye: null,
      },
      {
        matches: [
          { home: "Napoles", away: "Spencer" },
          { home: "White Lion", away: "Palmeiras" },
          { home: "Ventanas", away: "River Plate" },
        ],
        bye: null,
      },
      {
        matches: [
          { home: "Napoles", away: "Ventanas" },
          { home: "Palmeiras", away: "Spencer" },
          { home: "White Lion", away: "River Plate" },
        ],
        bye: null,
      },
      {
        matches: [
          { home: "Palmeiras", away: "Ventanas" },
          { home: "White Lion", away: "Spencer" },
          { home: "Napoles", away: "River Plate" },
        ],
        bye: null,
      },
      {
        matches: [
          { home: "Palmeiras", away: "Napoles" },
          { home: "White Lion", away: "Ventanas" },
          { home: "Spencer", away: "River Plate" },
        ],
        bye: null,
      },
    ],
    "Grupo 2": [
      {
        matches: [
          { home: "Dinamo", away: "Veorbo" },
          { home: "Fluminense", away: "Portoviejo" },
          { home: "Inter", away: "Lakers" },
        ],
        bye: null,
      },
      {
        matches: [
          { home: "Portoviejo", away: "Dinamo" },
          { home: "Fluminense", away: "Inter" },
          { home: "Veorbo", away: "Lakers" },
        ],
        bye: null,
      },
      {
        matches: [
          { home: "Portoviejo", away: "Veorbo" },
          { home: "Inter", away: "Dinamo" },
          { home: "Fluminense", away: "Lakers" },
        ],
        bye: null,
      },
      {
        matches: [
          { home: "Inter", away: "Veorbo" },
          { home: "Fluminense", away: "Dinamo" },
          { home: "Portoviejo", away: "Lakers" },
        ],
        bye: null,
      },
      {
        matches: [
          { home: "Inter", away: "Portoviejo" },
          { home: "Fluminense", away: "Veorbo" },
          { home: "Dinamo", away: "Lakers" },
        ],
        bye: null,
      },
    ],
    "Grupo 3": [
      {
        matches: [
          { home: "Oriental", away: "Independiente" },
          { home: "Roba Crew", away: "Almaguer" },
        ],
        bye: "Manchester",
      },
      {
        matches: [
          { home: "Almaguer", away: "Independiente" },
          { home: "Roba Crew", away: "Manchester" },
        ],
        bye: "Oriental",
      },
      {
        matches: [
          { home: "Almaguer", away: "Oriental" },
          { home: "Manchester", away: "Independiente" },
        ],
        bye: "Roba Crew",
      },
      {
        matches: [
          { home: "Manchester", away: "Oriental" },
          { home: "Roba Crew", away: "Independiente" },
        ],
        bye: "Almaguer",
      },
      {
        matches: [
          { home: "Manchester", away: "Almaguer" },
          { home: "Roba Crew", away: "Oriental" },
        ],
        bye: "Independiente",
      },
    ],
    "Grupo 4": [
      {
        matches: [
          { home: "Estudiantes", away: "Argentina" },
          { home: "Alianza J", away: "AC Latinos" },
        ],
        bye: "Solo Panas",
      },
      {
        matches: [
          { home: "AC Latinos", away: "Argentina" },
          { home: "Alianza J", away: "Solo Panas" },
        ],
        bye: "Estudiantes",
      },
      {
        matches: [
          { home: "AC Latinos", away: "Estudiantes" },
          { home: "Solo Panas", away: "Argentina" },
        ],
        bye: "Alianza J",
      },
      {
        matches: [
          { home: "Solo Panas", away: "Estudiantes" },
          { home: "Alianza J", away: "Argentina" },
        ],
        bye: "AC Latinos",
      },
      {
        matches: [
          { home: "Solo Panas", away: "AC Latinos" },
          { home: "Alianza J", away: "Estudiantes" },
        ],
        bye: "Argentina",
      },
    ],
  },
  femenino: {
    "Grupo 1": [
      {
        matches: [
          { home: "Remanso D Amor", away: "Manchester" },
          { home: "Palmeiras", away: "Oriental" },
        ],
        bye: "AC Latinos",
      },
      {
        matches: [
          { home: "Oriental", away: "Manchester" },
          { home: "Palmeiras", away: "AC Latinos" },
        ],
        bye: "Remanso D Amor",
      },
      {
        matches: [
          { home: "Oriental", away: "Remanso D Amor" },
          { home: "AC Latinos", away: "Manchester" },
        ],
        bye: "Palmeiras",
      },
      {
        matches: [
          { home: "AC Latinos", away: "Remanso D Amor" },
          { home: "Palmeiras", away: "Manchester" },
        ],
        bye: "Oriental",
      },
      {
        matches: [
          { home: "AC Latinos", away: "Oriental" },
          { home: "Palmeiras", away: "Remanso D Amor" },
        ],
        bye: "Manchester",
      },
    ],
    "Grupo 2": [
      {
        matches: [
          { home: "Fluminense", away: "Dep Spencer" },
          { home: "Ventanas", away: "Inter" },
        ],
        bye: "Spencer",
      },
      {
        matches: [
          { home: "Inter", away: "Dep Spencer" },
          { home: "Ventanas", away: "Spencer" },
        ],
        bye: "Fluminense",
      },
      {
        matches: [
          { home: "Inter", away: "Fluminense" },
          { home: "Spencer", away: "Dep Spencer" },
        ],
        bye: "Ventanas",
      },
      {
        matches: [
          { home: "Spencer", away: "Fluminense" },
          { home: "Ventanas", away: "Dep Spencer" },
        ],
        bye: "Inter",
      },
      {
        matches: [
          { home: "Spencer", away: "Inter" },
          { home: "Ventanas", away: "Fluminense" },
        ],
        bye: "Dep Spencer",
      },
    ],
  },
};

// State variables
let currentCategory = "masculino";
let currentGroup = "Grupo 1";
let selectedJornadaFilter = "all";
let isAdmin = false;

// Data stores (synced with LocalStorage)
let teamsData = {};
let scoresData = {};
let fixturesData = {}; // Stores generated matches to keep them consistent

// Initialize Application
async function init() {
  checkAuthStatus();
  await loadFromServerAndUrl();
  renderGroupTabs();
  generateAllFixtures(); // Generates if not already present
  updateView();
}

// Authentication Helpers
function checkAuthStatus() {
  isAdmin = localStorage.getItem("ldbaa_is_admin") === "true";

  const authContainer = document.getElementById("auth-container");
  const btnSettings = document.getElementById("btn-settings");
  const btnReset = document.getElementById("btn-reset");
  const btnExport = document.getElementById("btn-export");

  if (authContainer) {
    if (isAdmin) {
      authContainer.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.5rem; background:rgba(16, 185, 129, 0.1); border:1px solid rgba(16, 185, 129, 0.2); padding:0.4rem 0.85rem; border-radius:10px;">
          <span style="font-size:0.85rem; font-weight:700; color:var(--success);"><i class="fa-solid fa-user-shield"></i> Admin</span>
          <button class="action-btn secondary-btn" onclick="logout()" style="padding:0.25rem 0.5rem; font-size:0.75rem;"><i class="fa-solid fa-right-from-bracket"></i> Salir</button>
        </div>
      `;
      if (btnSettings) btnSettings.style.display = "inline-flex";
      if (btnReset) btnReset.style.display = "inline-flex";
      if (btnExport) btnExport.style.display = "inline-flex";
    } else {
      authContainer.innerHTML = `
        <button class="action-btn primary-btn" onclick="openLoginModal()"><i class="fa-solid fa-lock"></i> Entrar Admin</button>
      `;
      if (btnSettings) btnSettings.style.display = "none";
      if (btnReset) btnReset.style.display = "none";
      if (btnExport) btnExport.style.display = "none";
    }
  }
}

function openLoginModal() {
  const modal = document.getElementById("login-modal");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const errorMsg = document.getElementById("login-error");

  if (emailInput) emailInput.value = "";
  if (passwordInput) passwordInput.value = "";
  if (errorMsg) {
    errorMsg.textContent = "";
    errorMsg.style.display = "none";
  }

  if (modal) modal.classList.add("active");
}

function closeLoginModal() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.classList.remove("active");
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const errorMsg = document.getElementById("login-error");

  if (email === "admin@gmail.com" && password === "admin2026") {
    localStorage.setItem("ldbaa_is_admin", "true");
    closeLoginModal();
    checkAuthStatus();
    updateView();
  } else {
    if (errorMsg) {
      errorMsg.textContent = "Correo o contraseña incorrectos.";
      errorMsg.style.display = "block";
    }
  }
}

function logout() {
  localStorage.removeItem("ldbaa_is_admin");
  checkAuthStatus();
  updateView();
}

// Load data from LocalStorage or initialize with defaults
function loadFromLocalStorage() {
  const storedTeams = localStorage.getItem("ldbaa_teams");
  const storedScores = localStorage.getItem("ldbaa_scores");
  const storedFixtures = localStorage.getItem("ldbaa_fixtures");
  const lastDefaults = localStorage.getItem("ldbaa_defaults_version");
  const currentDefaultsStr = JSON.stringify(DEFAULT_GROUPS);

  // If the DEFAULT_GROUPS in code has changed, reset to those defaults
  if (lastDefaults !== currentDefaultsStr) {
    teamsData = JSON.parse(currentDefaultsStr);
    saveTeams();
    fixturesData = {};
    saveFixtures();
    localStorage.setItem("ldbaa_defaults_version", currentDefaultsStr);
  } else if (storedTeams) {
    teamsData = JSON.parse(storedTeams);
  } else {
    teamsData = JSON.parse(currentDefaultsStr);
    saveTeams();
    localStorage.setItem("ldbaa_defaults_version", currentDefaultsStr);
  }

  if (storedScores) {
    scoresData = JSON.parse(storedScores);
  } else {
    scoresData = {};
    saveScores();
  }

  if (storedFixtures && Object.keys(fixturesData).length > 0) {
    fixturesData = JSON.parse(storedFixtures);
  } else {
    fixturesData = {};
    saveFixtures();
  }
}

async function loadFromServerAndUrl() {
  // 1. First load from local storage
  loadFromLocalStorage();

  // 2. Try to fetch the latest scores from scores.json on the server
  try {
    const response = await fetch("scores.json");
    if (response.ok) {
      const serverScores = await response.json();
      if (serverScores && typeof serverScores === "object") {
        // If they are admin, merge them preferring local storage; if regular user, prioritize server
        if (isAdmin) {
          scoresData = { ...serverScores, ...scoresData };
        } else {
          scoresData = { ...scoresData, ...serverScores };
        }
        saveScores();
      }
    }
  } catch (e) {
    console.log("No scores.json found on server or error fetching it.");
  }

  // 3. Load shared state from URL query parameter if present
  const urlParams = new URLSearchParams(window.location.search);
  const sharedData = urlParams.get("data");
  if (sharedData) {
    try {
      const decoded = JSON.parse(decodeURIComponent(escape(atob(sharedData))));
      if (decoded && typeof decoded === "object") {
        scoresData = { ...scoresData, ...decoded };
        saveScores();
        showNotification("Resultados cargados desde el enlace compartido.");
        // Clean up URL parameter
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }
    } catch (e) {
      console.error("Error decoding shared state from URL:", e);
      showNotification("Error al cargar los datos del enlace.", true);
    }
  }
}

function exportScores() {
  try {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(scoresData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "scores.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification(
      "Archivo 'scores.json' descargado. Colócalo en la carpeta de tu proyecto.",
    );
  } catch (e) {
    console.error("Error exporting scores:", e);
    showNotification("Error al exportar los resultados.", true);
  }
}

function shareState() {
  try {
    const encoded = btoa(
      unescape(encodeURIComponent(JSON.stringify(scoresData))),
    );
    const shareUrl = `${window.location.origin}${window.location.pathname}?data=${encoded}`;

    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        showNotification("¡Enlace de resultados copiado al portapapeles!");
      })
      .catch((err) => {
        const tempInput = document.createElement("input");
        tempInput.value = shareUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        showNotification("¡Enlace de resultados copiado al portapapeles!");
      });
  } catch (e) {
    console.error("Error generating share link:", e);
    showNotification("No se pudo generar el enlace de compartir.", true);
  }
}

function showNotification(message, isError = false) {
  const existing = document.getElementById("app-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "app-notification";
  toast.style.position = "fixed";
  toast.style.bottom = "2rem";
  toast.style.right = "2rem";
  toast.style.padding = "0.8rem 1.6rem";
  toast.style.borderRadius = "12px";
  toast.style.background = isError
    ? "var(--danger)"
    : "var(--primary-gradient)";
  toast.style.color = "white";
  toast.style.boxShadow = "var(--shadow-premium)";
  toast.style.zIndex = "1000";
  toast.style.fontSize = "0.9rem";
  toast.style.fontWeight = "600";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "0.6rem";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(20px)";
  toast.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

  toast.innerHTML = `<i class="fa-solid ${isError ? "fa-triangle-exclamation" : "fa-check"}"></i> ${message}`;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 10);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

function saveTeams() {
  localStorage.setItem("ldbaa_teams", JSON.stringify(teamsData));
}

function saveScores() {
  localStorage.setItem("ldbaa_scores", JSON.stringify(scoresData));
}

function saveFixtures() {
  localStorage.setItem("ldbaa_fixtures", JSON.stringify(fixturesData));
}

// Generate both Ida and Vuelta fixtures from static template
function generateGroupFixtures(cat, groupName) {
  const template = FIXTURES_TEMPLATE[cat][groupName];
  if (!template) return [];

  const fullSchedule = [];

  // 1. Generate Ida Rounds
  template.forEach((round, index) => {
    fullSchedule.push({
      jornada: index + 1,
      type: "Ida",
      bye: round.bye,
      matches: round.matches.map((m) => ({
        id: `${cat}-${groupName}-j${index + 1}-${m.home}-${m.away}`,
        home: m.home,
        away: m.away,
      })),
    });
  });

  // 2. Generate Vuelta Rounds (swap home and away)
  const offset = template.length;
  template.forEach((round, index) => {
    fullSchedule.push({
      jornada: offset + index + 1,
      type: "Vuelta",
      bye: round.bye,
      matches: round.matches.map((m) => ({
        id: `${cat}-${groupName}-j${offset + index + 1}-${m.away}-${m.home}`,
        home: m.away, // Swapped
        away: m.home, // Swapped
      })),
    });
  });

  return fullSchedule;
}

// Generate fixtures for all categories and groups if not existing
function generateAllFixtures() {
  let changed = false;
  for (const cat in teamsData) {
    if (!fixturesData[cat]) fixturesData[cat] = {};
    for (const groupName in teamsData[cat]) {
      if (!fixturesData[cat][groupName]) {
        fixturesData[cat][groupName] = generateGroupFixtures(cat, groupName);
        changed = true;
      }
    }
  }
  if (changed) {
    saveFixtures();
  }
}

// Render dynamic group tab headers
function renderGroupTabs() {
  const container = document.getElementById("group-tabs-container");
  container.innerHTML = "";

  const groups = Object.keys(teamsData[currentCategory]);

  // Safety check: if currentGroup isn't in this category, set it to the first group
  if (!groups.includes(currentGroup)) {
    currentGroup = groups[0];
  }

  groups.forEach((group) => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${group === currentGroup ? "active" : ""}`;
    btn.textContent = group;
    btn.onclick = () => selectGroup(group);
    container.appendChild(btn);
  });
}

// Switch category (Masculino / Femenino)
function setCategory(cat) {
  currentCategory = cat;
  document
    .getElementById("btn-masc")
    .classList.toggle("active", cat === "masculino");
  document
    .getElementById("btn-fem")
    .classList.toggle("active", cat === "femenino");

  renderGroupTabs();
  selectedJornadaFilter = "all";
  updateView();
}

// Switch group
function selectGroup(group) {
  currentGroup = group;
  renderGroupTabs();
  selectedJornadaFilter = "all";
  updateView();
}

// Main updater for Standings, Dropdowns, and Fixtures
function updateView() {
  document.getElementById("current-group-badge").textContent =
    `${currentCategory === "masculino" ? "Masculino" : "Femenino"} - ${currentGroup}`;

  calculateStandings();
  populateJornadaDropdown();
  renderFixtures();
}

// Standing Calculation Engine
function calculateStandings() {
  const teams = teamsData[currentCategory][currentGroup];
  const fixtures = fixturesData[currentCategory][currentGroup] || [];

  // Initialize stats
  const standings = {};
  teams.forEach((team) => {
    standings[team] = {
      name: team,
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      gd: 0,
      pts: 0,
    };
  });

  // Populate stats from scores
  fixtures.forEach((jornada) => {
    jornada.matches.forEach((match) => {
      const scoreKey = match.id;
      const scoreObj = scoresData[scoreKey];

      if (
        scoreObj &&
        scoreObj.home !== "" &&
        scoreObj.away !== "" &&
        scoreObj.home !== null &&
        scoreObj.away !== null
      ) {
        const homeScore = parseInt(scoreObj.home, 10);
        const awayScore = parseInt(scoreObj.away, 10);

        if (
          !isNaN(homeScore) &&
          !isNaN(awayScore) &&
          standings[match.home] &&
          standings[match.away]
        ) {
          standings[match.home].pj += 1;
          standings[match.away].pj += 1;

          standings[match.home].gf += homeScore;
          standings[match.home].gc += awayScore;
          standings[match.away].gf += awayScore;
          standings[match.away].gc += homeScore;

          if (homeScore > awayScore) {
            standings[match.home].pg += 1;
            standings[match.home].pts += 3;
            standings[match.away].pp += 1;
          } else if (homeScore < awayScore) {
            standings[match.away].pg += 1;
            standings[match.away].pts += 3;
            standings[match.home].pp += 1;
          } else {
            standings[match.home].pe += 1;
            standings[match.home].pts += 1;
            standings[match.away].pe += 1;
            standings[match.away].pts += 1;
          }
        }
      }
    });
  });

  // Calculate GD
  Object.keys(standings).forEach((key) => {
    standings[key].gd = standings[key].gf - standings[key].gc;
  });

  // Sort: Points (desc) -> GD (desc) -> GF (desc) -> PG (desc) -> Name (asc)
  const sortedStandings = Object.values(standings).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    if (b.pg !== a.pg) return b.pg - a.pg;
    return a.name.localeCompare(b.name);
  });

  // Render Standings UI
  const tbody = document.getElementById("standings-tbody");
  tbody.innerHTML = "";

  if (sortedStandings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-secondary);">No hay equipos registrados</td></tr>`;
    return;
  }

  sortedStandings.forEach((team, index) => {
    const isQualified = index < 2;
    const row = document.createElement("tr");
    if (isQualified) {
      row.className = "qualified-row";
    }
    row.innerHTML = `
            <td class="col-pos">${index + 1}</td>
            <td class="col-team">
              ${team.name}
              ${isQualified ? '<span class="qualified-badge" title="Clasificado a la siguiente ronda"></span>' : ""}
            </td>
            <td class="col-stat">${team.pj}</td>
            <td class="col-stat">${team.pg}</td>
            <td class="col-stat">${team.pe}</td>
            <td class="col-stat">${team.pp}</td>
            <td class="col-stat">${team.gf}</td>
            <td class="col-stat">${team.gc}</td>
            <td class="col-stat">${team.gd > 0 ? "+" + team.gd : team.gd}</td>
            <td class="col-pts">${team.pts}</td>
        `;
    tbody.appendChild(row);
  });
}

// Populate the select filter for Jornadas
function populateJornadaDropdown() {
  const select = document.getElementById("jornada-select");
  const prevVal = select.value;
  select.innerHTML = '<option value="all">Todas las Jornadas</option>';

  const fixtures = fixturesData[currentCategory][currentGroup] || [];
  fixtures.forEach((j) => {
    const opt = document.createElement("option");
    opt.value = j.jornada;
    opt.textContent = `Jornada ${j.jornada} (${j.type})`;
    select.appendChild(opt);
  });

  // Restore previous filter if still valid
  if (fixtures.some((j) => j.jornada.toString() === prevVal)) {
    select.value = prevVal;
    selectedJornadaFilter = prevVal;
  } else {
    selectedJornadaFilter = "all";
  }
}

function filterJornada(val) {
  selectedJornadaFilter = val;
  renderFixtures();
}
// Render Fixture Cards and input scores
function renderFixtures() {
  const container = document.getElementById("fixture-container");
  container.innerHTML = "";

  const fixtures = fixturesData[currentCategory][currentGroup] || [];
  const filteredFixtures =
    selectedJornadaFilter === "all"
      ? fixtures
      : fixtures.filter((j) => j.jornada.toString() === selectedJornadaFilter);

  if (filteredFixtures.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin: 2rem 0;">No hay encuentros agendados</p>`;
    return;
  }

  filteredFixtures.forEach((jornada) => {
    const jGroup = document.createElement("div");
    jGroup.className = "jornada-group animate-slide-up";

    jGroup.innerHTML = `
            <div class="jornada-header">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span>Jornada ${jornada.jornada}</span>
                    <span class="jornada-type">${jornada.type}</span>
                </div>
                ${
                  isAdmin
                    ? `
                <button class="action-btn primary-btn" style="padding: 0.3rem 0.7rem; font-size: 0.75rem; border-radius: 8px;" onclick="exportScores()">
                    <i class="fa-solid fa-floppy-disk"></i> Guardar
                </button>
                `
                    : ""
                }
            </div>
            <div class="matches-list"></div>
            ${jornada.bye ? `<div class="jornada-bye">Descansa: <span>${jornada.bye}</span></div>` : ""}
        `;

    const listContainer = jGroup.querySelector(".matches-list");

    jornada.matches.forEach((match) => {
      const scoreObj = scoresData[match.id] || { home: "", away: "" };

      const matchItem = document.createElement("div");
      matchItem.className = "match-item";
      matchItem.innerHTML = `
                <div class="team-home" title="${match.home}">${match.home}</div>
                <div>
                    <input type="number" min="0" class="score-input" value="${scoreObj.home}" 
                        oninput="saveMatchScore('${match.id}', 'home', this.value)" placeholder="-" ${isAdmin ? "" : "disabled"}>
                </div>
                <div class="match-divider">vs</div>
                <div>
                    <input type="number" min="0" class="score-input" value="${scoreObj.away}" 
                        oninput="saveMatchScore('${match.id}', 'away', this.value)" placeholder="-" ${isAdmin ? "" : "disabled"}>
                </div>
                <div class="team-away" title="${match.away}">${match.away}</div>
            `;
      listContainer.appendChild(matchItem);
    });

    container.appendChild(jGroup);
  });
}

// Save scores automatically when changed
function saveMatchScore(matchId, side, value) {
  if (!scoresData[matchId]) {
    scoresData[matchId] = { home: "", away: "" };
  }

  // Normalize value
  const parsed = parseInt(value, 10);
  scoresData[matchId][side] = isNaN(parsed) ? "" : parsed;

  saveScores();
  calculateStandings();
}

// Reset Scores functionality
function confirmReset() {
  document.getElementById("confirm-modal").classList.add("active");
}

function closeConfirmModal() {
  document.getElementById("confirm-modal").classList.remove("active");
}

function resetScores() {
  const fixtures = fixturesData[currentCategory][currentGroup] || [];
  fixtures.forEach((jornada) => {
    jornada.matches.forEach((match) => {
      delete scoresData[match.id];
    });
  });

  saveScores();
  closeConfirmModal();
  updateView();
}

// Settings modal: Editing team names
function openSettingsModal() {
  const modal = document.getElementById("settings-modal");
  const container = document.getElementById("teams-edit-list");
  container.innerHTML = "";

  const teams = teamsData[currentCategory][currentGroup] || [];
  teams.forEach((team, index) => {
    const row = document.createElement("div");
    row.className = "team-edit-row";
    row.innerHTML = `
            <span class="team-num">${index + 1}</span>
            <input type="text" class="team-input" value="${team}" onchange="updateTeamName(${index}, this.value)">
        `;
    container.appendChild(row);
  });

  modal.classList.add("active");
}

function closeSettingsModal() {
  document.getElementById("settings-modal").classList.remove("active");
}

function updateTeamName(index, newName) {
  const trimmed = newName.trim();
  if (!trimmed) return;

  const oldName = teamsData[currentCategory][currentGroup][index];
  if (oldName === trimmed) return;

  // 1. Update the team name in the list
  teamsData[currentCategory][currentGroup][index] = trimmed;
  saveTeams();

  // 2. We need to update existing matches and transfer scores to the new team name IDs
  const fixtures = fixturesData[currentCategory][currentGroup] || [];
  fixtures.forEach((jornada) => {
    jornada.matches.forEach((match) => {
      const isHome = match.home === oldName;
      const isAway = match.away === oldName;

      if (isHome || isAway) {
        // Keep score value before generating new id
        const oldScoreKey = match.id;
        const scoreVal = scoresData[oldScoreKey];

        if (isHome) match.home = trimmed;
        if (isAway) match.away = trimmed;

        // Re-generate match ID
        const newScoreKey = `${currentCategory}-${currentGroup}-j${jornada.jornada}-${match.home}-${match.away}`;
        match.id = newScoreKey;

        // Transfer scores if they existed
        if (scoreVal) {
          scoresData[newScoreKey] = scoreVal;
          delete scoresData[oldScoreKey];
        }
      }
    });
  });

  saveFixtures();
  saveScores();
  updateView();
}

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  const settingsModal = document.getElementById("settings-modal");
  const confirmModal = document.getElementById("confirm-modal");
  const loginModal = document.getElementById("login-modal");
  if (e.target === settingsModal) closeSettingsModal();
  if (e.target === confirmModal) closeConfirmModal();
  if (e.target === loginModal) closeLoginModal();
});

// Run Init
window.onload = init;
