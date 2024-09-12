import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Image01 from '../../assets/feature-image-01.jpg';
import Image02 from '../../assets/feature-image-02.jpg';
import Image03 from '../../assets/feature-image-03.jpg';
import Image04 from '../../assets/feature-image-04.jpg';
import Image05 from '../../assets/feature-image-05.jpg';

const MasonaryGridCTA: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col content-center items-center min-h-[42.5rem] py-16 md:py-48 my-2 px-6 lg:px-0 border-t-4"
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-4 container-x">
        <p className="text-lg tracking-wide text-black font-bold uppercase">
          Your extra set of hands
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-6">
          <div className="items-center content-start justify-items-center pt-6 pr-20">
            <h2 className="font-bold tracking-normal ~text-5xl/6xl">
              We're not reinventing the wheel, just making the road a little
              smoother.
            </h2>
            <h3 className="~text-base/xl pt-10 md:pr-20">
              With internal IT teams overwhelmed and hiring more engineers being
              expensive, outsourcing seems like the perfect way out. But
              enterprise IT managed service companies can be slow & often come
              bundled with large, pricey contracts. Automation solutions,
              without dedicated personnel, may make only modest improvements in
              the end-user experience.
              <br /> <br /> That's why we built Maestro.
            </h3>
            <div className="pt-20">
            <NavLink to="https://calendly.com/louiscollinsjr/atem-intro">
            <button className="bg-black hover:bg-slate-800 text-white font- py-2 px-4 rounded flex items-center">
              Schedule a Call <FaArrowRight className="ml-2" />
            </button>
          </NavLink>
          </div>
            {/* <ul className="list-disc p-6 leading-10">
            <li>Secure an appointment to talk to one of our developers</li>
            <li>Explore use cases based on your industry</li>
            <li>Learn how atem can improve your customer relationships</li>
           </ul> */}
          </div>
          <div className="py-24 md:py-6 content-center items-center">
            <div className="grid grid-cols-7 gap-4">
              <div className="col-start-2 col-end-4 row-end-4 row-start-2">
                <img
                  src={Image01}
                  alt="Image 1"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="col-start-4 col-end-6 row-end-4 row-start-1 ">
                <img
                  src={Image02}
                  alt="Image 2"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="col-start-1 col-end-3 row-end-6 row-start-4">
                <img
                  src={Image03}
                  alt="Image 3"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="col-start-5 col-end-7 row-end-6 row-start-4">
                <img
                  src={Image05}
                  alt="Image 4"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="col-start-3 col-end-5 row-end-7 row-start-4">
                <img
                  src={Image04}
                  alt="Image 5"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default MasonaryGridCTA;
