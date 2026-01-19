import React from "react";
import Image from "next/image";

const Productivity = () => {
  return (
    <MergedShape fill="#ff8b09" style={{ margin: "0 auto", marginTop: 80}} />
  );
};

export default Productivity;

const MergedShape = ({
  fill = "#ffffff",
  children,
  style: containerStyle,
  ...props
}: {
  fill?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      position: "relative",
      width: 1280,
      height: 800,
      ...containerStyle,
    }}
    {...props}
  >
    <h1 className="absolute -top-2 left-1/2 -translate-x-1/2 font-bri font-semibold text-8xl tracking-tight">
      Productivity
    </h1>
    <p className="font-bri text-5xl font-semibold tracking-tighter bottom-6 right-3 absolute">100+ Projects</p>
    {/* Shape 1 */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 100,
        width: 1280,
        height: 600,
        backgroundColor: fill,
        borderRadius: "0px 0px 20px 0px",
      }}
    >
      <div className="w-full h-full text-white font-bri p-8 relative overflow-hidden">
        <div className="w-full h-70 absolute top-2 -left-100">
          <Image
            src="/undraw/dev.svg"
            alt="Description"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full h-60 absolute top-88 -left-90">
          <Image
            src="/undraw/settings.svg"
            alt="Description"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full h-80 absolute top-30 right-5">
          <Image
            src="/undraw/docs.svg"
            alt="Description"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full h-50 absolute top-8 -right-100">
          <Image
            src="/undraw/model.svg"
            alt="Description"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full h-65 absolute top-80 -right-90">
          <Image
            src="/undraw/time.svg"
            alt="Description"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
    {/* Shape 2 */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 320,
        height: 100,
        backgroundColor: fill,
        borderRadius: "32px 32px 0px 0px",
      }}
    >
      {/* Add content here */}
    </div>
    {/* Shape 3 */}
    <div
      style={{
        position: "absolute",
        left: 960,
        top: 0,
        width: 320,
        height: 100,
        backgroundColor: fill,
        borderRadius: "32px 32px 0px 0px",
      }}
    >
      {/* Add content here */}
    </div>
    {/* Shape 4 */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 700,
        width: 970,
        height: 100,
        backgroundColor: fill,
        borderRadius: "0px 0px 32px 32px",
      }}
    >
      <div className="flex w-full h-full flex-center p-4 py-5">
        <h2 className="font-bri font-semibold text-white text-6xl text-center w-full h-full">
          Make Your Projects Move Faster
        </h2>
      </div>
    </div>
    {/* Negative Space 1 - Content container for empty region */}
    <div
      style={{
        position: "absolute",
        left: 970,
        top: 700,
        width: 310,
        height: 100,
        // Transparent container for content in negative space
      }}
    >
      {/* Add content here */}
    </div>
    {/* Bridge 1 */}
    <svg
      style={{
        position: "absolute",
        left: 320,
        top: 80,
        width: 20,
        height: 20,
        pointerEvents: "none",
      }}
      viewBox="0 0 20 20"
    >
      <path d="M 0 0 C 0 14.92 3.5999999999999996 20 20 20 H 0 Z" fill={fill} />
    </svg>
    {/* Bridge 2 */}
    <svg
      style={{
        position: "absolute",
        left: 940,
        top: 80,
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
    {/* Bridge 3 */}
    <svg
      style={{
        position: "absolute",
        left: 970,
        top: 700,
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
    {children}
  </div>
);
