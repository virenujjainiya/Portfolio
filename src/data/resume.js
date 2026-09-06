export const RESUME_DATA = {
  personal: {
    name: "Viren Ujjainiya",
    role: "Software Engineer",
    email: "ujjainiyaviren2019@gmail.com",
    phone: "9512720460",
    location: "Rajkot, Gujarat, India",
    linkedin: "linkedin.com/in/ujjainiya-viren",
    github: "github.com/virenujjainiya",
    summary: "Software Engineer with 4+ years of production experience at WeyBee Solutions. Proven track record of shipping zero-to-one enterprise applications, modernizing legacy architectures in 48 hours, and engineering high-throughput GraphQL and C#/.NET export pipelines. Open for global remote roles with 4+ hours daily synchronous overlap."
  },
  skills: {
    frontend: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Vite",
      "Ant Design",
      "Tailwind CSS",
      "Bootstrap",
      "Custom React Hooks",
      "HTML5 / CSS3 / SVG"
    ],
    backend: [
      "C#",
      ".NET Core / Web API",
      "Node.js",
      "Fastify",
      "RESTful APIs",
      "GraphQL",
      "SOAP Services",
      "PostgreSQL",
      "MS SQL Server",
      "Supabase"
    ],
    architecture: [
      "Zero-to-One Product Architecture",
      "Modular Component Systems",
      "State Machine Hooks",
      "Re-render Optimization",
      "Event-Driven Background Schedulers",
      "Role-Based Access Control (RBAC)",
      "Microservices & N-Tier Architecture"
    ],
    integration: [
      "Shopify GraphQL & REST API",
      "Twilio Segment",
      "UserMaven Analytics",
      "ProductFruits Onboarding",
      "Stripe Billing & Forms",
      "Google OAuth 2.0",
      "SSO & Cookie Auth",
      "Userlist Webhooks"
    ],
    tools: [
      "Git / GitHub",
      "Cursor IDE",
      "Claude 3.7",
      "ChatGPT",
      "GitHub Copilot",
      "Figma-to-Code",
      "Postman"
    ]
  },
  experience: [
    {
      id: "weybee-fullstack",
      role: "Software Engineer (Full-Stack & Lead Frontend)",
      company: "WeyBee Solutions Pvt Ltd",
      location: "Rajkot, Gujarat",
      period: "2022-06 — Present",
      highlights: [
        "Led frontend & full-stack development across the Syncware SaaS Ecosystem (Vendor Portal, Admin App, and Retailer App). Modernized legacy CRA codebases in 2 days upon onboarding.",
        "Engineered the brand-new Syncware Admin App solo from scratch using modern React, Vite, and Redux Toolkit, featuring high-density data grids, action modals, and dynamic administrative workflows.",
        "Deconstructed and modularized the high-volume Orders page, resolving severe re-rendering bottlenecks and establishing component architecture standards across the entire SaaS platform.",
        "Engineered a concurrency state machine hook (useEndpointSyncState) that resolved race conditions in multi-endpoint integration grids, coordinating play/stop triggers across independent endpoints via a unified API.",
        "Built interactive inline editable form components (switching seamlessly between text preview and input controls on click) with persistent server sync and optimistic UI updates.",
        "Migrated legacy Shopify REST APIs to high-throughput Shopify GraphQL, cutting network payload overhead by 62% and eliminating throttling under high order velocity.",
        "Engineered an automated Event-Driven Background Scheduler in C#/.NET for asynchronous Customer, Order, and Product bulk exports with real-time UI notification grids and secure download pipelines.",
        "Integrated production analytics and product tools: Twilio Segment (fanning telemetry out to Userlist), UserMaven event tracking, ProductFruits product tours, Stripe checkout, Google OAuth, and granular Role-Based Access Control (RBAC)."
      ]
    },
    {
      id: "weybee-cms",
      role: "Frontend Developer (Sole Frontend Owner)",
      company: "WeyBee Solutions Pvt Ltd",
      location: "Rajkot, Gujarat",
      period: "2021-10 — 2022-06",
      highlights: [
        "Served as the sole frontend engineer for Everywatch CMS, architecting and delivering the complete enterprise web app from scratch to production within 6 months.",
        "Engineered a generic schema-driven dynamic form engine in React, automatically rendering nested input fields, validation rules, and layout structures based entirely on backend JSON contracts.",
        "Eliminated complex grid re-rendering bottlenecks by architecting modular data-table components, memoized selector hooks, and virtualized list rendering.",
        "Built an interactive publishing suite featuring a custom media image gallery, asset manager, and rich WYSIWYG text article editor for content teams.",
        "Implemented full authentication lifecycles, session cookies, local storage management, and custom reusable hook libraries using React, Redux, Ant Design, and Bootstrap."
      ]
    }
  ],
  projects: [
    {
      id: "syncware",
      name: "Syncware SaaS Suite & Integration Engine",
      company: "WeyBee Solutions Pvt Ltd",
      role: "Full-Stack & Lead Frontend",
      tech: ["React", "TypeScript", "Vite", "Redux Toolkit", "C# .NET", "GraphQL", "Shopify API", "Segment", "Stripe", "RBAC"],
      description: "Multi-tenant e-commerce integration platform syncing high-velocity orders, inventory, and catalog data between Shopify, Faire, and ERP backends. Encompasses Vendor App, brand-new Admin App, and Retailer Portal.",
      highlights: [
        "Architected brand-new Admin App from scratch using React, Vite, and Redux Toolkit with high-density data grids and dynamic administrative workflows.",
        "Deconstructed and modularized high-volume Orders page, resolving severe re-rendering bottlenecks and establishing component architecture standards across the platform.",
        "Engineered concurrency state machine hook (useEndpointSyncState) managing multi-endpoint play/stop syncing across 3rd-party integrations without race conditions.",
        "Migrated high-volume Shopify REST integration to GraphQL batch queries, reducing payload transfer size by 62% and eliminating rate-limit spikes.",
        "Engineered automated C#/.NET bulk export scheduler for orders and products with real-time status notifications and secure file delivery.",
        "Integrated production analytics & tools: Twilio Segment (fanning telemetry out to Userlist), UserMaven, ProductFruits, Stripe billing, Google OAuth, and granular RBAC."
      ]
    },
    {
      id: "everywatch",
      name: "Everywatch Enterprise CMS",
      company: "WeyBee Solutions Pvt Ltd",
      role: "Sole Frontend Owner (0 to 1 in 6 Months)",
      tech: ["React", "Redux", "Ant Design", "Bootstrap", "Dynamic Schema Forms", "REST APIs", "WYSIWYG Editor"],
      description: "Comprehensive content management system built from scratch in 6 months as sole frontend developer. Features dynamic schema-driven form generation, asset management, and article publishing.",
      highlights: [
        "Built entire frontend single-handedly from scratch to launch in 6 months using React, Redux, Ant Design, and Bootstrap.",
        "Designed generic schema-driven dynamic form engine that renders complex input fields and validations dynamically from backend JSON contracts.",
        "Eliminated complex grid re-rendering bottlenecks by architecting modular data-table components, memoized selector hooks, and virtualized list rendering.",
        "Built rich media asset manager, custom image gallery component, and WYSIWYG article publishing suite."
      ]
    },
    {
      id: "focustube",
      name: "FocusTube",
      link: "https://focus-tube-frontend-lime.vercel.app/login",
      tech: ["React", "TypeScript", "Node.js", "Fastify", "Supabase", "PostgreSQL", "Firebase Auth", "Zustand", "React Query", "Tailwind CSS"],
      description: "Distraction-free video learning PWA syncing educational playlists from YouTube, with timestamped note-taking and progress tracking.",
      highlights: [
        "High-performance backend built with Fastify and TypeScript, backed by Supabase PostgreSQL.",
        "Automated background playlist sync using node-cron and the YouTube Data API v3.",
        "PWA frontend built with React, Vite, Zustand, and React Query for offline-ready caching.",
        "Custom video player with timestamp-linked notes and exact watch history persistence."
      ]
    },
    {
      id: "ecomfinance",
      name: "EcomFinance Analytics",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Recharts", "TanStack Table", "SheetJS"],
      description: "Financial analytics platform parsing marketplace settlement reports (Meesho, Amazon, Flipkart) into actionable product-level profitability insights.",
      highlights: [
        "Engineered dynamic SheetJS parser handling 1,000+ row settlement sheets with resilient column mapping.",
        "Full-stack Next.js App Router with Supabase Row Level Security (RLS).",
        "Weighted scoring algorithm (Keep/Watch/Remove) analyzing profit margins, return rates, and net cash flow."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Government Engineering College, Rajkot",
      period: "2018-04 — 2022-04"
    }
  ]
};
