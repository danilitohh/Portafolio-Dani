const STORAGE_KEY = "portfolio-language";
const SUPPORTED_LANGS = new Set(["es", "en"]);

// Edita este bloque con tu información real cuando quieras personalizar el sitio.
const PROFILE = {
  name: "Tu Nombre",
  role: {
    es: "Desarrollador/a Front-end bilingüe",
    en: "Bilingual Front-end Developer",
  },
  email: "tu-correo@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://www.linkedin.com/in/tu-usuario/",
  location: {
    es: "Bogotá, Colombia",
    en: "Bogotá, Colombia",
  },
  availability: {
    es: "Disponible para proyectos freelance, empleo remoto o colaboraciones creativas.",
    en: "Available for freelance work, remote roles, and creative collaborations.",
  },
  focus: {
    es: "Interfaz, animación y experiencias web flexibles.",
    en: "Interface, motion, and flexible web experiences.",
  },
  languages: {
    es: "Español e inglés",
    en: "Spanish and English",
  },
};

const CONTENT = {
  es: {
    pageTitle: "Portafolio | Tu Nombre",
    pageDescription:
      "Portafolio bilingüe en JavaScript para mostrar proyectos, habilidades, experiencia y contacto.",
    nav: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre mí", href: "#about" },
      { label: "Proyectos", href: "#projects" },
      { label: "Habilidades", href: "#skills" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      eyebrow: "Portafolio bilingüe",
      title: "Diseño páginas con identidad fuerte y una estructura fácil de adaptar.",
      copy:
        "Este es un punto de partida para mostrar quién eres, qué haces y cómo trabajas. Toda la información vive en un solo lugar para que editar contenido, cambiar secciones o ajustar el estilo sea rápido.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Escribirme",
      stats: [
        { value: "ES / EN", label: "Navegación bilingüe" },
        { value: "100%", label: "Contenido editable" },
        { value: "JS", label: "Lógica y renderizado" },
      ],
      profileTitle: "Perfil editable",
      profileCaption:
        "Reemplaza este bloque con tu nombre, una foto si quieres, y una descripción breve que resuma tu propuesta de valor.",
      tags: ["Responsive", "Accesible", "Modular"],
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
      title: "Cuenta tu historia sin pelearte con el diseño.",
      copy:
        "Aquí puedes poner una bio corta, explicar tu enfoque y describir el tipo de problemas que te gusta resolver. La estructura está pensada para que puedas mover o ampliar secciones sin romper la composición.",
      pillars: [
        {
          title: "Presentación personal",
          text: "Una descripción clara de tu perfil, tu enfoque y tu estilo de trabajo.",
        },
        {
          title: "Qué aportas",
          text: "Resume resultados, procesos o el tipo de valor que entregas en cada proyecto.",
        },
        {
          title: "Qué buscas",
          text: "Aclara si quieres empleo, freelancing, colaboraciones o proyectos personales.",
        },
      ],
    },
    projects: {
      kicker: "Proyectos",
      title: "Muestra tu trabajo con tarjetas listas para crecer.",
      copy:
        "Cada tarjeta está pensada para que cambies imagen, nombre, descripción, tecnologías y enlace de GitHub sin tocar la estructura general. Puedes duplicarlas o reducirlas según tu experiencia.",
      repoCta: "Ver repositorio",
      imageFallbackTitle: "Agrega una imagen",
      imageFallbackText: "Usa una ruta como assets/projects/proyecto-01.jpg o un PNG/SVG local.",
      items: [
        {
          index: "01",
          type: "Proyecto destacado",
          title: "Nombre del proyecto",
          image: "",
          imageAlt: "Vista previa del proyecto destacado",
          repoUrl: "https://github.com/tu-usuario/proyecto-01",
          summary:
            "Describe el problema, tu rol, el proceso y el resultado. Puedes añadir aquí una frase corta con el impacto o el objetivo principal.",
          tags: ["JavaScript", "UI", "Responsive"],
          footer: "Añade enlace a demo o repositorio",
        },
        {
          index: "02",
          type: "Landing / Producto",
          title: "Nombre del producto",
          image: "",
          imageAlt: "Vista previa del producto",
          repoUrl: "https://github.com/tu-usuario/proyecto-02",
          summary:
            "Usa esta tarjeta para proyectos de marketing, dashboards, apps internas, sitios corporativos o cualquier idea visual que quieras destacar.",
          tags: ["Motion", "Design system", "Accessibility"],
          footer: "Añade enlace a caso de estudio",
        },
        {
          index: "03",
          type: "Experimento / Idea",
          title: "Nombre del experimento",
          image: "",
          imageAlt: "Vista previa del experimento",
          repoUrl: "https://github.com/tu-usuario/proyecto-03",
          summary:
            "Perfecta para demostrar iteración, pruebas visuales o proyectos personales que muestran tu forma de explorar y aprender.",
          tags: ["Animation", "API", "Creative coding"],
          footer: "Añade enlace a código o demo",
        },
      ],
    },
    skills: {
      kicker: "Habilidades",
      title: "Organiza tus conocimientos por bloques, no por caos.",
      copy:
        "Separar tus habilidades en categorías facilita que la página crezca con el tiempo. También ayuda a que quien visita tu portafolio entienda rápido dónde eres más fuerte.",
      groups: [
        {
          title: "Interfaz",
          items: ["HTML semántico", "CSS avanzado", "JavaScript", "Accesibilidad"],
        },
        {
          title: "Diseño",
          items: ["Sistemas visuales", "Tipografía", "Layout responsive", "Microinteracciones"],
        },
        {
          title: "Herramientas",
          items: ["Git y GitHub", "Figma", "APIs", "Flujo de trabajo flexible"],
        },
      ],
    },
    journey: {
      kicker: "Experiencia",
      title: "Usa esta línea de tiempo para presentar tu recorrido.",
      copy:
        "Puede ser tu experiencia laboral, estudios, certificaciones o hitos personales. Si prefieres, esta sección también puede convertirse en educación o logros.",
      items: [
        {
          year: "2026",
          title: "Momento actual",
          text: "Agrega tu rol actual, lo que estás construyendo o el foco principal de este año.",
        },
        {
          year: "2025",
          title: "Paso anterior",
          text: "Resume un trabajo, proyecto o aprendizaje importante que haya marcado tu crecimiento.",
        },
        {
          year: "2024",
          title: "Base técnica",
          text: "Incluye estudios, certificaciones o un proyecto que te haya ayudado a consolidar habilidades.",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Haz que hablar contigo sea lo más simple posible.",
      copy:
        "Puedes enlazar correo, GitHub, LinkedIn o cualquier canal que uses. El formulario genera un correo listo para enviar, así no necesitas backend para empezar.",
      emailLabel: "Correo",
      actionLabel: "Abrir",
      locationLabel: "Ubicación",
      formTitle: "Mensaje rápido",
      formName: "Nombre",
      formEmail: "Correo",
      formMessage: "Cuéntame sobre tu idea, proyecto o colaboración",
      submit: "Abrir correo",
      clear: "Limpiar",
      status: "El formulario abrirá tu cliente de correo con el mensaje preparado.",
    },
    footer: "Base de portafolio en JavaScript puro. Edita el contenido y adapta el diseño a tu estilo.",
  },
  en: {
    pageTitle: "Portfolio | Your Name",
    pageDescription:
      "Bilingual JavaScript portfolio base to showcase projects, skills, experience, and contact.",
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Bilingual portfolio",
      title: "I design pages with a strong identity and a structure that is easy to adapt.",
      copy:
        "This is a starting point to show who you are, what you do, and how you work. All content lives in one place so editing, restructuring, or restyling stays fast.",
      primaryCta: "View projects",
      secondaryCta: "Email me",
      stats: [
        { value: "ES / EN", label: "Bilingual navigation" },
        { value: "100%", label: "Editable content" },
        { value: "JS", label: "Logic and rendering" },
      ],
      profileTitle: "Editable profile",
      profileCaption:
        "Replace this block with your name, a photo if you want one, and a short description that sums up your value.",
      tags: ["Responsive", "Accessible", "Modular"],
    },
    snapshot: [
      { label: "Role", value: PROFILE.role.en },
      { label: "Location", value: PROFILE.location.en },
      { label: "Languages", value: PROFILE.languages.en },
      { label: "Focus", value: PROFILE.focus.en },
      { label: "Availability", value: PROFILE.availability.en },
    ],
    about: {
      kicker: "About",
      title: "Tell your story without fighting the layout.",
      copy:
        "Use this section to add a short bio, explain your approach, and describe the kinds of problems you enjoy solving. The structure is designed so you can move or expand sections without breaking the composition.",
      pillars: [
        {
          title: "Personal intro",
          text: "A clear description of your profile, your focus, and how you like to work.",
        },
        {
          title: "What you bring",
          text: "Summarize outcomes, process, or the type of value you create in each project.",
        },
        {
          title: "What you want",
          text: "Clarify whether you're open to employment, freelancing, collaborations, or side projects.",
        },
      ],
    },
    projects: {
      kicker: "Projects",
      title: "Show your work with cards ready to grow.",
      copy:
        "Each card is built so you can change the image, name, description, technologies, and GitHub link without touching the overall structure. Duplicate or trim them based on your experience.",
      repoCta: "View repository",
      imageFallbackTitle: "Add an image",
      imageFallbackText: "Use a path like assets/projects/project-01.jpg or a local PNG/SVG.",
      items: [
        {
          index: "01",
          type: "Featured project",
          title: "Project name",
          image: "",
          imageAlt: "Featured project preview",
          repoUrl: "https://github.com/tu-usuario/proyecto-01",
          summary:
            "Describe the problem, your role, the process, and the result. You can add one short sentence about impact or the main goal.",
          tags: ["JavaScript", "UI", "Responsive"],
          footer: "Add a live demo or repository link",
        },
        {
          index: "02",
          type: "Landing / Product",
          title: "Product name",
          image: "",
          imageAlt: "Product preview",
          repoUrl: "https://github.com/tu-usuario/proyecto-02",
          summary:
            "Use this card for marketing sites, dashboards, internal tools, corporate pages, or any visual idea you want to highlight.",
          tags: ["Motion", "Design system", "Accessibility"],
          footer: "Add a case-study link",
        },
        {
          index: "03",
          type: "Experiment / Idea",
          title: "Experiment name",
          image: "",
          imageAlt: "Experiment preview",
          repoUrl: "https://github.com/tu-usuario/proyecto-03",
          summary:
            "Perfect for showing iteration, visual tests, or personal projects that reveal how you explore and learn.",
          tags: ["Animation", "API", "Creative coding"],
          footer: "Add code or demo link",
        },
      ],
    },
    skills: {
      kicker: "Skills",
      title: "Group your knowledge into clear blocks, not chaos.",
      copy:
        "Separating your skills into categories makes the page easier to grow over time. It also helps visitors quickly understand where you're strongest.",
      groups: [
        {
          title: "Interface",
          items: ["Semantic HTML", "Advanced CSS", "JavaScript", "Accessibility"],
        },
        {
          title: "Design",
          items: ["Visual systems", "Typography", "Responsive layouts", "Micro-interactions"],
        },
        {
          title: "Tools",
          items: ["Git and GitHub", "Figma", "APIs", "Flexible workflow"],
        },
      ],
    },
    journey: {
      kicker: "Experience",
      title: "Use the timeline to present your path.",
      copy:
        "This can be work experience, studies, certifications, or personal milestones. If you want, this section can also become education or achievements.",
      items: [
        {
          year: "2026",
          title: "Current moment",
          text: "Add your current role, what you're building, or the main focus for this year.",
        },
        {
          year: "2025",
          title: "Previous step",
          text: "Summarize a job, project, or learning experience that shaped your growth.",
        },
        {
          year: "2024",
          title: "Technical base",
          text: "Include studies, certifications, or a project that helped solidify your skills.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Make getting in touch as simple as possible.",
      copy:
        "You can link email, GitHub, LinkedIn, or any channel you use. The form generates a ready-to-send email so you do not need a backend to start.",
      emailLabel: "Email",
      actionLabel: "Open",
      locationLabel: "Location",
      formTitle: "Quick message",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Tell me about your idea, project, or collaboration",
      submit: "Open email",
      clear: "Clear",
      status: "The form will open your mail client with the message prefilled.",
    },
    footer: "Plain JavaScript portfolio base. Edit the content and adapt the design to your style.",
  },
};

const app = document.querySelector("#app");
const storedLang = localStorage.getItem(STORAGE_KEY);
const browserLang = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
let currentLang = SUPPORTED_LANGS.has(storedLang) ? storedLang : browserLang;

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: PROFILE.github,
    description: { es: "Repositorio y código", en: "Repository and code" },
  },
  {
    label: "LinkedIn",
    href: PROFILE.linkedin,
    description: { es: "Experiencia profesional", en: "Professional experience" },
  },
  {
    label: "Email",
    href: `mailto:${PROFILE.email}`,
    description: { es: "Escríbeme directo", en: "Write to me directly" },
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

function createProjectCard(project, copy) {
  const repoLink = project.repoUrl
    ? `<a class="project-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">${copy.projects.repoCta}</a>`
    : "";

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
          ${repoLink}
        </div>
      </div>
    </article>
  `;
}

function createSkillCard(group) {
  return `
    <article class="skill-card reveal">
      <h3 class="skill-card__title">${group.title}</h3>
      <ul class="skill-list">
        ${group.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
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
        <div class="contact-item__label">${link.label}</div>
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
              <h1>${copy.hero.title}</h1>
              <p class="hero__lede">${copy.hero.copy}</p>

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

        <section class="section" id="skills">
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

        <section class="section">
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
            <a href="${PROFILE.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
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
