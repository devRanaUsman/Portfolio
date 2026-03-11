export const portfolioData = {
  hero: {
    name: "RM Usman",
    title: "Full-Stack Web Developer",
    tagline: "I craft high-performance, visually stunning web experiences that help businesses grow. From elegant landing pages to complex web applications — I bring your vision to life.",
    stats: [
      { value: "15", suffix: "+", label: "Projects Delivered" },
      { value: "100", suffix: "%", label: "Client Satisfaction" },
      { value: "1", suffix: "+", label: "Years Experience" }
    ]
  },
  skills: {
    frontend: [
      { name: "React / Next.js", percentage: 95 },
      { name: "TypeScript", percentage: 90 },
      { name: "Tailwind CSS", percentage: 95 },
      { name: "Vue.js", percentage: 85 }
    ],
    backend: [
      { name: "Node.js / Express", percentage: 92 },
      { name: "Python / Django", percentage: 88 },
      { name: "PostgreSQL / MongoDB", percentage: 90 },
      { name: "REST APIs / GraphQL", percentage: 93 }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"]
  },
  services: [
    { title: "Website Development", description: "Custom websites built from scratch using modern technologies. Clean code, fast performance, and pixel-perfect designs.", color: "indigo" },
    { title: "Responsive Design", description: "Mobile-first designs that look stunning on all devices. Seamless user experience across desktop, tablet, and mobile.", color: "cyan" },
    { title: "Landing Pages", description: "High-converting landing pages designed to capture leads and drive sales. Optimized for maximum conversions.", color: "purple" },
    { title: "Bug Fixing", description: "Quick and efficient debugging services. I'll find and fix issues in your existing codebase with minimal turnaround.", color: "green" },
    { title: "API Integration", description: "Seamless integration with third-party APIs and services. Payment gateways, social media, analytics, and more.", color: "orange" },
    { title: "Performance Optimization", description: "Speed up your website with advanced optimization techniques. Faster load times mean better user experience and SEO.", color: "red" }
  ],
  portfolio: [
    {
      title: "StyleHub E-Commerce",
      description: "Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.",
      type: "E-Commerce",
      color: "indigo",
      tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
      images: [
        "Screenshot 2026-03-12 022902.png",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop&crop=center"
      ]
    },
    {
      title: "DataFlow Analytics",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and automated reporting.",
      type: "SaaS Dashboard",
      color: "cyan",
      tags: ["React", "D3.js", "Node.js"],
      images: [
        "https://placehold.co/600x400/cyan/white?text=DataFlow+Dashboard",
        "https://placehold.co/600x400/cyan/white?text=Charts+and+Graphs"
      ]
    },
    {
      title: "LearnHub Platform",
      description: "Online learning platform with video courses, progress tracking, and certificate generation.",
      type: "EdTech",
      color: "emerald",
      tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
      images: [
        "https://placehold.co/600x400/emerald/white?text=LearnHub+Course"
      ]
    },
    { title: "QuickBite Delivery", description: "Food ordering app with real-time tracking, restaurant management, and delivery optimization.", type: "Food Delivery", color: "orange", tags: ["React Native", "Firebase", "Maps API"] },
    { title: "MediCare Portal", description: "Patient management system with appointment booking, medical records, and telemedicine features.", type: "Healthcare", color: "pink", tags: ["Angular", "Django", "WebRTC"] },
    { title: "HomeFind Properties", description: "Property listing platform with virtual tours, mortgage calculator, and agent booking system.", type: "Real Estate", color: "violet", tags: ["Next.js", "Three.js", "MongoDB"] }
  ],
  whyMe: [
    { title: "Clear Communication", description: "Regular updates, quick responses, and transparent progress reports throughout the project.", color: "cyan" },
    { title: "100% Reliable", description: "I deliver on my promises. Deadlines are met, commitments are honored, and quality never wavers.", color: "green" },
    { title: "Clean Code", description: "Well-documented, maintainable code that follows best practices. Easy to update and scale.", color: "indigo" },
    { title: "Fast Delivery", description: "Quick turnaround times without compromising quality. Your project launches on schedule.", color: "orange" }
  ],
  testimonials: [
    { id: "JM", name: "James Mitchell", role: "Startup Founder, USA", quote: "Usman exceeded all expectations. The e-commerce site he built for us increased conversions by 40%. Highly professional and delivers exactly what was promised.", color: "indigo" },
    { id: "SK", name: "Sophie Klein", role: "Marketing Director, UK", quote: "Working with Usman was a pleasure. Great communication, fast delivery, and the code quality was exceptional. Will definitely hire again for future projects!", color: "cyan" },
    { id: "ZK", name: "Zain Khan", role: "Business Owner, Pakistan", quote: "Usman transformed our outdated website into a modern, fast, and beautiful platform. His attention to detail and technical expertise are remarkable.", color: "emerald" }
  ]
};
