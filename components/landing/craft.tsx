import React from "react";
import Image from "next/image";
import TextAnimation from "../text-animation";
import { ArrowRight } from "lucide-react";

const Craft = () => {
  const works = [
    { title: "Tars Company", type: "Landing Page", image: "/works/work1.png" },
    { title: "Nova Tech", type: "Dashboard", image: "/works/work2.png" },
    { title: "EcoShop", type: "E-commerce", image: "/works/work3.png" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-20" id="works">
      <h1 className="font-bri font-semibold text-7xl tracking-tight">
        Craft with Precision
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
      <div className="w-full flex justify-center mt-6">
        <button className="px-3 py-2 rounded-md border group border-black cursor-pointer font-semibold">
          <TextAnimation>View All Works</TextAnimation>
          <ArrowRight className="inline-block ml-2 -mt-1 transition-transform group-hover:translate-x-1.5 duration-150 ease-in" />
        </button>
      </div>
    </div>
  );
};

export default Craft;
