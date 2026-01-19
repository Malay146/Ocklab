"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Faqs = () => {
  const [active, setActive] = useState<number | null>(null);

  const faqs = [
    {
      q: "What kind of services does your studio actually provide?",
      a: "We cover the entire product lifecycle — from product strategy and UI/UX design to branding, frontend and backend development. We also help with launch, performance optimization, and long-term product evolution.",
    },
    {
      q: "Do you usually work with early-stage startups or established companies?",
      a: "Both. We regularly partner with early-stage startups to shape ideas from scratch, as well as established teams looking to redesign, scale, or improve existing products.",
    },
    {
      q: "How does your overall process work from idea to launch?",
      a: "Our process is structured but flexible. We start with discovery and alignment, move into design and prototyping, then development and iteration. You’ll have clear milestones, regular updates, and feedback loops throughout.",
    },
    {
      q: "How long does a typical design and development project take?",
      a: "Most projects take between 4 to 12 weeks. The exact timeline depends on scope, complexity, and how quickly feedback and approvals move during the project.",
    },
    {
      q: "Do you handle both product design and development in-house?",
      a: "Yes. Design and development are handled together in-house. This helps us move faster, maintain consistency, and ensure that what’s designed is built exactly as intended.",
    },
    {
      q: "Do you continue supporting products after they are launched?",
      a: "Absolutely. Post-launch support includes improvements, feature additions, performance tweaks, and scaling support. Many teams continue working with us long after the initial launch.",
    },
    {
      q: "How involved do clients usually need to be during the project?",
      a: "We keep collaboration lightweight and focused. You’ll be involved during key decisions and reviews, but we handle the day-to-day execution so you can stay focused on your business.",
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto mt-20" id="FAQs">
      <h1 className="font-bri font-semibold text-7xl tracking-tight">FAQs</h1>

      {/* List */}
      <motion.div
        layout
        className="border border-orange-400 select-none bg-white mt-12 rounded-2xl"
      >
        {faqs.map((item, i) => {
          const open = active === i;

          return (
            <motion.div
              key={i}
              layout
              className="border-b border-orange-400 p-8 cursor-pointer overflow-hidden"
              onClick={() => setActive(open ? null : i)}
              transition={{
                layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              }}
            >
              {/* Question */}
              <motion.div
                layout="position"
                className="flex items-start justify-between gap-8"
              >
                <motion.p
                  layout="position"
                  className="font-bri text-xl text-zinc-900"
                >
                  {item.q}
                </motion.p>

                <motion.span
                  layout="position"
                  animate={{ opacity: open ? 1 : 0.4 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  }}
                  className="font-mono text-sm text-zinc-500"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
              </motion.div>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <p className="font-sans text-zinc-600 leading-relaxed max-w-4xl text-md">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Faqs;
