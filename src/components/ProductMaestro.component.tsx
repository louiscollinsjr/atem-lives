import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
import MaestroVideoMP4 from '../assets/optimized_maestro_powder.mp4';

const ProductMaestro: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto px-4 py-24 container-x">
        <div className="bg-blue-500 rounded-3xl text-center flex flex-col justify-end items-center p-6 h-[700px] mb-24 relative overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={MaestroVideoMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex flex-col items-center mb-8">
            {/* <p className="text-xl uppercase py-0 text-white">
              Introducing
            </p> */}
            <h1 className="~text-7xl/9xl font-bold mb-4 text-white">
              Maestro.
            </h1>
            <p className="text-base py-0 text-white">
             Simplify Automations
            </p>
          </div>
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 pt-4">
          <div>
            <h2 className="~text-4xl/6xl font-semibold mb-8 text-black pb-12">
              Awesomations delivered, impressively fast.
            </h2>
            {/* You can add an image or additional content here if needed */}
            <NavLink to="/maestro">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font- py-2 px-4 rounded flex items-center">
                Learn more<FaArrowRight className="ml-2" />
              </button>
            </NavLink>
          </div>

          <div className="pt-3 ~text-lg/2xl  tracking-wide text-gray-700">
           <p>Introducing Maestro Automations — Elevate your workflow with our easy and reliable subscription-based DEX services tailored to meet your evolving automation needs.The ultimate automation experience is here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMaestro;
