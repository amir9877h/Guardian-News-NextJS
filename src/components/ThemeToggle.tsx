"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button className="p-2 rounded-lg" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
