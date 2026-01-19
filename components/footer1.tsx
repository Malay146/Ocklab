import React from "react";
import TextAnimation from "./text-animation";

const Footer1 = () => {
  return (
    <div className="w-full p-6 ">
      <div className="mt-20 w-full flex flex-col gap-4 items-center bg-orange-400 text-white rounded-[50px] p-30 relative overflow-hidden ring-1 ring-orange-200 shadow-lg">
        <Glow />
        <h1 className="font-bri text-7xl text-center font-bold tracking-tighter relative text-shadow-lg">
          Ready to Transform your Ideas?
        </h1>
        <p className="font-sans text-xl text-center mt-4 max-w-150 text-orange-10 leading-snug relative text-shadow-sm">
          We help teams design, develop, and launch products that people love.
          Start your project with us today.
        </p>
        <button className="mt-8 bg-white text-orange-400 font-bri font-semibold py-3 px-6 rounded-lg relative overflow-hidden cursor-pointer shadow-lg">
          <TextAnimation className="mt-1">Contact Us</TextAnimation>
        </button>
      </div>
    </div>
  );
};

export default Footer1;

const Glow = () => {
  return (
    <>
      <div className="w-500 h-30 bg-orange-100 absolute -bottom-6 bg-blend-color-dodge blur-[100px]" />
      <div className="w-500 h-30 bg-orange-200 absolute -bottom-6 bg-blend-color-dodge blur-[100px]" />
      <div className="w-500 h-40 bg-orange-300 absolute bottom-18 bg-blend-color-dodge blur-[100px]" />
      <div className="w-500 h-40 bg-orange-400 absolute bottom-18 bg-blend-color-dodge blur-[100px]" />
      <div className="w-500 h-40 bg-orange-400 absolute bottom-50 bg-blend-color-dodge blur-[50px]" />
      <div className="w-500 h-40 bg-orange-400 absolute bottom-50 bg-blend-color-dodge blur-[50px]" />
      <div className="w-500 h-40 bg-orange-500 absolute bottom-50 bg-blend-color-dodge blur-[100px]" />
      <div className="w-500 h-40 bg-orange-500 absolute bottom-50 bg-blend-color-dodge blur-[100px]" />
      <div className="w-500 h-40 bg-orange-600 absolute bottom-80 bg-blend-color-dodge blur-[100px]" />
    </>
  );
};
