export const RESUME_DATA = {
  personal: {
    name: "Viren Ujjainiya",
    role: "Full-Stack Engineer",
    email: "ujjainiyaviren2019@gmail.com",
    phone: "9512720460",
    location: "Rajkot",
    linkedin: "linkedin.com/in/ujjainiya-viren",
    github: "github.com/virenujjainiya",
    summary: "Full-Stack Engineer with 4+ years of experience across React.js, C#/.NET, and Node.js/Fastify, building zero-to-one SaaS products, modernizing legacy codebases, and engineering complex third-party integration pipelines. Comfortable owning features end-to-end with particular depth in UI performance optimization, high-density data grid rendering, and backend service design."
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
        "Upgraded legacy React, Redux, and Kendo UI architectures to latest versions, improving system stability and application performance by 30%.",
        "Architected and built 2 complete applications from the ground up: Syncware Admin Panel and Syncware Retailer App.",
        "Developed end-to-end full-stack features utilizing C# .NET, including robust Web APIs and a console application. Optimized SQL queries and implemented multi-threading for report generation, reducing execution time by 93% (from 60s to 4s).",
        "Migrated the Shopify integration from REST to GraphQL architecture in 3 months.",
        "Engineered 3+ plugin APIs to seamlessly ingest over 10,000 data points daily from third-party platforms.",
        "Resolved critical rendering bottlenecks in data-heavy grids (10,000+ rows) by implementing memoization and modularizing large components.",
        "Refactored a monolithic codebase into modular, reusable components, reducing technical debt by 25%."
      ]
    },
    {
      id: "weybee-jse",
      role: "Junior Software Engineer",
      company: "WeyBee Solutions Pvt Ltd",
      location: "Rajkot",
      period: "2021-10 — 2022-06",
      highlights: [
        "Developed various responsive user interface components and modules using React.js, JavaScript, and CSS3.",
        "Configured centralized client-side state using Redux to manage 100+ complex data flows.",
        "Designed and developed a dynamic, responsive CMS interface utilizing React.js, Redux, and Ant Design, reducing user bounce rates by 15%.",
        "Built custom UI components, hooks, and complex data grids handling 5,000+ records with advanced sorting, searching, and filtering capabilities."
      ]
    }
  ],
  projects: [
    {
      id: "focustube",
      name: "FocusTube",
      link: "https://focus-tube-frontend-lime.vercel.app/login",
      tech: ["React", "TypeScript", "Node.js", "Fastify", "Supabase", "PostgreSQL", "Firebase Auth", "Vite", "Tailwind CSS"],
      description: "A specialized full-stack video learning platform designed to help users focus on educational content from curated YouTube channels. Removes distractions, syncs videos, and allows timestamped notes.",
      highlights: [
        "Architected a high-performance backend using Fastify and TypeScript, integrated with Supabase.",
        "Engineered an automated background synchronization system using node-cron and the YouTube Data API v3.",
        "Built a responsive PWA with React and Vite, utilizing Zustand and React Query for optimized state.",
        "Developed custom video player features using the YouTube IFrame API for timestamp-linked notes."
      ]
    },
    {
      id: "ecomfinance",
      name: "EcomFinance Analytics",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Recharts", "TanStack Table", "SheetJS"],
      description: "A comprehensive e-commerce analytics platform currently tailored for the Meesho marketplace, with scalable architecture for Amazon and Flipkart.",
      highlights: [
        "Built a full-stack e-commerce analytics platform that parses monthly settlement reports into profitability dashboards.",
        "Engineered a SheetJS-based Excel parsing engine handling 1,000+ row reports with dynamic column mapping.",
        "Designed a weighted product-scoring system (Keep/Watch/Remove) using profit margin, return rate, and sales volume."
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
