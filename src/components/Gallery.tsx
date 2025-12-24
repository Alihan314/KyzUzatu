"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-8 px-4">
      <motion.div
        className="max-w-sm mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-sm aspect-[3/4] rounded-large overflow-hidden bg-gradient-to-br from-beige/30 via-beige/20 to-white mx-auto">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-beige/20 to-white">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-beige/20 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-beige/50"
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
              src="/images/WhatsApp Image 2025-12-25 at 00.14.59.jpeg"
              alt="Gallery"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              onError={() => setImageError(true)}
              unoptimized
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}

