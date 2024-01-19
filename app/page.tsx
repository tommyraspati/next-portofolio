'use client';
import React, { useState } from 'react';
import Footer from './footer'; // Import Footer component
import { lusitana, inter } from '@/app/ui/fonts';
import Typewriter from 'typewriter-effect';
import HighlightText from '@/app/ui/highlight_text'; // Import the HighlightText component

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <main className={`flex flex-col relative min-h-screen items-start justify-start p-12 sm:p-24 pb-16 ${darkMode ? 'bg-dark-mode text-white' : 'bg-light-mode text-black'}`}>        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="absolute top-7 right-7 pulse">
          {darkMode ? '🌙' : '☀️'}
        </button>

        <h1 className={`${darkMode ? 'text-[#ffd500]' : 'text-yellow-600'} ${inter.className} text-1xl sm:text-2xl mb-2 sm:mb-4 font-medium`}>          Hello, My name is
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
          Many people know me as Tommy and I am currently a third-year Computer Science student at <HighlightText darkMode={darkMode}>Universitas Indonesia</HighlightText>, 
          where I am deeply engaged in exploring the realms of <HighlightText darkMode={darkMode}>Machine Learning</HighlightText>, <HighlightText darkMode={darkMode}>Data Science</HighlightText>, and <HighlightText darkMode={darkMode}>Software Engineering</HighlightText>.  
          I am eager to meet new people and embrace new challenges. My goal is to not only expand my technical 
          expertise but also to collaborate and learn from others, building innovative solutions that make a tangible impact.


        </h2>

        {/* Footer */}
        <Footer darkMode={darkMode} /> {/* Use Footer component with darkMode prop */}
      </main>
    </div>
  );
}
