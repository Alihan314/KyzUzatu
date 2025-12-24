"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Language, siteConfig } from "@/config/site";

export default function Calendar({ language }: { language: Language }) {
  const weddingDate = new Date(siteConfig.weddingDate);
  const month = weddingDate.getMonth();
  const year = weddingDate.getFullYear();
  const day = weddingDate.getDate();
  const hours = weddingDate.getHours();
  const minutes = weddingDate.getMinutes();
  const timeString = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

  const texts = siteConfig.texts[language].calendar;
  const monthName = texts.months[month];

  // Получаем день недели (0 = воскресенье, 1 = понедельник, ...)
  // Преобразуем так, чтобы понедельник был 0
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const firstDayMonday = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Понедельник = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDayMonday; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const weekDays = language === "kz" 
    ? ["Дс", "Сс", "Ср", "Бс", "Жм", "Сб", "Жс"]
    : ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const dayNames = language === "kz"
    ? ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"]
    : ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const selectedDayName = dayNames[weddingDate.getDay()];

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
            src="/images/WhatsApp Image 2025-12-25 at 02.57.52.jpeg"
            alt="Calendar background"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Легкий overlay для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-white/85 z-[1]"></div>

        {/* Вопрос "Кай күні?" вверху справа */}
        <div className="relative z-10 flex justify-end items-start mb-6">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-cursive text-gray-800 leading-tight"
            style={{ fontFamily: "cursive" }}
          >
            {language === "kz" ? "Кай күні?" : "Какой день?"}
          </h2>
        </div>

        {/* Месяц - строго по центру */}
        <div className="flex justify-center mb-4 relative z-10">
          <p className="text-lg text-gray-800 font-normal leading-normal">{monthName}</p>
        </div>

        {/* Выбранная дата и время - как крест */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-1 mb-4 relative z-10">
          {/* День недели слева */}
          <div className="flex justify-end">
            <div className="text-right px-2 py-2 border-b-2 border-gray-400">
              <p className="text-xs sm:text-sm text-gray-700 whitespace-nowrap font-medium leading-tight">{selectedDayName}</p>
            </div>
          </div>
          
          {/* Число по центру - строго по центру */}
          <div className="text-center px-2 py-2 border-b-2 border-gray-400">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none">{day}</p>
          </div>
          
          {/* Время справа */}
          <div className="flex justify-start">
            <div className="text-left px-2 py-2 border-b-2 border-gray-400">
              <p className="text-xs sm:text-sm text-gray-700 whitespace-nowrap font-medium leading-tight">{timeString}</p>
            </div>
          </div>
        </div>

        {/* Год - строго по центру */}
        <div className="flex justify-center mb-4 relative z-10">
          <p className="text-lg text-gray-800 font-normal leading-normal">{year}</p>
        </div>

        {/* Заголовок календаря */}
        <div className="text-center mb-3 relative z-10">
          <p className="text-base text-gray-800 font-medium">
            {monthName} {year}
          </p>
        </div>

        {/* Дни недели */}
        <div className="grid grid-cols-7 gap-1 mb-2 relative z-10">
          {weekDays.map((weekDay) => (
            <div
              key={weekDay}
              className="text-center text-xs font-medium text-gray-700 py-1"
            >
              {weekDay}
            </div>
          ))}
        </div>

        {/* Календарная сетка */}
        <div className="grid grid-cols-7 gap-1 relative z-10">
          {days.map((date, index) => (
            <div
              key={index}
              className={`aspect-square flex items-center justify-center text-sm rounded-lg relative ${
                date === day
                  ? "text-gray-800"
                  : date
                  ? "text-gray-700"
                  : ""
              }`}
            >
              {date === day ? (
                <>
                  <span className="font-bold z-10 relative">{date}</span>
                  <svg
                    className="absolute inset-0 w-full h-full text-red-500 z-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </>
              ) : (
                date
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

