"use client"

import { useState } from "react"
import { useTheme } from "../providers/theme-provider"
import { ExternalLink, Filter, Github, FileText } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const { darkMode } = useTheme()
  const [selectedFilter, setSelectedFilter] = useState("All")

  const projects = [
    {
      name: "Sponzy: Where EOs and Sponsors Meet",
      description:
        "Developed Sponzy, a digital platform to streamline collaboration between Event Organizers (EOs) and sponsors, enhancing the efficiency and transparency of sponsorship management.",
      technologies: ["Python", "Django", "HTML", "CSS", "Tailwind", "PostgreSQL"],
      category: "Web Development",
      image: "/images/project-sponzy.jpg",
      github: "#",
      demo: "http://34.71.2.74:8000/",
      presentation: "#",
      status: "Live",
      featured: true,
    },
    {
      name: "Online Thrift Shop Website",
      description:
        "Developed 'Second Treasurer,' an online thrift shop platform facilitating the buying and selling of new and used fashion items.",
      technologies: ["Java", "Spring Boot", "TypeScript", "Next.js", "PostgreSQL"],
      category: "Full Stack",
      image: "/images/project-thrift.jpg",
      github: "#",
      demo: "#",
      presentation: "#",
      status: "Completed",
      featured: true,
    },
    {
      name: "Warehouse Management System (WMS)",
      description:
        "Developed a Warehouse Management System (WMS) website, designed to manage the entire process from incoming goods, production, and sales preparation to supply chain optimization.",
      technologies: ["Python", "Django", "Vue.js", "Tailwind CSS", "PostgreSQL"],
      category: "Full Stack",
      image: "/images/project-wms.jpg",
      github: "#",
      demo: "#",
      presentation: "#",
      status: "Completed",
      featured: true,
    },
    {
      name: "Anti-Corruption Complaint System",
      description:
        "A comprehensive platform for reporting corruption cases with both web and mobile interfaces. Developed user dashboard and complaint management features.",
      technologies: ["Django", "Python", "Flutter", "Dart", "PostgreSQL", "AJAX"],
      category: "Full Stack",
      image: "/images/project-anticorruption.jpg",
      github: "https://github.com/orgs/PBP-G20Project/repositories",
      demo: "#",
      presentation: "#",
      status: "Completed",
      featured: false,
    },
    {
      name: "Apartment Price Prediction and Clustering",
      description:
        "Conducted extensive EDA, then developed a machine learning solution to predict apartment prices and cluster properties based on features like footage, rooms, and location.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
      category: "Data Science",
      image: "/images/project-apartment.jpg",
      github: "#",
      demo: "#",
      presentation: "#",
      status: "Completed",
      featured: false,
    },
    {
      name: "Chess Rating Prediction",
      description: "Developed a deep learning regression model to predict chess players' Elo ratings based on individual game data.",
      technologies: ["PyTorch", "Python", "Pandas"],
      category: "Machine Learning",
      image: "/images/project-chess.jpg",
      github: "#",
      demo: "#",
      presentation: "#",
      status: "Completed",
      featured: false,
    },
    {
      name: "RSA-OAEP Encryption/Decryption Software",
      description:
        "Developed a from-scratch implementation of RSA-OAEP encryption and decryption software, featuring 2048-bit key pair generation and a GUI.",
      technologies: ["Python", "Tkinter"],
      category: "Software Development",
      image: "/images/project-rsa.jpg",
      github: "#",
      demo: "#",
      presentation: "#",
      status: "Completed",
      featured: false,
    },
    {
      name: "Portfolio Website",
      description:
        "The site you are on right now. A modern, responsive portfolio built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      category: "Web Development",
      image: "/images/project-portfolio.jpg",
      github: "#",
      demo: "https://tommyraspati.com",
      presentation: "#",
      status: "Live",
      featured: false,
    },
  ]

  const categories = ["All", "Web Development", "Full Stack", "Data Science", "Machine Learning", "Software Development"]

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((project) => project.category === selectedFilter)

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl lg:text-5xl font-bold mb-6 font-poppins transition-colors duration-300 ${
              darkMode ? "text-neutral-50" : "text-neutral-900"
            }`}
          >
            All Projects
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            A comprehensive showcase of my work in software development, machine learning, and innovative solutions.
          </p>
        </div>

        {/* Filter Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className={`${darkMode ? "text-neutral-400" : "text-neutral-600"}`} size={20} />
            <span
              className={`font-medium transition-colors duration-300 ${
                darkMode ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              Filter by category:
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedFilter === category
                    ? darkMode
                      ? "bg-neutral-700 text-neutral-50 shadow-lg"
                      : "bg-neutral-800 text-neutral-50 shadow-lg"
                    : darkMode
                      ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col ${
                  darkMode
                    ? "bg-neutral-800/50 border border-neutral-700/50 hover:border-neutral-600/50"
                    : "bg-neutral-100 border border-neutral-200 hover:border-neutral-300 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className={`text-xl font-semibold transition-colors duration-300 ${
                        darkMode ? "text-neutral-50" : "text-neutral-900"
                      }`}
                    >
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-lg transition-colors duration-300 ${
                        darkMode ? "bg-neutral-700 text-neutral-300" : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs rounded-lg ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p
                    className={`mb-4 leading-relaxed flex-grow transition-colors duration-300 ${
                      darkMode ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded transition-colors duration-300 ${
                          darkMode ? "bg-neutral-700/50 text-neutral-400" : "bg-neutral-200 text-neutral-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className={`px-2 py-1 text-xs rounded transition-colors duration-300 ${
                          darkMode ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          darkMode
                            ? "border border-neutral-600 text-neutral-300 hover:bg-neutral-700"
                            : "border border-neutral-300 text-neutral-700 hover:bg-neutral-200"
                        }`}
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          darkMode
                            ? "bg-neutral-700 text-neutral-50 hover:bg-neutral-600"
                            : "bg-neutral-800 text-neutral-50 hover:bg-neutral-700"
                        }`}
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    {project.presentation && project.presentation !== "#" && (
                      <a
                        href={project.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          darkMode
                            ? "text-neutral-400 hover:text-neutral-300"
                            : "text-neutral-500 hover:text-neutral-700"
                        }`}
                      >
                        <FileText size={14} />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p
              className={`text-lg transition-colors duration-300 ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
            >
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
