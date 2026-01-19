import React from "react";
import TextAnimation from "../text-animation";
import { Plus } from "lucide-react";

const Pricing = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 px-4" id="pricing">
      <h1 className="font-bri font-semibold text-7xl tracking-tight">
        Pricing
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-end">
        {/* BASIC */}
        <div className="border-2 border-orange-300 flex flex-col justify-between rounded-2xl bg-white p-6 h-full transition-all hover:shadow-lg">
          <div className="">
            <h2 className="font-bri text-4xl font-bold text-center">
              Basic Plan
            </h2>

            <p className="font-sans leading-snug mt-3 text-zinc-500 text-center">
              Perfect for founders who want to validate fast without
              overbuilding.
            </p>

            <div className="flex flex-col items-center mt-6">
              <span className="font-bri text-6xl font-bold">$1900</span>
              <span className="font-sans text-zinc-500">MVPs</span>
            </div>

            <ul className="mt-6">
              {[
                "Up to 3 user flows",
                "Basic UI/UX design",
                "Responsive design",
                "1 revision round",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-sans text-lg text-zinc-700 mt-4 flex items-center gap-2"
                >
                  <span className="text-orange-500">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full  bg-orange-400 text-white py-3 rounded-xl font-bri font-semibold cursor-pointer">
            <TextAnimation className="mt-1">
              Get Started with Basic
            </TextAnimation>
          </button>
        </div>

        {/* STANDARD (HIGHLIGHTED) */}
        <div className="border-2 border-orange-400 rounded-3xl flex flex-col justify-between bg-orange-400 text-white p-8 h-full scale-105 shadow-2xl relative">
          <div className="">
            {/* Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>

            <h2 className="font-bri text-5xl font-bold text-center">
              Pro Plan
            </h2>

            <p className="font-sans leading-snug mt-3 text-orange-50 text-center">
              Ideal for startups aiming for growth with a solid product
              foundation.
            </p>

            <div className="flex flex-col items-center mt-6">
              <span className="font-bri text-6xl font-bold">$3500</span>
              <span className="font-sans text-orange-100">Full Products</span>
            </div>

            <p className="font-sans text-white mt-6 text-xl font-medium">
              Everything in Standard, Plus more
            </p>

            <ul className="">
              {[
                "Up to 7 user flows",
                "Advanced UI/UX design",
                "Responsive & adaptive design",
                "3 revision rounds",
                "Basic user testing",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-sans text-lg mt-4 flex items-center gap-2"
                >
                  <span className="text-white">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full mt-8 bg-white text-orange-500 py-3 rounded-xl font-bri font-semibold cursor-pointer">
            <TextAnimation className="mt-1">Get Started with Pro</TextAnimation>
          </button>
        </div>

        {/* PREMIUM */}
        <div className="border-2 flex flex-col justify-between border-orange-300 rounded-2xl bg-white p-6 h-full transition-all hover:shadow-lg">
          <div className="">
            <h2 className="font-bri text-4xl font-bold text-center">
              Enterprise Plan
            </h2>

            <p className="font-sans leading-snug mt-3 text-zinc-500 text-center">
              Best for established businesses seeking comprehensive solutions.
            </p>

            <div className="flex flex-col items-center mt-6">
              <span className="font-bri text-6xl font-bold">$6000</span>
              <span className="font-sans text-zinc-500">Enterprise</span>
            </div>

            <p className="font-sans text-zinc-800 font-semibold mt-6 text-xl">
              Everything in Pro, Plus more
            </p>

            <ul className="">
              {[
                "Unlimited user flows",
                "Full UI/UX design",
                "Mobile-first approach",
                "Unlimited revisions",
                "Comprehensive testing",
                "Post-launch support",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-sans text-lg text-zinc-700 mt-4 flex items-center gap-2"
                >
                  <span className="text-orange-500">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full mt-8 bg-orange-400 text-white py-3 rounded-xl font-bri font-semibold cursor-pointer">
            <TextAnimation className="mt-1">
              Get Started with Enterprise
            </TextAnimation>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
