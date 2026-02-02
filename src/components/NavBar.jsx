// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { Sun, Moon, Home, User, Code, Briefcase, Grid, Mail } from "lucide-react";

export default function NavBar() {
  const links = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Grid },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false); // Track if user clicked to scroll

  // Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Track which section is in view - IMPROVED
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update if user is actively scrolling from a click
        if (isScrolling) return;

        // Sort entries by intersection ratio (most visible first)
        const sortedEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        // Update to the most visible section
        if (sortedEntries.length > 0) {
          const mostVisible = sortedEntries[0];
          if (mostVisible.intersectionRatio > 0.15) {
            setActiveSection(mostVisible.target.id);
          }
        }
      },
      {
        threshold: [0, 0.15, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: "-20% 0px -35% 0px" // Better detection for all sections
      }
    );

    // Observe all sections
    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling]); // Re-run when isScrolling changes

  // Toggle theme function
  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Smooth scroll to section
  const onLinkClick = (id) => (e) => {
    e.preventDefault();

    // Immediately set the active section
    setActiveSection(id);

    // Disable observer during scroll
    setIsScrolling(true);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Detect when scrolling stops
    let scrollTimeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        window.removeEventListener('scroll', handleScrollEnd);
      }, 150); // Wait 150ms after last scroll event
    };

    window.addEventListener('scroll', handleScrollEnd);

    // Fallback: re-enable after 2 seconds max
    setTimeout(() => {
      setIsScrolling(false);
      window.removeEventListener('scroll', handleScrollEnd);
    }, 2000);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 px-6 shadow-lg">

          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={onLinkClick("home")}
              className="text-lg text-[#24691b] font-bold  dark:text-[#acef8b] hover:opacity-80 transition"
            >
              aakash
            </a>
          </div>

          {/* Desktop Navigation - Pill Container */}
          <nav className="hidden md:flex items-center gap-2  bg-transparent ">
            <div className="relative flex items-center gap-1 bg-gray-200/10 dark:bg-gray-900 rounded-full p-1 border border-gray-200 dark:border-gray-800 shadow-xl">

              {links.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={onLinkClick(link.id)}
                    className={`
                      relative z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                      ${isActive
                        ? 'text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:text-[#32871ad1] dark:hover:text-white'
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-[linear-gradient(90deg,#75871ad1,#1a6c87d1)] dark:bg-[linear-gradient(135deg,#1a6c87,#75871a)] rounded-full -z-10 animate-fadeIn"></span>
                    )}

                    <Icon size={16} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              <Sun size={18} className="icon-sun" />
              <Moon size={18} className="icon-moon" />
            </button>
          </nav>

          {/* Mobile: All Icons + Theme Toggle */}
          <div className="md:hidden flex items-center gap-1">

            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-900 rounded-full p-1.5 border border-gray-200 dark:border-gray-800">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={onLinkClick(link.id)}
                    className={`
                      relative group p-2 rounded-full transition-all
                      ${isActive
                        ? 'bg-[linear-gradient(90deg,#75871ad1,#1a6c87d1)] dark:bg-[linear-gradient(135deg,#1a6c87,#75871a)] text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                      }
                    `}
                    aria-label={link.label}
                  >
                    <Icon size={16} />

                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                      {link.label}
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45"></span>
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-1 p-2   hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              <Sun size={16} className="icon-sun" />
              <Moon size={16} className="icon-moon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}