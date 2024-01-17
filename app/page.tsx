import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Footer from './footer'; // Import Footer component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30">
      <p className="text-3xl font-semibold text-center mb-8">
        Hello There! 👋
      </p>
      
      {/* Footer */}
      <Footer /> {/* Use Footer component */}
    </main>
  )
}
