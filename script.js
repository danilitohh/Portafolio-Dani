const STORAGE_KEY = "portfolio-language";
const SUPPORTED_LANGS = new Set(["es", "en"]);

// Edita este bloque con tu información real cuando quieras personalizar el sitio.
const PROFILE = {
  name: "Tu Nombre",
  role: {
    es: "Desarrollador/a de software bilingüe",
    en: "Bilingual Software Developer",
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
    es: "Interfaces, productos digitales y experiencias web flexibles.",
    en: "Interfaces, digital products, and flexible web experiences.",
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
      "Portafolio bilingüe de desarrollador de software con estética tecnológica, profesional y humana.",
    nav: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre mí", href: "#about" },
      { label: "Tecnologías", href: "#technologies" },
      { label: "Proyectos", href: "#projects" },
      { label: "Experiencia", href: "#experience" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      eyebrow: "Portafolio bilingüe",
      title: "Construyo soluciones digitales claras, útiles y cercanas.",
      copy:
        "Combino diseño de interfaces, criterio técnico y comunicación cercana para convertir ideas complejas en productos web confiables y fáciles de usar.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Escribirme",
      stats: [
        { value: "ES / EN", label: "Navegación bilingüe" },
        { value: "UI + CODE", label: "Diseño y desarrollo" },
        { value: "100%", label: "Contenido editable" },
      ],
      profileTitle: "Perfil editable",
      profileCaption:
        "Reemplaza este bloque con tu nombre, una foto si quieres, y una descripción breve que resuma tu propuesta de valor.",
      tags: ["Responsivo", "Accesible", "Colaborativo"],
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
      title: "Tecnología con criterio humano.",
      copy:
        "Aquí puedes contar cómo conectas la parte técnica con la comprensión real de una necesidad. Es el lugar para explicar cómo piensas, cómo priorizas y cómo trabajas con otras personas.",
      pillars: [
        {
          title: "Solidez técnica",
          text: "Construyo interfaces y soluciones mantenibles, con atención al detalle y estructura clara.",
        },
        {
          title: "Comprensión de necesidades",
          text: "Escucho, traduzco objetivos y convierto ideas abiertas en decisiones concretas.",
        },
        {
          title: "Trabajo con personas",
          text: "Comunico avances con claridad, colaboro bien y cuido la experiencia de quien usará el producto.",
        },
      ],
    },
    projects: {
      kicker: "Proyectos",
      title: "Proyectos que muestran proceso, criterio y resultado.",
      copy:
        "Cada tarjeta admite imagen, tecnologías, enlace al proyecto y repositorio para que presentes tu trabajo con claridad visual y técnica.",
      liveCta: "Ver proyecto",
      repoCta: "Ver repositorio",
      imageFallbackTitle: "Agrega una imagen",
      imageFallbackText: "Usa una ruta local como assets/projects/proyecto-01.jpg o un SVG/PNG.",
      items: [
        {
          index: "01",
          type: "Proyecto destacado",
          title: "Nombre del proyecto",
          image: "",
          imageAlt: "Vista previa del proyecto destacado",
          liveUrl: "https://tu-proyecto-01.com",
          repoUrl: "https://github.com/tu-usuario/proyecto-01",
          summary:
            "Describe el problema, tu rol, el proceso y el resultado. Puedes añadir una frase sobre el impacto o el objetivo principal.",
          tags: ["JavaScript", "UI", "Responsive"],
          footer: "Añade enlaces a demo y repositorio",
        },
        {
          index: "02",
          type: "Landing / Producto",
          title: "Nombre del producto",
          image: "",
          imageAlt: "Vista previa del producto",
          liveUrl: "https://tu-proyecto-02.com",
          repoUrl: "https://github.com/tu-usuario/proyecto-02",
          summary:
            "Usa esta tarjeta para proyectos de marketing, dashboards, apps internas, sitios corporativos o cualquier idea visual que quieras destacar.",
          tags: ["Motion", "Sistema visual", "Accesibilidad"],
          footer: "Añade enlace al caso o demo",
        },
        {
          index: "03",
          type: "Experimento / Idea",
          title: "Nombre del experimento",
          image: "",
          imageAlt: "Vista previa del experimento",
          liveUrl: "https://tu-proyecto-03.com",
          repoUrl: "https://github.com/tu-usuario/proyecto-03",
          summary:
            "Perfecta para demostrar iteración, pruebas visuales o proyectos personales que muestran tu forma de explorar y aprender.",
          tags: ["Animación", "API", "Creative coding"],
          footer: "Añade enlace a código o demo",
        },
      ],
    },
    skills: {
      kicker: "Tecnologías",
      title: "Organiza tu stack para que se entienda rápido.",
      copy:
        "Agrupar tecnologías por contexto ayuda a leer tu nivel técnico sin perderse. Reemplaza estas categorías por tu stack real y mantén la estructura limpia.",
      groups: [
        {
          icon: "FE",
          title: "Front-end",
          summary: "Construcción visual y arquitectura de interfaz.",
          items: ["HTML semántico", "CSS moderno", "JavaScript", "React", "Responsive design"],
        },
        {
          icon: "API",
          title: "Backend & APIs",
          summary: "Lógica, integración y comunicación entre servicios.",
          items: ["Node.js", "REST APIs", "Autenticación", "Integraciones", "Bases de datos"],
        },
        {
          icon: "DX",
          title: "Workflow",
          summary: "Herramientas que mantienen el trabajo ordenado y colaborativo.",
          items: ["Git y GitHub", "Figma", "Testing", "Deploy", "Documentación"],
        },
      ],
    },
    journey: {
      kicker: "Experiencia",
      title: "Experiencia y formación que respaldan mi forma de trabajar.",
      copy:
        "Puedes usar esta línea de tiempo para mostrar empleo, estudios, certificaciones o hitos personales. También sirve para contar cómo has crecido como profesional.",
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
      title: "Hablemos de tu siguiente idea.",
      copy:
        "Aquí puedes dejar tu correo, GitHub, LinkedIn o cualquier canal que uses. El formulario abre tu cliente de correo sin necesidad de backend.",
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
    footer: "Diseñado para mostrar trabajo real con una identidad cercana y sólida.",
  },
  en: {
    pageTitle: "Portfolio | Your Name",
    pageDescription:
      "Bilingual software developer portfolio with a technological, professional, modern, and human feel.",
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Bilingual portfolio",
      title: "I build digital solutions that are clear, useful, and human.",
      copy:
        "I combine interface design, technical judgment, and close communication to turn complex ideas into reliable web products that are easy to use.",
      primaryCta: "View projects",
      secondaryCta: "Email me",
      stats: [
        { value: "ES / EN", label: "Bilingual navigation" },
        { value: "UI + CODE", label: "Design and development" },
        { value: "100%", label: "Editable content" },
      ],
      profileTitle: "Editable profile",
      profileCaption:
        "Replace this block with your name, a photo if you want one, and a short description that sums up your value.",
      tags: ["Responsive", "Accessible", "Collaborative"],
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
      title: "Technology with human judgment.",
      copy:
        "Use this section to explain how you connect the technical side with the real needs behind a project. It is the place to show how you think, prioritize, and work with others.",
      pillars: [
        {
          title: "Technical depth",
          text: "I build maintainable interfaces and solutions with structure, clarity, and attention to detail.",
        },
        {
          title: "Understanding needs",
          text: "I listen, translate goals, and turn open-ended ideas into concrete decisions.",
        },
        {
          title: "Working with people",
          text: "I communicate progress clearly, collaborate well, and care about the experience of the person using the product.",
        },
      ],
    },
    projects: {
      kicker: "Projects",
      title: "Projects that show process, judgment, and outcome.",
      copy:
        "Each card supports an image, technologies, a live project link, and a repository link so you can present your work clearly and visually.",
      liveCta: "View project",
      repoCta: "View repository",
      imageFallbackTitle: "Add an image",
      imageFallbackText: "Use a local path like assets/projects/project-01.jpg or an SVG/PNG.",
      items: [
        {
          index: "01",
          type: "Featured project",
          title: "Project name",
          image: "",
          imageAlt: "Featured project preview",
          liveUrl: "https://tu-proyecto-01.com",
          repoUrl: "https://github.com/tu-usuario/proyecto-01",
          summary:
            "Describe the problem, your role, the process, and the result. Add a short sentence about impact or the main goal.",
          tags: ["JavaScript", "UI", "Responsive"],
          footer: "Add a live demo and repository link",
        },
        {
          index: "02",
          type: "Landing / Product",
          title: "Product name",
          image: "",
          imageAlt: "Product preview",
          liveUrl: "https://tu-proyecto-02.com",
          repoUrl: "https://github.com/tu-usuario/proyecto-02",
          summary:
            "Use this card for marketing sites, dashboards, internal tools, corporate pages, or any visual idea you want to highlight.",
          tags: ["Motion", "Visual system", "Accessibility"],
          footer: "Add a case-study or demo link",
        },
        {
          index: "03",
          type: "Experiment / Idea",
          title: "Experiment name",
          image: "",
          imageAlt: "Experiment preview",
          liveUrl: "https://tu-proyecto-03.com",
          repoUrl: "https://github.com/tu-usuario/proyecto-03",
          summary:
            "Perfect for showing iteration, visual tests, or personal projects that reveal how you explore and learn.",
          tags: ["Animation", "API", "Creative coding"],
          footer: "Add code or demo link",
        },
      ],
    },
    skills: {
      kicker: "Technologies",
      title: "Organize your stack so it is readable at a glance.",
      copy:
        "Grouping technologies by context helps people understand your technical level without getting lost. Replace these categories with your real stack and keep the structure tidy.",
      groups: [
        {
          icon: "FE",
          title: "Front-end",
          summary: "Visual construction and interface architecture.",
          items: ["Semantic HTML", "Modern CSS", "JavaScript", "React", "Responsive design"],
        },
        {
          icon: "API",
          title: "Backend & APIs",
          summary: "Logic, integration, and service communication.",
          items: ["Node.js", "REST APIs", "Authentication", "Integrations", "Databases"],
        },
        {
          icon: "DX",
          title: "Workflow",
          summary: "Tools that keep the work tidy and collaborative.",
          items: ["Git and GitHub", "Figma", "Testing", "Deploy", "Documentation"],
        },
      ],
    },
    journey: {
      kicker: "Experience",
      title: "Experience and education that back up how I work.",
      copy:
        "You can use this timeline to show employment, studies, certifications, or personal milestones. It also works well to explain how you have grown as a professional.",
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
      title: "Let's talk about your next idea.",
      copy:
        "Leave your email, GitHub, LinkedIn, or any channel you use. The form opens your mail client without needing a backend.",
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
    footer: "Built to show real work with a solid, approachable identity.",
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
