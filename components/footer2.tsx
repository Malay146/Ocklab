import React from "react";
import Logo from "./icon/logo";

const Footer2 = () => {
  return (
    <div className="w-full px-6 pt-3 pb-6">
      <div className="w-full mx-auto rounded-[50px] bg-white px-12 py-10 ring-1 ring-zinc-100 shadow-md">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-lg  text-white flex items-center justify-center font-bold">
                <Logo />
              </div>
              <span className="font-bold text-2xl font-bri">Ocklab</span>
            </div>

            <p className="mt-4 text-sm text-zinc-500 max-w-sm leading-relaxed">
              Ocklab empowers teams to design and build reliable digital
              products—turning ideas into scalable, high-performance
              experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-zinc-600">
              {/* <span className="cursor-pointer hover:text-black">X</span>
              <span className="cursor-pointer hover:text-black">IG</span>
              <span className="cursor-pointer hover:text-black">IN</span>
              <span className="cursor-pointer hover:text-black">GH</span> */}
            </div>
          </div>

          {/* Links */}
          <div className="font-sans">
            <h4 className="font-medium text-sm mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="hover:text-orange-500 cursor-pointer">Features</li>
              <li className="hover:text-orange-500 cursor-pointer">Pricing</li>
              <li className="hover:text-orange-500 cursor-pointer">Integrations</li>
              <li className="hover:text-orange-500 cursor-pointer">Changelog</li>
            </ul>
          </div>

          <div className="font-sans">
            <h4 className="font-medium text-sm mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="hover:text-orange-500 cursor-pointer">Documentation</li>
              <li className="hover:text-orange-500 cursor-pointer">Tutorials</li>
              <li className="hover:text-orange-500 cursor-pointer">Blog</li>
              <li className="hover:text-orange-500 cursor-pointer">Support</li>
            </ul>
          </div>

          <div className="font-sans">
            <h4 className="font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="hover:text-orange-500 cursor-pointer">About</li>
              <li className="hover:text-orange-500 cursor-pointer">Careers</li>
              <li className="hover:text-orange-500 cursor-pointer">Contact</li>
              <li className="hover:text-orange-500 cursor-pointer">Partners</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-200 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 gap-4 font-sans">
          <span>© 2025 Ocklab. All rights reserved.</span>

          <div className="flex gap-6">
            <span className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Cookies Settings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
