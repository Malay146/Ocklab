import React from "react";
import gsap from "gsap";
import { cn } from "@/lib/cn";

const TextAnimation = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("relative inline-block overflow-hidden group", className)}>
      <div className="leading-none group-hover:transform group-hover:-translate-y-full transition-all duration-200 ease-in-out">{children}</div>
      <div className="absolute leading-none group-hover:transform group-hover:-translate-y-full transition-all duration-200 ease-in-out">{children}</div>
    </div>
  );
};

export default TextAnimation;
