import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import triangleTunnels from '../assets/triangle_tunnel.mp4';
import { useTranslation } from 'react-i18next';

const SplashDesign349: React.FC = () => {
  const { t } = useTranslation();
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
    <section className="bg-black items-center justify-center relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src='https://atem-lives.b-cdn.net/triangle%20tunnel.mp4' type="video/mp4" />
      </video>
      
      <div className="container flex flex-col items-center justify-center h-[70vh] transition-all duration-800 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="~text-[6rem]/[10rem] font-medium font-spartan tracking-tighter text-white items-center justify-center text-center ">
            349.Design.
          </h1>
          <p className="~text-xs/base tracking-wide justify-center font-space text-center text-white w-96">
            {t("At the core of our business lies a passion for crafting designs that inspire and ignite emotions in our clients and their customers.")}
          </p>
          <p className="pt-12 ~text-xs/base tracking-wide justify-center font-space text-center text-white w-96">
            {t("Romania, if you can imagine it, we can design it.")}
          </p>
         

          <div className="grid grid-cols-1grid-rows-1 gap-4 items-center justify-center text-center pt-20">
            <div> <p className="justify-center">
            <NavLink
              to="/onboarding"
              className="bg-blue-500 text-white text-sm tracking-wider px-5 py-3 rounded-full font-poppins"
            >
              {t("Let's create together")}
            </NavLink>
          </p></div>
            <div><p className='text-white text-xs pt-4'> {t("or learn more below")}</p></div>
          </div>
        </div>
      </div>

      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 bg-white bg-opacity-50 p-2 rounded-full hidden md:block"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default SplashDesign349;
