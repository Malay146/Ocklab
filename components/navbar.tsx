"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Logo from "./icon/logo";
import Link from "next/link";
import TextAnimation from "./text-animation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "#home" },
    { name: "Works", href: "#works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#FAQs" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-6 py-4 flex justify-between items-center bg-white/10 border border-zinc-300 backdrop-blur-xl rounded-4xl fixed top-3 left-1/2 -translate-x-1/2 z-50">
      <Link href="/">
        <div className="flex items-center gap-1">
          <Logo className="size-10" />
          <h1 className="font-bri text-3xl font-bold tracking-tight">Ocklab</h1>
        </div>
      </Link>
      <div className="flex items-center gap-6 text-lg font-sans">
        {pathname === "/" &&
          links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-orange-600"
            >
              {link.name}
            </Link>
          ))}
      </div>
      <div className="flex items-center">
        <Link
          href="/"
          className="px-3 py-2 bg-zinc-900 text-white rounded-md group"
        >
          <TextAnimation>Book a Demo</TextAnimation>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
