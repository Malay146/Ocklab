import React from "react";
import Image from "next/image";

const Deploy = () => {
  return (
    <div className="w-full h-100 border border-zinc-100 bg-zinc-100 rounded-2xl flex flex-col p-4 group">
        <div className="relative h-120 group-hover:h-150 transition-all duration-300 ease-in-out mb-4">
            <Image src="/undraw/launch.svg" alt="Deploy Illustration" fill className="object-contain" />
        </div>
      <div className="w-full h-full flex flex-col gap-3 justify-end">
        <h1 className="text-5xl text-black font-bold font-bri">04 Deploy</h1>
        <p className="text-md text-zinc-500 font-sans">
          Deploy your product seamlessly and efficiently to reach your audience.
        </p>
      </div>
    </div>
  );
};

export default Deploy;
