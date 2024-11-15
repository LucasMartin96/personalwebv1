export const projects = [
    {
        title: "Mate & Manuscripts",
        description: "A sophisticated search engine that combines Argentine mate culture with literary exploration. Built with .NET 8 and Vue 3, it provides intelligent search capabilities across Project Gutenberg's vast collection using TF-IDF algorithm for accurate relevance scoring.",
        tech: [".NET 8", "Vue 3", "PostgreSQL", "TypeScript", "Tailwind CSS"],
        github: {
          frontend: "https://github.com/LucasMartin96/SearchEngineFrontTFIDF",
          backend: "https://github.com/LucasMartin96/SearchEngineTFIDF"
        },
        external: "https://searchenginefronttfidf.onrender.com/",
        highlights: [
          "Implemented TF-IDF algorithm for accurate relevance scoring and search results",
          "Optimized performance through parallel query execution and memory caching",
          "Integrated with Project Gutenberg's API for extensive book collection access",
          "Built with clean architecture principles using .NET 8 and Entity Framework Core",
          "Implemented real-time search with pagination support"
        ],
        icon: "mate"
      },
    {
      title: "AlgoViz",
      description: "An interactive algorithm visualization platform that brings pathfinding algorithms to life. Currently featuring Dijkstra's algorithm with real-time visualization and interactive graph creation.",
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "React Context",
        "SVG",
      ],
      github: "https://github.com/LucasMartin96/AlgoViz",
      external: "https://algoviz-three.vercel.app/",
      highlights: [
        "Implemented interactive graph creation with drag-and-drop functionality",
        "Built real-time visualization of pathfinding algorithms",
        "Designed intuitive animation controls for step-by-step visualization",
        "Created responsive SVG-based graph rendering system"
      ]
    },
  ];