// Footer.tsx

import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
 return (
   <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
     <div className="flex gap-4">
       {/* LinkedIn */}
       <a href="https://www.linkedin.com/in/tommyraspati" target="_blank" rel="noopener noreferrer">
         <FaLinkedin className="h-6 w-6 " />
       </a>
       
       {/* GitHub */}
       <a href="https://github.com/tommyraspati" target="_blank" rel="noopener noreferrer">
         <FaGithub className="h-6 w-6" />
       </a>

       {/* Gmail */}
       <a href="mailto:tommyraspati@gmail.com">
         <FaEnvelope className="h-6 w-6 " />
       </a>

       {/* Instagram */}
       <a href="https://www.instagram.com/tommyraspati" target="_blank" rel="noopener noreferrer">
         <FaInstagram className="h-6 w-6 " />
       </a>
     </div>
   </div>
 );
};

export default Footer;
