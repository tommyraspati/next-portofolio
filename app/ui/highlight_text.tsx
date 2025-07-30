"use client"

import type React from "react"

interface HighlightTextProps {
  children: React.ReactNode
  darkMode: boolean
}

export default function HighlightText({ children, darkMode }: HighlightTextProps) {
  return (
    <span
      className={`font-semibold transition-colors duration-300 ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
    >
      {children}
    </span>
  )
}
