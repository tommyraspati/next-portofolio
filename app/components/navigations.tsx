"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "../providers/theme-provider"
import { Home, FolderOpen, Sun, Moon } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const { darkMode, toggleDarkMode } = useTheme()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
  ]

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex items-center gap-2 px-6 py-4 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
          darkMode
            ? "bg-neutral-900/90 border-neutral-700/50 shadow-2xl shadow-neutral-900/20"
            : "bg-neutral-50/90 border-neutral-200/50 shadow-2xl shadow-neutral-900/10"
        }`}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-neutral-800 text-neutral-50 shadow-lg"
                  : darkMode
                    ? "text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/50"
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium hidden sm:block">{item.label}</span>
            </Link>
          )
        })}

        <div className={`w-px h-6 mx-2 ${darkMode ? "bg-neutral-700" : "bg-neutral-300"}`} />

        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-xl transition-all duration-300 ${
            darkMode ? "text-amber-400 hover:bg-neutral-800/50" : "text-neutral-600 hover:bg-neutral-100/50"
          }`}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  )
}
