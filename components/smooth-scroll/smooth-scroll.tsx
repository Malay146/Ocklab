"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis, ReactLenisRef } from "lenis/react";

type Props = {
  children: React.ReactNode;
};

const SmoothScroll = ({ children }: Props) => {
  type NewType = ReactLenisRef;
  const lenisRef = useRef<NewType | null>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
