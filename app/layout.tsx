import type { Metadata } from "next";
import { Bricolage_Grotesque, Spline_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll/smooth-scroll";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Saas Landing Page",
  description:
    "A modern SaaS landing page built with Next.js and Tailwind CSS.",
  keywords: [
    "SaaS",
    "Landing Page",
    "Next.js",
    "Tailwind CSS",
    "React",
    "Web Development",
    "Software as a Service",
  ],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${splineSans.variable} antialiased`}
      >
        <SmoothScroll>
          <div className="w-full min-h-screen bg-neutral-100">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
