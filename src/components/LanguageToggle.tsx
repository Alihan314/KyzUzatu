"use client";

import { useEffect, useState } from "react";
import { Language, siteConfig } from "@/config/site";

export default function LanguageToggle({
  onLanguageChange,
}: {
  onLanguageChange: (lang: Language) => void;
}) {
  const [language, setLanguage] = useState<Language>("kz");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved === "kz" || saved === "ru") {
      setLanguage(saved);
      onLanguageChange(saved);
    } else {
      onLanguageChange("kz");
    }
  }, [onLanguageChange]);

  const toggleLanguage = () => {
    const newLang = language === "kz" ? "ru" : "kz";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    onLanguageChange(newLang);
  };

  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50">
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-xs sm:text-sm font-medium text-gray-700 hover:bg-white active:bg-white/80 transition-colors touch-manipulation"
      >
        <span className={language === "kz" ? "font-bold" : ""}>KZ</span>
        <span className="text-gray-300">|</span>
        <span className={language === "ru" ? "font-bold" : ""}>RU</span>
      </button>
    </div>
  );
}

