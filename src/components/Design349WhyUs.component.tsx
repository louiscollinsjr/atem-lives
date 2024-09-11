import React, { useState, useRef, TouchEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPalette,
  FaUsers,
  FaSmile,
  FaCalendarAlt,
  FaCreditCard,
  FaSyncAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaAngleRight,
} from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

interface ReasonCard {
  icon: React.ReactNode;
  header: string;
  content: string;
  isBlank?: boolean;
}

const reasonCards: ReasonCard[] = [
  //   {
  //     icon: '',
  //     header: '',
  //     content: '',
  //     isBlank: true,
  //   },
  {
    icon: '',
    header: '',
    content: '',
    isBlank: true,
  },
  {
    icon: <FaPalette className="text-4xl text-black" />,
    header: 'High-Quality, Custom Designs.',
    content: 'High-quality, custom designs to make your business shine.',
  },
  {
    icon: <FaUsers className="text-4xl  text-black" />,
    header: 'Work With Local Experts',
    content:
      'Work with local experts who understand your needs and are invested in our community.',
  },
  {
    icon: <FaSmile className="text-4xl text-black" />,
    header: 'Enjoy a creative process designed around you.',
    content: 'A fun, stress-free process with guaranteed results.',
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-black" />,
    header: '15 days of Unlimited Updates',
    content: '15 days of unlimited updates—because we want it to be perfect!',
  },
  {
    icon: <FaCreditCard className="text-4xl text-black" />,
    header: 'Flexible Payments, Reservations.',
    content: 'Flexible payment options to make it easy for you to get started.',
  },
  {
    icon: <FaSyncAlt className="text-4xl text-black" />,
    header: 'Optional Subscription',
    content:
      "Subscription services so your site stays up-to-date long after it's live.",
  },
];

const Design349WhyUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const touchStartX = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cardsPerView = isMobile ? 1 : 4;
  const slidePercentage = isMobile ? 100 : 25;

  // Determine which array of cards to use based on screen size
  const displayCards = isMobile ? [...reasonCards].reverse().slice(1) : reasonCards;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, reasonCards.length - cardsPerView)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) { // Threshold for swipe
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <section className=" bg-[#f5f5f7] py-20">
      <div className="max-w-7xl mx-auto container-x">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 px-2 space-y-6 lg:space-y-0 py-20">
          <h2 className="text-5xl max-w-lg font-medium font-inter md:max-w-xl px-12 md:px-0">
            Why we are your best choice for web design.
          </h2>
          <Link
            to="/get-started"
            className="text-blue-600 py-2 rounded-xl transition-colors flex items-center"
          >
            <span className="tracking-wide pl-12">Let's create together</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      <div>
        <div 
          className="relative overflow-hidden touch-pan-y"
          style={{ touchAction: 'pan-y' }}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * slidePercentage}%)` }}
          >
            {displayCards.map((card, index) => (
              <div key={index} className={`flex-shrink-0 ${isMobile ? 'pl-12' : 'pr-6'}`}>
                <div
                  className={`p-10 rounded-3xl ${
                    isMobile ? 'w-[400px]' : 'w-[400px]'
                  } h-[300px] ${
                    card.isBlank ? 'bg-transparent' : 'bg-white'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    {card.icon}
                    <h3 className="text-3xl font-roboto font-semibold py-4 pr-16">
                      {card.header}
                    </h3>
                    <p className="text-gray-80 font-popins pr-16 text-base">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="container mx-auto flex justify-end mt-4">
            <button
              onClick={prevSlide}
              className={`mr-2 bg-gray-300 text-white p-2 rounded-full hover:bg-gray-600 transition-colors ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className={`bg-gray-300 text-white p-2 rounded-full hover:bg-gray-600 transition-colors ${
                currentIndex === reasonCards.length - cardsPerView ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentIndex === reasonCards.length - cardsPerView}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design349WhyUs;
