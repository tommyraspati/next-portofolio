"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // State to hold the dark mode preference
  const [darkMode, setDarkMode] = useState(false)

  // Effect to run on initial load to get preference from localStorage
  useEffect(() => {
    const isDarkModeSaved = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkModeSaved)
  }, [])

  // Effect to run whenever darkMode state changes
  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove the opposite class and add the correct one
    if (darkMode) {
      root.classList.remove("light")
      root.classList.add("dark")
      localStorage.setItem("darkMode", "true")
    } else {
      root.classList.remove("dark")
      root.classList.add("light")
      localStorage.setItem("darkMode", "false")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
