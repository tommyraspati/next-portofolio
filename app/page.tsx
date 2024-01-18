'use client';
import Footer from './footer'; // Import Footer component
import { lusitana,inter} from '@/app/ui/fonts';
import Typewriter from 'typewriter-effect';
import HighlightText from '@/app/ui/highlight_text'; // Import the HighlightText component



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-12 sm:p-24 bg-gray-300 ">
      <h1 className={`${inter.className} text-1xl sm:text-2xl text-yellow-600 mb-2 sm:mb-4`}>
        Hello, My name is
      </h1>
      <div className="h-12 sm:h-24 "> {/* Set a fixed height for the typewriter container */}
        <h1 className={`${lusitana.className} text-3xl sm:text-5xl text-black mb-2 sm:mb-4`}>
          <Typewriter
            options={{
              strings: ['Raspati Mahatma Kurnia D.'],
              autoStart: true,
              loop: false,
              deleteSpeed: Infinity, // Prevents deletion, can be omitted if not needed
              delay: 50,
            }}
          />
        </h1>
      </div>
      <h2 className={`${lusitana.className} text-1xl sm:text-2xl text-black mt-8 sm:mt-4 mb-2 sm:mb-4`}>
        Many people know me as Tommy and I am currently a third-year Computer Science student at <HighlightText>Universitas Indonesia</HighlightText>, 
        where I am deeply engaged in exploring the realms of <HighlightText>Machine Learning</HighlightText>, <HighlightText>Data Science</HighlightText>, and <HighlightText>Software Engineering</HighlightText>.  
        I am eager to meet new people and embrace new challenges. My goal is to not only expand my technical 
        expertise but also to collaborate and learn from others, building innovative solutions that make a tangible impact.
      </h2>
      {/* Footer */}
      <Footer /> {/* Use Footer component */}
    </main>
  )
}
