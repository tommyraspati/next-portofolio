"use client";
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [linkedinClicked, setLinkedinClicked] = useState(false);
  const [githubClicked, setGithubClicked] = useState(false);
  const [gmailClicked, setGmailClicked] = useState(false);
  const [instagramClicked, setInstagramClicked] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <div className="flex gap-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/tommyraspati" target="_blank" rel="noopener noreferrer" onClick={() => setLinkedinClicked(!linkedinClicked)}>
          <FaLinkedin className={`h-6 w-6 hover:scale-110 transition-transform ${linkedinClicked ? 'text-blue-600' : ''}`} />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/tommyraspati" target="_blank" rel="noopener noreferrer" onClick={() => setGithubClicked(!githubClicked)}>
          <FaGithub className={`h-6 w-6 hover:scale-110 transition-transform ${githubClicked ? 'text-gray-800' : ''}`} />
        </a>

        {/* Gmail */}
        <a href="mailto:tommyraspati@gmail.com" onClick={() => setGmailClicked(!gmailClicked)}>
          <FaEnvelope className={`h-6 w-6 hover:scale-110 transition-transform ${gmailClicked ? 'text-red-600' : ''}`} />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/tommyraspati" target="_blank" rel="noopener noreferrer" onClick={() => setInstagramClicked(!instagramClicked)}>
          <FaInstagram className={`h-6 w-6 hover:scale-110 transition-transform ${instagramClicked ? 'text-pink-600' : ''}`} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
