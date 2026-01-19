import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TextAnimation from "@/components/text-animation";

const page = () => {
  const works = [
    { title: "Tars Company", type: "Landing Page", image: "/works/work1.png" },
    { title: "Nova Tech", type: "Dashboard", image: "/works/work2.png" },
    { title: "EcoShop", type: "E-commerce", image: "/works/work3.png" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto pt-28">
      <h1 className="font-bri font-semibold text-7xl tracking-tight">
        Our Works
      </h1>
      <div className="w-full flex flex-col mt-10 gap-10">
        {works.map((work, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-170 border-3 border-orange-200 hover:border-orange-400 transition duration-150 ease-in rounded-3xl relative shadow-lg overflow-hidden">
              <Image
                src={work.image}
                alt="Craft Example"
                fill
                className="object-cover rounded-3xl hover:scale-105 transition-transform duration-200 ease-in-out"
              />
            </div>
            <div className="w-full flex justify-between p-2">
              <p className="font-bri text-2xl font-semibold">{work.title}</p>
              <p className="font-bri text-xl">{work.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
