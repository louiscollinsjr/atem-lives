import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import localPosterSrc from '../assets/shape-explosion-5680034.jpg';
import localVideoSrc from '../assets/shape-explosion-5680034.mp4';

const ProductMaestro: React.FC = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Autoplay was prevented:', error);
          setIsPlaying(false);
        }
      }
    };

    playVideo();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => console.log('Play was prevented'));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="product-maestro" className="w-full px-4 md:px-6">
      <div className="max-w-7xl mx-auto py-12 md:py-24">
        <div className="bg-blue-500 rounded-3xl text-center flex flex-col justify-end items-center p-4 md:p-6 h-[500px] md:h-[700px] mb-12 md:mb-24 relative overflow-hidden">
          <video
            ref={videoRef}
            loop={true}
            muted={true}
            playsInline={true}
            className="absolute inset-0 w-full h-full object-cover"
            poster={import.meta.env.MODE === 'production' 
            ? 'https://atem-lives.b-cdn.net/shape-explosion-5680034.jpg' 
            : localPosterSrc}
            
          >
            <source src={import.meta.env.MODE === 'production' 
            ? 'https://atem-lives.b-cdn.net/shape-explosion-5680034.mp4' 
            : localVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex flex-col items-center mb-4 md:mb-8">
            <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4 text-white">
              Maestro.
            </h1>
            <p className="text-sm md:text-base py-0 text-white">
              {t("Simplify Automations")}
            </p>
          </div>
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-0 md:px-2 pt-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-black pb-6 md:pb-12">
              {t("Awesomations delivered, impressively fast.")}
            </h2>
            <NavLink to="/maestro">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center text-sm md:text-base">
                {t("Learn more")}<FaArrowRight className="ml-2" />
              </button>
            </NavLink>
          </div>

          <div className="pt-3 text-base md:text-lg tracking-wide text-gray-700">
            <p>{t("Introducing Maestro Automations — Elevate your workflow with our easy and reliable subscription-based DEX services tailored to meet your evolving automation needs. The ultimate automation experience is here.")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMaestro;
