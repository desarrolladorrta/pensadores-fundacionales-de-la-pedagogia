const thinkers = [
  {
    id: "socrates",
    name: "Sócrates",
    initials: "S",
    dates: "c. 470 — 399 a. C.",
    color: "#d8b57c",
    key: "Mayéutica · Diálogo",
    concept: "Mayéutica",
    contextShort: "Democracia ateniense",
    legacyShort: "Pensamiento crítico y diálogo",
    context: `Vivió en la Atenas del Siglo de Pericles, un periodo de apogeo democrático, filosófico y artístico. Su pensamiento surge como reacción contra los <button class="hotspot" type="button">sofistas</button>, quienes concebían la enseñanza como transmisión de conocimientos a cambio de remuneración.`,
    hotspot: "Maestros ambulantes de la antigua Grecia que enseñaban retórica y argumentación. Sócrates criticaba su relativismo moral y el énfasis en persuadir por encima de buscar la verdad.",
    connection: "Su método dialógico se opone a la clase magistral tradicional: un debate todavía vigente sobre los modelos de enseñanza.",
    title: "Aprender es dar a luz una idea",
    contribution: "No se consideraba un maestro que deposita saber, sino un “partero” de ideas. La mayéutica usa preguntas incisivas y la ironía socrática para que el interlocutor examine lo que cree saber y construya una definición más precisa.",
    example: `<blockquote>—¿Qué es la valentía?<br>—Es no huir en la batalla.<br>—¿Y quien finge retirarse para tender una trampa no actúa con valentía?</blockquote><p>El diálogo revela que la primera respuesta era insuficiente y abre una búsqueda compartida.</p>`,
    legacy: "El diálogo socrático sigue utilizándose en educación, derecho y terapia para fomentar la argumentación, la autonomía intelectual y el pensamiento crítico. Su método anticipa el aprendizaje por descubrimiento.",
  },
  {
    id: "platon",
    name: "Platón",
    initials: "P",
    dates: "c. 427 — 347 a. C.",
    color: "#b8c8b1",
    key: "Paideia · Formación integral",
    concept: "Paideia",
    contextShort: "Atenas tras la guerra",
    legacyShort: "Educación, ciudadanía y humanismo",
    context: `Discípulo de Sócrates. La condena de su maestro lo llevó a desconfiar de la democracia ateniense. Fundó <button class="hotspot" type="button">la Academia</button>, considerada la primera institución de educación superior de Occidente. Su idealismo distingue el mundo sensible del mundo de las Ideas.`,
    hotspot: "Institución fundada cerca de Atenas hacia el 387 a. C. Allí se enseñaban filosofía, matemáticas y astronomía para formar futuros gobernantes-filósofos.",
    connection: "La educación formal orientada a formar líderes para la sociedad es uno de los antecedentes de la universidad moderna.",
    title: "Formar al ciudadano en todas sus dimensiones",
    contribution: "La Paideia concibe la educación como formación ética, intelectual y física para participar de manera virtuosa en la polis. En la Alegoría de la Caverna, educarse es ascender de las sombras de la ignorancia hacia el conocimiento verdadero.",
    example: "Un carpintero no solo aprende a usar herramientas: debe comprender la idea de una mesa bien construida. La educación permite superar la apariencia inmediata y buscar principios.",
    legacy: "Instaló la educación como proyecto político para formar al ciudadano ideal y abrió una discusión aún vigente entre capacitación técnica y formación humanística.",
  },
  {
    id: "aristoteles",
    name: "Aristóteles",
    initials: "A",
    dates: "384 — 322 a. C.",
    color: "#d9a88e",
    key: "Hábito · Experiencia",
    concept: "Educación por hábito",
    contextShort: "Macedonia y Atenas",
    legacyShort: "Carácter y etapas del desarrollo",
    context: `Discípulo de Platón y tutor de Alejandro Magno. A diferencia de su maestro, sostuvo una filosofía realista y <button class="hotspot" type="button">empirista</button>: conocemos mediante la experiencia y la observación. Fundó el Liceo, donde se enseñaba caminando.`,
    hotspot: "Enfoque que sitúa el origen del conocimiento en la experiencia sensorial y en la observación sistemática de los hechos.",
    connection: "Sus métodos de clasificación y observación constituyen una base del método científico y de la educación en ciencias.",
    title: "El carácter se forma practicándolo",
    contribution: "La virtud no se aprende solo mediante explicaciones. Se forma al practicar buenos actos hasta convertirlos en hábito (ethos). La educación debe avanzar gradualmente: primero el cuerpo, luego el carácter y finalmente la razón.",
    example: "Para enseñar generosidad no basta definirla. El educador crea situaciones en las que el estudiante comparte repetidamente, reflexiona sobre el acto y lo incorpora a su carácter.",
    legacy: "Fundamentó la educación en valores, la formación del carácter y la idea de un proceso integral adaptado a las etapas del desarrollo humano.",
  },
  {
    id: "comenio",
    name: "Juan Amós Comenio",
    shortName: "Comenio",
    initials: "C",
    dates: "1592 — 1670",
    color: "#a7c2c0",
    key: "Pansofía · Didáctica",
    concept: "Didáctica Magna",
    contextShort: "Reforma y ciencia moderna",
    legacyShort: "Escuela universal y audiovisual",
    context: `Teólogo y filósofo moravo marcado por la <button class="hotspot" type="button">Guerra de los Treinta Años</button>. La Reforma Protestante y la ciencia moderna influyeron en su propósito de buscar un orden universal por medio de la educación.`,
    hotspot: "Conflicto religioso y político (1618–1648) que devastó Europa Central. El exilio y la violencia motivaron a Comenio a imaginar la educación como vía para un orden común.",
    connection: "Su sistema escolar graduado es antecedente directo de la organización contemporánea en primaria, secundaria y universidad.",
    title: "Enseñar todo a todos",
    contribution: "Su realismo pedagógico propone aprender de lo concreto a lo abstracto, mediante los sentidos y no por simple memorización. Defendió una educación universal sin distinción de género o clase e introdujo imágenes en los libros con Orbis Pictus.",
    example: "Para estudiar un árbol, primero se observa, toca y compara uno real. Después se utiliza una ilustración con sus partes y, finalmente, se organiza la definición abstracta.",
    legacy: "Es considerado fundador de la didáctica moderna y pionero de la educación universal, la enseñanza audiovisual y la organización escolar por ciclos y edades.",
  },
  {
    id: "rousseau",
    name: "Jean-Jacques Rousseau",
    shortName: "Rousseau",
    initials: "R",
    dates: "1712 — 1778",
    color: "#d6c19a",
    key: "Educación natural · Infancia",
    concept: "Educación natural",
    contextShort: "Ilustración europea",
    legacyShort: "Paidocentrismo y pedagogías activas",
    context: `Figura de la <button class="hotspot" type="button">Ilustración</button>, aunque crítico de algunos de sus ideales. En El contrato social y Emilio defendió la bondad natural del ser humano, que la sociedad termina corrompiendo.`,
    hotspot: "Movimiento intelectual del siglo XVIII que exaltó la razón, la ciencia y la crítica a la autoridad. Rousseau compartió parte de ese impulso, pero cuestionó sus efectos sobre los sentimientos naturales.",
    connection: "Su enfoque centrado en el niño, o paidocentrismo, es un pilar de movimientos posteriores como la Escuela Nueva.",
    title: "Seguir el ritmo natural del niño",
    contribution: "La educación debe respetar las etapas del desarrollo. El educador no impone contenidos: prepara situaciones para aprender mediante la experiencia. Su “educación negativa” protege al niño de los vicios sociales antes que instruirlo prematuramente.",
    example: "Si Emilio rompe una ventana, no recibe un sermón: experimenta el frío de la habitación. La consecuencia natural de su acto se convierte en fuente de aprendizaje.",
    legacy: "Desplazó el centro de la educación desde el maestro hacia el niño e inspiró la psicología evolutiva y pedagogías activas basadas en curiosidad, juego y experiencia.",
  },
  {
    id: "herbart",
    name: "Johann Friedrich Herbart",
    shortName: "Herbart",
    initials: "H",
    dates: "1776 — 1841",
    color: "#beb5c9",
    key: "Apercepción · Sistema",
    concept: "Pasos formales",
    contextShort: "Idealismo alemán",
    legacyShort: "Planificación de la enseñanza",
    context: `Filósofo, psicólogo y pedagogo alemán. Buscó establecer la pedagogía como ciencia autónoma, fundamentada en la <button class="hotspot" type="button">psicología</button> para conocer al sujeto y en la ética para orientar los fines educativos.`,
    hotspot: "Herbart desarrolló una psicología asociacionista: las ideas nuevas se comprenden cuando se conectan con ideas preexistentes. A este proceso lo llamó apercepción.",
    connection: "Su intento de sistematizar la enseñanza anticipa la planificación y la programación curricular modernas.",
    title: "Organizar la enseñanza con intención",
    contribution: "La formación moral ocurre mediante la instrucción. Para aprender de forma efectiva, la lección sigue cuatro pasos: claridad (presentar), asociación (conectar), sistema (organizar) y método (aplicar).",
    example: "Al estudiar la Revolución Francesa, se presentan hechos clave, se comparan con saberes previos, se organizan causas y consecuencias, y se aplican en un ensayo argumentativo.",
    legacy: "Representa el primer intento riguroso de convertir la pedagogía en ciencia. Formalizó la planificación de la enseñanza y destacó la función de los conocimientos previos.",
  },
];

const glossary = [
  ["Apercepción", "Herbart", "Proceso por el cual una idea nueva es comprendida al relacionarse con el conjunto de conocimientos previos del individuo."],
  ["Educación Natural", "Rousseau", "Enfoque que respeta las leyes y etapas del desarrollo natural del niño y minimiza la intervención artificial de la sociedad."],
  ["Mayéutica", "Sócrates", "Método dialéctico basado en preguntas que permiten al interlocutor descubrir y examinar nociones latentes en su pensamiento."],
  ["Paideia", "Platón / Grecia", "Formación integral del individuo en conocimiento, carácter moral, desarrollo físico y vida cívica."],
  ["Realismo Pedagógico", "Comenio", "Enfoque que parte del contacto con la realidad y los sentidos, en lugar de la memorización de textos abstractos."],
];

const storageKey = "pedagogia-founders-progress-v1";
const state = loadState();
let activeThinkerIndex = 0;
let activeTab = "context";
let selectedConcept = null;
let toastTimer;

const timeline = document.querySelector("#timeline");
const thinkerDialog = document.querySelector("#thinker-dialog");
const guideDialog = document.querySelector("#guide-dialog");
const dialogPanel = document.querySelector("#dialog-panel");

function loadState() {
  const fallback = { visited: [], matches: {}, quiz: false };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(storageKey) || "{}") };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function renderTimeline() {
  timeline.innerHTML = thinkers.map((thinker, index) => {
    const visited = state.visited.includes(thinker.id);
    return `<button class="timeline-item${visited ? " is-visited" : ""}" type="button" data-thinker="${index}" aria-label="Explorar a ${thinker.name}${visited ? ", ya consultado" : ""}">
      <span class="timeline-item__date">${thinker.dates}</span>
      <span class="timeline-item__dot" aria-hidden="true"></span>
      <span class="timeline-item__portrait" style="--portrait:${thinker.color}" aria-hidden="true"><span>${thinker.initials}</span></span>
      <span class="timeline-item__name">${thinker.shortName || thinker.name}</span>
      <span class="timeline-item__status">${visited ? "Consultado ✓" : "Explorar +"}</span>
    </button>`;
  }).join("");
}

function updateProgress() {
  const count = state.visited.length;
  document.querySelector("#progress-number").textContent = count;
  document.querySelector("#progress-label").textContent = `${count} de 6 explorados`;
  document.querySelector("#progress-button").style.setProperty("--progress", `${(count / thinkers.length) * 100}%`);
}

function openThinker(index) {
  activeThinkerIndex = index;
  activeTab = "context";
  const thinker = thinkers[index];
  if (!state.visited.includes(thinker.id)) {
    state.visited.push(thinker.id);
    saveState();
    renderTimeline();
    updateProgress();
    showToast(`${thinker.shortName || thinker.name} añadido a tu recorrido`);
  }
  document.querySelector("#dialog-index").textContent = `Hito ${String(index + 1).padStart(2, "0")}`;
  document.querySelector("#dialog-dates").textContent = thinker.dates;
  document.querySelector("#dialog-name").textContent = thinker.name;
  document.querySelector("#dialog-key").textContent = thinker.key;
  document.querySelector("#dialog-portrait").innerHTML = `<span>${thinker.initials}</span>`;
  document.querySelector(".dialog-profile").style.setProperty("--profile", thinker.color);
  updateTabState();
  renderDialogPanel();
  if (!thinkerDialog.open) thinkerDialog.showModal();
}

function renderDialogPanel() {
  const thinker = thinkers[activeThinkerIndex];
  const panels = {
    context: `<p class="eyebrow">El mundo que habitó</p><h3>Ideas que nacen de una época</h3><p>${thinker.context}</p><div class="context-note"><strong>Conexión curricular</strong>${thinker.connection}</div>`,
    contribution: `<p class="eyebrow">Herramienta clave · ${thinker.concept}</p><h3>${thinker.title}</h3><p>${thinker.contribution}</p><div class="example-note"><strong>Ejemplo aplicado</strong>${thinker.example}</div>`,
    legacy: `<p class="eyebrow">Una idea que permanece</p><h3>¿Dónde lo reconocemos hoy?</h3><p class="legacy-statement">${thinker.legacy}</p><div class="context-note"><strong>Idea para recordar</strong>${thinker.key}</div>`,
  };
  dialogPanel.innerHTML = panels[activeTab];
  const hotspot = dialogPanel.querySelector(".hotspot");
  hotspot?.addEventListener("click", () => {
    const existing = dialogPanel.querySelector(".hotspot-definition");
    if (existing) {
      existing.remove();
      hotspot.setAttribute("aria-expanded", "false");
      return;
    }
    hotspot.setAttribute("aria-expanded", "true");
    hotspot.insertAdjacentHTML("afterend", `<div class="hotspot-definition">${thinker.hotspot}</div>`);
  });
}

function updateTabState() {
  document.querySelectorAll("[data-tab]").forEach((tab) => {
    const selected = tab.dataset.tab === activeTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  dialogPanel.setAttribute("aria-labelledby", `tab-${activeTab}`);
}

function renderMatching() {
  const shuffled = [thinkers[3], thinkers[0], thinkers[5], thinkers[1], thinkers[4], thinkers[2]];
  document.querySelector("#concept-bank").innerHTML = shuffled.map((thinker) => {
    const matched = state.matches[thinker.id];
    return `<button class="concept-chip${matched ? " is-matched" : ""}" type="button" draggable="${!matched}" data-concept="${thinker.id}" aria-pressed="false">${thinker.concept}</button>`;
  }).join("");
  document.querySelector("#author-targets").innerHTML = thinkers.map((thinker) => {
    const concept = state.matches[thinker.id];
    return `<button class="author-target${concept ? " is-correct" : ""}" type="button" data-target="${thinker.id}" aria-label="Asociar concepto con ${thinker.name}">
      <span class="target-portrait" style="--portrait:${thinker.color}" aria-hidden="true"><span>${thinker.initials}</span></span>
      <strong>${thinker.shortName || thinker.name}</strong><small>${concept ? thinker.concept + " ✓" : "Soltar o seleccionar"}</small>
    </button>`;
  }).join("");
  bindMatchingEvents();
  updateMatchingProgress();
}

function bindMatchingEvents() {
  document.querySelectorAll(".concept-chip:not(.is-matched)").forEach((chip) => {
    chip.addEventListener("click", () => selectConcept(chip.dataset.concept));
    chip.addEventListener("dragstart", (event) => {
      selectedConcept = chip.dataset.concept;
      event.dataTransfer.setData("text/plain", selectedConcept);
    });
  });
  document.querySelectorAll(".author-target:not(.is-correct)").forEach((target) => {
    target.addEventListener("click", () => tryMatch(selectedConcept, target.dataset.target));
    target.addEventListener("dragover", (event) => { event.preventDefault(); target.classList.add("is-over"); });
    target.addEventListener("dragleave", () => target.classList.remove("is-over"));
    target.addEventListener("drop", (event) => {
      event.preventDefault();
      target.classList.remove("is-over");
      tryMatch(event.dataTransfer.getData("text/plain"), target.dataset.target);
    });
  });
}

function selectConcept(id) {
  selectedConcept = id;
  document.querySelectorAll(".concept-chip").forEach((chip) => {
    const selected = chip.dataset.concept === id;
    chip.classList.toggle("is-selected", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  const thinker = thinkers.find((item) => item.id === id);
  showToast(`Ahora selecciona el autor de “${thinker.concept}”`);
}

function tryMatch(conceptId, targetId) {
  if (!conceptId) {
    showToast("Selecciona primero un concepto");
    return;
  }
  const target = document.querySelector(`[data-target="${targetId}"]`);
  if (conceptId === targetId) {
    state.matches[targetId] = conceptId;
    selectedConcept = null;
    saveState();
    renderMatching();
    showToast("Conexión correcta");
  } else {
    target.classList.add("is-wrong");
    setTimeout(() => target.classList.remove("is-wrong"), 500);
    showToast("Aún no. Revisa la idea central de ese autor");
  }
}

function updateMatchingProgress() {
  const count = Object.keys(state.matches).length;
  document.querySelector("#match-count").textContent = `${count} de 6 conexiones`;
  document.querySelector("#match-bar").style.width = `${(count / thinkers.length) * 100}%`;
  const quiz = document.querySelector("#quiz-card");
  quiz.hidden = count < thinkers.length;
  if (!quiz.hidden) renderQuiz();
}

function renderQuiz() {
  const options = ["Platón", "Herbart", "Comenio", "Rousseau"];
  document.querySelector("#quiz-options").innerHTML = options.map((name) => {
    const status = state.quiz && name === "Comenio" ? " is-correct" : "";
    return `<button class="quiz-option${status}" type="button" data-answer="${name}" ${state.quiz ? "disabled" : ""}>${name}</button>`;
  }).join("");
  const feedback = document.querySelector("#quiz-feedback");
  feedback.textContent = state.quiz
    ? "Correcto. En la Didáctica Magna, Comenio sentó bases de la organización escolar moderna."
    : "";
  document.querySelectorAll(".quiz-option:not([disabled])").forEach((option) => {
    option.addEventListener("click", () => {
      if (option.dataset.answer === "Comenio") {
        state.quiz = true;
        saveState();
        renderQuiz();
      } else {
        option.classList.add("is-wrong");
        feedback.textContent = "Inténtalo de nuevo. Recuerda quién vivió en el siglo XVII y buscó “enseñar todo a todos”.";
      }
    });
  });
}

function renderComparison() {
  document.querySelector("#comparison-body").innerHTML = thinkers.map((thinker) => `<tr>
    <td>${thinker.shortName || thinker.name}</td><td>${thinker.contextShort}</td><td>${thinker.concept}</td><td>${thinker.legacyShort}</td>
  </tr>`).join("");
}

function renderGlossary() {
  document.querySelector("#glossary-list").innerHTML = glossary.map(([term, author, definition], index) => `<div class="glossary-item">
    <button type="button" aria-expanded="false" aria-controls="glossary-${index}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${term}</strong><i aria-hidden="true">+</i></button>
    <p id="glossary-${index}" hidden><strong>${author}.</strong> ${definition}</p>
  </div>`).join("");
  document.querySelectorAll(".glossary-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      document.querySelector(`#${button.getAttribute("aria-controls")}`).hidden = expanded;
    });
  });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

timeline.addEventListener("click", (event) => {
  const item = event.target.closest("[data-thinker]");
  if (item) openThinker(Number(item.dataset.thinker));
});
document.querySelectorAll("[data-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    updateTabState();
    renderDialogPanel();
  });
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const tabs = [...document.querySelectorAll("[data-tab]")];
    const current = tabs.indexOf(tab);
    const target = event.key === "Home"
      ? 0
      : event.key === "End"
        ? tabs.length - 1
        : (current + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[target].click();
    tabs[target].focus();
  });
});
document.querySelector("#previous-thinker").addEventListener("click", () => openThinker((activeThinkerIndex + thinkers.length - 1) % thinkers.length));
document.querySelector("#next-thinker").addEventListener("click", () => openThinker((activeThinkerIndex + 1) % thinkers.length));
document.querySelector("[data-close-dialog]").addEventListener("click", () => thinkerDialog.close());
thinkerDialog.addEventListener("click", (event) => { if (event.target === thinkerDialog) thinkerDialog.close(); });
document.querySelectorAll("[data-open-guide]").forEach((button) => button.addEventListener("click", () => guideDialog.showModal()));
document.querySelectorAll("[data-close-guide]").forEach((button) => button.addEventListener("click", () => guideDialog.close()));
guideDialog.addEventListener("click", (event) => { if (event.target === guideDialog) guideDialog.close(); });
document.querySelector("#progress-button").addEventListener("click", () => document.querySelector("#recorrido").scrollIntoView());
document.querySelector("#reset-matching").addEventListener("click", () => {
  state.matches = {};
  state.quiz = false;
  selectedConcept = null;
  saveState();
  renderMatching();
  document.querySelector("#quiz-feedback").textContent = "";
});

renderTimeline();
updateProgress();
renderMatching();
renderComparison();
renderGlossary();
