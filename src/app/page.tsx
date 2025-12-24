"use client";

import { useState, useEffect } from "react";
import { Language } from "@/config/site";
import LanguageToggle from "@/components/LanguageToggle";
import MusicToggle from "@/components/MusicToggle";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Gallery from "@/components/Gallery";
import Countdown from "@/components/Countdown";
import Calendar from "@/components/Calendar";
import Location from "@/components/Location";
import Hosts from "@/components/Hosts";
import RSVPForm from "@/components/RSVPForm";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  const [language, setLanguage] = useState<Language>("kz");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved === "kz" || saved === "ru") {
      setLanguage(saved);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <LanguageToggle onLanguageChange={setLanguage} />
      <MusicToggle language={language} />
      <Hero language={language} />
      <Invitation language={language} />
      <Gallery />
      <Calendar language={language} />
      <Countdown language={language} />
      <Location language={language} />
      <Hosts language={language} />
      <RSVPForm language={language} />
      <PhotoGallery />
    </main>
  );
}

