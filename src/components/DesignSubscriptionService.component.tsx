import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
// Add this import at the top of your file
import localVideoSrc from '../assets/red-and-pink-neon-lines.mp4';
// Add this import
import localPosterSrc from '../assets/red-and-pink-neon-lines.jpg';
import { useTranslation } from 'react-i18next';


const DesignSubscriptionService: React.FC = () => {
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
    <section className='px-4 sm:px-6'> {/* Adjusted padding */}

    <div className="max-w-7xl mx-auto py-12 sm:py-24 container-x"> {/* Removed px-4, adjusted vertical padding */}

    <div className="bg-blue-500 rounded-3xl text-center flex flex-col justify-end items-center p-4 sm:p-6 h-[500px] sm:h-[700px] mb-12 sm:mb-24 relative overflow-hidden">
          <video
            ref={videoRef}
            loop={true}
            muted={true}
            playsInline={true}
            className="absolute inset-0 w-full h-full object-cover"
            poster={localPosterSrc}
          >
            <source src={localVideoSrc} type="video/mp4" />
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
        <div>
          <h2 className="text-4xl sm:text-6xl font-semibold mb-8 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent md:pr-16 pb-4">Our creative process, designed to elevate your ideas.</h2>
          {/* You can add an image or additional content here if needed */}
          <NavLink to="/design349">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font- py-2 px-4 rounded flex items-center">
              Get started <FaArrowRight className="ml-2" />
            </button>
          </NavLink>
        </div>

        <div className='pt-6'>
          <ol className="list-none list-inside space-y-6"> 
            {[
              { title: 'Make a Request', description: 'Start by filling out our simple online form. Let us know about your project, and we\'ll get back to you quickly with a confirmed scope of work and prepayment options.' },
              { title: 'Secure Your Spot', description: 'We\'ll send you a confirmation email with everything you need to know. To lock in your spot, simply make a partial payment. Your project will be officially in queue!' },
              { title: 'Let the Magic Begin', description: 'Once we\'ve received your payment, we\'ll get to work creating your dream website! We\'ll send regular updates for review, ensuring everything is just right.' },
              { title: 'Unlimited Revisions for 15 Days', description: 'After delivering the initial design, you\'ll have 15 days of unlimited updates. This is your time to make tweaks and adjustments—until your site is perfect.' },
              { title: 'Launch & Handover', description: 'Once everything is set, we\'ll publish your site and hand over the keys. Your site will be live, fully functional, and ready to impress.' },
              { title: 'Stay Fresh with a Monthly Subscription', description: 'Want to keep your site updated? We offer a monthly subscription for ongoing maintenance and updates, so your site always stays fresh and relevant.' },
            ].map((step, index) => (
              <li key={index} className="pl-1 pr-4"> 
                <h3 className="text-xl font-semibold inline text-roboto">{step.title}</h3>
                <p className="mt-2 text-roboto text-gray-800 tracking-wide text-base">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DesignSubscriptionService;
