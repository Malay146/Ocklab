"use client";
import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const Design = () => {
  const steps = [
    "Wireframes",
    "Visual Design",
    "Design System",
    "Final Review",
  ];

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        hover: {
          transition: {
            staggerChildren: 0.15, // 👈 stagger checks
          },
        },
      }}
      className="w-full h-100 border border-zinc-100 bg-zinc-100 rounded-2xl flex flex-col p-4 group"
    >
      <motion.div className="w-full h-full font-sans">
        <motion.div className="w-full border border-zinc-300 rounded-2xl bg-white p-4 flex flex-col justify-between gap-2 shadow-lg overflow-hidden">
          {/* Title */}
          <div className="w-fit px-4 py-1 rounded-full bg-zinc-300 group-hover:bg-transparent transition-colors duration-300 ease-in text-lg font-bold text-zinc-800 font-bri">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Design Flow
            </span>
          </div>

          {/* Descriptions */}
          <div className="text-sm flex flex-col gap-1 mb-3">
            {[
              "1. Create wireframes and layouts",
              "2. Apply visual hierarchy",
              "3. Build a scalable design system",
            ].map((text, i) => (
              <div
                key={i}
                className="h-6 flex items-center text-xs text-orange-600 font-sans font-semibold"
              >
                <span className="px-3 py-1 rounded-full bg-orange-500 group-hover:bg-transparent transition-colors duration-300 ease-in">
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {text}
                  </p>
                </span>
              </div>
            ))}
          </div>

          {/* Progress */}
          <motion.div
            className="w-full flex gap-6 justify-center relative"
            variants={{
              rest: {},
              hover: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <div className="absolute w-[80%] h-0.5 bg-orange-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />

            {steps.map((_, index) => (
              <motion.div
                key={index}
                variants={{
                  rest: {
                    backgroundColor: "#FFD6A7",
                  },
                  hover: {
                    backgroundColor: "#FF8B09",
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="size-12 rounded-full relative z-20 flex items-center justify-center"
              >
                <motion.div
                  variants={{
                    rest: { scale: 0, opacity: 0 },
                    hover: { scale: 1, opacity: 1 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                >
                  <Check className="size-6 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Section text */}
      <div className="w-full h-full flex flex-col gap-3 justify-end">
        <h1 className="text-5xl text-black font-bold font-bri">02 Design</h1>
        <p className="text-md text-zinc-500 font-sans">
          Design your product with user experience, clarity, and scalability in
          mind.
        </p>
      </div>
    </motion.div>
  );
};

export default Design;
