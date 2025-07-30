import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./providers/theme-provider"
import Navigation from "./components/navigations"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Tommy Raspati - Software Engineer",
  description: "Portfolio of Tommy Raspati - Computer Science Student & Software Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} ${poppins.variable} h-full`}>
        <ThemeProvider>
          <div className="min-h-screen pb-20 bg-neutral-50 dark:bg-neutral-900">{children}</div>
          <Navigation />
        </ThemeProvider>
      </body>
    </html>
  )
}
