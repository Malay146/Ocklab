import { cn } from "@/lib/cn";
import React from "react";

const Develop = () => {
  return (
    <div className="w-full h-100 border border-zinc-100 bg-zinc-100 rounded-2xl flex flex-col p-4 group">
      <div className="relative h-57 flex justify-center items-center">
        <div className="w-full h-full bg-orange-100 rounded-2xl border border-orange-500 p-4 font-mono text-sm overflow-hidden">
          <pre className="leading-relaxed text-orange-900">
            <span className="text-orange-800">export</span>{" "}
            <span className="text-orange-700">async</span>{" "}
            <span className="font-semibold">function</span>{" "}
            <span className="text-orange-950">deployApp</span>() {"{"}
            {"\n"} <span className="text-orange-800">const</span>{" "}
            <span className="text-orange-950">config</span> ={" "}
            <span className="text-orange-950">loadConfig</span>();{"\n"}
            {"\n"} <span className="text-orange-800">const</span>{" "}
            <span className="text-orange-950">build</span> ={" "}
            <span className="text-orange-700">await</span>{" "}
            <span className="text-orange-950">compile</span>(config);{"\n"}
            {"\n"} <span className="text-orange-800">if</span> (build.{" "}
            <span className="text-orange-950">success</span>) {"{"}
            {"\n"} <span className="text-orange-700">await</span>{" "}
            <span className="text-orange-950">deploy</span>(build.{" "}
            <span className="text-orange-950">output</span>);{"\n"}
            {"\n"} <span className="text-orange-700">return</span>{" "}
            <span className="text-orange-950">"Live 🚀"</span>;{"\n"} {"}"}{" "}
            <span className="text-orange-800">else</span> {"{"}
            {"\n"} <span className="text-orange-700">throw</span>{" "}
            <span className="text-orange-950">new Error</span>(
            <span className="text-orange-950">"Build failed"</span>
            );{"\n"} {"}"}
            {"\n"}
            {"}"}
          </pre>
        </div>
        <Cusor1 className="size-8 absolute top-10 left-10 animate-blink group-hover:top-35 group-hover:left-15 group-hover:rotate-90 transition-all duration-300 ease-in-out" />
        <Cursor2 className="size-8 absolute top-40 right-25 rotate-90 group-hover:top-10 group-hover:right-40 group-hover:rotate-0 transition-all duration-300 ease-in-out" />
      </div>
      <div className="w-full h-full flex flex-col gap-3 justify-end">
        <h1 className="text-5xl text-black font-bold font-bri">03 Develop</h1>
        <p className="text-md text-zinc-500 font-sans">
          Build your product with cutting-edge technologies and best practices.
        </p>
      </div>
    </div>
  );
};

export default Develop;

const Cusor1 = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      className={cn("", className)}
    >
      <path d="M9.80282 4.62973L15.8364 6.99069C19.3164 8.35243 21.0564 9.03329 20.9987 10.1133C20.941 11.1934 19.1251 11.6886 15.4933 12.6791C14.412 12.974 13.8713 13.1215 13.4964 13.4963C13.1215 13.8712 12.9741 14.4119 12.6791 15.4933C11.6887 19.125 11.1934 20.9409 10.1134 20.9986C9.03335 21.0563 8.35249 19.3163 6.99075 15.8363L4.62979 9.80276C3.20411 6.15934 2.49127 4.33764 3.41448 3.41442C4.3377 2.49121 6.15941 3.20405 9.80282 4.62973Z" />
    </svg>
  );
};

const Cursor2 = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      className={cn("", className)}
    >
      <path d="M8.5469 3.44865L13.9101 5.54728L13.9101 5.54728C17.0034 6.75771 18.55 7.36293 18.4988 8.32296C18.4475 9.28299 16.8334 9.7232 13.6051 10.6036C12.6439 10.8658 12.1633 10.9969 11.8301 11.3301C11.4969 11.6633 11.3658 12.1439 11.1036 13.1051C10.2232 16.3334 9.78299 17.9475 8.82296 17.9988C7.86293 18.05 7.25771 16.5034 6.04728 13.4101L6.04728 13.4101L3.94865 8.0469C2.68138 4.80831 2.04774 3.18901 2.86837 2.36837C3.68901 1.54774 5.30831 2.18138 8.5469 3.44865Z" />
      <path d="M17.9999 17.5C19.9329 17.5 21.4999 15.989 21.4999 14.125C21.4999 13.5037 20.9776 13 20.3333 13H15.6666C15.0223 13 14.4999 13.5037 14.4999 14.125C14.4999 15.989 16.0669 17.5 17.9999 17.5ZM17.9999 17.5C19.9329 17.5 21.4999 19.011 21.4999 20.875C21.4999 21.4963 20.9776 22 20.3333 22H15.6666C15.0223 22 14.4999 21.4963 14.4999 20.875C14.4999 19.011 16.0669 17.5 17.9999 17.5Z" />
    </svg>
  );
};
