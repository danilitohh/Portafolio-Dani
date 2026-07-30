const STORAGE_KEY = "portfolio-language";
const SUPPORTED_LANGS = new Set(["es", "en"]);

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

const GITHUB_REPOS_URL = "https://github.com/danilitohh?tab=repositories";

const CONTENT = {
  es: {
    pageTitle: "Portafolio | Danilo Herrera Hernández",
    pageDescription:
      "Portafolio bilingüe de Danilo Herrera Hernández, estudiante de ADSO en búsqueda de prácticas profesionales.",
    nav: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre mí", href: "#about" },
      { label: "Tecnologías", href: "#technologies" },
      { label: "Proyectos", href: "#projects" },
      { label: "Formación", href: "#experience" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      eyebrow: "Estudiante de ADSO",
      title: "Busco prácticas profesionales mientras sigo fortaleciendo mi base técnica.",
      copy:
        "Estoy en formación en SENA y construyo proyectos funcionales mientras aprendo a transformar requisitos en soluciones claras. Mi foco actual es HTML, CSS, JavaScript y bases de datos.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactarme",
      stats: [
        { value: "ADSO", label: "SENA | Tecnología en curso" },
        { value: "HTML/CSS/JS", label: "Bases web" },
        { value: "PRÁCTICAS", label: "Disponible" },
      ],
      profileTitle: "Perfil de practicante",
      profileCaption:
        "Soy estudiante de ADSO y busco una oportunidad de práctica profesional. Aprendo construyendo y documentando mi trabajo con orden.",
      tags: ["Bilingüe", "Prácticas", "Proyectos funcionales"],
    },
    snapshot: [
      { label: "Rol", value: PROFILE.role.es },
      { label: "Ubicación", value: PROFILE.location.es },
      { label: "Idiomas", value: PROFILE.languages.es },
      { label: "Enfoque", value: PROFILE.focus.es },
      { label: "Disponibilidad", value: PROFILE.availability.es },
    ],
    about: {
      kicker: "Sobre mí",
      title: "Estudio, construyo y aprendo con contexto real.",
      copy:
        "Soy estudiante de Tecnología en Análisis y Desarrollo de Software (ADSO) en SENA. Me interesa transformar necesidades reales en interfaces y soluciones sencillas, con bases en programación, bases de datos y desarrollo de aplicaciones.",
      pillars: [
        {
          title: "Base técnica",
          text: "Manejo fundamentos de HTML, CSS y JavaScript, además de nociones de Java, SQL, Python, Flutter (Dart) y Angular.",
        },
        {
          title: "Pensamiento práctico",
          text: "Me apoyo en el orden, la documentación y la coordinación para resolver problemas con criterio.",
        },
        {
          title: "Trabajo con personas",
          text: "La experiencia en operaciones, documentación y reclutamiento fortaleció mi comunicación y seguimiento.",
        },
      ],
    },
    projects: {
      kicker: "Proyectos",
      title: "Proyectos funcionales que muestran lo que he construido.",
      copy:
        "Cada tarjeta admite una imagen local, un enlace al proyecto y un enlace al repositorio en GitHub para que puedas completar esta sección con tus URLs finales.",
      liveCta: "Ver proyecto",
      repoCta: "Ver repositorio",
      imageFallbackTitle: "Agrega una captura",
      imageFallbackText: "Usa una ruta local como assets/projects/proyecto-01.jpg.",
      items: [
        {
          index: "01",
          type: "Proyecto personal",
          title: "App de facturación e inventario veterinario",
          image: "",
          imageAlt: "Vista previa de la app de facturación e inventario veterinario",
          liveUrl: "",
          repoUrl: GITHUB_REPOS_URL,
          summary:
            "Desarrollé módulos para cotizaciones, facturas, inventario, reportes, movimientos de caja, usuarios, historia clínica y citas, con CRUD, validaciones, integraciones y reglas de negocio.",
          tags: ["JavaScript", "CRUD", "Bases de datos", "Validaciones"],
          footer: "Proyecto personal en funcionamiento",
        },
        {
          index: "02",
          type: "Proyecto personal",
          title: "AsistenteVirtual",
          image: "",
          imageAlt: "Vista previa de AsistenteVirtual",
          liveUrl: "",
          repoUrl: GITHUB_REPOS_URL,
          summary:
            "Encargado de generar propuestas, estimados, calendarios y seguimientos de proyectos, además de apoyar la comunicación con clientes y la documentación operativa.",
          tags: ["JavaScript", "Productividad", "Documentación", "Seguimiento"],
          footer: "Proyecto personal en desarrollo",
        },
        {
          index: "03",
          type: "Proyecto académico / personal",
          title: "App de Fitness",
          image: "",
          imageAlt: "Vista previa de la app de fitness",
          liveUrl: "",
          repoUrl: GITHUB_REPOS_URL,
          summary:
            "Diseñé y documenté una app de fitness con usuarios, rutinas, ejercicios, repeticiones y seguimiento de progreso.",
          tags: ["HTML", "CSS", "JavaScript", "Diseño de interfaz"],
          footer: "Proyecto académico / personal",
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
      kicker: "Formación y experiencia",
      title: "Experiencia laboral y formación que fortalecen mi perfil.",
      copy:
        "Mi recorrido combina estudios en ADSO con experiencia previa en coordinación, documentación y reclutamiento, habilidades que ayudan a trabajar con orden y comunicación.",
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
        {
          year: "Ago 2024 - May 2025",
          title: "Coordinador Logístico - Leangroup Solutions",
          text: "Generación de propuestas, estimados, calendarios y seguimiento de proyectos, además de apoyo en comunicación con clientes y documentación operativa.",
        },
        {
          year: "2020 - 2024",
          title: "Reclutador - HP Service Americas BPS / Manpower Group / UPS",
          text: "Monitoreo de sistemas, reportes, registros digitales, seguimiento y búsqueda de candidatos para ofertas.",
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
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "ADSO student",
      title: "I am looking for internship opportunities while strengthening my technical foundation.",
      copy:
        "I am studying at SENA and building working projects while learning how to turn requirements into clear solutions. My current focus is HTML, CSS, JavaScript, and databases.",
      primaryCta: "View projects",
      secondaryCta: "Contact me",
      stats: [
        { value: "ADSO", label: "SENA | In progress" },
        { value: "HTML/CSS/JS", label: "Web basics" },
        { value: "INTERNSHIPS", label: "Available" },
      ],
      profileTitle: "Internship profile",
      profileCaption:
        "I am an ADSO student looking for a professional internship. I learn by building and documenting my work carefully.",
      tags: ["Bilingual", "Internships", "Functional projects"],
    },
    snapshot: [
      { label: "Role", value: PROFILE.role.en },
      { label: "Location", value: PROFILE.location.en },
      { label: "Languages", value: PROFILE.languages.en },
      { label: "Focus", value: PROFILE.focus.en },
      { label: "Availability", value: PROFILE.availability.en },
    ],
    about: {
      kicker: "About me",
      title: "I study, build, and learn in real contexts.",
      copy:
        "I am a student in SENA's Technology in Software Analysis and Development (ADSO) program. I focus on turning real needs into simple interfaces and solutions, with foundations in programming, databases, and application development.",
      pillars: [
        {
          title: "Technical foundation",
          text: "I work with HTML, CSS, and JavaScript, plus basic knowledge of Java, SQL, Python, Flutter (Dart), and Angular.",
        },
        {
          title: "Practical thinking",
          text: "I rely on order, documentation, and coordination to solve problems with judgment.",
        },
        {
          title: "Working with people",
          text: "Experience in operations, documentation, and recruiting strengthened my communication and follow-up.",
        },
      ],
    },
    projects: {
      kicker: "Projects",
      title: "Functional projects that show what I have built.",
      copy:
        "Each card supports a local image, a live project link, and a GitHub repository link so you can complete this section with your final URLs.",
      liveCta: "View project",
      repoCta: "View repository",
      imageFallbackTitle: "Add an image",
      imageFallbackText: "Use a local path like assets/projects/project-01.jpg.",
      items: [
        {
          index: "01",
          type: "Personal project",
          title: "Veterinary billing and inventory app",
          image: "",
          imageAlt: "Preview of the veterinary billing and inventory app",
          liveUrl: "",
          repoUrl: GITHUB_REPOS_URL,
          summary:
            "I built modules for quotes, invoices, inventory, reports, cash movements, users, medical history, and appointments, with CRUD flows, validations, integrations, and business rules.",
          tags: ["JavaScript", "CRUD", "Databases", "Validation"],
          footer: "Personal project in working use",
        },
        {
          index: "02",
          type: "Personal project",
          title: "AsistenteVirtual",
          image: "",
          imageAlt: "Preview of AsistenteVirtual",
          liveUrl: "",
          repoUrl: GITHUB_REPOS_URL,
          summary:
            "I generated proposals, estimates, calendars, and project follow-ups, while also supporting client communication and operational documentation.",
          tags: ["JavaScript", "Productivity", "Documentation", "Tracking"],
          footer: "Personal project in progress",
        },
        {
          index: "03",
          type: "Academic / personal project",
          title: "Fitness App",
          image: "",
          imageAlt: "Preview of the fitness app",
          liveUrl: "",
          repoUrl: GITHUB_REPOS_URL,
          summary:
            "I designed and documented a fitness app with users, routines, exercises, reps, and progress tracking.",
          tags: ["HTML", "CSS", "JavaScript", "UI design"],
          footer: "Academic / personal project",
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
      kicker: "Education and experience",
      title: "Work experience and education that strengthen my profile.",
      copy:
        "My path combines ADSO studies with prior experience in coordination, documentation, and recruiting, skills that support clear communication and organized work.",
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
        {
          year: "Aug 2024 - May 2025",
          title: "Logistics Coordinator - Leangroup Solutions",
          text: "Prepared proposals, estimates, schedules, and project follow-up, while supporting client communication and operational documentation.",
        },
        {
          year: "2020 - 2024",
          title: "Recruiter - HP Service Americas BPS / Manpower Group / UPS",
          text: "Monitored systems, generated reports, maintained digital records, followed up on processes, and sourced candidates for openings.",
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
const storedLang = localStorage.getItem(STORAGE_KEY);
const browserLang = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
let currentLang = SUPPORTED_LANGS.has(storedLang) ? storedLang : browserLang;

const SOCIAL_LINKS = [
  {
    label: { es: "GitHub", en: "GitHub" },
    href: PROFILE.github,
    description: { es: "Repositorio y código", en: "Repository and code" },
  },
  {
    label: { es: "Correo", en: "Email" },
    href: `mailto:${PROFILE.email}`,
    description: { es: "Escríbeme directo", en: "Write to me directly" },
  },
  {
    label: { es: "Teléfono", en: "Phone" },
    href: `tel:${PROFILE.phone.replace(/\s+/g, "")}`,
    description: { es: "Llamada directa", en: "Direct call" },
  },
];

function getCopy() {
  return CONTENT[currentLang];
}

function createNavItem(item) {
  return `<a href="${item.href}">${item.label}</a>`;
}

function createTag(tag) {
  return `<span class="tag">${tag}</span>`;
}

function createProjectMedia(project, copy) {
  if (project.image) {
    return `
      <div class="project-card__media">
        <img class="project-card__image" src="${project.image}" alt="${project.imageAlt}" loading="lazy" />
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

function createProjectCard(project, copy) {
  return `
    <article class="project-card reveal">
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
        </div>
        ${createProjectActions(project, copy)}
      </div>
    </article>
  `;
}

function createSkillCard(group) {
  return `
    <article class="skill-card reveal">
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

function createTimelineCard(item) {
  return `
    <article class="timeline-card reveal">
      <div class="timeline-year">${item.year}</div>
      <div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-text">${item.text}</p>
      </div>
    </article>
  `;
}

function createSnapshotItem(item) {
  return `
    <div class="panel-item">
      <span class="panel-item__dot" aria-hidden="true"></span>
      <div class="panel-item__content">
        <h3 class="panel-item__title">${item.label}</h3>
        <p class="panel-item__text">${item.value}</p>
      </div>
    </div>
  `;
}

function createSocialItem(link, copy) {
  const external = link.href.startsWith("http");
  return `
    <a class="contact-item" href="${link.href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>
      <div>
        <div class="contact-item__label">${link.label[currentLang]}</div>
        <div class="contact-item__value">${link.description[currentLang]}</div>
      </div>
      <span class="button button--ghost" aria-hidden="true">${copy.contact.actionLabel}</span>
    </a>
  `;
}

function render() {
  const copy = getCopy();

  document.documentElement.lang = currentLang;
  document.title = copy.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", copy.pageDescription);
  }

  app.innerHTML = `
    <div class="page">
      <header class="topbar">
        <div class="shell topbar__inner">
          <a class="brand" href="#home" aria-label="${PROFILE.name}">
            <span class="brand__mark">D</span>
            <span class="brand__text">
              <span class="brand__name">${PROFILE.name}</span>
              <span class="brand__role">${PROFILE.role[currentLang]}</span>
            </span>
          </a>

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
            <article class="hero__copy reveal">
              <div class="eyebrow">${copy.hero.eyebrow}</div>
              <h1 class="hero__name">${PROFILE.name}</h1>
              <div class="hero__role-pill">${PROFILE.role[currentLang]}</div>
              <p class="hero__lede">${copy.hero.title}</p>
              <p class="hero__copy-text">${copy.hero.copy}</p>

              <div class="hero__actions">
                <a class="button button--primary" href="#projects">${copy.hero.primaryCta}</a>
                <a class="button button--secondary" href="#contact">${copy.hero.secondaryCta}</a>
              </div>

              <div class="hero__meta">
                ${copy.hero.stats
                  .map(
                    (stat) => `
                      <div class="stat">
                        <span class="stat__value">${stat.value}</span>
                        <span class="stat__label">${stat.label}</span>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </article>

            <aside class="hero__panel reveal" aria-label="${copy.hero.profileTitle}">
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
          <div class="shell section-card reveal">
            <div class="section-head">
              <div>
                <p class="section-kicker">${copy.about.kicker}</p>
                <h2 class="section-title">${copy.about.title}</h2>
              </div>
            </div>

            <div class="section-grid">
              <div class="about__lead">
                <p class="section-copy">${copy.about.copy}</p>
              </div>
              <div class="about__list">
                ${copy.about.pillars
                  .map(
                    (item) => `
                      <article class="mini-card">
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
          <div class="shell section-card reveal">
            <div class="section-head">
              <div>
                <p class="section-kicker">${copy.projects.kicker}</p>
                <h2 class="section-title">${copy.projects.title}</h2>
              </div>
            </div>
            <p class="section-copy">${copy.projects.copy}</p>
            <div class="grid-3" style="margin-top: 1.25rem;">
              ${copy.projects.items.map((project) => createProjectCard(project, copy)).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="technologies">
          <div class="shell section-card reveal">
            <div class="section-head">
              <div>
                <p class="section-kicker">${copy.skills.kicker}</p>
                <h2 class="section-title">${copy.skills.title}</h2>
              </div>
            </div>
            <p class="section-copy">${copy.skills.copy}</p>
            <div class="grid-3" style="margin-top: 1.25rem;">
              ${copy.skills.groups.map(createSkillCard).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="experience">
          <div class="shell section-card reveal">
            <div class="section-head">
              <div>
                <p class="section-kicker">${copy.journey.kicker}</p>
                <h2 class="section-title">${copy.journey.title}</h2>
              </div>
            </div>
            <p class="section-copy">${copy.journey.copy}</p>
            <div class="timeline" style="margin-top: 1.25rem;">
              ${copy.journey.items.map(createTimelineCard).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="contact">
          <div class="shell contact-grid">
            <article class="contact-card reveal">
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

                ${SOCIAL_LINKS.map((link) => createSocialItem(link, copy)).join("")}
              </div>
            </article>

            <article class="contact-card reveal">
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
            <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
            <a href="tel:${PROFILE.phone.replace(/\s+/g, "")}">${PROFILE.phone}</a>
          </div>
        </div>
      </footer>
    </div>
  `;

  bindEvents();
  observeReveal();
}

function bindEvents() {
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

function observeReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  nodes.forEach((node) => observer.observe(node));
}

render();
