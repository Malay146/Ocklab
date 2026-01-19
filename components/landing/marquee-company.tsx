import React from 'react'
import Bancontact from '../icon/company/bancontact';
import Cloudfare from '../icon/company/cloudfare';
import { StripeLogo } from '../icon/company/stripe';
import { Arxiv } from '../icon/company/arxiv';
import { Behance } from '../icon/company/behance';
import Appveyor from '../icon/company/appveyor';
import Babel from '../icon/company/babel';
import Aral from '../icon/company/aral';
import Atom from '../icon/company/atom';
import Cisco from '../icon/company/cisco';
import Coreui from '../icon/company/coreui';
import Marquee from 'react-fast-marquee';

const MarqueeCompany = () => {

    const logos = [
    StripeLogo,
    Arxiv,
    Behance,
    Appveyor,
    Babel,
    Aral,
    Atom,
    Cisco,
    Coreui,
    Cloudfare,
    Bancontact,
  ];

  return (
    <div className='w-full mt-12'>
        <h3 className='text-xl w-full text-center font-sans mb-6'>Our Trusted Partners</h3>

        {/* CLIPPING CONTAINER */}
      <div className="relative w-full overflow-hidden max-w-full mt-2 md:mt-4">
        <Marquee
          gradient={true}
          gradientColor="#FAFAFA"
          speed={50}
          autoFill
          className="flex items-center"
          style={{ overflow: "hidden" }}
        >
          {logos.map((Icon, index) => (
            <div key={index} className="mx-4 sm:mx-6 md:mx-8 flex items-center justify-center">
              <Icon className="size-10 sm:size-12 md:size-18 opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default MarqueeCompany