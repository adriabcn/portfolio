import { useEffect, useState } from "react";

const lightIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const darkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

// 🧠 Pre-render logic
const getInitialMode = () => {
  const saved = localStorage.getItem("isDarkmode");
  if (saved !== null) {
    return saved === "true";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const initialMode = getInitialMode();
if (initialMode) {
  document.documentElement.classList.add("dark");
}

export const ThemeToggle = () => {
    // ⚠️ No modificar el DOM directamente aquí, solo sincronizar
    const [isDarkMode, setIsDarkMode] = useState(() => {
      const saved = localStorage.getItem("isDarkmode");
      if (saved !== null) return saved === "true";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("isDarkmode", isDarkMode);
    }, [isDarkMode]);
  
    return (
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="w-20 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center transition duration-300 shadow relative p-1"
      >
        <div
          className={`w-8 h-8 rounded-full transition-transform duration-500 transform ${
            isDarkMode ? "translate-x-[2.5rem] bg-gray-700" : "translate-x-0 bg-yellow-400"
          } flex items-center justify-center text-white`}
        >
          {isDarkMode ? darkIcon : lightIcon}
        </div>
      </button>
    );
  };