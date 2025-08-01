import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import akaman from "./assets/akaman.png";
import CC from "./assets/CC.jpg";
import Cutrite from "./assets/Cutrite.png";
import Gaulani from "./assets/Gaulani.png";
import Katoya from "./assets/Katoya.png";
import MidMedia from "./assets/MidMedia.png";
import Mutakamwa from "./assets/Mutakamwa.png";
import Omache from "./assets/Omache.png";
import Psycho from "./assets/Psycho.jpg";
import Reddys from "./assets/Reddys.png";
import Sherdon from "./assets/Sherdon.jpg";
import Zamdrop from "./assets/Zamdrop.png";

// --- Helper Components ---

// Sun Icon for Light Mode
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

// Moon Icon for Dark Mode
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

// Icon for external link
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// --- Main Portfolio Component ---

// Mock data for portfolio projects
const portfolioItems = [
  {
    id: 1,
    title: "CC Gabriel & Co Legal Practitioners",
    imageUrl: CC,

    description: "Website for CC Gabriel & Co Legal Practitioners",
    liveUrl: "https://ccgabriel.com",
  },
  {
    id: 2,
    title: "Gaulani Agrovet",
    imageUrl: Gaulani,
    description: "Website for Gualani Agrovet.",
    liveUrl: "https://gaulani.com/",
  },
  {
    id: 3,
    title: "Mutakamwa Productions",
    imageUrl: Mutakamwa,
    description: "Website for Mutakamwa Productions.",
    liveUrl: "https://mutakamwa.org",
  },
  {
    id: 4,
    title: "Omache Lodge",
    imageUrl: Omache,
    description: "Website for Omache Lodge",
    liveUrl: "https://omachelodge.com/",
  },
  {
    id: 5,
    title: "Katoya Innovations",
    imageUrl: Katoya,
    description: "Website for Katoya Innovations",
    liveUrl: "http://Katoya-innovations.com/",
  },
  {
    id: 6,
    title: "Psycho Lumen",
    imageUrl: Psycho,
    description: "Website for Psychlumen",
    liveUrl: "http://psychelumen.com/",
  },
  {
    id: 7,
    title: "Cutrite",
    imageUrl: Cutrite,
    description: "Website for Cutrite",
    liveUrl: "http://cutritengineers.com/",
  },
  {
    id: 8,
    title: "Sherdon Engineering Limited",
    imageUrl: Sherdon,
    description: "Website for Sherdon Engineering Limited",
    liveUrl: "https://sherdongroup.com/",
  },
  {
    id: 9,
    title: "Zamdrop",
    imageUrl: Zamdrop,
    description: "Website for Zamdrop",
    liveUrl: "https://zam-drop.netlify.app/",
  },
  {
    id: 10,
    title: "Akaman's Portfolio",
    imageUrl: akaman,
    description: "Portfolio Website for akaman",
    liveUrl: "https://akaman.netlify.app/",
  },
  {
    id: 11,
    title: "MidMedia (Concept)",
    imageUrl: MidMedia,
    description: "Concept for MidMedia's Website",
    liveUrl: "https://test.katoya-innovations.com/",
  },
  {
    id: 12,
    title: "Reddy Convention Centre (Concept)",
    imageUrl: Reddys,
    description: "Concept for Reddy Convention Centre website.",
    liveUrl: "https://reddy.katoya-innovations.com/",
  },
];

// Portfolio Card Component
const PortfolioCard = ({ item }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/10 flex flex-col">
      <div className="relative h-48 w-full">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/cccccc/ffffff?text=Image+Error";
          }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
          {item.description}
        </p>
        <div className="mt-auto">
          {item.liveUrl && item.liveUrl !== "#" && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Visit Website
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Theme Toggle Button Component
const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        <header className="flex justify-between items-center mb-12 sm:mb-16">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              LEVEL UP PORTFOLIO
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
              A selection of my recent projects.
            </p>
          </div>
          <ThemeToggleButton />
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </main>
      </div>
    </div>
  );
}
