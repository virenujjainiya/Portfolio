export const RESUME_DATA = {
  personal: {
    name: "Viren Ujjainiya",
    role: "Software Engineer",
    email: "ujjainiyaviren2019@gmail.com",
    phone: "9512720460",
    location: "Rajkot",
    linkedin: "linkedin.com/in/ujjainiya-viren",
    github: "github.com/virenujjainiya",
    summary: "Software Engineer with 4+ years of experience across React.js, C#/.NET, and Node.js/Fastify, building zero-to-one SaaS products, modernizing legacy codebases, and engineering complex third-party integration pipelines. Comfortable owning features end-to-end — from database schemas to high-density data grid rendering and backend service design."
  },
  skills: {
    frontend: ["React.js", "Redux", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Ant Design", "Kendo UI"],
    backend: ["C#", "Node.js", "Fastify", ".NET Core", ".NET Web API", "RESTful APIs", "GraphQL"],
    architecture: ["MVC", "N-Layer Architecture", "Microservices", "PostgreSQL", "MS SQL Server", "Supabase"],
    integration: ["OAuth 2.0", "Firebase Auth", "SSO", "Shopify API", "YouTube Data API v3"],
    tools: ["Git", "Vite", "Cursor", "Claude", "ChatGPT", "GitHub Copilot"]
  },
  experience: [
    {
      id: "weybee-se",
      role: "Software Engineer",
      company: "WeyBee Solutions Pvt Ltd",
      location: "Rajkot",
      period: "2022-06 — Present",
      highlights: [
        "Upgraded legacy React, Redux, and Kendo UI architectures to their latest versions, improving system stability and application performance by 30%.",
        "Architected and built 2 complete applications from the ground up: the Syncware Admin Panel and the Syncware Retailer App, handling everything from UI/UX to backend API integration.",
        "Developed end-to-end full-stack features utilizing C# .NET, including robust Web APIs and a console application. Optimized SQL queries and implemented multi-threading for report generation, reducing execution time by 93% (from 60s to 4s).",
        "Migrated the Shopify integration from a REST to a GraphQL architecture in 3 months, providing support for the latest GraphQL version without breaking existing implementations.",
        "Engineered 3+ plugin APIs to seamlessly ingest over 10,000 data points daily from third-party platforms (Shopify, Faire, QuickBooks, etc.) into the Syncware ecosystem.",
        "Resolved critical rendering bottlenecks in data-heavy grids (10,000+ rows) by implementing memoization and modularizing large components. Engineered a custom React hook to enable parallel Redux dispatching for concurrent API calls while maintaining local state.",
        "Implemented robust user authentication flows, session management, OAuth 2.0 integrations, Single Sign-On (SSO) capabilities, and Role-Based Access Control (RBAC).",
        "Refactored a monolithic codebase into modular, reusable components, reducing technical debt by 25% and standardizing CSS frameworks.",
        "Developed C# console applications for automated job scheduling and comprehensive report generation, enabling 1,000+ automated email dispatches monthly."
      ]
    },
    {
      id: "weybee-jse",
      role: "Junior Software Engineer",
      company: "WeyBee Solutions Pvt Ltd",
      location: "Rajkot",
      period: "2021-10 — 2022-06",
      highlights: [
        "Developed various responsive user interface components and modules using React.js, JavaScript (ES6+), and CSS3 to enhance client interactivity.",
        "Configured centralized client-side state using Redux to seamlessly manage 100+ complex data flows, user sessions, and asynchronous REST API requests.",
        "Designed and developed a dynamic, responsive CMS interface utilizing React.js, Redux, and Ant Design with custom CSS, reducing user bounce rates by 15%.",
        "Built custom UI components, hooks, and complex data grids handling 5,000+ records with advanced sorting, searching, and filtering capabilities.",
        "Engineered core features including image editing modules and interactive pop-ups, integrating them with 15+ secure .NET Web APIs."
      ]
    }
  ],
  projects: [
    {
      id: "focustube",
      name: "FocusTube",
      link: "https://focus-tube-frontend-lime.vercel.app/login",
      tech: ["React", "TypeScript", "Node.js", "Fastify", "Supabase", "PostgreSQL", "Firebase Auth", "Zustand", "React Query", "Vite", "Tailwind CSS"],
      description: "A specialized video learning platform designed to help users focus on educational content from curated YouTube channels. It removes distractions, syncs videos automatically, and allows users to track progress, take timestamped notes, and bookmark videos seamlessly.",
      highlights: [
        "Architected a high-performance backend using Fastify and TypeScript, integrated with Supabase (PostgreSQL) for robust data storage.",
        "Engineered an automated background synchronization system using node-cron and the YouTube Data API v3 to fetch, filter, and cache curated educational content.",
        "Built a responsive Progressive Web App (PWA) with React and Vite, utilizing Zustand and React Query for optimized state management and API caching.",
        "Implemented secure user authentication and route protection using Firebase Client and Admin SDKs.",
        "Developed custom video player features using the YouTube IFrame API, enabling users to create timestamp-linked notes and track exact watch history."
      ]
    },
    {
      id: "ecomfinance",
      name: "EcomFinance Analytics",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Recharts", "TanStack Table", "SheetJS", "Zod"],
      description: "A comprehensive e-commerce analytics platform currently tailored for the Meesho marketplace, with a scalable architecture designed for future expansion to Amazon and Flipkart. Translates complex monthly settlement reports into actionable profitability insights.",
      highlights: [
        "Built a full-stack e-commerce analytics platform (Next.js 14 App Router + Supabase, with Row Level Security) that parses monthly settlement reports into profitability dashboards.",
        "Engineered a SheetJS-based Excel parsing engine handling 1,000+ row reports with dynamic column mapping, built for resilience against format changes and multi-platform expansion (Amazon/Flipkart).",
        "Designed a weighted product-scoring system (Keep/Watch/Remove) using profit margin, return rate, and sales volume, visualized with TanStack Table and Recharts."
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
