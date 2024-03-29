'use client';
import React, { useState } from 'react';
import Footer from './footer'; // Import Footer component
import { lusitana, inter } from '@/app/ui/fonts';
import Typewriter from 'typewriter-effect';
import HighlightText from '@/app/ui/highlight_text'; // Import the HighlightText component
import { SiPython, SiNextdotjs,SiDjango, SiSpringboot, SiFlutter } from 'react-icons/si';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      name: "Portfolio Website",
      description: "My personal portfolio website created using Next.js, React, and Tailwind CSS. It showcases my projects, skills, and professional journey, featuring a responsive layout for optimal viewing on all devices.",
      technologies: ["Next.js", "React", "Tailwind CSS","TypeScript"],
      link: "https://tommyraspati.com", // Replace with your project link
    },
    // {
    //   name: "Pusat Pengaduan G20 Topic: Anti-corruption",
    //   description: "A team project developing a website and mobile app for anti-corruption complaints, allowing users to report suspected corruption cases. My contribution was mainly focused on the user dashboard part of the website.",
    //   technologies: ["Django", "Tailwind", "Flutter", "Dart",",Python", "AJAX"],
    //   link: "https://github.com/orgs/PBP-G20Project/repositories", // Replace with your project link
    // },
    // {
    //   name: "Sponzy",
    //   description: "A website platform connecting event organizers with sponsors. In this team project, I was responsible for developing features related to the sponsor user, including updating the sponsor's profile and searching for events.",
    //   technologies: ["Django,tailwind,python","AJAX"],
    //   link: "http://34.71.2.74:8000/", // Replace with your project link
    // },
    // Add more projects as needed
  ];
  

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <main className={`flex flex-col relative min-h-screen items-start justify-start p-12 sm:p-24 pb-16 ${darkMode ? 'bg-dark-mode text-white' : 'bg-light-mode text-black'}`}>        {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="absolute top-7 right-7 pulse">
      <div className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center ${darkMode ? 'bg-dark-mode' : 'bg-light-mode'}`}>
        {darkMode ? '🌙' : '☀️'}
      </div>
      </button>    


        <h1 className={`${darkMode ? 'text-[#ffd500]' : 'text-yellow-600'} ${inter.className} text-1xl sm:text-2xl mb-2 sm:mb-4 font-medium`}>          
        Hello, My name is
        </h1>
        <div className="h-12 sm:h-24 ">
          <h1 className={`${lusitana.className} text-3xl sm:text-5xl ${darkMode ? 'text-gray-300' : 'text-black'} mb-2 sm:mb-4`}>
            <Typewriter
              options={{
                strings: ['Raspati Mahatma Kurnia D.'],
                autoStart: true,
                loop: false,
                deleteSpeed: Infinity,
                delay: 50,
              }}
            />
          </h1>
        </div>
        <h2 className={`${lusitana.className} text-1xl sm:text-2xl ${darkMode ? 'text-gray-300' : 'text-black'} mt-16 sm:mt-4 mb-2 sm:mb-4`}>
          Many people know me as  <HighlightText darkMode={darkMode}> Tommy </HighlightText>. I&apos;m a third-year Computer Science student at <HighlightText darkMode={darkMode}>Universitas Indonesia</HighlightText>, currently 20 years old.
          I am deeply engaged in exploring the realms of <HighlightText darkMode={darkMode}>Machine Learning</HighlightText>, <HighlightText darkMode={darkMode}>Data Science</HighlightText>, and <HighlightText darkMode={darkMode}>Software Engineering</HighlightText>.  
          I am eager to meet new people and embrace new challenges. My goal is to not only expand my technical 
          expertise but also to collaborate and learn from others, building innovative solutions that make a tangible impact.
        </h2>
      
        <section className="w-full mt-12 mb-6">
        <h2 className={`${darkMode ? 'text-[#ffd500]' : 'text-yellow-600'} ${inter.className} text-2xl sm:text-3xl mb-4 sm:mb-6 font-medium`}>
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {/* Skill Item - Spring Boot */}
          <div className="skill-item">
  <SiSpringboot 
    className={`mx-auto h-8 sm:h-12 w-8 sm:w-12 mb-1 sm:mb-2 ${darkMode ? 'hover:text-green-600' : 'hover:text-green-500'}`} // Spring Boot hover color
  />
  <p className={`${darkMode ? 'text-gray-300' : 'text-black'} text-sm sm:text-base mb-4 ${lusitana.className}`}>Spring Boot (Java)</p>
</div>
          {/* Skill Item - Django */}
          <div className="skill-item">
          <SiDjango className="mx-auto h-8 sm:h-12 w-8 sm:w-12 mb-1 sm:mb-2 hover:text-green-500" />            <p className={`${darkMode ? 'text-gray-300' : 'text-black'} text-sm sm:text-base mb-4 ${lusitana.className}`}>Django (Python)</p>
          </div>
          {/* Skill Item - Next.js */}
          <div className="skill-item">
          <SiNextdotjs className="mx-auto h-8 sm:h-12 w-8 sm:w-12 mb-1 sm:mb-2 hover:text-blue-600" />            <p className={`${darkMode ? 'text-gray-300' : 'text-black'} text-sm sm:text-base mb-4 ${lusitana.className}`}>Next.js (TypeScript)</p>
          </div>
          {/* Skill Item - Flutter */}
          <div className="skill-item">
          <SiFlutter className="mx-auto h-8 sm:h-12 w-8 sm:w-12 mb-1 sm:mb-2 hover:text-blue-500" />            <p className={`${darkMode ? 'text-gray-300' : 'text-black'} text-sm sm:text-base mb-4 ${lusitana.className}`}>Flutter (Dart)</p>
          </div>
          {/* Skill Item - Python */}
          <div className="skill-item">
          <SiPython className="mx-auto h-8 sm:h-12 w-8 sm:w-12 mb-1 sm:mb-2 hover:text-yellow-600" />            <p className={`${darkMode ? 'text-gray-300' : 'text-black'} text-sm sm:text-base mb-4 ${lusitana.className}`}>Python for Machine Learning/Data Science</p>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="w-full mt-12 mb-10">      
        <h2 className={`${darkMode ? 'text-[#ffd500]' : 'text-yellow-600'} ${inter.className} text-2xl sm:text-3xl mb-4 sm:mb-6 font-medium`}>          
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} 
                className="p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" 
                style={{ 
                  backgroundColor: darkMode ? '#2c2c2c' : '#f4f4f4',
                  boxShadow: darkMode ? '0 4px 8px rgba(255, 255, 255, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
                  border: darkMode ? '1px solid #444' : '1px solid #ccc', // Adjusted border color for dark mode
                }}>
              <h3 className={`${darkMode ? 'text-white' : 'text-black'} text-xl font-semibold mb-2`}>
                {project.name}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-black'} mb-4 ${lusitana.className}`}>
                {project.description}
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-black'} text-sm mb-2 ${lusitana.className}`}>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center transition-colors duration-300 ease-in-out ${darkMode ? 'text-[#fdc500] hover:text-[#ffdf00]' : 'text-yellow-700 hover:text-[#e0ac3b]'}`}
                  style={{ textDecoration: 'none' }}
                >
                  View Project <FaArrowUpRightFromSquare className="ml-2" />
                </a>
              )}
            </div>
            ))}
          </div>
        </section>

        <div className="w-full text-center py-4">
          <p className={`${darkMode ? 'text-gray-300 hover:text-gray-300' : 'text-black hover:text-black'} ${lusitana.className} text-2xl font-bold transition duration-300 ease-in-out transform hover:scale-105`}>
            This site is currently under development.  
            <span style={{ color: darkMode ? '#ffd500' : 'rgb(202 138 4)' }}>
            More projects will be added soon!
            </span>
          </p>
        </div>

        {/* Footer */}
        <Footer darkMode={darkMode} /> {/* Use Footer component with darkMode prop */}
      </main>
    </div>
  );
}
