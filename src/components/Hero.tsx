"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Language, siteConfig } from "@/config/site";

export default function Hero({ language }: { language: Language }) {
  const [imageError, setImageError] = useState(false);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-beige/40 via-beige/30 to-white/90 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-beige/20 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-beige/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <Image
            src="/images/WhatsApp Image 2025-12-25 at 00.14.58.jpeg"
            alt="Hero"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            onError={() => setImageError(true)}
            unoptimized
          />
        )}
      </div>
      
      {/* Градиентный overlay снизу для лучшей видимости текста */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-[5] pointer-events-none"></div>
      
      {/* Надписи внизу по центру */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center pb-20 px-4">
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cursive text-white whitespace-nowrap mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "cursive",
            textShadow: "3px 3px 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
          }}
        >
          {siteConfig.texts[language].hero.name}
        </motion.h2>
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cursive text-white whitespace-nowrap mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "cursive",
            textShadow: "3px 3px 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
          }}
        >
          {siteConfig.texts[language].hero.title}
        </motion.h1>
        <motion.button
          onClick={scrollToContent}
          className="z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              filter: "drop-shadow(3px 3px 8px rgba(0,0,0,0.8))",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}

