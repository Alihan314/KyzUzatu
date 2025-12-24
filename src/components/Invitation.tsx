"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Language, siteConfig } from "@/config/site";

export default function Invitation({ language }: { language: Language }) {
  const texts = siteConfig.texts[language].invitation;
  const textLines = texts.text.split("\n");

  return (
    <section className="pt-4 pb-8 px-4">
      <motion.div
        className="max-w-sm mx-auto rounded-large p-8 shadow-lg relative overflow-hidden"
        style={{ backgroundColor: "#D4C5B9" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-6 relative z-10 flex items-center gap-4">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {texts.greetingPart1}
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {texts.greetingPart2}
            </h2>
          </motion.div>
          <motion.div 
            className="relative w-40 h-40 flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/images/floral-decoration.png"
              alt="Floral decoration"
              fill
              className="object-contain"
              style={{
                mixBlendMode: "multiply",
              }}
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </motion.div>
        </div>
        
        <div className="text-white text-center whitespace-pre-line leading-relaxed space-y-2 relative z-10">
          {textLines.map((line, index) => {
            // Имя "Аяулымның" / "Аяулым" выделяем скриптом
            if (line.includes("Аяулым") || line.includes("Аяулымның")) {
              return (
                <motion.p
                  key={index}
                  className="text-5xl md:text-6xl lg:text-7xl font-cursive"
                  style={{
                    fontFamily: "cursive",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                >
                  {line}
                </motion.p>
              );
            }
            return (
              <motion.p 
                key={index} 
                className="text-xl md:text-2xl lg:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              >
                {line}
              </motion.p>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

