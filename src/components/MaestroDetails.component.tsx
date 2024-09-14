import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
import localVideoSrc from '../assets/atem-maestro-BvbxDevy.mp4';
import localPosterSrc from '../assets/maestro.jpg';

const MaestroDetails: React.FC = () => {
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
    <section id="maestro-details" className="w-full px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16">
        <div className="bg-blue-500 rounded-3xl text-center flex flex-col justify-end items-center p-4 sm:p-6 h-[400px] sm:h-[500px] lg:h-[700px] mb-8 sm:mb-12 lg:mb-16 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-20 z-10"></div>
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={import.meta.env.MODE === 'production' 
                ? 'https://atem-lives.b-cdn.net/maestro.jpg' 
                : localPosterSrc}
              >
              <source
                src={
                  import.meta.env.MODE === 'production'
                    ? 'https://atem-lives.b-cdn.net/atem-maestro-BvbxDevy.mp4'
                    : localVideoSrc
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative z-20 flex flex-col items-center mb-4">
            <p className="text-sm sm:text-base py-0 text-white uppercase"></p>
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-2 sm:mb-4 text-white">
              Simplify <br />
              Automation.
            </h1>
          </div>
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 z-20"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-5xl py-12 sm:text-5xl lg:text-7xl font-semibold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent sm:pb-12">
              Automations that power your system health, effortlessly.
            </h2>
            <NavLink to="https://calendly.com/louiscollinsjr/atem-intro">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center text-sm sm:text-base">
                Schedule a Call <FaArrowRight className="ml-2" />
              </button>
            </NavLink>
          </div>

          <div className="text-base sm:text-lg tracking-wide text-gray-700">
            <ol className="list-disc list-outside space-y-4 sm:space-y-6 pl-5">
              {[
                {
                  title: 'Submit a Request',
                  description:
                    'Submit a detailed request outlining the specific automation or coding needs, including the project scope and objectives.',
                },
                {
                  title: 'Review & Assessment',
                  description:
                    'Our development team will review the requirements to ensure we fully understand the task. We may follow up with clarifying questions or propose adjustments if needed.',
                },
                {
                  title: 'Development Phase',
                  description:
                    'Once the request is clear, we begin coding. Our developers will write clean, efficient code designed to meet your exact specifications.',
                },
                {
                  title: 'Testing & Feedback',
                  description:
                    "After the code is ready, we send it back to your team for testing in your environment. You'll have the opportunity to review and ensure everything works as expected.",
                },
                {
                  title: 'Approval & Finalization',
                  description:
                    "Once testing is complete and your team gives the green light, we'll finalize the code and ensure it's production-ready.",
                },
                {
                  title: 'Staging & Reporting (optional)',
                  description:
                    "if you provided access, we can stage the code, deploy, and offer detailed reports on the project's performance and progress.",
                },
              ].map((step, index) => (
                <li key={index} className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-gray-800">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaestroDetails;
