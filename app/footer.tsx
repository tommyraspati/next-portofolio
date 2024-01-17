'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState<string>('');

  const handleMouseDown = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const handleMouseUp = () => {
    setActiveIcon('');
  };

  return (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <div className="flex gap-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/tommyraspati" target="_blank" rel="noopener noreferrer"
           onMouseDown={() => handleMouseDown('linkedin')}
           onMouseUp={handleMouseUp}>
          <FaLinkedin className={`h-6 w-6 hover:scale-110 transition-transform ${activeIcon === 'linkedin' ? 'text-blue-600' : ''}`} />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/tommyraspati" target="_blank" rel="noopener noreferrer"
           onMouseDown={() => handleMouseDown('github')}
           onMouseUp={handleMouseUp}>
          <FaGithub className={`h-6 w-6 hover:scale-110 transition-transform ${activeIcon === 'github' ? 'text-gray-800' : ''}`} />
        </a>

        {/* Gmail */}
        <a href="mailto:tommyraspati@gmail.com"
           onMouseDown={() => handleMouseDown('gmail')}
           onMouseUp={handleMouseUp}>
          <FaEnvelope className={`h-6 w-6 hover:scale-110 transition-transform ${activeIcon === 'gmail' ? 'text-red-600' : ''}`} />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/tommyraspati" target="_blank" rel="noopener noreferrer"
           onMouseDown={() => handleMouseDown('instagram')}
           onMouseUp={handleMouseUp}>
          <FaInstagram className={`h-6 w-6 hover:scale-110 transition-transform ${activeIcon === 'instagram' ? 'text-pink-600' : ''}`} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
