"use client";

import { motion } from "framer-motion";
import { Language, siteConfig } from "@/config/site";

export default function Phrase({ language }: { language: Language }) {
  const texts = siteConfig.texts[language].phrase;

  return (
    <section className="py-8 px-4">
      <motion.div
        className="max-w-sm mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-2xl font-medium text-gray-800 whitespace-pre-line leading-relaxed">
          {texts.text}
        </p>
      </motion.div>
    </section>
  );
}

