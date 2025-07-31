"use client"

import { useEffect, useState } from "react"
import { useTheme } from "./providers/theme-provider"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Github,
  FileText,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa"
import { SiLetterboxd } from "react-icons/si"

export default function Home() {
  const { darkMode } = useTheme()
  const [displayedText, setDisplayedText] = useState("")
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null) // All items collapsed by default
  const fullName = "Raspati Mahatma Kurnia Dharmatmaja"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/tommyraspati",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    { icon: FaEnvelope, href: "mailto:tommyraspati@gmail.com", label: "Email", color: "hover:text-red-500" },
    { icon: FaGithub, href: "https://github.com/tommyraspati", label: "GitHub", color: "hover:text-neutral-700" },
    {
      icon: SiLetterboxd,
      href: "https://letterboxd.com/tommyraspati/",
      label: "Letterboxd",
      color: "hover:text-green-600",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/tommyraspati",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
  ]

  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "PT. Telekomunikasi Selular",
      period: "Sep 2024 – Dec 2024",
      image: "/images/telkomsel-logo.svg",
      description:
        "Conducted market analysis by visiting mobile credit counters, developed Python web scraping tools using Selenium for competitive intelligence on app trends and competitor pricing, created product review sheets with strategic recommendations, and built a predictive model for customer purchase behavior.",
    },
    {
      title: "Data Analytics Intern",
      company: "PwC Indonesia",
      period: "Jun 2024 – Aug 2024",
      image: "/images/pwc-logo.png",
      description:
        "Developed Python software using OCR (pdfplumber, pytesseract) to convert PDF financial reports to Excel. Conducted data analysis with clustering techniques (K-means, DBSCAN) for anomaly detection and assisted in creating internal training materials on Apache Spark.",
    },
    {
      title: "Software Engineering Intern",
      company: "PT Telekomunikasi Indonesia Tbk",
      period: "Jul 2023 – Aug 2023",
      image: "/images/telkom-logo.png",
      description:
        "Learned to develop a Telegram bot and a web application in PHP to help field workers locate Optical Distribution Points (ODPs) using Google Maps API and Leaflet for interactive map displays.",
    },
  ]

  const education = [
    {
      degree: (
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Bachelor of Computer Science
        </span>
      ),
      school: "Universitas Indonesia",
      period: "2021 – 2025",
      image: "/images/ui-logo.png",
    },
    {
      degree: (
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Mathematic and Natural Science
        </span>
      ),
      school: "SMAN 3 Malang",
      period: "2018 – 2021",
      image: "/images/sman3-logo.png",
    },
  ]

  const featuredProjects = [
    {
      name: "Sales Performance Dashboard",
      description:
        "An interactive Tableau dashboard analyzing sales and profit performance. It features year-over-year comparisons, breakdowns by product subcategory, and trend analysis over time to identify key growth drivers and areas for improvement.",
      technologies: ["Tableau", "Data Visualization"],
      image: "/images/project-tableau-sales.png",
      github: "#",
      demo: "https://public.tableau.com/app/profile/tommy.raspati/viz/SalesDashboard_17536047808420/SalesDashboard",
      presentation: "#",
    },
    {
      name: "Portfolio Website",
      description:
        "The site you are on right now. A modern, responsive portfolio built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      image: "/images/project-portofolio.png",
      github: "#",
      demo: "https://tommyraspati.com",
      presentation: "#",
    },
    {
      name: "Chess Rating Prediction",
      description: "Developed a deep learning regression model to predict chess players' Elo ratings based on individual game data.",
      technologies: ["PyTorch", "Python", "Pandas"],
      image: "/images/project-chess.png",
      github: "#",
      demo: "#",
      presentation: "https://drive.google.com/drive/folders/1ay5AMcpk8chr0cqoskkpGk5Q2RyUynDw",
    },
  ]

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  const skills = [
    "JavaScript/TypeScript",
    "Python",
    "Java",
    "Dart",
    "React/Next.js",
    "Django",
    "Spring Boot",
    "Flutter",
    "Machine Learning",
    "Tableau",
    "Data Science",
    "PostgreSQL",
    "Git/GitHub",
    "Tailwind CSS",
  ]

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-700 shadow-2xl">
                <Image
                  src="/images/profile-picture.jpg"
                  alt="Tommy Raspati"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1
                  className={`text-4xl lg:text-6xl font-bold mb-4 font-poppins transition-colors duration-300 ${
                    darkMode ? "text-neutral-50" : "text-neutral-900"
                  }`}
                >
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </h1>
                <p
                  className={`text-xl lg:text-2xl font-medium mb-6 transition-colors duration-300 ${
                    darkMode ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  Computer Science Fresh Graduate
                </p>
                <div
                  className={`flex flex-wrap justify-center lg:justify-start gap-6 text-sm mb-8 transition-colors duration-300 ${
                    darkMode ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>22 years old</span>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full transition-all duration-300 ${social.color} ${
                          darkMode
                            ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                        }`}
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="mb-20">
          <h2
            className={`text-3xl font-bold mb-12 font-poppins text-center transition-colors duration-300 ${
              darkMode ? "text-neutral-50" : "text-neutral-900"
            }`}
          >
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed text-justify transition-colors duration-300 ${
                  darkMode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                I&apos;m a fresh graduate with a degree in Computer Science from Universitas Indonesia. While my full name is Raspati, many people know me as
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {" "}
                  Tommy
                </span>
                . My passion lies at the intersection of data and software, with a keen interest in
                <span className={`font-semibold ${darkMode ? "text-neutral-100" : "text-neutral-900"}`}>
                  {" "}
                  Data Analytics
                </span>
                ,
                <span className={`font-semibold ${darkMode ? "text-neutral-100" : "text-neutral-900"}`}>
                  {" "}
                  Data Science
                </span>
                ,
                <span className={`font-semibold ${darkMode ? "text-neutral-100" : "text-neutral-900"}`}>
                  {" "}
                  Software Engineering
                </span>
                , and
                <span className={`font-semibold ${darkMode ? "text-neutral-100" : "text-neutral-900"}`}>
                  {" "}
                  AI
                </span>
                .
              </p>
              <p
                className={`text-lg leading-relaxed text-justify transition-colors duration-300 ${
                  darkMode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                I love building innovative solutions and collaborating with others to create meaningful impact through
                technology. I&apos;m always eager to learn new technologies and take on challenging projects that push my
                boundaries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div
                className={`text-center p-6 rounded-2xl transition-colors duration-300 ${
                  darkMode ? "bg-neutral-800/30" : "bg-neutral-100/50"
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>3</div>
                <div className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>Internships</div>
              </div>
              <div
                className={`text-center p-6 rounded-2xl transition-colors duration-300 ${
                  darkMode ? "bg-neutral-800/30" : "bg-neutral-100/50"
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${darkMode ? "text-green-400" : "text-green-600"}`}>10+</div>
                <div className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>Projects Built</div>
              </div>
              <div
                className={`text-center p-6 rounded-2xl transition-colors duration-300 ${
                  darkMode ? "bg-neutral-800/30" : "bg-neutral-100/50"
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${darkMode ? "text-purple-400" : "text-purple-600"}`}>4+</div>
                <div className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>Years of Study</div>
              </div>
              <div
                className={`text-center p-6 rounded-2xl transition-colors duration-300 ${
                  darkMode ? "bg-neutral-800/30" : "bg-neutral-100/50"
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${darkMode ? "text-orange-400" : "text-orange-600"}`}>15+</div>
                <div className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>Technologies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2
            className={`text-3xl font-bold mb-8 font-poppins transition-colors duration-300 ${
              darkMode ? "text-neutral-50" : "text-neutral-900"
            }`}
          >
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-neutral-800/50 text-neutral-300 border border-neutral-700/50 hover:border-neutral-600"
                    : "bg-neutral-100 text-neutral-700 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-200"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <h2
            className={`text-3xl font-bold mb-8 font-poppins transition-colors duration-300 ${
              darkMode ? "text-neutral-50" : "text-neutral-900"
            }`}
          >
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  darkMode
                    ? "bg-neutral-800/50 border border-neutral-700/50"
                    : "bg-neutral-100 border border-neutral-200"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={exp.image || "https://placehold.co/100x100/e0e0e0/000000?text=Logo"}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <h3
                            className={`text-xl font-semibold transition-colors duration-300 ${
                              darkMode ? "text-neutral-50" : "text-neutral-900"
                            }`}
                          >
                            {exp.company}
                          </h3>
                          <span
                            className={`text-sm font-medium transition-colors duration-300 ${
                              darkMode ? "text-neutral-400" : "text-neutral-500"
                            }`}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <p
                          className={`text-md font-medium mb-3 transition-colors duration-300 ${
                            darkMode ? "text-neutral-300" : "text-neutral-700"
                          }`}
                        >
                          {exp.title}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleExperience(index)}
                        className={`ml-4 p-2 rounded-lg transition-all duration-300 ${
                          darkMode
                            ? "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700"
                            : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"
                        }`}
                      >
                        {expandedExperience === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    {expandedExperience === index && (
                      <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
                        <p
                          className={`leading-relaxed transition-colors duration-300 ${
                            darkMode ? "text-neutral-300" : "text-neutral-600"
                          }`}
                        >
                          {exp.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2
            className={`text-3xl font-bold mb-8 font-poppins transition-colors duration-300 ${
              darkMode ? "text-neutral-50" : "text-neutral-900"
            }`}
          >
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-neutral-800/50 border border-neutral-700/50"
                    : "bg-neutral-100 border border-neutral-200"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={edu.image || "https://placehold.co/100x100/e0e0e0/000000?text=Logo"}
                      alt={`${edu.school} logo`}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3
                        className={`text-xl font-semibold transition-colors duration-300 ${
                          darkMode ? "text-neutral-50" : "text-neutral-900"
                        }`}
                      >
                        {edu.school}
                      </h3>
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          darkMode ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p
                      className={`text-md font-medium mb-3 transition-colors duration-300 ${
                        darkMode ? "text-neutral-300" : "text-neutral-700"
                      }`}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className={`leading-relaxed transition-colors duration-300 ${
                        darkMode ? "text-neutral-300" : "text-neutral-600"
                      }`}
                    >
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2
              className={`text-3xl font-bold font-poppins transition-colors duration-300 ${
                darkMode ? "text-neutral-50" : "text-neutral-900"
              }`}
            >
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col ${
                  darkMode
                    ? "bg-neutral-800/50 border border-neutral-700/50 hover:border-neutral-600/50"
                    : "bg-neutral-100 border border-neutral-200 hover:border-neutral-300 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "https://placehold.co/600x400/1e293b/ffffff?text=Project"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      darkMode ? "text-neutral-50" : "text-neutral-900"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p
                    className={`mb-4 leading-relaxed flex-grow transition-colors duration-300 ${
                      darkMode ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs rounded-lg transition-colors duration-300 ${
                          darkMode ? "bg-neutral-700/50 text-neutral-300" : "bg-neutral-200 text-neutral-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
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
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                          darkMode
                            ? "bg-red-900/40 text-red-400 hover:bg-red-900/60"
                            : "bg-red-100 text-red-700 hover:bg-red-200"
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

        {/* Let's Connect Section */}
        <section className="mt-20">
          <div className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-tr from-purple-400/10 via-transparent to-blue-400/10 relative overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2
                style={{ fontFamily: "'Caveat', cursive" }} // Font unik
                className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              >
                Lets Connect
              </h2>
              <p
                className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-300 ${
                  darkMode ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                My inbox is always open. Whether you have an opportunity or just want to say hi, I&apos;ll get back to you!
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${social.color} ${
                        darkMode
                          ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                          : "bg-white/50 backdrop-blur-sm text-neutral-600 hover:bg-white/80"
                      }`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`text-center py-8 mt-12 border-t ${darkMode ? 'border-neutral-800 text-neutral-500' : 'border-neutral-200 text-neutral-500'}`}>
            <p>&copy; {new Date().getFullYear()} Raspati Mahatma Kurnia Dharmatmaja. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  )
}
