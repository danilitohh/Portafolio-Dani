const STORAGE_KEY = "portfolio-language";
const SUPPORTED_LANGS = new Set(["es", "en"]);
const APP_VERSION = "2026-07-30-3";
const INTRO_STORAGE_KEY = `portfolio-intro-seen-${APP_VERSION}`;
const ACTIVE_SECTION_IDS = ["home", "about", "showcase", "contact"];
const SHOWCASE_TABS = ["projects", "certificates", "technologies"];

// Edita este bloque con tu información real cuando quieras personalizar el sitio.
const PROFILE = {
  name: "Danilo Herrera Hernández",
  role: {
    es: "Estudiante de ADSO en búsqueda de prácticas profesionales",
    en: "ADSO student seeking professional internships",
  },
  email: "danilitohhh@gmail.com",
  phone: "+57 300 909 7514",
  github: "https://github.com/danilitohh",
  location: {
    es: "Colombia",
    en: "Colombia",
  },
  availability: {
    es: "Disponible para prácticas profesionales desde junio de 2026.",
    en: "Available for professional internships since June 2026.",
  },
  focus: {
    es: "HTML, CSS, JavaScript, bases de datos y aprendizaje continuo.",
    en: "HTML, CSS, JavaScript, databases, and continuous learning.",
  },
  languages: {
    es: "Español nativo e inglés profesional de trabajo",
    en: "Native Spanish and professional working English",
  },
};

function readSessionFlag(key) {
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeSessionFlag(key, value) {
  try {
    sessionStorage.setItem(key, value ? "1" : "0");
  } catch {
    // Ignore storage failures.
  }
}

if (new URLSearchParams(location.search).has("resetIntro")) {
  try {
    sessionStorage.removeItem(INTRO_STORAGE_KEY);
  } catch {
    // Ignore storage failures.
  }
}

const introSeenOnLoad = readSessionFlag(INTRO_STORAGE_KEY);

const CONTENT = {
  es: {
    pageTitle: "Portafolio | Danilo Herrera Hernández",
    pageDescription:
      "Portafolio bilingüe de Danilo Herrera Hernández, estudiante de ADSO en búsqueda de prácticas profesionales.",
    nav: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre mí", href: "#about" },
      { label: "Portfolio", href: "#showcase" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      title: "Estudiante de software con bases en HTML, CSS y JavaScript.",
      summary: "Soy estudiante de ADSO en búsqueda de prácticas profesionales, con proyectos funcionales y una base técnica que sigue creciendo.",
      copy:
        "Estoy en formación en SENA y desarrollo proyectos funcionales con HTML, CSS, JavaScript y datos. Me interesa aprender rápido, documentar bien y colaborar con equipos que valoren la claridad.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactarme",
      stats: [
        { value: "ADSO", label: "SENA | Tecnología en curso" },
        { value: "HTML/CSS/JS", label: "Bases web" },
        { value: "PRÁCTICAS", label: "Disponible" },
      ],
      profileTitle: "Perfil de practicante",
      profileCaption:
        "Busco una práctica profesional donde pueda aportar disciplina, aprendizaje y una base real en proyectos funcionales.",
      tags: ["Bilingüe", "Prácticas", "Proyectos funcionales"],
    },
    snapshot: [
      { label: "Rol", value: PROFILE.role.es },
      { label: "Idiomas", value: PROFILE.languages.es },
      { label: "Enfoque", value: PROFILE.focus.es },
      { label: "Disponibilidad", value: PROFILE.availability.es },
    ],
    about: {
      kicker: "Sobre mí",
      title: "Estudio, construyo y aprendo con contexto real.",
      copy:
        "Soy estudiante de Tecnología en Análisis y Desarrollo de Software (ADSO) en SENA. Me interesa transformar necesidades reales en interfaces y soluciones sencillas, con bases en programación, bases de datos y desarrollo de aplicaciones.",
      highlights: [
        {
          title: "Aprendizaje activo",
          text: "Fortalezco HTML, CSS, JavaScript y bases de datos con proyectos funcionales.",
        },
        {
          title: "Comunicación clara",
          text: "Me gusta traducir necesidades en interfaces simples y trabajar con contexto real.",
        },
        {
          title: "Orden y seguimiento",
          text: "La documentación y el seguimiento me ayudan a avanzar con claridad.",
        },
      ],
      pillars: [
        {
          title: "Base técnica",
          text: "Manejo fundamentos de HTML, CSS y JavaScript, además de nociones de Java, SQL, Python, Flutter (Dart) y Angular.",
        },
        {
          title: "Pensamiento práctico",
          text: "Me apoyo en el orden, la documentación técnica y el análisis para resolver problemas con criterio.",
        },
        {
          title: "Trabajo con personas",
          text: "Trabajar con personas me ayuda a entender necesidades, comunicar avances y construir soluciones claras.",
        },
      ],
    },
    showcase: {
      kicker: "Portfolio Showcase",
      title: "Portfolio Showcase",
      copy: "Una sola vista para explorar proyectos, certificados y tecnologías con una composición editorial limpia.",
      tabs: {
        projects: "Proyectos",
        certificates: "Certificados",
        technologies: "Tecnologías",
      },
      emptyCertificates: "Aún no tengo certificados cargados.",
    },
    projects: {
      kicker: "Proyectos",
      title: "Proyectos funcionales que muestran soluciones reales.",
      copy:
        "Cada tarjeta incluye una imagen, la demo en vivo y el repositorio en GitHub. Estos proyectos muestran experiencia práctica construida de la mano con IA, desde el análisis de necesidades hasta la implementación, autenticación, bases de datos y paneles administrativos.",
      liveCta: "Ver proyecto",
      repoCta: "Ver repositorio",
      detailCta: "Ver detalles",
      modalClose: "Cerrar detalle",
      modalGallery: "Galería",
      modalGalleryHint: "Toca una miniatura para ampliar la vista.",
      modalCapabilities: "Qué permite",
      modalStack: "Tecnologías y base técnica",
      modalLinks: "Enlaces del proyecto",
      modalPrev: "Anterior",
      modalNext: "Siguiente",
      imageFallbackTitle: "Agrega una captura",
      imageFallbackText: "Usa una ruta local como assets/projects/proyecto-01.jpg.",
      items: [
        {
          index: "01",
          type: "Tienda online",
          slug: "ambrosia-bhang",
          title: "Tienda online - Ambrosia Bhang",
          image: "assets/projects/ambrosia-bhang/gallery/03.png",
          imageAlt: "Vista previa de la tienda online Ambrosia Bhang",
          liveUrl: "https://ambrosia-eosin.vercel.app",
          repoUrl: "https://github.com/danilitohh/ambrosia-tienda-virtual",
          summary:
            "Tienda virtual en uso con catálogo, compras, cupones y un panel administrativo para gestionar productos, promociones y pagos.",
          tags: ["TypeScript", "React", "Next.js 15", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth"],
          footer: "En uso",
        },
        {
          index: "02",
          type: "Gestión veterinaria",
          slug: "lativet",
          title: "Sistema de Gestión Veterinaria - LatiVet",
          image: "assets/projects/lativet/gallery/02.png",
          imageAlt: "Vista previa del sistema veterinario Lativet",
          liveUrl: "https://lativet.vercel.app",
          repoUrl: "https://github.com/danilitohh/Lativet",
          summary:
            "Plataforma web veterinaria integral que centraliza historia clínica, agenda, hospitalización, inventario, caja y facturación.",
          tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "SQLite"],
          footer: "En uso",
        },
        {
          index: "03",
          type: "Seguimiento comercial",
          slug: "hessa-enterprises",
          title: "Sistema de Seguimiento Comercial por Gmail - Hessa Enterprises",
          image: "assets/projects/hessa-enterprises/gallery/01.png",
          imageAlt: "Vista previa del sistema de seguimiento por Gmail Hessa Enterprises",
          liveUrl: "https://hessaenterprises.vercel.app",
          repoUrl: "https://github.com/danilitohh/Hessaenterprises",
          summary:
            "Sistema para automatizar seguimientos por Gmail, registrar clientes y propuestas, y mantener trazabilidad por empresa.",
          tags: ["React", "TypeScript", "Supabase", "Supabase Auth", "Deno Edge Functions", "Gmail API"],
          footer: "En uso",
        },
        {
          index: "04",
          type: "Plataforma administrativa",
          slug: "contaduria-juliana",
          title: "Nexo Admin - Plataforma Administrativa y Contable",
          image: "assets/projects/contaduria-juliana/cover.png",
          imageAlt: "Vista previa de Nexo Admin",
          liveUrl: "https://contaduria-juliana.vercel.app",
          repoUrl: "https://github.com/danilitohh/Contaduria_Juliana",
          summary:
            "Plataforma administrativa y contable en desarrollo para centralizar clientes, inventario, ventas, cartera, gastos, nómina y POS.",
          tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "Supabase"],
          footer: "En desarrollo",
        },
      ],
    },
    skills: {
      kicker: "Tecnologías",
      title: "Mi base técnica mientras sigo aprendiendo.",
      copy:
        "Estas son las tecnologías y herramientas que manejo hoy, con bases especialmente en HTML, CSS y JavaScript.",
      groups: [
        {
          icon: "WEB",
          title: "Fundamentos web",
          summary: "Bases que uso para construir interfaces sencillas y responsivas.",
          items: ["HTML", "CSS", "JavaScript", "Responsive design", "Accesibilidad"],
        },
        {
          icon: "DATA",
          title: "Bases de datos",
          summary: "Manejo de datos y modelado básico para aplicaciones.",
          items: ["SQL", "MySQL", "MongoDB", "Supabase básico", "Modelado relacional"],
        },
        {
          icon: "TOOL",
          title: "Lenguajes y frameworks",
          summary: "Tecnologías que sigo reforzando mientras amplío mi perfil.",
          items: ["Java", "Python", "Flutter (Dart)", "Angular", "GitHub", "VS Code"],
        },
        {
          icon: "OPS",
          title: "Herramientas de trabajo",
          summary: "Herramientas que me ayudan a mantener orden y seguimiento.",
          items: ["Android Studio", "XAMPP", "Trello", "Slack", "Google Workspace"],
        },
      ],
    },
    journey: {
      kicker: "Formación",
      title: "Formación en desarrollo y sistemas.",
      copy:
        "Mi recorrido combina ADSO y técnica en sistemas, con enfoque en desarrollo de software, programación, bases de datos y construcción de aplicaciones.",
      items: [
        {
          year: "2025 - actualidad",
          title: "Tecnología en Análisis y Desarrollo de Software (ADSO) - SENA",
          text: "Formación actual centrada en desarrollo de software, programación y construcción de aplicaciones.",
        },
        {
          year: "2017",
          title: "Técnica en Sistemas - SENA",
          text: "Base técnica inicial en sistemas y soporte a la infraestructura de trabajo.",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Hablemos de tu siguiente oportunidad o proyecto.",
      copy:
        "Si buscas a alguien en formación, con ganas de aprender y una base real en proyectos funcionales, aquí tienes mis canales directos.",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      actionLabel: "Abrir",
      locationLabel: "Ubicación",
      formTitle: "Mensaje directo",
      formName: "Nombre",
      formEmail: "Correo",
      formMessage: "Cuéntame sobre la vacante, proyecto o colaboración",
      submit: "Abrir correo",
      clear: "Limpiar",
      status: "El formulario abrirá tu cliente de correo con el mensaje preparado.",
    },
    footer: "Estudiante de ADSO, creando proyectos funcionales y buscando prácticas profesionales.",
  },
  en: {
    pageTitle: "Portfolio | Danilo Herrera Hernández",
    pageDescription:
      "Bilingual portfolio of Danilo Herrera Hernández, an ADSO student looking for internship opportunities.",
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Portfolio", href: "#showcase" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      title: "I build interfaces with HTML, CSS, and JavaScript foundations.",
      summary: "I am an ADSO student looking for internship opportunities, with functional projects and a technical base that keeps growing.",
      copy:
        "I am studying at SENA and building functional projects with HTML, CSS, JavaScript, and data. I want to learn fast, document well, and collaborate with teams that value clarity.",
      primaryCta: "View projects",
      secondaryCta: "Contact me",
      stats: [
        { value: "ADSO", label: "SENA | In progress" },
        { value: "HTML/CSS/JS", label: "Web basics" },
        { value: "INTERNSHIPS", label: "Available" },
      ],
      profileTitle: "Internship profile",
      profileCaption:
        "I am looking for a professional internship where I can bring discipline, learning, and a real base of functional projects.",
      tags: ["Bilingual", "Internships", "Functional projects"],
    },
    snapshot: [
      { label: "Role", value: PROFILE.role.en },
      { label: "Languages", value: PROFILE.languages.en },
      { label: "Focus", value: PROFILE.focus.en },
      { label: "Availability", value: PROFILE.availability.en },
    ],
    about: {
      kicker: "About me",
      title: "I study, build, and learn in real contexts.",
      copy:
        "I am a student in SENA's Technology in Software Analysis and Development (ADSO) program. I focus on turning real needs into simple interfaces and solutions, with foundations in programming, databases, and application development.",
      highlights: [
        {
          title: "Active learning",
          text: "I keep strengthening HTML, CSS, JavaScript, and databases through functional projects.",
        },
        {
          title: "Clear communication",
          text: "I like turning needs into simple interfaces and working with real context.",
        },
        {
          title: "Order and follow-up",
          text: "Documentation and tracking help me move forward with clarity.",
        },
      ],
      pillars: [
        {
          title: "Technical foundation",
          text: "I work with HTML, CSS, and JavaScript, plus basic knowledge of Java, SQL, Python, Flutter (Dart), and Angular.",
        },
        {
          title: "Practical thinking",
          text: "I rely on organization, technical documentation, and analysis to solve problems with judgment.",
        },
        {
          title: "Working with people",
          text: "Working with people helps me understand needs, communicate progress, and build clear solutions.",
        },
      ],
    },
    showcase: {
      kicker: "Portfolio Showcase",
      title: "Portfolio Showcase",
      copy: "A single view to explore projects, certificates, and technologies in a clean editorial layout.",
      tabs: {
        projects: "Projects",
        certificates: "Certificates",
        technologies: "Technologies",
      },
      emptyCertificates: "I do not have certificates uploaded yet.",
    },
    projects: {
      kicker: "Projects",
      title: "Functional projects that show real solutions.",
      copy:
        "Each card includes an image, a live demo, and the GitHub repository. These projects show practical experience built with AI support, from needs analysis to implementation, authentication, databases, and admin panels.",
      liveCta: "View project",
      repoCta: "View repository",
      detailCta: "View details",
      modalClose: "Close details",
      modalGallery: "Gallery",
      modalGalleryHint: "Use the thumbnails to expand the view.",
      modalCapabilities: "What it lets you do",
      modalStack: "Technologies and base",
      modalLinks: "Project links",
      modalPrev: "Previous",
      modalNext: "Next",
      imageFallbackTitle: "Add an image",
      imageFallbackText: "Use a local path like assets/projects/project-01.jpg.",
      items: [
        {
          index: "01",
          type: "Online store",
          slug: "ambrosia-bhang",
          title: "Online store - Ambrosia Bhang",
          image: "assets/projects/ambrosia-bhang/gallery/03.png",
          imageAlt: "Preview of the Ambrosia Bhang online store",
          liveUrl: "https://ambrosia-eosin.vercel.app",
          repoUrl: "https://github.com/danilitohh/ambrosia-tienda-virtual",
          summary:
            "An in-use online store with product browsing, purchases, promo codes, and an admin panel for products, promotions, and payments.",
          tags: ["TypeScript", "React", "Next.js 15", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth"],
          footer: "In use",
        },
        {
          index: "02",
          type: "Veterinary management",
          slug: "lativet",
          title: "Veterinary Management System - LatiVet",
          image: "assets/projects/lativet/gallery/02.png",
          imageAlt: "Preview of the Lativet veterinary system",
          liveUrl: "https://lativet.vercel.app",
          repoUrl: "https://github.com/danilitohh/Lativet",
          summary:
            "An integrated veterinary web platform that centralizes medical history, scheduling, hospitalization, inventory, cash, and billing.",
          tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "SQLite"],
          footer: "In use",
        },
        {
          index: "03",
          type: "Sales follow-up",
          slug: "hessa-enterprises",
          title: "Commercial Follow-up System via Gmail - Hessa Enterprises",
          image: "assets/projects/hessa-enterprises/gallery/01.png",
          imageAlt: "Preview of the Hessa Enterprises Gmail follow-up system",
          liveUrl: "https://hessaenterprises.vercel.app",
          repoUrl: "https://github.com/danilitohh/Hessaenterprises",
          summary:
            "A system for automating Gmail follow-ups, registering clients and proposals, and keeping traceability per company.",
          tags: ["React", "TypeScript", "Supabase", "Supabase Auth", "Deno Edge Functions", "Gmail API"],
          footer: "In use",
        },
        {
          index: "04",
          type: "Administrative platform",
          slug: "contaduria-juliana",
          title: "Nexo Admin - Administrative and Accounting Platform",
          image: "assets/projects/contaduria-juliana/cover.png",
          imageAlt: "Preview of Nexo Admin",
          liveUrl: "https://contaduria-juliana.vercel.app",
          repoUrl: "https://github.com/danilitohh/Contaduria_Juliana",
          summary:
            "An administrative and accounting platform in development for clients, inventory, sales, receivables, expenses, payroll, and POS.",
          tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "Supabase"],
          footer: "In development",
        },
      ],
    },
    skills: {
      kicker: "Technologies",
      title: "My current technical base while I keep learning.",
      copy:
        "These are the technologies and tools I use today, with my strongest foundation in HTML, CSS, and JavaScript.",
      groups: [
        {
          icon: "WEB",
          title: "Web fundamentals",
          summary: "Building blocks for simple, responsive interfaces.",
          items: ["HTML", "CSS", "JavaScript", "Responsive design", "Accessibility"],
        },
        {
          icon: "DATA",
          title: "Databases",
          summary: "Data handling and basic modeling for applications.",
          items: ["SQL", "MySQL", "MongoDB", "Basic Supabase", "Relational modeling"],
        },
        {
          icon: "TOOL",
          title: "Languages and frameworks",
          summary: "Technologies I am strengthening as I expand my profile.",
          items: ["Java", "Python", "Flutter (Dart)", "Angular", "GitHub", "VS Code"],
        },
        {
          icon: "OPS",
          title: "Work tools",
          summary: "Tools that help me stay organized and keep track of work.",
          items: ["Android Studio", "XAMPP", "Trello", "Slack", "Google Workspace"],
        },
      ],
    },
    journey: {
      kicker: "Education",
      title: "Education in development and systems.",
      copy:
        "My path combines ADSO and systems training, with a focus on software development, programming, databases, and application building.",
      items: [
        {
          year: "2025 - present",
          title: "Technology in Software Analysis and Development (ADSO) - SENA",
          text: "Current training focused on software development, programming, databases, and application building.",
        },
        {
          year: "2017",
          title: "Systems Technician - SENA",
          text: "Initial technical foundation in systems and workplace support.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your next opportunity or project.",
      copy:
        "If you are looking for someone who is still learning, eager to grow, and already has a real base of functional projects, here are my direct channels.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      actionLabel: "Open",
      locationLabel: "Location",
      formTitle: "Direct message",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Tell me about the opening, project, or collaboration",
      submit: "Open email",
      clear: "Clear",
      status: "The form will open your email client with the message prepared.",
    },
    footer: "ADSO student building functional projects and looking for internship opportunities.",
  },
};

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");
const storedLang = localStorage.getItem(STORAGE_KEY);
const browserLang = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
let currentLang = SUPPORTED_LANGS.has(storedLang) ? storedLang : browserLang;
let activeProjectIndex = null;
let activeProjectImageIndex = 0;
let activeShowcaseTab = SHOWCASE_TABS[0];
let showcaseTransitionTimerId = 0;
let previewScrollTimerId = 0;
let pendingProjectFocusIndex = null;
let appInteractionsBound = false;
let pageRevealObserver = null;
let activeSectionObserver = null;
let scrollChromeFrame = 0;
let scrollChromeBound = false;
let activeSectionId = ACTIVE_SECTION_IDS[0];
let introTimerId = 0;
let introState = {
  pending: !introSeenOnLoad,
  active: false,
  completed: introSeenOnLoad,
  overlay: null,
};
const PREVIEW_SECTION = new URLSearchParams(location.search).get("preview");
let activeGlowCard = null;
let waterCursorState = {
  initialized: false,
  root: null,
  halo: null,
  ripple: null,
  core: null,
  visible: false,
  hovering: false,
  pressed: false,
  enabled: false,
  targetX: 0,
  targetY: 0,
  haloX: 0,
  haloY: 0,
  rippleX: 0,
  rippleY: 0,
  coreX: 0,
  coreY: 0,
  lastX: 0,
  lastY: 0,
  lastRippleAt: 0,
  frameId: 0,
};

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function hasFinePointer() {
  return window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ?? false;
}

function hasConstrainedConnection() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return Boolean(connection?.saveData) || ["slow-2g", "2g"].includes(connection?.effectiveType);
}

function supportsWaterCursor() {
  return !prefersReducedMotion() && hasFinePointer() && !hasConstrainedConnection();
}

function updateAmbientLighting(clientX, clientY) {
  const width = Math.max(window.innerWidth, 1);
  const height = Math.max(window.innerHeight, 1);
  const x = (clientX / width) * 100;
  const y = (clientY / height) * 100;
  const x2 = 100 - x * 0.78;
  const y2 = 100 - y * 0.72;

  document.documentElement.style.setProperty("--ambient-x", `${Math.max(12, Math.min(88, x)).toFixed(2)}%`);
  document.documentElement.style.setProperty("--ambient-y", `${Math.max(10, Math.min(70, y)).toFixed(2)}%`);
  document.documentElement.style.setProperty("--ambient-x-2", `${Math.max(14, Math.min(88, x2)).toFixed(2)}%`);
  document.documentElement.style.setProperty("--ambient-y-2", `${Math.max(12, Math.min(76, y2)).toFixed(2)}%`);
}

function clearActiveGlowCard() {
  if (!(activeGlowCard instanceof HTMLElement)) {
    activeGlowCard = null;
    return;
  }

  activeGlowCard.classList.remove("is-glowing");
  activeGlowCard.style.removeProperty("--glow-x");
  activeGlowCard.style.removeProperty("--glow-y");
  activeGlowCard = null;
}

function syncGlowCard(event) {
  const target = event.target;
  const nextCard = target instanceof HTMLElement ? target.closest("[data-glow-card]") : null;

  if (!(nextCard instanceof HTMLElement)) {
    clearActiveGlowCard();
    return;
  }

  if (activeGlowCard !== nextCard) {
    clearActiveGlowCard();
    activeGlowCard = nextCard;
    activeGlowCard.classList.add("is-glowing");
  }

  const rect = activeGlowCard.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return;
  }

  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  activeGlowCard.style.setProperty("--glow-x", `${Math.max(0, Math.min(100, x)).toFixed(2)}%`);
  activeGlowCard.style.setProperty("--glow-y", `${Math.max(0, Math.min(100, y)).toFixed(2)}%`);
}

function createWaterCursor() {
  if (waterCursorState.root) {
    return;
  }

  const root = document.createElement("div");
  root.id = "water-cursor";
  root.className = "water-cursor";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML = `
    <span class="water-cursor__halo"></span>
    <span class="water-cursor__ripple"></span>
    <span class="water-cursor__core"></span>
  `;

  document.body.appendChild(root);
  waterCursorState.root = root;
  waterCursorState.halo = root.querySelector(".water-cursor__halo");
  waterCursorState.ripple = root.querySelector(".water-cursor__ripple");
  waterCursorState.core = root.querySelector(".water-cursor__core");
}

function removeWaterCursor() {
  if (waterCursorState.frameId) {
    cancelAnimationFrame(waterCursorState.frameId);
    waterCursorState.frameId = 0;
  }

  if (waterCursorState.initialized) {
    window.removeEventListener("pointermove", handleWaterPointerMove);
    window.removeEventListener("pointerdown", handleWaterPointerDown);
    window.removeEventListener("pointerup", handleWaterPointerUp);
    window.removeEventListener("pointercancel", handleWaterPointerUp);
    window.removeEventListener("blur", handleWaterPointerUp);
    document.removeEventListener("visibilitychange", handleWaterVisibilityChange);
  }

  waterCursorState.root?.remove();
  clearActiveGlowCard();
  document.documentElement.style.setProperty("--ambient-x", "18%");
  document.documentElement.style.setProperty("--ambient-y", "12%");
  document.documentElement.style.setProperty("--ambient-x-2", "82%");
  document.documentElement.style.setProperty("--ambient-y-2", "18%");
  waterCursorState = {
    initialized: false,
    root: null,
    halo: null,
    ripple: null,
    core: null,
    visible: false,
    hovering: false,
    pressed: false,
    enabled: false,
    targetX: 0,
    targetY: 0,
    haloX: 0,
    haloY: 0,
    rippleX: 0,
    rippleY: 0,
    coreX: 0,
    coreY: 0,
    lastX: 0,
    lastY: 0,
    lastRippleAt: 0,
    frameId: 0,
  };
  document.body.classList.remove("has-water-cursor");
}

function spawnWaterRipple(x, y, size = 1) {
  return;
}

function updateWaterCursorClasses(target) {
  if (!waterCursorState.root) {
    return;
  }

  const interactive = target instanceof HTMLElement ? target.closest("a, button, [role='button'], summary, [data-project-open], [data-project-nav], [data-project-close]") : null;
  const textField = target instanceof HTMLElement ? target.closest("input, textarea, select, [contenteditable='true']") : null;

  waterCursorState.hovering = Boolean(interactive);
  waterCursorState.root.classList.toggle("is-hovering", waterCursorState.hovering);
  waterCursorState.root.classList.toggle("is-text", Boolean(textField));
}

function handleWaterPointerMove(event) {
  if (!waterCursorState.enabled || !waterCursorState.root) {
    return;
  }

  waterCursorState.visible = true;
  waterCursorState.targetX = event.clientX;
  waterCursorState.targetY = event.clientY;
  updateWaterCursorClasses(event.target);
  updateAmbientLighting(event.clientX, event.clientY);
  syncGlowCard(event);

  waterCursorState.lastX = event.clientX;
  waterCursorState.lastY = event.clientY;

  if (waterCursorState.root) {
    waterCursorState.root.classList.add("is-visible");
  }

  if (!waterCursorState.frameId) {
    waterCursorState.frameId = requestAnimationFrame(stepWaterCursor);
  }
}

function handleWaterPointerDown(event) {
  if (!waterCursorState.enabled || !waterCursorState.root) {
    return;
  }

  waterCursorState.pressed = true;
  waterCursorState.root.classList.add("is-pressed");

  if (!waterCursorState.frameId) {
    waterCursorState.frameId = requestAnimationFrame(stepWaterCursor);
  }
}

function handleWaterPointerUp() {
  if (!waterCursorState.root) {
    return;
  }

  waterCursorState.pressed = false;
  waterCursorState.root.classList.remove("is-pressed");
}

function handleWaterVisibilityChange() {
  if (!waterCursorState.root) {
    return;
  }

  if (document.hidden) {
    waterCursorState.visible = false;
    waterCursorState.root.classList.remove("is-visible");
    clearActiveGlowCard();
  }
}

function stepWaterCursor() {
  const state = waterCursorState;
  const root = state.root;

  if (!state.enabled || !root) {
    state.frameId = 0;
    return;
  }

  const haloEase = state.hovering ? 0.12 : 0.08;
  const rippleEase = state.hovering ? 0.2 : 0.15;
  const coreEase = state.hovering ? 0.28 : 0.22;

  state.haloX += (state.targetX - state.haloX) * haloEase;
  state.haloY += (state.targetY - state.haloY) * haloEase;
  state.rippleX += (state.targetX - state.rippleX) * rippleEase;
  state.rippleY += (state.targetY - state.rippleY) * rippleEase;
  state.coreX += (state.targetX - state.coreX) * coreEase;
  state.coreY += (state.targetY - state.coreY) * coreEase;

  const dx = state.targetX - state.haloX;
  const dy = state.targetY - state.haloY;
  const distance = Math.hypot(dx, dy);
  const stretch = Math.min(distance / 140, 0.22);
  const haloScale = state.hovering ? 1.16 : 1;
  const rippleScale = state.hovering ? 1.08 : 1;
  const coreScale = state.pressed ? 0.72 : state.hovering ? 1.08 : 1;

  if (state.halo) {
    state.halo.style.transform = `translate3d(${state.haloX}px, ${state.haloY}px, 0) translate(-50%, -50%) scale(${haloScale + stretch * 0.4})`;
  }

  if (state.ripple) {
    state.ripple.style.transform = `translate3d(${state.rippleX}px, ${state.rippleY}px, 0) translate(-50%, -50%) scale(${rippleScale + stretch * 0.2})`;
  }

  if (state.core) {
    state.core.style.transform = `translate3d(${state.coreX}px, ${state.coreY}px, 0) translate(-50%, -50%) scale(${coreScale})`;
  }

  const settled =
    !state.pressed &&
    Math.abs(state.targetX - state.haloX) < 0.2 &&
    Math.abs(state.targetY - state.haloY) < 0.2 &&
    Math.abs(state.targetX - state.rippleX) < 0.3 &&
    Math.abs(state.targetY - state.rippleY) < 0.3 &&
    Math.abs(state.targetX - state.coreX) < 0.35 &&
    Math.abs(state.targetY - state.coreY) < 0.35;

  if (settled) {
    state.frameId = 0;
    return;
  }

  state.frameId = requestAnimationFrame(stepWaterCursor);
}

function syncWaterCursor() {
  // Keep the native system cursor only.
  removeWaterCursor();
}

const SOCIAL_LINKS = [
  {
    label: { es: "GitHub", en: "GitHub" },
    href: PROFILE.github,
    description: { es: "Repositorio y código", en: "Repository and code" },
  },
];

const PROJECT_DETAILS = {
  "ambrosia-bhang": {
    gallery: buildSequentialGallery(
      "assets/projects/ambrosia-bhang/gallery",
      18,
      {
        es: "Captura de Ambrosia Bhang",
        en: "Ambrosia Bhang screenshot",
      }
    ),
    es: {
      overview:
        "Tienda virtual en uso desarrollada con Next.js, React y TypeScript. Permite navegar un catálogo de productos, comprar, aplicar códigos promocionales y completar el checkout de manera sencilla. También incluye un panel administrativo para gestionar productos, categorías, promociones, anuncios principales y métodos de pago, con autenticación, recuperación de contraseña, Prisma sobre PostgreSQL y envío de información al cliente por correo y WhatsApp.",
      capabilitiesTitle: "Qué permite",
      capabilities: [
        "Navegar un catálogo de productos y completar compras con un flujo claro.",
        "Aplicar códigos promocionales durante el proceso de compra.",
        "Gestionar productos, categorías, promociones, anuncios y métodos de pago desde un panel administrativo.",
        "Autenticar usuarios, recuperar contraseñas y enviar información al cliente por correo y WhatsApp.",
      ],
      stackTitle: "Tecnologías y base técnica",
      stack: ["TypeScript", "React", "Next.js 15", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth"],
      galleryTitle: "Galería completa",
      galleryHint: "Abre una miniatura para ver más contexto del proyecto.",
      note: "Una base e-commerce en uso, pensada para crecer con control administrativo y comunicación directa con clientes.",
    },
    en: {
      overview:
        "An active online store built with Next.js, React, and TypeScript. It lets customers browse products, buy items, apply promo codes, and complete checkout with ease. The admin panel also manages products, categories, promotions, home banners, and payment methods, with authentication, password recovery, Prisma on PostgreSQL, and customer updates sent by email and WhatsApp.",
      capabilitiesTitle: "What it lets you do",
      capabilities: [
        "Browse products and complete purchases through a clear checkout flow.",
        "Apply promotional codes during the purchase process.",
        "Manage products, categories, promotions, banners, and payment methods from an admin panel.",
        "Authenticate users, recover passwords, and send customer updates by email and WhatsApp.",
      ],
      stackTitle: "Technologies and base",
      stack: ["TypeScript", "React", "Next.js 15", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth"],
      galleryTitle: "Full gallery",
      galleryHint: "Open any thumbnail to get more context about the project.",
      note: "An in-use e-commerce base designed to scale with admin control and direct customer communication.",
    },
  },
  lativet: {
    gallery: buildSequentialGallery("assets/projects/lativet/gallery", 32, {
      es: "Captura de Lativet",
      en: "Lativet screenshot",
    }),
    es: {
      overview:
        "Plataforma web de gestión veterinaria integral en uso que centraliza toda la operación clínica y administrativa de una veterinaria. Administra historias clínicas completas, propietarios, pacientes, agenda médica, hospitalización, consultas, consentimientos informados con firma digital, inventario, caja, ventas, facturación interna, compras e informes financieros. También incorpora sincronización con Google Calendar, envío automático de correos al programar citas y control detallado del inventario para garantizar trazabilidad.",
      capabilitiesTitle: "Qué permite",
      capabilities: [
        "Administrar historias clínicas, propietarios, pacientes y agenda médica.",
        "Gestionar hospitalización, consultas y consentimientos informados con firma digital.",
        "Controlar inventario, caja, ventas, facturación interna, compras e informes financieros.",
        "Sincronizar citas con Google Calendar y enviar correos automáticos a los clientes.",
      ],
      stackTitle: "Tecnologías y base técnica",
      stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "SQLite", "SQL"],
      galleryTitle: "Galería completa",
      galleryHint: "Explora las diferentes pantallas del sistema y su flujo interno.",
      note: "Construido para acompañar la operación diaria de una veterinaria con una interfaz clara y trazable.",
    },
    en: {
      overview:
        "An in-use comprehensive veterinary management platform that centralizes both the clinical and administrative work of a veterinary practice. It handles full medical histories, owners, patients, medical scheduling, hospitalization, consultations, informed consent with digital signature, inventory, cash, sales, internal invoicing, purchases, and financial reports. It also includes Google Calendar sync, automatic email notifications when appointments are scheduled, and detailed inventory control to ensure traceability.",
      capabilitiesTitle: "What it lets you do",
      capabilities: [
        "Manage medical histories, owners, patients, and the clinical schedule.",
        "Handle hospitalization, consultations, and informed consent with digital signature.",
        "Control inventory, cash, sales, internal invoicing, purchases, and financial reports.",
        "Sync appointments with Google Calendar and send automatic emails to clients.",
      ],
      stackTitle: "Technologies and base",
      stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "SQLite", "SQL"],
      galleryTitle: "Full gallery",
      galleryHint: "Explore the different screens and internal workflow of the system.",
      note: "Built to support the daily work of a veterinary practice with a clear, traceable interface.",
    },
  },
  "hessa-enterprises": {
    gallery: buildSequentialGallery("assets/projects/hessa-enterprises/gallery", 10, {
      es: "Captura de Hessa Enterprises",
      en: "Hessa Enterprises screenshot",
    }),
    es: {
      overview:
        "Sistema en uso desarrollado para automatizar el seguimiento de clientes mediante Gmail. Permite registrar clientes y propuestas comerciales, programar correos personalizados con la frecuencia deseada y detener automáticamente los seguimientos cuando se alcanza el número máximo de intentos configurado. Cada empresa dispone de su propio espacio de trabajo, puede conectar su cuenta de Gmail mediante OAuth, administrar plantillas de correo, visualizar métricas de seguimiento y gestionar usuarios desde un panel administrativo.",
      capabilitiesTitle: "Qué permite",
      capabilities: [
        "Registrar clientes y propuestas comerciales por empresa.",
        "Programar seguimientos con la frecuencia deseada y con límite de intentos.",
        "Conectar Gmail mediante OAuth y administrar plantillas de correo.",
        "Visualizar métricas de seguimiento y gestionar usuarios desde el panel administrativo.",
      ],
      stackTitle: "Tecnologías y base técnica",
      stack: ["React", "TypeScript", "JavaScript", "PostgreSQL (Supabase)", "Supabase Auth", "Deno Edge Functions", "Gmail API", "OAuth de Google"],
      galleryTitle: "Galería completa",
      galleryHint: "Explora los bloques de producto que explican la propuesta completa.",
      note: "Una base comercial en uso para automatizar seguimientos y conservar trazabilidad por empresa.",
    },
    en: {
      overview:
        "An in-use system built to automate client follow-up through Gmail. It lets you register clients and commercial proposals, schedule personalized emails at the desired frequency, and stop follow-ups automatically once the configured maximum number of attempts is reached. Each company has its own workspace, can connect its Gmail account through OAuth, manage email templates, view follow-up metrics, and handle users from an admin panel.",
      capabilitiesTitle: "What it lets you do",
      capabilities: [
        "Register clients and commercial proposals per company.",
        "Schedule follow-ups with a chosen frequency and attempt limit.",
        "Connect Gmail through OAuth and manage email templates.",
        "View follow-up metrics and manage users from the admin panel.",
      ],
      stackTitle: "Technologies and base",
      stack: ["React", "TypeScript", "JavaScript", "PostgreSQL (Supabase)", "Supabase Auth", "Deno Edge Functions", "Gmail API", "Google OAuth"],
      galleryTitle: "Full gallery",
      galleryHint: "Explore the product blocks that explain the full proposal.",
      note: "An in-use commercial base designed to automate follow-ups and keep company-level traceability.",
    },
  },
  "contaduria-juliana": {
    gallery: [
      {
        src: "assets/projects/contaduria-juliana/cover.png",
        alt: {
          es: "Portada principal de Nexo Admin",
          en: "Main cover for Nexo Admin",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/company-selector.png",
        alt: {
          es: "Selector de empresa de Nexo Admin",
          en: "Company selector for Nexo Admin",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/dashboard-home.png",
        alt: {
          es: "Dashboard principal de Nexo Admin",
          en: "Main dashboard for Nexo Admin",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/products.png",
        alt: {
          es: "Módulo de productos de Nexo Admin",
          en: "Products module for Nexo Admin",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/invoices.png",
        alt: {
          es: "Módulo de facturas de Nexo Admin",
          en: "Invoices module for Nexo Admin",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/pos.png",
        alt: {
          es: "Punto de venta de Nexo Admin",
          en: "POS screen for Nexo Admin",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/configuracion.png",
        alt: {
          es: "Configuración de Nexo Admin",
          en: "Settings screen for Nexo Admin",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/reports.png",
        alt: {
          es: "Reportes de Nexo Admin",
          en: "Reports screen for Nexo Admin",
        },
      },
    ],
    es: {
      overview:
        "Plataforma administrativa y contable en desarrollo para una contadora pública. Toma como referencia herramientas como SIIGO y adapta sus funciones a los procesos específicos del cliente. Busca centralizar clientes, proveedores, inventario, ventas, cartera, gastos, empleados, nómina, reportes, cotizaciones, facturación interna y punto de venta (POS), con mejoras personalizadas para optimizar el trabajo diario.",
      capabilitiesTitle: "Qué permite",
      capabilities: [
        "Gestionar clientes, proveedores, productos e inventario.",
        "Administrar ventas, cartera, gastos, nómina y empleados.",
        "Consolidar cotizaciones, facturación interna, POS y reportes.",
        "Adaptar los módulos al flujo real de trabajo de la contadora.",
      ],
      stackTitle: "Tecnologías y base técnica",
      stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "Supabase"],
      galleryTitle: "Galería completa",
      galleryHint: "Revisa las pantallas principales y módulos administrativos del sistema.",
      note: "Proyecto en desarrollo con una base sólida y módulos pensados para una operación contable personalizada.",
    },
    en: {
      overview:
        "An administrative and accounting platform in development for a public accountant. It takes SIIGO-like tools as a reference and adapts their functionality to the client’s specific processes. The goal is to centralize clients, suppliers, inventory, sales, receivables, expenses, employees, payroll, reports, quotes, internal invoicing, and point of sale (POS), with custom improvements that streamline daily work.",
      capabilitiesTitle: "What it lets you do",
      capabilities: [
        "Manage clients, suppliers, products, and inventory.",
        "Handle sales, receivables, expenses, payroll, and employees.",
        "Consolidate quotes, internal invoicing, POS, and reports.",
        "Adapt the modules to the accountant's real workflow.",
      ],
      stackTitle: "Technologies and base",
      stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "Supabase"],
      galleryTitle: "Full gallery",
      galleryHint: "Review the main screens and administrative modules of the system.",
      note: "A project in development with a solid base and modules built for a customized accounting operation.",
    },
  },
};

function getCopy() {
  return CONTENT[currentLang];
}

function createNavItem(item) {
  const target = item.href.startsWith("#") ? item.href.slice(1) : "";
  return `<a href="${item.href}" data-nav-link data-nav-target="${target}">${item.label}</a>`;
}

function createTag(tag) {
  return `<span class="tag">${tag}</span>`;
}

function createIntroOverlay() {
  if (introState.completed || prefersReducedMotion()) {
    return "";
  }

  const introGreeting = currentLang === "es" ? "Hola" : "Hello";
  const introTitleTop = currentLang === "es" ? "Bienvenido a mi" : "Welcome to my";
  const introTitleBottom = currentLang === "es" ? "Portafolio Web" : "Web Portfolio";

  return `
    <div class="page-intro" data-page-intro role="status" aria-live="polite" aria-label="${introTitleTop} ${introTitleBottom}">
      <div class="page-intro__lights" aria-hidden="true">
        <span></span>
        <span></span>
      </div>
      <div class="page-intro__content">
        <p class="page-intro__kicker">${introGreeting}</p>
        <p class="page-intro__line">${introTitleTop}</p>
        <p class="page-intro__line page-intro__line--strong">${introTitleBottom}</p>
        <div class="page-intro__bar" aria-hidden="true"><span></span></div>
      </div>
    </div>
  `;
}

function getHeroHeadlineLines() {
  return currentLang === "es" ? ["Desarrollo", "de software"] : ["Software", "development"];
}

function getShowcaseLabel(copy, tab) {
  return copy.showcase?.tabs?.[tab] || tab;
}

function getTechnologyItems(copy) {
  return copy.skills.groups.flatMap((group) =>
    group.items.map((item) => ({
      name: item,
      group: group.title,
      badge: item
        .replace(/[^A-Za-z0-9]/g, "")
        .slice(0, 3)
        .toUpperCase() || group.icon.slice(0, 3),
    })),
  );
}

function getProfileInitials() {
  return PROFILE.name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("")
    .slice(0, 2);
}

function createMetricCard(label, value, detail, index = 0) {
  return `
    <article class="metric-card reveal reveal--up" style="--reveal-delay: ${16 + index * 20}ms">
      <span class="metric-card__value">${value}</span>
      <span class="metric-card__label">${label}</span>
      <span class="metric-card__detail">${detail}</span>
    </article>
  `;
}

function createAboutSnapshotCard(item, index = 0) {
  return `
    <article class="about-snapshot-card reveal reveal--up" style="--reveal-delay: ${14 + index * 12}ms">
      <span class="about-snapshot-card__label">${item.label}</span>
      <strong class="about-snapshot-card__value">${item.value}</strong>
    </article>
  `;
}

function createAboutHighlightCard(item, index = 0) {
  return `
    <article class="about-spotlight reveal reveal--up" style="--reveal-delay: ${24 + index * 14}ms">
      <h3 class="about-spotlight__title">${item.title}</h3>
      <p class="about-spotlight__text">${item.text}</p>
    </article>
  `;
}

function createPortraitCard(variant = "hero") {
  const initials = getProfileInitials();
  const role = PROFILE.role[currentLang];

  return `
    <figure class="portrait portrait--${variant}" aria-label="${PROFILE.name}">
      <span class="portrait__string"></span>
      <span class="portrait__clip"></span>
      <div class="portrait__frame">
        <div class="portrait__art" aria-hidden="true">
          <span class="portrait__initials">${initials}</span>
        </div>
        <figcaption class="portrait__caption">
          <span>${PROFILE.name}</span>
          <small>${role}</small>
        </figcaption>
      </div>
    </figure>
  `;
}

function createProjectShowcaseCard(project, copy, index = 0) {
  const actionButtons = [];
  if (project.liveUrl) {
    actionButtons.push(`<a class="button button--secondary button--compact" href="${project.liveUrl}" target="_blank" rel="noreferrer">${copy.projects.liveCta}</a>`);
  }
  if (project.repoUrl) {
    actionButtons.push(`<a class="button button--ghost button--compact" href="${project.repoUrl}" target="_blank" rel="noreferrer">${copy.projects.repoCta}</a>`);
  }

  return `
      <article class="project-row reveal reveal--up" style="--reveal-delay: ${18 + index * 18}ms" data-project-open="${index}" tabindex="0" role="button" aria-label="${copy.projects.detailCta}: ${project.title}">
        <div class="project-row__media">
          <img class="project-row__image" src="${project.image}" alt="${project.imageAlt}" loading="eager" decoding="async" />
        </div>
      <div class="project-row__content">
        <div class="project-row__header">
          <div>
            <p class="project-row__kicker">${project.type}</p>
            <h3 class="project-row__title">${project.title}</h3>
          </div>
          <span class="project-row__index">${project.index}</span>
        </div>
        <p class="project-row__summary">${project.summary}</p>
        <div class="chip-row chip-row--tight">
          ${project.tags.map(createTag).join("")}
        </div>
        <div class="project-row__footer">
          <span class="project-row__status">${project.footer}</span>
          <div class="project-row__actions">
            <button class="button button--primary button--compact" type="button" data-project-open="${index}">${copy.projects.detailCta}</button>
            ${actionButtons.join("")}
          </div>
        </div>
      </div>
    </article>
  `;
}

function createTechnologyCard(item, index = 0) {
  return `
    <article class="tech-card reveal reveal--up" style="--reveal-delay: ${12 + index * 10}ms">
      <span class="tech-card__badge">${item.badge}</span>
      <h3 class="tech-card__name">${item.name}</h3>
      <p class="tech-card__group">${item.group}</p>
    </article>
  `;
}

function createCertificateState(copy) {
  return `
    <article class="empty-state reveal reveal--up" style="--reveal-delay: 16ms">
      <p class="empty-state__title">${copy.showcase.tabs.certificates}</p>
      <h3 class="empty-state__headline">${copy.showcase.emptyCertificates}</h3>
      <p class="empty-state__copy">${currentLang === "es" ? "Cuando cargues certificados reales, esta vista mostrará sus imágenes y detalles." : "When you add real certificates, this view will show their images and details."}</p>
    </article>
  `;
}

function renderShowcaseContent(copy, tab = activeShowcaseTab) {
  if (tab === "projects") {
    return `
      <div class="showcase-stack">
        ${copy.projects.items.map((project, index) => createProjectShowcaseCard(project, copy, index)).join("")}
      </div>
    `;
  }

  if (tab === "certificates") {
    return `
      <div class="showcase-stack showcase-stack--single">
        ${createCertificateState(copy)}
      </div>
    `;
  }

  const techItems = getTechnologyItems(copy);
  return `
    <div class="tech-grid">
      ${techItems.map((item, index) => createTechnologyCard(item, index)).join("")}
    </div>
  `;
}

function createShowcaseSection(copy) {
  const tabs = SHOWCASE_TABS.map((tab, index) => {
    const isActive = tab === activeShowcaseTab;
    return `
      <button
        class="showcase-tabs__button ${isActive ? "is-active" : ""}"
        type="button"
        role="tab"
        aria-selected="${isActive ? "true" : "false"}"
        data-showcase-tab="${tab}"
        tabindex="${isActive ? "0" : "-1"}"
        style="--showcase-index: ${index}"
      >
        ${getShowcaseLabel(copy, tab)}
      </button>
    `;
  }).join("");

  return `
    <section class="section showcase" id="showcase">
      <div class="shell showcase__shell">
        <div class="section-head section-head--center">
          <div class="section-head__copy">
            <p class="section-kicker">${copy.showcase.kicker}</p>
            <h2 class="section-title">${copy.showcase.title}</h2>
          </div>
          <p class="section-copy">${copy.showcase.copy}</p>
        </div>

        <div class="showcase-tabs" role="tablist" aria-label="${copy.showcase.title}">
          <span class="showcase-tabs__indicator" data-showcase-indicator aria-hidden="true"></span>
          ${tabs}
        </div>

        <div class="showcase-panel reveal reveal--up" data-showcase-panel style="--reveal-delay: 16ms">
          ${renderShowcaseContent(copy, activeShowcaseTab)}
        </div>
      </div>
    </section>
  `;
}

function createAboutSection(copy) {
  return `
    <section class="section about" id="about">
      <div class="shell about__shell">
        <div class="about__content">
          <p class="section-kicker">${copy.about.kicker}</p>
          <h2 class="about__name">${PROFILE.name}</h2>
          <p class="about__lead">${copy.about.title}</p>
          <p class="section-copy about__copy">${copy.about.copy}</p>

          <div class="about__quote">
            ${currentLang === "es" ? "Construyo interfaces claras y bases técnicas que conectan con necesidades reales." : "I build clear interfaces and technical foundations that connect with real needs."}
          </div>

          <div class="about__actions">
            <a class="button button--primary" href="#showcase">${copy.hero.primaryCta}</a>
            <a class="button button--secondary" href="./assets/cv-practicante.pdf" download>${currentLang === "es" ? "Descargar CV" : "Download CV"}</a>
          </div>
        </div>

        <aside class="about__panel reveal reveal--right" style="--reveal-delay: 18ms">
          <div class="about__panel-head">
            <p class="about__panel-kicker">${currentLang === "es" ? "Perfil" : "Profile"}</p>
            <h3 class="about__panel-title">${currentLang === "es" ? "Lo que aporto en práctica" : "What I bring in practice"}</h3>
          </div>

          <div class="about__snapshot">
            ${copy.snapshot.map((item, index) => createAboutSnapshotCard(item, index)).join("")}
          </div>

          <div class="about__highlights">
            ${copy.about.highlights.map((item, index) => createAboutHighlightCard(item, index)).join("")}
          </div>
        </aside>
      </div>

      <div class="shell metrics-grid">
        ${createMetricCard(currentLang === "es" ? "Proyectos" : "Projects", String(copy.projects.items.length), currentLang === "es" ? "Soluciones funcionales en uso y desarrollo" : "Functional solutions in use and development", 0)}
        ${createMetricCard(currentLang === "es" ? "Certificados" : "Certificates", "0", currentLang === "es" ? "Aún no se han cargado certificados" : "No certificates have been uploaded yet", 1)}
        ${createMetricCard(currentLang === "es" ? "Experiencia" : "Experience", String(copy.journey.items.length), currentLang === "es" ? "Formación y experiencia práctica" : "Training and practical experience", 2)}
      </div>
    </section>
  `;
}

function createHeroSection(copy) {
  const titleLines = getHeroHeadlineLines();
  return `
    <section class="hero" id="home">
      <div class="shell hero__shell">
        <div class="hero__content reveal reveal--left" style="--reveal-delay: 8ms">
          <p class="hero__eyebrow">${PROFILE.role[currentLang]}</p>
          <h1 class="hero__headline">
            <span>${titleLines[0]}</span>
            <span class="hero__headline-muted">${titleLines[1]}</span>
          </h1>
          <p class="hero__summary">${copy.hero.summary}</p>
          <p class="hero__copy">${copy.hero.copy}</p>

          <div class="hero__actions">
            <a class="button button--primary" href="#showcase">${copy.hero.primaryCta}</a>
            <a class="button button--secondary" href="#contact">${copy.hero.secondaryCta}</a>
          </div>

          <div class="hero__tags">
            ${copy.hero.tags.map(createTag).join("")}
          </div>

          <div class="hero__socials">
            <a class="hero__social" href="mailto:${PROFILE.email}">
              <span>${currentLang === "es" ? "Correo" : "Email"}</span>
              <small>${PROFILE.email}</small>
            </a>
            <a class="hero__social" href="${PROFILE.github}" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <small>${currentLang === "es" ? "Repositorio y código" : "Repository and code"}</small>
            </a>
            <a class="hero__social" href="tel:${PROFILE.phone.replace(/\s+/g, "")}">
              <span>${currentLang === "es" ? "Teléfono" : "Phone"}</span>
              <small>${PROFILE.phone}</small>
            </a>
          </div>
        </div>

        <div class="hero__visual reveal reveal--right" style="--reveal-delay: 18ms">
          ${createPortraitCard("hero")}
        </div>
      </div>
    </section>
  `;
}

function createExperienceSection(copy) {
  return `
    <section class="section experience" id="experience">
      <div class="shell experience__shell">
        <div class="section-head">
          <div>
            <p class="section-kicker">${copy.journey.kicker}</p>
            <h2 class="section-title">${copy.journey.title}</h2>
          </div>
          <p class="section-copy">${copy.journey.copy}</p>
        </div>
        <div class="experience__list">
          ${copy.journey.items
            .map(
              (item, index) => `
                <article class="timeline-row reveal ${index % 2 === 0 ? "reveal--left" : "reveal--right"}" style="--reveal-delay: ${18 + index * 20}ms">
                  <span class="timeline-row__year">${item.year}</span>
                  <div>
                    <h3 class="timeline-row__title">${item.title}</h3>
                    <p class="timeline-row__text">${item.text}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function createContactSection(copy) {
  return `
    <section class="section contact" id="contact">
      <div class="shell contact__shell">
        <div class="contact__intro reveal reveal--left" style="--reveal-delay: 12ms">
          <p class="section-kicker">${copy.contact.kicker}</p>
          <h2 class="section-title">${copy.contact.title}</h2>
          <p class="section-copy">${copy.contact.copy}</p>

          <div class="contact__cards">
            <a class="contact-card-mini" href="mailto:${PROFILE.email}">
              <span class="contact-card-mini__label">${copy.contact.emailLabel}</span>
              <strong class="contact-card-mini__value">${PROFILE.email}</strong>
            </a>
            <a class="contact-card-mini" href="tel:${PROFILE.phone.replace(/\s+/g, "")}">
              <span class="contact-card-mini__label">${copy.contact.phoneLabel}</span>
              <strong class="contact-card-mini__value">${PROFILE.phone}</strong>
            </a>
            <a class="contact-card-mini" href="${PROFILE.github}" target="_blank" rel="noreferrer">
              <span class="contact-card-mini__label">GitHub</span>
              <strong class="contact-card-mini__value">${PROFILE.github.replace("https://", "")}</strong>
            </a>
          </div>
        </div>

        <div class="contact__form reveal reveal--right" style="--reveal-delay: 18ms">
          <p class="section-kicker">${copy.contact.formTitle}</p>
          <form class="contact-form" id="contact-form">
            <div class="field">
              <label for="name">${copy.contact.formName}</label>
              <input class="input" id="name" name="name" type="text" placeholder="${copy.contact.formName}" />
            </div>

            <div class="field">
              <label for="email">${copy.contact.formEmail}</label>
              <input class="input" id="email" name="email" type="email" placeholder="${copy.contact.formEmail}" />
            </div>

            <div class="field">
              <label for="message">${copy.contact.formMessage}</label>
              <textarea class="textarea" id="message" name="message" placeholder="${copy.contact.formMessage}"></textarea>
            </div>

            <div class="contact-form__actions">
              <button class="button button--primary" type="submit">${copy.contact.submit}</button>
              <button class="button button--secondary" type="reset">${copy.contact.clear}</button>
            </div>

            <p class="status">${copy.contact.status}</p>
          </form>
        </div>
      </div>
    </section>
  `;
}

function createFooter(copy) {
  return `
    <footer class="footer">
      <div class="shell footer__inner">
        <p>${copy.footer}</p>
        <div class="footer__links">
          <a href="${PROFILE.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
        </div>
      </div>
    </footer>
  `;
}

function buildPageMarkup(copy, shouldShowIntro) {
  return `
    ${shouldShowIntro ? createIntroOverlay() : ""}
    <div class="page">
      <header class="topbar">
        <div class="shell topbar__inner">
          <a class="brand" href="#home" aria-label="Home">
            <span class="brand__mark">DH</span>
            <span class="brand__text">danilitohh.dev</span>
          </a>
          <nav class="nav" aria-label="Primary">
            ${copy.nav.map(createNavItem).join("")}
          </nav>
          <div class="lang-switch" role="group" aria-label="Language switcher">
            <button type="button" class="${currentLang === "es" ? "is-active" : ""}" data-lang="es">ES</button>
            <button type="button" class="${currentLang === "en" ? "is-active" : ""}" data-lang="en">EN</button>
          </div>
        </div>
      </header>

      <main class="page__main">
        ${createHeroSection(copy)}
        ${createAboutSection(copy)}
        ${createShowcaseSection(copy)}
        ${createExperienceSection(copy)}
        ${createContactSection(copy)}
      </main>

      ${createFooter(copy)}
    </div>
  `;
}

function syncShowcaseTabs() {
  const buttons = document.querySelectorAll("[data-showcase-tab]");
  buttons.forEach((button) => {
    if (!(button instanceof HTMLElement)) {
      return;
    }

    const isActive = button.dataset.showcaseTab === activeShowcaseTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
    button.tabIndex = isActive ? 0 : -1;
  });

  syncShowcaseIndicator();
}

function syncShowcaseIndicator() {
  const tabs = document.querySelector(".showcase-tabs");
  const indicator = document.querySelector("[data-showcase-indicator]");
  const activeButton = document.querySelector(`[data-showcase-tab="${activeShowcaseTab}"]`);

  if (!(tabs instanceof HTMLElement) || !(indicator instanceof HTMLElement) || !(activeButton instanceof HTMLElement)) {
    return;
  }

  const tabsRect = tabs.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();
  indicator.style.setProperty("--indicator-x", `${buttonRect.left - tabsRect.left}px`);
  indicator.style.setProperty("--indicator-width", `${buttonRect.width}px`);
}

function updateShowcasePanel() {
  const panel = document.querySelector("[data-showcase-panel]");
  if (!(panel instanceof HTMLElement)) {
    return;
  }

  if (showcaseTransitionTimerId) {
    window.clearTimeout(showcaseTransitionTimerId);
  }

  panel.classList.add("is-transitioning");
  showcaseTransitionTimerId = window.setTimeout(() => {
    panel.innerHTML = renderShowcaseContent(getCopy(), activeShowcaseTab);
    panel.classList.remove("is-transitioning");
    panel.classList.add("is-visible");
    observeReveal();
    revealAboveFold();
    showcaseTransitionTimerId = 0;
  }, 180);
}

function setShowcaseTab(tab) {
  if (!SHOWCASE_TABS.includes(tab) || tab === activeShowcaseTab) {
    return;
  }

  activeShowcaseTab = tab;
  syncShowcaseTabs();
  updateShowcasePanel();
}

function getObservedSections() {
  return ACTIVE_SECTION_IDS.map((id) => document.getElementById(id)).filter((section) => section instanceof HTMLElement);
}

function syncActiveNav(sectionId = activeSectionId) {
  const nextSectionId = sectionId || ACTIVE_SECTION_IDS[0];
  activeSectionId = nextSectionId;

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (!(link instanceof HTMLElement)) {
      return;
    }

    const isActive = link.dataset.navTarget === nextSectionId;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function scheduleScrollChrome() {
  if (scrollChromeFrame) {
    return;
  }

  scrollChromeFrame = window.requestAnimationFrame(syncScrollChrome);
}

function syncScrollChrome() {
  scrollChromeFrame = 0;

  const topbar = document.querySelector(".topbar");
  if (!(topbar instanceof HTMLElement)) {
    return;
  }

  const floating = window.scrollY > 8;
  topbar.classList.toggle("topbar--floating", floating);
}

function bindScrollChrome() {
  if (scrollChromeBound) {
    return;
  }

  scrollChromeBound = true;
  window.addEventListener("scroll", scheduleScrollChrome, { passive: true });
  window.addEventListener("resize", scheduleScrollChrome, { passive: true });
  window.addEventListener("orientationchange", scheduleScrollChrome, { passive: true });
  window.addEventListener("resize", syncShowcaseTabs, { passive: true });
  window.addEventListener("orientationchange", syncShowcaseTabs, { passive: true });
}

function setupActiveSectionObserver() {
  const sections = getObservedSections();

  if (activeSectionObserver) {
    activeSectionObserver.disconnect();
    activeSectionObserver = null;
  }

  if (!sections.length) {
    syncActiveNav();
    return;
  }

  const hashSection = location.hash ? document.getElementById(location.hash.slice(1)) : null;
  syncActiveNav(hashSection?.id || sections[0].id);

  if (!("IntersectionObserver" in window)) {
    return;
  }

  activeSectionObserver = new IntersectionObserver(
    (entries) => {
      let nextId = activeSectionId;
      let bestRatio = 0;

      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target;
        if (!(target instanceof HTMLElement) || !target.id) {
          return;
        }

        if (entry.intersectionRatio >= bestRatio) {
          bestRatio = entry.intersectionRatio;
          nextId = target.id;
        }
      });

      if (nextId && nextId !== activeSectionId) {
        syncActiveNav(nextId);
      }
    },
    {
      rootMargin: "-32% 0px -48% 0px",
      threshold: [0.12, 0.24, 0.4, 0.58],
    },
  );

  sections.forEach((section) => activeSectionObserver?.observe(section));
}

function clearIntroTimer() {
  if (introTimerId) {
    window.clearTimeout(introTimerId);
    introTimerId = 0;
  }
}

function dismissIntroOverlay() {
  clearIntroTimer();
  introState.active = false;

  const overlay = introState.overlay || document.querySelector("[data-page-intro]");
  if (overlay instanceof HTMLElement) {
    overlay.classList.remove("is-visible");
    overlay.classList.add("is-exiting");
    window.setTimeout(() => {
      if (overlay.isConnected) {
        overlay.remove();
      }
    }, 240);
  }

  introState.overlay = null;
  document.body.classList.remove("intro-active");
}

function setupIntroOverlay() {
  if (prefersReducedMotion()) {
    clearIntroTimer();
    introState.pending = false;
    introState.active = false;
    introState.completed = true;
    introState.overlay = null;
    document.body.classList.remove("intro-active");
    writeSessionFlag(INTRO_STORAGE_KEY, true);
    return;
  }

  if (introState.completed) {
    document.body.classList.remove("intro-active");
    return;
  }

  const overlay = document.querySelector("[data-page-intro]");
  if (!(overlay instanceof HTMLElement)) {
    introState.pending = false;
    introState.active = false;
    introState.overlay = null;
    document.body.classList.remove("intro-active");
    return;
  }

  clearIntroTimer();
  introState.pending = false;
  introState.active = true;
  introState.completed = true;
  introState.overlay = overlay;
  document.body.classList.add("intro-active");
  writeSessionFlag(INTRO_STORAGE_KEY, true);

  window.requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
  });

  introTimerId = window.setTimeout(() => {
    dismissIntroOverlay();
  }, 2250);
}

function schedulePreviewScroll() {
  if (!PREVIEW_SECTION || !ACTIVE_SECTION_IDS.includes(PREVIEW_SECTION) || previewScrollTimerId) {
    return;
  }

  return;

  const delay = introState.pending && !prefersReducedMotion() ? 2500 : 120;
  previewScrollTimerId = window.setTimeout(() => {
    previewScrollTimerId = 0;

    const target = document.getElementById(PREVIEW_SECTION);
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const scrollTarget = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 92);
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: scrollTarget, behavior: "auto" });

    window.requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousBehavior;
    });
  }, delay);
}

function revealAboveFold() {
  if (prefersReducedMotion()) {
    return;
  }

  const threshold = window.innerHeight * 1.08;
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return;
    }

    const rect = element.getBoundingClientRect();
    if (rect.top < threshold && rect.bottom > 0) {
      element.classList.add("is-visible");
    }
  });
}

function buildSequentialGallery(basePath, count, label) {
  return Array.from({ length: count }, (_, index) => {
    const imageNumber = String(index + 1).padStart(2, "0");
    return {
      src: `${basePath}/${imageNumber}.png`,
      alt: {
        es: `${label.es} ${index + 1}`,
        en: `${label.en} ${index + 1}`,
      },
    };
  });
}

function getProjectDetail(project) {
  const details = PROJECT_DETAILS[project.slug];
  return details?.[currentLang] || details?.es || null;
}

function getProjectGallery(project) {
  return PROJECT_DETAILS[project.slug]?.gallery || [];
}

function clampProjectImageIndex(project, index) {
  const gallery = getProjectGallery(project);
  if (!gallery.length) {
    return 0;
  }

  return Math.max(0, Math.min(index, gallery.length - 1));
}

function openProjectModal(index, imageIndex = 0) {
  const copy = getCopy();
  const project = copy.projects.items[index];
  if (!project) {
    return;
  }

  activeProjectIndex = index;
  activeProjectImageIndex = clampProjectImageIndex(project, imageIndex);
  syncModalRoot();
  syncProjectFocus();
}

function closeProjectModal() {
  if (activeProjectIndex === null) {
    return;
  }

  pendingProjectFocusIndex = activeProjectIndex;
  activeProjectIndex = null;
  activeProjectImageIndex = 0;
  syncModalRoot();
  syncProjectFocus();
}

function setActiveProjectImage(index) {
  if (activeProjectIndex === null) {
    return;
  }

  const copy = getCopy();
  const project = copy.projects.items[activeProjectIndex];
  if (!project) {
    return;
  }

  activeProjectImageIndex = clampProjectImageIndex(project, index);
  updateProjectModal();
}

function stepProjectImage(direction) {
  if (activeProjectIndex === null) {
    return;
  }

  const copy = getCopy();
  const project = copy.projects.items[activeProjectIndex];
  if (!project) {
    return;
  }

  const gallery = getProjectGallery(project);
  if (!gallery.length) {
    return;
  }

  const nextIndex = (activeProjectImageIndex + direction + gallery.length) % gallery.length;
  setActiveProjectImage(nextIndex);
}

function updateProjectModal() {
  if (activeProjectIndex === null) {
    return;
  }

  const copy = getCopy();
  const project = copy.projects.items[activeProjectIndex];
  const detail = project ? getProjectDetail(project) : null;
  const gallery = project ? getProjectGallery(project) : [];
  const modal = modalRoot?.querySelector(".project-modal");

  if (!project || !detail || !modal) {
    return;
  }

  const activeImage = gallery[activeProjectImageIndex] || gallery[0];
  const imageAlt = activeImage?.alt?.[currentLang] || project.imageAlt;
  const image = modal.querySelector("[data-project-modal-image]");
  const count = modal.querySelector("[data-project-modal-count]");

  if (image instanceof HTMLImageElement && activeImage) {
    image.src = activeImage.src;
    image.alt = imageAlt;
  }

  if (count) {
    count.textContent = gallery.length ? `${activeProjectImageIndex + 1}/${gallery.length}` : "1/1";
  }

  modal.querySelectorAll("[data-project-thumb]").forEach((button) => {
    if (!(button instanceof HTMLElement)) {
      return;
    }

    const thumbIndex = Number(button.dataset.projectThumb);
    const isActive = Number.isInteger(thumbIndex) && thumbIndex === activeProjectImageIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function createProjectMedia(project, copy) {
  if (project.image) {
    return `
      <div class="project-card__media">
        <div class="project-card__media-frame">
          <img class="project-card__image" src="${project.image}" alt="${project.imageAlt}" loading="lazy" decoding="async" />
        </div>
      </div>
    `;
  }

  return `
    <div class="project-card__media project-card__media--empty" aria-label="${project.imageAlt}">
      <span class="project-card__placeholder-kicker">${project.type}</span>
      <strong class="project-card__placeholder-title">${copy.projects.imageFallbackTitle}</strong>
      <span class="project-card__placeholder-text">${copy.projects.imageFallbackText}</span>
    </div>
  `;
}

function createProjectActions(project, copy) {
  const buttons = [];

  if (project.liveUrl) {
    buttons.push(
      `<a class="project-link project-link--primary" href="${project.liveUrl}" target="_blank" rel="noreferrer">${copy.projects.liveCta}</a>`,
    );
  }

  if (project.repoUrl) {
    buttons.push(
      `<a class="project-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">${copy.projects.repoCta}</a>`,
    );
  }

  return buttons.length ? `<div class="project-card__links">${buttons.join("")}</div>` : "";
}

function createProjectCard(project, copy, index = 0) {
  return `
    <article class="project-card glow-card reveal reveal--up" data-glow-card style="--reveal-delay: ${24 + index * 24}ms" data-project-open="${index}" tabindex="0" role="button" aria-label="${copy.projects.detailCta}: ${project.title}">
      ${createProjectMedia(project, copy)}
      <div class="project-card__body">
        <div class="project-card__head">
          <div>
            <p class="project-card__type">${project.type}</p>
            <h3 class="card-title">${project.title}</h3>
          </div>
          <span class="project-card__index">${project.index}</span>
        </div>
        <p class="project-card__summary">${project.summary}</p>
        <div class="chip-row">
          ${project.tags.map(createTag).join("")}
        </div>
        <div class="project-card__footer">
          <small>${project.footer}</small>
          <button class="project-card__open" type="button" data-project-open="${index}">
            <span>${copy.projects.detailCta}</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
        ${createProjectActions(project, copy)}
      </div>
    </article>
  `;
}

function createProjectThumb(image, index, isActive) {
  const alt = image.alt[currentLang];
  return `
    <button
      class="project-modal__thumb ${isActive ? "is-active" : ""}"
      type="button"
      data-project-thumb="${index}"
      aria-label="${alt}"
      aria-current="${isActive ? "true" : "false"}"
    >
      <img class="project-modal__thumb-image" src="${image.src}" alt="${alt}" loading="lazy" decoding="async" />
    </button>
  `;
}

function createProjectModal(copy) {
  if (activeProjectIndex === null) {
    return "";
  }

  const project = copy.projects.items[activeProjectIndex];
  const detail = getProjectDetail(project);
  const gallery = getProjectGallery(project);

  if (!project || !detail) {
    return "";
  }

  const activeImage = gallery[activeProjectImageIndex] || gallery[0];
  const activeImageAlt = activeImage?.alt?.[currentLang] || project.imageAlt;
  const imageCountLabel = gallery.length ? `${activeProjectImageIndex + 1}/${gallery.length}` : "1/1";

  return `
    <div class="project-modal" role="presentation" aria-hidden="false">
      <div class="project-modal__backdrop" data-project-close></div>
      <div class="shell project-modal__panel" data-lenis-prevent role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button class="project-modal__close" type="button" data-project-close-primary data-project-close aria-label="${copy.projects.modalClose}">${currentLang === "es" ? "← Volver" : "← Back"}</button>

        <div class="project-modal__header">
          <div>
            <p class="project-modal__kicker">${project.type}</p>
            <h3 class="project-modal__title" id="project-modal-title">${project.title}</h3>
          </div>
          <span class="project-modal__index">${project.index}</span>
        </div>

        <p class="project-modal__summary">${project.summary}</p>
        <p class="project-modal__copy">${detail.overview}</p>

        <div class="project-modal__stats">
          <span>${currentLang === "es" ? `${detail.stack.length} tecnologías` : `${detail.stack.length} technologies`}</span>
          <span>${currentLang === "es" ? `${detail.capabilities.length} características` : `${detail.capabilities.length} features`}</span>
        </div>

        <div class="project-modal__layout">
          <div class="project-modal__gallery">
            <div class="project-modal__frame">
              ${activeImage ? `<img class="project-modal__image" data-project-modal-image src="${activeImage.src}" alt="${activeImageAlt}" loading="eager" decoding="async" />` : ""}
              <div class="project-modal__frame-topline">
                <span>${copy.projects.modalGallery}</span>
                <span data-project-modal-count>${imageCountLabel}</span>
              </div>
              ${gallery.length > 1 ? `
                <div class="project-modal__nav">
                  <button class="project-modal__nav-button" type="button" data-project-nav="prev" aria-label="${copy.projects.modalPrev}">‹</button>
                  <button class="project-modal__nav-button" type="button" data-project-nav="next" aria-label="${copy.projects.modalNext}">›</button>
                </div>
              ` : ""}
            </div>
            <div class="project-modal__thumbs" aria-label="${copy.projects.modalGallery}">
              ${gallery.map((image, galleryIndex) => createProjectThumb(image, galleryIndex, galleryIndex === activeProjectImageIndex)).join("")}
            </div>
            <p class="project-modal__hint">${detail.galleryHint}</p>
          </div>

          <div class="project-modal__content">
            <section class="project-modal__section">
              <p class="project-modal__section-label">${detail.capabilitiesTitle}</p>
              <ul class="project-modal__list">
                ${detail.capabilities.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </section>

            <section class="project-modal__section">
              <p class="project-modal__section-label">${detail.stackTitle}</p>
              <div class="chip-row">
                ${detail.stack.map(createTag).join("")}
              </div>
            </section>

            <section class="project-modal__section">
              <p class="project-modal__section-label">${copy.projects.modalLinks}</p>
              <div class="project-modal__links">
                ${project.liveUrl ? `<a class="project-link project-link--primary" href="${project.liveUrl}" target="_blank" rel="noreferrer">${copy.projects.liveCta}</a>` : ""}
                ${project.repoUrl ? `<a class="project-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">${copy.projects.repoCta}</a>` : ""}
              </div>
            </section>

            <p class="project-modal__note">${detail.note}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createSkillCard(group, index = 0) {
  return `
    <article class="skill-card glow-card reveal reveal--up" data-glow-card style="--reveal-delay: ${20 + index * 22}ms">
      <div class="skill-card__head">
        <span class="skill-card__icon">${group.icon}</span>
        <div>
          <p class="skill-card__kicker">Stack</p>
          <h3 class="skill-card__title">${group.title}</h3>
        </div>
      </div>
      <p class="skill-card__summary">${group.summary}</p>
      <div class="chip-row chip-row--tight">
        ${group.items.map(createTag).join("")}
      </div>
    </article>
  `;
}

function createTimelineCard(item, index = 0) {
  const directionClass = index % 2 === 0 ? "reveal--left" : "reveal--right";
  return `
    <article class="timeline-card glow-card reveal ${directionClass}" data-glow-card style="--reveal-delay: ${18 + index * 22}ms">
      <div class="timeline-year">${item.year}</div>
      <div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-text">${item.text}</p>
      </div>
    </article>
  `;
}

function createSnapshotItem(item, index = 0) {
  return `
    <div class="panel-item reveal reveal--zoom" style="--reveal-delay: ${28 + index * 18}ms">
      <span class="panel-item__dot" aria-hidden="true"></span>
      <div class="panel-item__content">
        <h3 class="panel-item__title">${item.label}</h3>
        <p class="panel-item__text">${item.value}</p>
      </div>
    </div>
  `;
}

function createSocialItem(link, copy, index = 0) {
  const external = link.href.startsWith("http");
  return `
    <a class="contact-item reveal reveal--up" style="--reveal-delay: ${18 + index * 20}ms" href="${link.href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>
      <div>
        <div class="contact-item__label">${link.label[currentLang]}</div>
        <div class="contact-item__value">${link.description[currentLang]}</div>
      </div>
      <span class="button button--ghost" aria-hidden="true">${copy.contact.actionLabel}</span>
    </a>
  `;
}

function syncProjectFocus() {
  requestAnimationFrame(() => {
    if (activeProjectIndex !== null) {
      const closeButton = document.querySelector("[data-project-close-primary]");
      if (closeButton instanceof HTMLElement) {
        closeButton.focus();
      }
      return;
    }

    if (pendingProjectFocusIndex === null) {
      return;
    }

    const trigger = document.querySelector(`[data-project-open="${pendingProjectFocusIndex}"]`);
    if (trigger instanceof HTMLElement) {
      trigger.focus();
    }

    pendingProjectFocusIndex = null;
  });
}

function animateHeroIntro() {
  revealAboveFold();
}

function setupPageAnimations() {
  bindScrollChrome();
  setupActiveSectionObserver();
  syncScrollChrome();

  if (prefersReducedMotion()) {
    if (pageRevealObserver) {
      pageRevealObserver.disconnect();
      pageRevealObserver = null;
    }

    document.querySelectorAll(".reveal").forEach((element) => {
      if (element instanceof HTMLElement) {
        element.classList.add("is-visible");
      }
    });
    syncActiveNav();
    setupIntroOverlay();
    return;
  }

  observeReveal();
  animateHeroIntro();
  setupIntroOverlay();
}

function syncModalRoot() {
  if (!modalRoot) {
    return;
  }

  const copy = getCopy();
  modalRoot.innerHTML = activeProjectIndex !== null ? createProjectModal(copy) : "";
  document.body.classList.toggle("modal-open", activeProjectIndex !== null);
}

function render() {
  const copy = getCopy();

  if (introState.active) {
    dismissIntroOverlay();
  }

  const shouldShowIntro = introState.pending && !prefersReducedMotion();
  if (shouldShowIntro) {
    introState.pending = false;
  }

  document.body.classList.toggle("intro-active", shouldShowIntro || introState.active);
  document.body.dataset.previewSection = PREVIEW_SECTION || "";

  document.documentElement.lang = currentLang;
  document.title = copy.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", copy.pageDescription);
  }

  app.innerHTML = buildPageMarkup(copy, shouldShowIntro);
  syncModalRoot();
  bindEvents();
  setupPageAnimations();
  syncWaterCursor();
  syncProjectFocus();
  syncShowcaseTabs();
  schedulePreviewScroll();
  return;

  app.innerHTML = `
    ${shouldShowIntro ? createIntroOverlay() : ""}
    <div class="page">
      <header class="topbar">
        <div class="shell topbar__inner">
          <div class="topbar__actions">
            <nav class="nav" aria-label="Primary">
              ${copy.nav.map(createNavItem).join("")}
            </nav>
            <div class="lang-switch" role="group" aria-label="Language switcher">
              <button type="button" class="${currentLang === "es" ? "is-active" : ""}" data-lang="es">ES</button>
              <button type="button" class="${currentLang === "en" ? "is-active" : ""}" data-lang="en">EN</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section class="hero" id="home">
          <div class="shell hero__grid">
            <article class="hero__copy glow-card reveal reveal--left" data-glow-card style="--reveal-delay: 12ms">
              <h1 class="hero__headline">${copy.hero.title}</h1>
              <div class="hero__role-pill">${PROFILE.role[currentLang]}</div>
              <p class="hero__lede">${copy.hero.summary}</p>
              <p class="hero__copy-text">${copy.hero.copy}</p>

              <div class="hero__actions">
                <a class="button button--primary" href="#projects">${copy.hero.primaryCta}</a>
                <a class="button button--secondary" href="#contact">${copy.hero.secondaryCta}</a>
              </div>

              <div class="hero__meta">
                ${copy.hero.stats
                  .map(
                    (stat, index) => `
                      <div class="stat reveal reveal--up" style="--reveal-delay: ${24 + index * 24}ms">
                        <span class="stat__value">${stat.value}</span>
                        <span class="stat__label">${stat.label}</span>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </article>

            <aside class="hero__panel glow-card reveal reveal--right" data-glow-card style="--reveal-delay: 18ms" aria-label="${copy.hero.profileTitle}">
              <div class="profile-frame">
                <div class="profile-frame__content">
                  <span class="profile-frame__badge">${copy.hero.profileTitle}</span>
                  <h2 class="profile-frame__name">${PROFILE.name}</h2>
                  <p class="profile-frame__caption">${copy.hero.profileCaption}</p>
                  <div class="profile-tags">
                    ${copy.hero.tags.map(createTag).join("")}
                  </div>
                </div>
              </div>

              <div class="panel-card">
                <p class="panel-card__label">${copy.contact.locationLabel}</p>
                <p class="panel-card__value">${PROFILE.location[currentLang]}</p>
              </div>

              <div class="panel-list">
                ${copy.snapshot.map(createSnapshotItem).join("")}
              </div>
            </aside>
          </div>
        </section>

        <section class="section" id="about">
          <div class="shell section-card glow-card reveal reveal--zoom" data-glow-card style="--reveal-delay: 12ms">
            <div class="section-head">
              <div>
                <p class="section-kicker">${copy.about.kicker}</p>
                <h2 class="section-title">${copy.about.title}</h2>
              </div>
            </div>

            <div class="section-grid section-grid--about">
              <div class="about__lead">
                <p class="section-copy">${copy.about.copy}</p>
                <div class="about__highlights">
                  ${copy.about.highlights
                    .map(
                      (item, index) => `
                        <article class="about-spotlight glow-card reveal reveal--up" data-glow-card style="--reveal-delay: ${18 + index * 20}ms">
                          <h3 class="about-spotlight__title">${item.title}</h3>
                          <p class="about-spotlight__text">${item.text}</p>
                        </article>
                      `,
                    )
                    .join("")}
                </div>
              </div>
              <div class="about__list">
                ${copy.about.pillars
                  .map(
                    (item) => `
                      <article class="mini-card glow-card" data-glow-card>
                        <h3 class="mini-card__title">${item.title}</h3>
                        <p class="mini-card__text">${item.text}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="projects">
          <div class="shell section-card glow-card reveal reveal--zoom" data-glow-card style="--reveal-delay: 12ms">
            <div class="section-head">
              <div>
                <p class="section-kicker">${copy.projects.kicker}</p>
                <h2 class="section-title">${copy.projects.title}</h2>
              </div>
            </div>
            <p class="section-copy">${copy.projects.copy}</p>
            <div class="projects-grid" style="margin-top: 1.25rem;">
              ${copy.projects.items.map((project, index) => createProjectCard(project, copy, index)).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="technologies">
          <div class="shell section-card glow-card reveal reveal--zoom" data-glow-card style="--reveal-delay: 12ms">
            <div class="section-head">
              <div>
                <p class="section-kicker">${copy.skills.kicker}</p>
                <h2 class="section-title">${copy.skills.title}</h2>
              </div>
            </div>
            <p class="section-copy">${copy.skills.copy}</p>
            <div class="grid-3" style="margin-top: 1.25rem;">
              ${copy.skills.groups.map((group, index) => createSkillCard(group, index)).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="experience">
          <div class="shell section-card glow-card reveal reveal--zoom" data-glow-card style="--reveal-delay: 12ms">
            <div class="section-head">
              <div>
                <p class="section-kicker">${copy.journey.kicker}</p>
                <h2 class="section-title">${copy.journey.title}</h2>
              </div>
            </div>
            <p class="section-copy">${copy.journey.copy}</p>
            <div class="timeline" style="margin-top: 1.25rem;">
              ${copy.journey.items.map((item, index) => createTimelineCard(item, index)).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="contact">
          <div class="shell contact-grid">
    <article class="contact-card glow-card reveal reveal--left" data-glow-card style="--reveal-delay: 12ms">
              <p class="section-kicker">${copy.contact.kicker}</p>
              <h2 class="section-title">${copy.contact.title}</h2>
              <p class="section-copy">${copy.contact.copy}</p>

              <div class="contact-list">
                <a class="contact-item" href="mailto:${PROFILE.email}">
                  <div>
                    <div class="contact-item__label">${copy.contact.emailLabel}</div>
                    <div class="contact-item__value">${PROFILE.email}</div>
                  </div>
                  <span class="button button--ghost" aria-hidden="true">${copy.contact.actionLabel}</span>
                </a>

                <a class="contact-item" href="tel:${PROFILE.phone.replace(/\s+/g, "")}">
                  <div>
                    <div class="contact-item__label">${copy.contact.phoneLabel}</div>
                    <div class="contact-item__value">${PROFILE.phone}</div>
                  </div>
                  <span class="button button--ghost" aria-hidden="true">${copy.contact.actionLabel}</span>
                </a>

                ${SOCIAL_LINKS.map((link, index) => createSocialItem(link, copy, index)).join("")}
              </div>
            </article>

    <article class="contact-card glow-card reveal reveal--right" data-glow-card style="--reveal-delay: 20ms">
              <p class="section-kicker">${copy.contact.formTitle}</p>
              <h2 class="section-title">${copy.contact.formTitle}</h2>
              <form class="contact-form" id="contact-form">
                <div class="field">
                  <label for="name">${copy.contact.formName}</label>
                  <input class="input" id="name" name="name" type="text" placeholder="${copy.contact.formName}" />
                </div>

                <div class="field">
                  <label for="email">${copy.contact.formEmail}</label>
                  <input class="input" id="email" name="email" type="email" placeholder="${copy.contact.formEmail}" />
                </div>

                <div class="field">
                  <label for="message">${copy.contact.formMessage}</label>
                  <textarea
                    class="textarea"
                    id="message"
                    name="message"
                    placeholder="${copy.contact.formMessage}"
                  ></textarea>
                </div>

                <div class="contact-form__actions">
                  <button class="button button--primary" type="submit">${copy.contact.submit}</button>
                  <button class="button button--secondary" type="reset">${copy.contact.clear}</button>
                </div>

                <p class="status">${copy.contact.status}</p>
              </form>
            </article>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="shell footer__inner">
          <p>${copy.footer}</p>
          <div class="footer__links">
            <a href="${PROFILE.github}" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  `;

  syncModalRoot();
  bindEvents();
  setupPageAnimations();
  syncWaterCursor();
  syncProjectFocus();
}

function bindEvents() {
  if (!appInteractionsBound) {
    document.addEventListener("click", handleProjectInteractions);
    document.addEventListener("keydown", handleProjectKeydown);
    window.addEventListener("keydown", handleModalKeydown);
    appInteractionsBound = true;
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.dataset.lang;
      if (nextLang && nextLang !== currentLang) {
        currentLang = nextLang;
        localStorage.setItem(STORAGE_KEY, currentLang);
        render();
      }
    });
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();
      const copy = getCopy();
      const subject =
        currentLang === "es"
          ? `Nuevo mensaje de portafolio${name ? ` - ${name}` : ""}`
          : `New portfolio message${name ? ` - ${name}` : ""}`;
      const bodyLines = [
        `${copy.contact.formName}: ${name || "-"}`,
        `${copy.contact.formEmail}: ${email || "-"}`,
        "",
        message || "-",
      ];
      const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        bodyLines.join("\n"),
      )}`;
      window.location.href = mailto;
    });

    form.addEventListener("reset", () => {
      const status = document.querySelector(".status");
      if (status) {
        status.textContent = getCopy().contact.status;
      }
    });
  }

}

function handleProjectInteractions(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.closest(".project-link")) {
    return;
  }

  const closeTrigger = target.closest("[data-project-close]");
  if (closeTrigger) {
    event.preventDefault();
    closeProjectModal();
    return;
  }

  const thumbTrigger = target.closest("[data-project-thumb]");
  if (thumbTrigger) {
    event.preventDefault();
    const index = Number(thumbTrigger.dataset.projectThumb);
    if (Number.isInteger(index)) {
      setActiveProjectImage(index);
    }
    return;
  }

  const tabTrigger = target.closest("[data-showcase-tab]");
  if (tabTrigger) {
    event.preventDefault();
    const tab = tabTrigger.dataset.showcaseTab;
    if (tab) {
      setShowcaseTab(tab);
    }
    return;
  }

  const navTrigger = target.closest("[data-project-nav]");
  if (navTrigger) {
    event.preventDefault();
    stepProjectImage(navTrigger.dataset.projectNav === "prev" ? -1 : 1);
    return;
  }

  const projectTrigger = target.closest("[data-project-open]");
  if (!projectTrigger) {
    return;
  }

  const index = Number(projectTrigger.dataset.projectOpen);
  if (Number.isInteger(index)) {
    openProjectModal(index);
  }
}

function handleProjectKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (!target.matches("article[data-project-open]")) {
    return;
  }

  event.preventDefault();
  const index = Number(target.dataset.projectOpen);
  if (Number.isInteger(index)) {
    openProjectModal(index);
  }
}

function handleModalKeydown(event) {
  if (activeProjectIndex === null) {
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeProjectModal();
    return;
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    stepProjectImage(-1);
    return;
  }

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    stepProjectImage(1);
  }
}

function observeReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  if (pageRevealObserver) {
    pageRevealObserver.disconnect();
    pageRevealObserver = null;
  }

  pageRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          pageRevealObserver?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  nodes.forEach((node) => pageRevealObserver?.observe(node));
}

render();
