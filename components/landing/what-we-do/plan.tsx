"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Plan = () => {
  const steps = [
    {
      title: "Gathering Information",
      description: "24 Jan 2025",
      status: "Complete",
    },
    {
      title: "Campaign Planning",
      description: "22 Jan 2025",
      status: "In Progress",
    },
    {
      title: "Product Launch",
      description: "20 Jan 2025",
      status: "Pending",
    },
    {
      title: "Market Research",
      description: "18 Jan 2025",
      status: "Complete",
    },
  ];

  const [active, setActive] = useState(0);

  const statusStyles: Record<string, string> = {
    Complete: "from-lime-400 to-green-500",
    "In Progress": "from-orange-400 to-orange-500",
    Pending: "from-zinc-400 to-zinc-500",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-zinc-100 rounded-2xl p-4 overflow-hidden flex flex-col justify-end">
      {/* Card stack */}
      <div className="relative h-50">
        {steps.map((step, index) => {
          const position = (index - active + steps.length) % steps.length;

          return (
            <motion.div
              key={index}
              animate={{
                y: position * -28,
                scale: 1 - position * 0.05,
                // opacity: position === 0 ? 1 : 0.9,
                filter: `blur(${position * 0.8}px)`,
                zIndex: steps.length - position,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute top-16 left-0 right-0 mx-auto w-[95%] bg-white rounded-xl border border-zinc-200 shadow-md p-3 flex justify-between items-center"
            >
              <div>
                <h3 className="text-md font-semibold text-black">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-500">{step.description}</p>
              </div>

              <div
                className={`bg-linear-to-b ${
                  statusStyles[step.status]
                } text-white text-sm px-3 py-1 rounded-md`}
              >
                {step.status}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer text */}
      <div className="">
        <h1 className="text-5xl font-bold font-bri text-black">01 Plan</h1>
        <p className="text-md font-sans text-zinc-500 mt-2">
          Organize tasks and assets with a clear, visual workflow.
        </p>
      </div>
    </div>
  );
};

export default Plan;
