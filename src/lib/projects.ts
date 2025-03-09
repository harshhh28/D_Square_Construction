// Mock data for projects
const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    slug: "modern-office-complex",
    category: "Commercial",
    year: "2022",
    location: "Downtown, Building City",
    client: "TechHub Enterprises",
    description:
      "A state-of-the-art office complex designed with modern aesthetics and functionality in mind. This project showcases our expertise in commercial construction with its innovative design, sustainable features, and efficient space utilization.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "25,000 sq ft",
      duration: "18 months",
      teamSize: "45 personnel",
      budget: "$12.5 million",
      materials: "Steel, glass, concrete",
      completionRate: "100%",
      overview:
        "This modern office complex features six floors of premium office space with state-of-the-art facilities including smart building technology, energy-efficient design, and collaborative workspaces. The project was completed on time and within budget despite challenges including material shortages and weather delays.",
    },
  },
  {
    id: 2,
    title: "Luxury Residential Tower",
    slug: "luxury-residential-tower",
    category: "Residential",
    year: "2021",
    location: "Waterfront, Building City",
    client: "Elite Property Developers",
    description:
      "A high-end residential tower featuring luxury apartments with panoramic waterfront views. This project represents our commitment to creating exceptional living spaces with premium finishes and amenities.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "40,000 sq ft",
      duration: "24 months",
      teamSize: "60 personnel",
      budget: "$18 million",
      materials: "Concrete, glass, marble",
      completionRate: "100%",
      overview:
        "This luxury residential tower comprises 120 premium apartments across 20 floors, featuring high-end finishes, smart home technology, and exclusive amenities including a rooftop pool, fitness center, and private parking. The building was designed with sustainability in mind, incorporating energy-efficient systems and locally sourced materials where possible.",
    },
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    slug: "industrial-warehouse",
    category: "Industrial",
    year: "2023",
    location: "Industrial Park, Building City",
    client: "Logistics Solutions Inc.",
    description:
      "A modern warehouse facility designed for optimal efficiency and functionality. This project demonstrates our capabilities in industrial construction, focusing on durability, space optimization, and operational efficiency.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "60,000 sq ft",
      duration: "12 months",
      teamSize: "35 personnel",
      budget: "$8.5 million",
      materials: "Steel, concrete, metal paneling",
      completionRate: "100%",
      overview:
        "This industrial warehouse facility was designed to maximize storage capacity and operational efficiency. It features high ceilings, reinforced floors, advanced loading dock systems, and state-of-the-art climate control. The project was delivered ahead of schedule, allowing the client to begin operations sooner than anticipated.",
    },
  },
  {
    id: 4,
    title: "Historic Building Renovation",
    slug: "historic-building-renovation",
    category: "Renovation",
    year: "2020",
    location: "Old Town, Building City",
    client: "Heritage Preservation Trust",
    description:
      "A careful renovation of a historic building, preserving its architectural heritage while updating it for modern use. This project highlights our expertise in restoration work and our respect for historical significance.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "15,000 sq ft",
      duration: "14 months",
      teamSize: "28 personnel",
      budget: "$7.2 million",
      materials: "Reclaimed materials, stone, timber",
      completionRate: "100%",
      overview:
        "This renovation project involved the careful restoration of a 19th-century building, preserving its historical elements while incorporating modern amenities and compliance with current building codes. The project required specialized craftsmanship and materials to maintain authenticity while ensuring structural integrity and safety.",
    },
  },
  {
    id: 5,
    title: "Shopping Mall Extension",
    slug: "shopping-mall-extension",
    category: "Commercial",
    year: "2022",
    location: "Suburbs, Building City",
    client: "Retail Developments Ltd.",
    description:
      "An expansion of an existing shopping mall, adding new retail spaces and enhancing common areas. This project demonstrates our ability to work within operational facilities while creating seamless additions.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "35,000 sq ft",
      duration: "16 months",
      teamSize: "40 personnel",
      budget: "$15 million",
      materials: "Glass, steel, tile",
      completionRate: "100%",
      overview:
        "This shopping mall extension added 50 new retail spaces while upgrading existing common areas and facilities. The project required careful planning to minimize disruption to the operational mall, with much of the construction work taking place during non-business hours. The new extension seamlessly integrates with the existing structure while providing a fresh, modern shopping experience.",
    },
  },
  {
    id: 6,
    title: "Eco-Friendly Apartment Complex",
    slug: "eco-friendly-apartment-complex",
    category: "Residential",
    year: "2023",
    location: "Green District, Building City",
    client: "Sustainable Living Developers",
    description:
      "A sustainable apartment complex featuring eco-friendly design elements and energy-efficient systems. This project reflects our commitment to environmentally conscious construction practices.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "45,000 sq ft",
      duration: "20 months",
      teamSize: "50 personnel",
      budget: "$16.5 million",
      materials: "Sustainable timber, recycled materials, solar panels",
      completionRate: "100%",
      overview:
        "This apartment complex was designed with sustainability as a core principle. It features solar power generation, rainwater harvesting, energy-efficient appliances, and extensive green spaces. The building has received multiple certifications for its eco-friendly design and is projected to use 40% less energy than traditional apartment buildings of similar size.",
    },
  },
  {
    id: 7,
    title: "Manufacturing Facility",
    slug: "manufacturing-facility",
    category: "Industrial",
    year: "2021",
    location: "Industrial Zone, Building City",
    client: "Advanced Manufacturing Co.",
    description:
      "A specialized manufacturing facility designed for precision production processes. This project showcases our ability to create custom industrial spaces tailored to specific operational requirements.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "70,000 sq ft",
      duration: "18 months",
      teamSize: "45 personnel",
      budget: "$20 million",
      materials: "Steel, concrete, specialized flooring",
      completionRate: "100%",
      overview:
        "This manufacturing facility was custom-designed to house precision manufacturing operations, including specialized ventilation systems, reinforced flooring for heavy machinery, and dedicated power infrastructure. The facility includes production areas, quality control labs, warehousing space, and administrative offices, all designed to maximize operational efficiency and workflow.",
    },
  },
  {
    id: 8,
    title: "Luxury Villa Remodel",
    slug: "luxury-villa-remodel",
    category: "Renovation",
    year: "2022",
    location: "Hillside, Building City",
    client: "Private Homeowner",
    description:
      "A comprehensive remodeling of a luxury villa, updating interiors and exteriors while enhancing amenities. This project highlights our attention to detail and ability to execute high-end residential renovations.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "10,000 sq ft",
      duration: "10 months",
      teamSize: "22 personnel",
      budget: "$3.5 million",
      materials: "Marble, hardwood, custom fixtures",
      completionRate: "100%",
      overview:
        "This luxury villa remodel transformed an outdated property into a modern masterpiece. The project included a complete interior redesign, updated systems throughout, expansion of living spaces, and enhancement of outdoor areas including a new infinity pool and landscaped gardens. The renovated villa now features smart home technology, custom cabinetry, and premium finishes throughout.",
    },
  },
  {
    id: 9,
    title: "Corporate Headquarters",
    slug: "corporate-headquarters",
    category: "Commercial",
    year: "2023",
    location: "Business District, Building City",
    client: "Global Enterprises Inc.",
    description:
      "A flagship corporate headquarters designed to reflect the client's brand identity and corporate culture. This project demonstrates our ability to create impressive commercial spaces that serve both functional and symbolic purposes.",
    mainImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      size: "100,000 sq ft",
      duration: "24 months",
      teamSize: "75 personnel",
      budget: "$30 million",
      materials: "Glass, steel, premium finishes",
      completionRate: "100%",
      overview:
        "This corporate headquarters spans 15 floors and includes executive offices, open-plan work areas, conference facilities, a cafeteria, fitness center, and multi-level parking. The building features a distinctive architectural design that has become a landmark in the business district. Sustainability was incorporated throughout with energy-efficient systems, maximized natural lighting, and green spaces including a rooftop garden.",
    },
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getRelatedProjects(
  currentProjectId: number,
  count: number = 3
) {
  const currentProject = projects.find(
    (project) => project.id === currentProjectId
  );

  if (!currentProject) return [];

  return projects
    .filter(
      (project) =>
        project.id !== currentProjectId &&
        (project.category === currentProject.category ||
          project.year === currentProject.year)
    )
    .slice(0, count);
}
