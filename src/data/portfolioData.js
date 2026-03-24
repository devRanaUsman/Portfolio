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
      link: "https://style-hub-fawn.vercel.app/",
      tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
      images: [
        "Screenshot 2026-03-12 022902.png",
        "./StyleHub/Itemdetail.png",
        "./StyleHub/Fullmain.png",

        "./StyleHub/LoginPage.png",
        "./StyleHub/Contact.png",
        "./StyleHub/Cart.png",
        "./StyleHub/SearchPage.png",

      ]
    },
    {
      title: "Ledger",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and automated reporting.",
      type: "SaaS Dashboard",
      color: "cyan",
      link: "https://ledger-tau-plum.vercel.app",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      images: [
        "./Ledger/1.png",
        "./Ledger/2.png",
        "./Ledger/3.png",
        "./Ledger/4.png",
        "./Ledger/5.png",
      ]
    },
    {
      title: "EduFlow",
      description: "The LMS for Authorities in an institute With RBAC feature and where each role perform its own duty. ",
      type: "EdTech",
      color: "emerald",
      link: "https://eduflow-gules.vercel.app/signin",
      tags: ["Typescript", "Tailwind CSS", "Express", "MongoDB"],
      images: [
        "./eduflow/login.png",
        "./eduflow/Markattendece.png",
        "./eduflow/PrincipalDashboard.png",
        "./eduflow/PrincipalDetail.png",
        "./eduflow/SchoolDetail.png",
        "./eduflow/SchoolPage.png",
        "./eduflow/studentDetail.png",
        "./eduflow/Studentdetail1.png",
        "./eduflow/Subrole.png",
        "./eduflow/TeacherDetail.png",
        "./eduflow/TeacherPage.png",
      ]
    },
    { title: "QuickBite Delivery", description: "Food ordering app with real-time tracking, restaurant management, and delivery optimization.", type: "Food Delivery", color: "orange", link: "#", tags: ["React Native", "Firebase", "Maps API"] },
    { title: "MediCare Portal", description: "Patient management system with appointment booking, medical records, and telemedicine features.", type: "Healthcare", color: "pink", link: "#", tags: ["Angular", "Django", "WebRTC"] },
    {
      title: " V-Stay", description: "Property listing platform with virtual tours, mortgage calculator, and booking system.", type: "Real Estate", color: "violet", link: "https://vstay.vercel.app", tags: ["Reactjs", "Express", "Tailwind CSS ", "MongoDB"], images: [

        "./vstay/Homepage.png",
        "./vstay/Explore.png",
        "./vstay/HomeDetail.png",
        "./vstay/BookDetails.png",
        "./vstay/FavouritePage.png",
        "./vstay/Login.png",
      ]
    }
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
