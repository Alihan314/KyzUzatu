"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Language, siteConfig } from "@/config/site";

export default function Location({ language }: { language: Language }) {
  const texts = siteConfig.texts[language].location;
  const address = language === "kz" 
    ? siteConfig.location.addressKz 
    : siteConfig.location.addressRu;

  const openMap = () => {
    const { lat, lng } = siteConfig.location.coordinates;
    window.open(
      `https://www.google.com/maps?q=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <section className="py-8 px-4">
      <motion.div
        className="max-w-sm mx-auto rounded-large p-6 shadow-lg relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Фоновая картинка */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/WhatsApp Image 2025-12-25 at 03.18.19.jpeg"
            alt="Location background"
            fill
            className="object-cover opacity-50"
            unoptimized
          />
        </div>

        {/* Overlay для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-beige/70 z-[1]"></div>

        {/* Контент поверх фона */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {texts.title}
          </h3>
          <div className="text-white text-center mb-4">
            <p className="text-xl font-semibold mb-2">{siteConfig.location.name}</p>
            <p className="whitespace-pre-line leading-relaxed">{address}</p>
          </div>
          <button
            onClick={openMap}
            className="w-full bg-white text-beige rounded-large py-3 px-4 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {language === "kz" ? "Картаны ашу" : "Открыть карту"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

