"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Language, siteConfig } from "@/config/site";

export default function Countdown({ language }: { language: Language }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const texts = siteConfig.texts[language].countdown;

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const weddingDate = new Date(siteConfig.weddingDate).getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Картинка на полный экран */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/WhatsApp Image 2025-12-25 at 00.14.59 (1).jpeg"
          alt="Countdown"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Градиентный overlay снизу для лучшей видимости текста */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-[1] pointer-events-none"></div>

      {/* Текст и обратный отсчет поверх картинки снизу */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center pb-12 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Текст "Ұзату тойына дейін." */}
        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl font-cursive text-white mb-4"
          style={{ 
            fontFamily: "cursive",
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          {texts.title}
        </motion.p>

        {/* Обратный отсчет в формате "28 : 18 : 09 : 10" с подписями */}
        <div className="flex justify-center items-end gap-2 sm:gap-3">
          {/* Дни */}
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-white/90 uppercase" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
              {texts.days}
            </div>
          </div>
          
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>:</span>
          
          {/* Часы */}
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-white/90 uppercase" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
              {texts.hours}
            </div>
          </div>
          
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>:</span>
          
          {/* Минуты */}
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-white/90 uppercase" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
              {texts.minutes}
            </div>
          </div>
          
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>:</span>
          
          {/* Секунды */}
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-white/90 uppercase" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
              {texts.seconds}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

