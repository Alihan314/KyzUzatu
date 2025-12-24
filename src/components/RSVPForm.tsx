"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Language, siteConfig } from "@/config/site";

export default function RSVPForm({ language }: { language: Language }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const texts = siteConfig.texts[language].rsvp;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !attendance) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, attendance, language }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setPhone("");
        setAttendance("");
      } else {
        // Handle different error statuses
        if (response.status === 404) {
          setError(
            language === "kz"
              ? "API endpoint табылмады. Деректерді сақтау мүмкін емес."
              : "API endpoint не найден. Невозможно сохранить данные."
          );
        } else if (response.status === 400) {
          const data = await response.json();
          setError(
            data.error ||
              (language === "kz"
                ? "Деректер дұрыс емес. Барлық өрістерді толтырыңыз."
                : "Данные некорректны. Заполните все поля.")
          );
        } else {
          setError(
            language === "kz"
              ? "Қате орын алды. Кейінірек қайталап көріңіз."
              : "Произошла ошибка. Попробуйте позже."
          );
        }
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setError(
        language === "kz"
          ? "Желі қатесі. Интернет байланысын тексеріңіз."
          : "Ошибка сети. Проверьте подключение к интернету."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-8 px-4">
        <motion.div
          className="max-w-sm mx-auto bg-beige rounded-large p-8 shadow-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white text-lg">{texts.success}</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-sm mx-auto bg-beige rounded-large p-6 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          {texts.title}
        </h3>
        {error && (
          <motion.div
            className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-large text-red-100 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-2 font-medium">
              {texts.nameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-large bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-medium">
              {texts.phoneLabel}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-large bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder={language === "kz" ? "+7 (XXX) XXX-XX-XX" : "+7 (XXX) XXX-XX-XX"}
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-medium">
              {language === "kz" ? "Жауап" : "Ответ"}
            </label>
            <div className="space-y-2">
              {[
                { value: "coming", label: texts.option1 },
                { value: "coming-with-partner", label: texts.option2 },
                { value: "not-coming", label: texts.option3 },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    checked={attendance === option.value}
                    onChange={(e) => setAttendance(e.target.value)}
                    className="w-4 h-4 text-beige focus:ring-beige focus:ring-2"
                    required
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-beige rounded-large py-3 px-4 font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? language === "kz"
                ? "Жіберілуде..."
                : "Отправка..."
              : texts.submitButton}
          </button>
        </form>
      </motion.div>
    </section>
  );
}

