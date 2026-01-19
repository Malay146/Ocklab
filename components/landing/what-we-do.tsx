import React from "react";
import Plan from "./what-we-do/plan";
import Design from "./what-we-do/design";
import Develop from "./what-we-do/develop";
import Deploy from "./what-we-do/deploy";

const WhatWeDo = () => {
  return (
    <div className="w-full h-full text-orange-400 bg-orange-400 min-h-[50vh] mt-12 p-4">
      <div className="max-w-375 mx-auto py-14">
        <h2 className="text-7xl font-bri font-semibold mb-8 text-white">
          From Idea to Launch
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 justify-between items-center gap-6">
          <Plan />
          <Design />
          <Develop />
          <Deploy />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
