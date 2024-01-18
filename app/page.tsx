'use client';
import Footer from './footer'; // Import Footer component
import { lusitana } from '@/app/ui/fonts';
import Typewriter from 'typewriter-effect';

export default function Home() {
 return (
   <main className="flex min-h-screen flex-col items-start justify-start p-12 sm:p-24 bg-gray-50 dark:bg-gray-200">
    <p className={`${lusitana.className} text-1xl sm:text-2xl text-yellow-600 mb-2 sm:mb-4`} >
         Hello, My name is
     </p>
     <p className={`${lusitana.className} text-3xl sm:text-5xl text-black mb-4`}>
      <Typewriter
        options={{
          strings: ['Raspati Mahatma Kurnia Dharmatmaja.'],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
      </p>
     {/* Footer */}
     <Footer /> {/* Use Footer component */}
   </main>
 )
}
