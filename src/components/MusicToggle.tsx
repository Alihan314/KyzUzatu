"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Language, siteConfig } from "@/config/site";

export default function MusicToggle({ language }: { language: Language }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const savedStateRef = useRef<string | null>(null);

  useEffect(() => {
    savedStateRef.current = localStorage.getItem("musicPlaying");
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (isPlaying && hasInteracted) {
      audio.currentTime = siteConfig.music.startTime;
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }

    localStorage.setItem("musicPlaying", isPlaying.toString());
  }, [isPlaying, hasInteracted]);

  const handleToggle = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      if (savedStateRef.current === "true") {
        setIsPlaying(true);
        return;
      }
    }
    setIsPlaying(!isPlaying);
  };

  const texts = siteConfig.texts[language].music;

  return (
    <>
      <audio ref={audioRef} src={siteConfig.music.path} loop />
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
          <motion.button
            onClick={handleToggle}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-beige rounded-full shadow-lg flex items-center justify-center hover:bg-beige/90 active:bg-beige/80 transition-colors relative z-10 touch-manipulation"
            animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
          >
            {isPlaying ? (
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            )}
          </motion.button>
          <motion.svg
            className="absolute inset-0 w-32 h-32 sm:w-36 sm:h-36 pointer-events-none"
            viewBox="0 0 128 128"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <defs>
              <path
                id={`circle-path-${language}`}
                d="M 64,64 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              />
            </defs>
            <defs>
              <filter id={`text-shadow-${language}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="2" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.7"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <text
              className="fill-beige font-semibold"
              fontFamily="Arial, sans-serif"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="1"
              style={{ 
                fontSize: "clamp(12px, 3vw, 16px)",
                fontWeight: "600",
                filter: `url(#text-shadow-${language})`,
                paintOrder: "stroke fill"
              }}
            >
              <textPath
                href={`#circle-path-${language}`}
                startOffset="0%"
                textAnchor="start"
              >
                {texts.clickToPlay}
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </>
  );
}

