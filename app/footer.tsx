'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({darkMode}) => {
  const [activeIcon, setActiveIcon] = useState<string>('');

  const handleClick = (iconName: string) => {
    setActiveIcon(iconName);
    // Reset active icon after 2 seconds
    setTimeout(() => {
      setActiveIcon('');
    }, 2000);
  };

  return (
    <div className={`${darkMode ? 'bg-dark-mode' : 'bg-light-mode'} relative inset-x-0 bottom-0 flex h-16 items-center justify-center `}>      
    <div className="flex gap-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/tommyraspati" target="_blank" rel="noopener noreferrer"
           onClick={() => handleClick('linkedin')}>
          <FaLinkedin className={`h-6 w-6 hover:scale-110 transition-transform ${activeIcon === 'linkedin' ? 'text-blue-600' : (darkMode ? 'text-white' : 'text-black')}`} />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/tommyraspati" target="_blank" rel="noopener noreferrer"
           onClick={() => handleClick('github')}>
          <FaGithub className={`h-6 w-6 hover:scale-110 transition-transform ${activeIcon === 'github' ? 'text-gray-800' : (darkMode ? 'text-white' : 'text-black')}`} />
        </a>

        {/* Gmail */}
        <a href="mailto:tommyraspati@gmail.com"
           onClick={() => handleClick('gmail')}>
          <FaEnvelope className={`h-6 w-6 hover:scale-110 transition-transform ${activeIcon === 'gmail' ? 'text-red-600' : (darkMode ? 'text-white' : 'text-black')}`} />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/tommyraspati" target="_blank" rel="noopener noreferrer"
           onClick={() => handleClick('instagram')}>
          <FaInstagram className={`h-6 w-6 hover:scale-110 transition-transform ${activeIcon === 'instagram' ? 'text-pink-600' : (darkMode ? 'text-white' : 'text-black')}`} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
