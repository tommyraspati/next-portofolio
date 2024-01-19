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
      <main className={`flex flex-col min-h-screen  items-start justify-start p-12 sm:p-24 ${darkMode ? 'bg-dark-mode text-white' : 'bg-light-mode text-black'}`}>
        {/* Dark Mode Toggle Button */}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet non nisl sit amet elementum. Nam hendrerit turpis vitae molestie fermentum. Nunc eu lectus dictum, condimentum nunc eget, pharetra risus. Praesent eu ipsum porttitor, pretium est non, elementum ligula. Aliquam eu varius ligula. Vivamus tincidunt, lectus et tincidunt fermentum, nibh sapien vulputate nisi, eget condimentum nisi lacus vulputate elit. Vestibulum maximus, sem vitae lacinia interdum, massa erat sagittis elit, eget dictum odio erat eget felis. Duis ac eros at enim ullamcorper ultricies. Aenean nisi neque, bibendum sed imperdiet eu, faucibus eu lorem.

Aenean at commodo lorem. Aliquam eget porttitor magna. Nam ullamcorper maximus purus, sed sollicitudin risus finibus sit amet. Duis mi urna, ultricies eget turpis eget, mattis sollicitudin nisl. Donec quis leo ex. Aenean iaculis sit amet felis nec posuere. Nam lobortis nibh a hendrerit mollis. Aliquam erat volutpat. Nullam mollis at magna at molestie. In sollicitudin augue non libero semper convallis. Quisque ultricies laoreet nisi et congue. Proin feugiat lacus auctor sem convallis, eget tempus lacus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Fusce suscipit nibh metus, at porta orci malesuada vel. Aliquam vitae pulvinar nulla. In vulputate libero eget risus suscipit, ut accumsan orci tempus. Integer placerat consequat est, et mattis massa fermentum vitae. Curabitur vel lobortis tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ultricies tincidunt cursus. Integer pulvinar, ex eget posuere tincidunt, erat dolor interdum elit, sed cursus erat velit ac quam. Nulla eu dictum augue. 
        </h2>

        {/* Footer */}
        <Footer darkMode={darkMode} /> {/* Use Footer component with darkMode prop */}
      </main>
    </div>
  );
}
