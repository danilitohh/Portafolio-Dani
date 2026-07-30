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
      title: "Construyo bases web con foco en claridad.",
      summary: "Aporto orden, aprendizaje y una base técnica que sigue creciendo.",
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
      title: "Proyectos funcionales que muestran soluciones reales.",
      copy:
        "Cada tarjeta incluye una imagen, la demo en vivo y el repositorio en GitHub para revisar cada proyecto con contexto.",
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
          image: "assets/projects/ambrosia-bhang/cover.png",
          imageAlt: "Vista previa de la tienda online Ambrosia Bhang",
          liveUrl: "https://ambrosia-eosin.vercel.app",
          repoUrl: "https://github.com/danilitohh/ambrosia-tienda-virtual",
          summary:
            "Tienda virtual completa con catálogo, flujo de compra y una experiencia pensada para mostrar productos de forma clara y confiable.",
          tags: ["Next.js", "Prisma", "NextAuth", "Stripe"],
          footer: "Tienda online funcional",
        },
        {
          index: "02",
          type: "Sistema veterinario",
          slug: "lativet",
          title: "Sistema veterinario - Lativet",
          image: "assets/projects/lativet/cover.png",
          imageAlt: "Vista previa del sistema veterinario Lativet",
          liveUrl: "https://lativet.vercel.app",
          repoUrl: "https://github.com/danilitohh/Lativet",
          summary:
            "Sistema para gestionar pacientes, citas, historial, inventario y facturación en un entorno veterinario con foco operativo.",
          tags: ["Python", "CRUD", "Gestión clínica", "Inventario"],
          footer: "Sistema clínico funcional",
        },
        {
          index: "03",
          type: "Seguimiento por Gmail",
          slug: "hessa-enterprises",
          title: "Sistema de seguimiento por Gmail - Hessa Enterprises",
          image: "assets/projects/hessa-enterprises/cover.png",
          imageAlt: "Vista previa del sistema de seguimiento por Gmail Hessa Enterprises",
          liveUrl: "https://hessaenterprises.vercel.app",
          repoUrl: "https://github.com/danilitohh/Hessaenterprises",
          summary:
            "Sistema para organizar seguimientos por correo, centralizar comunicaciones y dar trazabilidad a cada conversación o gestión.",
          tags: ["TypeScript", "Correo", "Automatización", "Seguimiento"],
          footer: "Sistema de comunicación funcional",
        },
        {
          index: "04",
          type: "Contaduría",
          slug: "contaduria-juliana",
          title: "Contaduría - Juliana",
          image: "assets/projects/contaduria-juliana/cover.png",
          imageAlt: "Vista previa del sistema de contaduría Juliana",
          liveUrl: "https://contaduria-juliana.vercel.app",
          repoUrl: "https://github.com/danilitohh/Contaduria_Juliana",
          summary:
            "Sistema contable para registrar ingresos, gastos, movimientos y reportes con una estructura clara para el control financiero.",
          tags: ["TypeScript", "Contabilidad", "Reportes", "Administración"],
          footer: "Sistema contable funcional",
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
      title: "I build web foundations with clarity in mind.",
      summary: "I bring structure, learning, and a technical base that keeps growing.",
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
      title: "Functional projects that show real solutions.",
      copy:
        "Each card includes an image, a live demo, and the GitHub repository so you can review each project in context.",
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
          image: "assets/projects/ambrosia-bhang/cover.png",
          imageAlt: "Preview of the Ambrosia Bhang online store",
          liveUrl: "https://ambrosia-eosin.vercel.app",
          repoUrl: "https://github.com/danilitohh/ambrosia-tienda-virtual",
          summary:
            "A complete e-commerce site with product browsing, purchase flow, and a clear interface to present products with confidence.",
          tags: ["Next.js", "Prisma", "NextAuth", "Stripe"],
          footer: "Functional online store",
        },
        {
          index: "02",
          type: "Veterinary system",
          slug: "lativet",
          title: "Veterinary system - Lativet",
          image: "assets/projects/lativet/cover.png",
          imageAlt: "Preview of the Lativet veterinary system",
          liveUrl: "https://lativet.vercel.app",
          repoUrl: "https://github.com/danilitohh/Lativet",
          summary:
            "A system to manage patients, appointments, medical history, inventory, and billing in a veterinary workflow.",
          tags: ["Python", "CRUD", "Clinical management", "Inventory"],
          footer: "Functional clinical system",
        },
        {
          index: "03",
          type: "Gmail follow-up system",
          slug: "hessa-enterprises",
          title: "Gmail follow-up system - Hessa Enterprises",
          image: "assets/projects/hessa-enterprises/cover.png",
          imageAlt: "Preview of the Hessa Enterprises Gmail follow-up system",
          liveUrl: "https://hessaenterprises.vercel.app",
          repoUrl: "https://github.com/danilitohh/Hessaenterprises",
          summary:
            "A system for organizing email follow-ups, centralizing communication, and tracking each conversation or request.",
          tags: ["TypeScript", "Email", "Automation", "Tracking"],
          footer: "Functional communication system",
        },
        {
          index: "04",
          type: "Accounting",
          slug: "contaduria-juliana",
          title: "Accounting - Juliana",
          image: "assets/projects/contaduria-juliana/cover.png",
          imageAlt: "Preview of the Juliana accounting system",
          liveUrl: "https://contaduria-juliana.vercel.app",
          repoUrl: "https://github.com/danilitohh/Contaduria_Juliana",
          summary:
            "An accounting system for recording income, expenses, movements, and reports with a clear structure for financial control.",
          tags: ["TypeScript", "Accounting", "Reports", "Administration"],
          footer: "Functional accounting system",
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
let activeProjectIndex = null;
let activeProjectImageIndex = 0;
let pendingProjectFocusIndex = null;
let appInteractionsBound = false;

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

const PROJECT_DETAILS = {
  "ambrosia-bhang": {
    gallery: [
      {
        src: "assets/projects/ambrosia-bhang/cover.png",
        alt: {
          es: "Portada principal de la tienda online Ambrosia Bhang",
          en: "Main cover for the Ambrosia Bhang online store",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/brand-logo.jpeg",
        alt: {
          es: "Logo de marca de Ambrosia Bhang",
          en: "Ambrosia Bhang brand logo",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/banner-1.jpeg",
        alt: {
          es: "Banner promocional de Ambrosia Bhang",
          en: "Ambrosia Bhang promotional banner",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/banner-2.jpeg",
        alt: {
          es: "Vista visual de fondo de Ambrosia Bhang",
          en: "Ambrosia Bhang background visual",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/banner-3.jpeg",
        alt: {
          es: "Segunda vista visual de fondo de Ambrosia Bhang",
          en: "Second background visual for Ambrosia Bhang",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/product-1.jpeg",
        alt: {
          es: "Producto 1 de Ambrosia Bhang",
          en: "Ambrosia Bhang product 1",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/product-2.jpeg",
        alt: {
          es: "Producto 2 de Ambrosia Bhang",
          en: "Ambrosia Bhang product 2",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/product-3.jpeg",
        alt: {
          es: "Producto 3 de Ambrosia Bhang",
          en: "Ambrosia Bhang product 3",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/product-4.jpeg",
        alt: {
          es: "Producto 4 de Ambrosia Bhang",
          en: "Ambrosia Bhang product 4",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/product-5.jpeg",
        alt: {
          es: "Producto 5 de Ambrosia Bhang",
          en: "Ambrosia Bhang product 5",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/product-6.jpeg",
        alt: {
          es: "Producto 6 de Ambrosia Bhang",
          en: "Ambrosia Bhang product 6",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/product-7.jpeg",
        alt: {
          es: "Producto 7 de Ambrosia Bhang",
          en: "Ambrosia Bhang product 7",
        },
      },
      {
        src: "assets/projects/ambrosia-bhang/product-8.jpeg",
        alt: {
          es: "Producto 8 de Ambrosia Bhang",
          en: "Ambrosia Bhang product 8",
        },
      },
    ],
    es: {
      overview:
        "Tienda online enfocada en catálogo, presentación de productos y un flujo de compra claro. También contempla una base administrativa para promociones, autenticación y cobros.",
      capabilitiesTitle: "Qué permite",
      capabilities: [
        "Explorar catálogo y destacar productos con una navegación limpia.",
        "Revisar promociones, banners y piezas visuales del negocio.",
        "Sostener un flujo de compra y checkout con Stripe.",
        "Administrar productos y ajustes desde una base preparada para panel interno.",
      ],
      stackTitle: "Tecnologías y base técnica",
      stack: ["Next.js", "React", "TypeScript", "Prisma", "NextAuth", "Stripe"],
      galleryTitle: "Galería completa",
      galleryHint: "Abre una miniatura para ver más contexto del proyecto.",
      note: "Una base de comercio electrónico pensada para verse confiable, ordenada y lista para crecer.",
    },
    en: {
      overview:
        "An online store focused on product browsing, visual presentation, and a clear purchase flow. It also supports an administrative base for promotions, authentication, and payments.",
      capabilitiesTitle: "What it lets you do",
      capabilities: [
        "Explore the catalog and highlight products through a clean browsing experience.",
        "Review promotions, banners, and brand visuals.",
        "Support purchase and checkout flows with Stripe.",
        "Manage products and settings from a base ready for an internal admin panel.",
      ],
      stackTitle: "Technologies and base",
      stack: ["Next.js", "React", "TypeScript", "Prisma", "NextAuth", "Stripe"],
      galleryTitle: "Full gallery",
      galleryHint: "Open any thumbnail to get more context about the project.",
      note: "An e-commerce base designed to feel trustworthy, organized, and ready to scale.",
    },
  },
  lativet: {
    gallery: [
      {
        src: "assets/projects/lativet/cover.png",
        alt: {
          es: "Portada principal del sistema veterinario Lativet",
          en: "Main cover for the Lativet veterinary system",
        },
      },
      {
        src: "assets/projects/lativet/agenda-del-dia.png",
        alt: {
          es: "Agenda del día en Lativet",
          en: "Daily agenda in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/pacientes-e-historias.png",
        alt: {
          es: "Pacientes e historias clínicas en Lativet",
          en: "Patients and medical histories in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/consentimientos.png",
        alt: {
          es: "Consentimientos en Lativet",
          en: "Consent forms in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/crear-cotizacion.png",
        alt: {
          es: "Creación de cotización en Lativet",
          en: "Quote creation in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/crear-factura.png",
        alt: {
          es: "Creación de factura en Lativet",
          en: "Invoice creation in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/revisar-inventario.png",
        alt: {
          es: "Revisión de inventario en Lativet",
          en: "Inventory review in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/usuarios-y-permisos.png",
        alt: {
          es: "Usuarios y permisos en Lativet",
          en: "Users and permissions in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/ver-reportes.png",
        alt: {
          es: "Reportes en Lativet",
          en: "Reports in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/registrar-abono.png",
        alt: {
          es: "Registro de abonos en Lativet",
          en: "Payment registration in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/registrar-ingreso-o-gasto.png",
        alt: {
          es: "Registro de ingreso o gasto en Lativet",
          en: "Income or expense registration in Lativet",
        },
      },
      {
        src: "assets/projects/lativet/peluqueria.png",
        alt: {
          es: "Módulo de peluquería en Lativet",
          en: "Grooming module in Lativet",
        },
      },
    ],
    es: {
      overview:
        "Sistema veterinario para centralizar agenda, historiales, consentimientos, inventario, facturación y reportes en un flujo operativo claro.",
      capabilitiesTitle: "Qué permite",
      capabilities: [
        "Registrar pacientes y propietarios con contexto clínico.",
        "Consultar agenda del día, historias y consentimientos.",
        "Generar cotizaciones, facturas y abonos de forma organizada.",
        "Revisar inventario, ingresos, gastos, usuarios, permisos y reportes.",
      ],
      stackTitle: "Tecnologías y base técnica",
      stack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite", "ReportLab", "Pillow"],
      galleryTitle: "Galería completa",
      galleryHint: "Explora las diferentes pantallas del sistema y su flujo interno.",
      note: "Construido para acompañar el trabajo diario de una clínica veterinaria con una interfaz de operación rápida.",
    },
    en: {
      overview:
        "A veterinary system that centralizes scheduling, medical histories, consent forms, inventory, billing, and reporting in a clear operational flow.",
      capabilitiesTitle: "What it lets you do",
      capabilities: [
        "Register patients and owners with clinical context.",
        "Review daily agenda, medical history, and consent documents.",
        "Generate quotes, invoices, and payments in an organized flow.",
        "Check inventory, income, expenses, users, permissions, and reports.",
      ],
      stackTitle: "Technologies and base",
      stack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite", "ReportLab", "Pillow"],
      galleryTitle: "Full gallery",
      galleryHint: "Explore the different screens and internal workflow of the system.",
      note: "Built to support the daily work of a veterinary clinic with a fast operational interface.",
    },
  },
  "hessa-enterprises": {
    gallery: [
      {
        src: "assets/projects/hessa-enterprises/cover.png",
        alt: {
          es: "Portada principal de Hessa Enterprises",
          en: "Main cover for Hessa Enterprises",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/hero.png",
        alt: {
          es: "Hero visual de Hessa Enterprises",
          en: "Hessa Enterprises hero visual",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/logo.png",
        alt: {
          es: "Logo principal de Hessa Enterprises",
          en: "Hessa Enterprises main logo",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/logo-wordmark.png",
        alt: {
          es: "Marca tipográfica de Hessa Enterprises",
          en: "Hessa Enterprises wordmark",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/appointment-management.png",
        alt: {
          es: "Gestión de citas en Hessa Enterprises",
          en: "Appointment management in Hessa Enterprises",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/browser-access.png",
        alt: {
          es: "Acceso desde navegador en Hessa Enterprises",
          en: "Browser access in Hessa Enterprises",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/client-history.png",
        alt: {
          es: "Historial de clientes en Hessa Enterprises",
          en: "Client history in Hessa Enterprises",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/email-follow-up.png",
        alt: {
          es: "Seguimiento por correo en Hessa Enterprises",
          en: "Email follow-up in Hessa Enterprises",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/per-user-workspace.png",
        alt: {
          es: "Espacio por usuario en Hessa Enterprises",
          en: "Per-user workspace in Hessa Enterprises",
        },
      },
      {
        src: "assets/projects/hessa-enterprises/proposal-pipeline.png",
        alt: {
          es: "Pipeline de propuestas en Hessa Enterprises",
          en: "Proposal pipeline in Hessa Enterprises",
        },
      },
    ],
    es: {
      overview:
        "Workspace de seguimiento comercial que centraliza clientes, correos, plantillas, tareas y próximos contactos para no perder ninguna oportunidad.",
      capabilitiesTitle: "Qué permite",
      capabilities: [
        "Organizar clientes y su estado de seguimiento en un solo lugar.",
        "Crear correos con plantillas y abrir borradores listos para enviar.",
        "Programar el próximo contacto y mantener trazabilidad del proceso.",
        "Trabajar con Supabase Auth y flujo por usuario para escalar la operación.",
      ],
      stackTitle: "Tecnologías y base técnica",
      stack: ["React", "TypeScript", "Vite", "Supabase", "Gmail API", "Supabase JS"],
      galleryTitle: "Galería completa",
      galleryHint: "Explora los bloques de producto que explican la propuesta completa.",
      note: "Una base para seguimiento comercial y productividad, pensada para trabajar con orden y continuidad.",
    },
    en: {
      overview:
        "A sales follow-up workspace that centralizes clients, emails, templates, tasks, and next contact dates so no opportunity slips through.",
      capabilitiesTitle: "What it lets you do",
      capabilities: [
        "Organize clients and follow-up status in one place.",
        "Compose emails with templates and open drafts ready to send.",
        "Schedule the next contact and keep the process traceable.",
        "Work with Supabase Auth and per-user flows for a scalable operation.",
      ],
      stackTitle: "Technologies and base",
      stack: ["React", "TypeScript", "Vite", "Supabase", "Gmail API", "Supabase JS"],
      galleryTitle: "Full gallery",
      galleryHint: "Explore the product blocks that explain the full proposal.",
      note: "A base for sales follow-up and productivity, designed to keep work organized and continuous.",
    },
  },
  "contaduria-juliana": {
    gallery: [
      {
        src: "assets/projects/contaduria-juliana/cover.png",
        alt: {
          es: "Portada principal de Contaduría - Juliana",
          en: "Main cover for Accounting - Juliana",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/company-selector.png",
        alt: {
          es: "Selector de empresa de Contaduría - Juliana",
          en: "Company selector for Accounting - Juliana",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/dashboard-home.png",
        alt: {
          es: "Dashboard principal de Contaduría - Juliana",
          en: "Main dashboard for Accounting - Juliana",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/products.png",
        alt: {
          es: "Módulo de productos de Contaduría - Juliana",
          en: "Products module for Accounting - Juliana",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/invoices.png",
        alt: {
          es: "Módulo de facturas de Contaduría - Juliana",
          en: "Invoices module for Accounting - Juliana",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/pos.png",
        alt: {
          es: "Punto de venta de Contaduría - Juliana",
          en: "POS screen for Accounting - Juliana",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/configuracion.png",
        alt: {
          es: "Configuración de Contaduría - Juliana",
          en: "Settings screen for Accounting - Juliana",
        },
      },
      {
        src: "assets/projects/contaduria-juliana/reports.png",
        alt: {
          es: "Reportes de Contaduría - Juliana",
          en: "Reports screen for Accounting - Juliana",
        },
      },
    ],
    es: {
      overview:
        "Plataforma administrativa tipo ERP/CRM para centralizar empresas, ventas, inventario, cartera, gastos, nómina, POS, cotizaciones y reportes.",
      capabilitiesTitle: "Qué permite",
      capabilities: [
        "Elegir una empresa y trabajar en contexto por negocio.",
        "Registrar productos, clientes, proveedores y bodegas.",
        "Administrar facturas, POS, cotizaciones, pagos, cartera y gastos.",
        "Revisar gráficos, reportes y configuración en un panel modular.",
      ],
      stackTitle: "Tecnologías y base técnica",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "jsPDF", "Zod"],
      galleryTitle: "Galería completa",
      galleryHint: "Revisa las pantallas principales y módulos administrativos del sistema.",
      note: "Pensado como una base administrativa modular y escalable para operación contable y comercial.",
    },
    en: {
      overview:
        "An ERP/CRM-style admin platform for centralizing companies, sales, inventory, receivables, expenses, payroll, POS, quotes, and reporting.",
      capabilitiesTitle: "What it lets you do",
      capabilities: [
        "Choose a company and work within the correct business context.",
        "Register products, clients, suppliers, and warehouses.",
        "Manage invoices, POS, quotes, payments, receivables, and expenses.",
        "Review charts, reports, and settings inside a modular dashboard.",
      ],
      stackTitle: "Technologies and base",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "jsPDF", "Zod"],
      galleryTitle: "Full gallery",
      galleryHint: "Review the main screens and administrative modules of the system.",
      note: "Designed as a modular, scalable administrative base for accounting and commercial operations.",
    },
  },
};

function getCopy() {
  return CONTENT[currentLang];
}

function createNavItem(item) {
  return `<a href="${item.href}">${item.label}</a>`;
}

function createTag(tag) {
  return `<span class="tag">${tag}</span>`;
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
  render();
}

function closeProjectModal() {
  if (activeProjectIndex === null) {
    return;
  }

  pendingProjectFocusIndex = activeProjectIndex;
  activeProjectIndex = null;
  activeProjectImageIndex = 0;
  render();
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
  render();
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

function createProjectCard(project, copy, index = 0) {
  return `
    <article class="project-card reveal reveal--up" style="--reveal-delay: ${120 + index * 90}ms" data-project-open="${index}" tabindex="0" role="button" aria-label="${copy.projects.detailCta}: ${project.title}">
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
      <img class="project-modal__thumb-image" src="${image.src}" alt="${alt}" loading="lazy" />
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
      <div class="shell project-modal__panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button class="project-modal__close" type="button" data-project-close-primary data-project-close aria-label="${copy.projects.modalClose}">×</button>

        <div class="project-modal__header">
          <div>
            <p class="project-modal__kicker">${project.type}</p>
            <h3 class="project-modal__title" id="project-modal-title">${project.title}</h3>
          </div>
          <span class="project-modal__index">${project.index}</span>
        </div>

        <p class="project-modal__summary">${project.summary}</p>
        <p class="project-modal__copy">${detail.overview}</p>

        <div class="project-modal__layout">
          <div class="project-modal__gallery">
            <div class="project-modal__frame">
              ${activeImage ? `<img class="project-modal__image" src="${activeImage.src}" alt="${activeImageAlt}" loading="eager" />` : ""}
              <div class="project-modal__frame-topline">
                <span>${copy.projects.modalGallery}</span>
                <span>${imageCountLabel}</span>
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
    <article class="skill-card reveal reveal--up" style="--reveal-delay: ${110 + index * 90}ms">
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
    <article class="timeline-card reveal ${directionClass}" style="--reveal-delay: ${100 + index * 85}ms">
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
    <div class="panel-item reveal reveal--zoom" style="--reveal-delay: ${140 + index * 85}ms">
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
    <a class="contact-item reveal reveal--up" style="--reveal-delay: ${100 + index * 85}ms" href="${link.href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>
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
            <article class="hero__copy reveal reveal--left" style="--reveal-delay: 120ms">
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
                      <div class="stat reveal reveal--up" style="--reveal-delay: ${220 + index * 110}ms">
                        <span class="stat__value">${stat.value}</span>
                        <span class="stat__label">${stat.label}</span>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </article>

            <aside class="hero__panel reveal reveal--right" style="--reveal-delay: 180ms" aria-label="${copy.hero.profileTitle}">
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
          <div class="shell section-card reveal reveal--zoom" style="--reveal-delay: 80ms">
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
                        <article class="about-spotlight reveal reveal--up" style="--reveal-delay: ${100 + index * 85}ms">
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
          <div class="shell section-card reveal reveal--zoom" style="--reveal-delay: 80ms">
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
          <div class="shell section-card reveal reveal--zoom" style="--reveal-delay: 80ms">
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
          <div class="shell section-card reveal reveal--zoom" style="--reveal-delay: 80ms">
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
            <article class="contact-card reveal reveal--left" style="--reveal-delay: 80ms">
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

                ${SOCIAL_LINKS.map((link, index) => createSocialItem(link, copy, index)).join("")}
              </div>
            </article>

            <article class="contact-card reveal reveal--right" style="--reveal-delay: 140ms">
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
    ${createProjectModal(copy)}
  `;

  document.body.classList.toggle("modal-open", activeProjectIndex !== null);
  bindEvents();
  observeReveal();
  syncProjectFocus();
}

function bindEvents() {
  if (!appInteractionsBound) {
    app.addEventListener("click", handleProjectInteractions);
    app.addEventListener("keydown", handleProjectKeydown);
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
