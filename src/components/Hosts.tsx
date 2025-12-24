"use client";

import { motion } from "framer-motion";
import { Language, siteConfig } from "@/config/site";

export default function Hosts({ language }: { language: Language }) {
  const texts = siteConfig.texts[language].hosts;

  return (
    <section className="py-8 px-4">
      <motion.div
        className="max-w-sm mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Заголовок "Той иесі:" */}
        <motion.h2
          className="text-2xl md:text-3xl font-medium text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {texts.title}
        </motion.h2>

        {/* Имена в каллиграфическом стиле */}
        <motion.p
          className="text-4xl md:text-5xl lg:text-6xl font-cursive mb-6"
          style={{
            fontFamily: "cursive",
            color: "#8B4513",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {texts.names}
        </motion.p>

        {/* Декоративный элемент */}
        <motion.div
          className="flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <svg
            width="200"
            height="40"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-amber-800"
            style={{ color: "#8B6F47" }}
          >
            <path
              id="decorative-path"
              d="M0 20 Q 50 10, 100 20 T 200 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <motion.circle
              r="4"
              fill="currentColor"
              animate={{
                cx: [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100, 112.5, 125, 137.5, 150, 162.5, 175, 187.5, 200, 187.5, 175, 162.5, 150, 137.5, 125, 112.5, 100, 87.5, 75, 62.5, 50, 37.5, 25, 12.5, 0],
                cy: [
                  20, 17.81, 16.25, 15.31, 15, 15.31, 16.25, 17.81, 20, 17.81, 16.25, 15.31, 15, 18.31, 8.25, 17.81, 20,
                  17.81, 16.25, 15.31, 15, 15.31, 16.25, 17.81, 20, 17.81, 16.25, 15.31, 15, 15.31, 16.25, 17.81, 20
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

