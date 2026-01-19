"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import type Lenis from "lenis";

type Props = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      ref={(instance) => {
        lenisRef.current = instance?.lenis ?? null;
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
