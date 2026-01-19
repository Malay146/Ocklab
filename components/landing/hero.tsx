import React from "react";
import TextAnimation from "../text-animation";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-28 gap-10" id="hero">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start justify-center text-left md:pr-10 -mt-28">
        <div className="font-bri text-5xl md:text-[85px] font-bold tracking-tight mb-6">
          <h1>
            Build Like,{" "}
            <span className="block italic text-orange-400">Never Before</span>
          </h1>
        </div>
        <p className="text-lg tracking-tight text-zinc-500 mb-8 font-sans">
          From idea to production, our platform helps you manage workflows,
          collaborate across teams, and scale your product seamlessly—all from a
          single, intuitive workspace.
        </p>
        <div className="flex items-center gap-4">
          <button className="px-3 py-2 group bg-black text-white rounded-md cursor-pointer">
            <TextAnimation>Get Started</TextAnimation>
          </button>
          <Link href="/works" className="px-3 py-2 rounded-md border group border-black cursor-pointer">
            <TextAnimation>View Works</TextAnimation>
          </Link>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center w-full">
        {/* Replace below with your visual/illustration/image */}
        <MergedShape fill="#ff8b09" />
      </div>
    </div>
  );
};

export default Hero;

type MergedShapeProps = {
  fill?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const MergedShape = ({
  fill = "#ffffff",
  children,
  style: containerStyle,
  ...props
}: MergedShapeProps) => (
  <div
    style={{
      position: "relative",
      width: 540,
      height: 670,
      ...containerStyle,
    }}
    {...props}
  >
    {/* Shape 1 */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 160,
        width: 270,
        height: 280,
        backgroundColor: fill,
        borderRadius: "20px 0px 0px 20px",
      }}
    >
      <div className="w-full h-full text-white font-bri flex flex-col gap-4 p-4">
        <div className="">
          <h1 className="text-5xl font-black">10X</h1>
          <p className="text-md tracking-tight">Faster Delivery Cycles</p>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-5xl font-black">99.9%</h1>
          <p className="text-md tracking-tight">Platform uptime</p>
        </div>
        <div className="">
          <h1 className="text-5xl font-black">1000+</h1>
          <p className="text-md tracking-tight">Satisfied Customers</p>
        </div>
      </div>
    </div>
    {/* Shape 2 */}
    <div
      style={{
        position: "absolute",
        left: 270,
        top: 0,
        width: 270,
        height: 280,
        backgroundColor: fill,
        borderRadius: "20px 20px 20px 0px",
      }}
    >
      <div className="w-full h-full text-white font-bri flex flex-col gap-6 p-4">
        {/* Title */}
        <h1 className="text-5xl font-black tracking-tight">Plan Faster</h1>

        {/* Image wrapper */}
        <div className="relative w-full h-55">
          <Image
            src="/undraw/first.svg"
            alt="Plan Faster"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
    {/* Shape 3 */}
    <div
      style={{
        position: "absolute",
        left: 270,
        top: 390,
        width: 270,
        height: 280,
        backgroundColor: fill,
        borderRadius: "0px 20px 20px 20px",
      }}
    >
      <div className="w-full h-full flex p-4">
        <div className="relative w-full h-full rounded-2xl bg-white">
          <Image
            src="/undraw/third.svg"
            alt="Plan Faster"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      </div>
    </div>
    {/* Negative Space 1 - Content container for empty region */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 270,
        height: 160,
        // Transparent container for content in negative space
      }}
    >
      {/* Add content here */}
    </div>
    {/* Negative Space 2 - Content container for empty region */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 440,
        width: 270,
        height: 230,
        // Transparent container for content in negative space
      }}
    >
      {/* Add content here */}
    </div>
    {/* Bridge 1 */}
    <svg
      style={{
        position: "absolute",
        left: 270,
        top: 280,
        width: 20,
        height: 20,
        pointerEvents: "none",
      }}
      viewBox="0 -20 20 20"
    >
      <path
        d="M 0 0 C 0 -14.92 3.5999999999999996 -20 20 -20 H 0 Z"
        fill={fill}
      />
    </svg>
    {/* Bridge 2 */}
    <svg
      style={{
        position: "absolute",
        left: 270,
        top: 370,
        width: 20,
        height: 20,
        pointerEvents: "none",
      }}
      viewBox="0 0 20 20"
    >
      <path d="M 0 0 C 0 14.92 3.5999999999999996 20 20 20 H 0 Z" fill={fill} />
    </svg>
    {/* Bridge 3 */}
    <svg
      style={{
        position: "absolute",
        left: 250,
        top: 140,
        width: 20,
        height: 20,
        pointerEvents: "none",
      }}
      viewBox="-20 0 20 20"
    >
      <path
        d="M 0 0 C 0 14.92 -3.5999999999999996 20 -20 20 H 0 Z"
        fill={fill}
      />
    </svg>
    {/* Bridge 4 */}
    <svg
      style={{
        position: "absolute",
        left: 250,
        top: 440,
        width: 20,
        height: 20,
        pointerEvents: "none",
      }}
      viewBox="-20 -20 20 20"
    >
      <path
        d="M 0 0 C 0 -14.92 -3.5999999999999996 -20 -20 -20 H 0 Z"
        fill={fill}
      />
    </svg>
    {children}
  </div>
);
