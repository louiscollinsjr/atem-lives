import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
import SimplifyAutomationVideo from '../assets/optimized_maestro_simplify_automation.mp4';

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
    <section className='px-6'>

    <div className="max-w-7xl mx-auto px-4 py-24 container-x"> 

      <div className="bg-blue-500 rounded-3xl text-center flex flex-col justify-end items-center p-6 h-[700px] mb-24 relative overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={SimplifyAutomationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center mb-12">
          <p className="text-2xl w-1/2 font-bold text-black-500 uppercase py-3 text-white"></p>
          <h1 className="~text-4xl/6xl md:text-6xl font-bold mb-4 text-white md:w-">Simplifiy Automation.</h1>
        </div>
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 pt-16">
        <div>
          <h2 className="~text-6xl/8xl font-semibold mb-8 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent md:pr-16 pb-4">Our creative process, designed to elevate your ideas.</h2>
          {/* You can add an image or additional content here if needed */}
          <NavLink to="/design-349">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font- py-2 px-4 rounded flex items-center">
              Schedule a Call <FaArrowRight className="ml-2" />
            </button>
          </NavLink>
        </div>


        <div className='pt-6'>
          <ol className="list-disc list-outside space-y-6 px-4">
            {[
              { title: 'Submit a Request', description: 'Submit a detailed request outlining the specific automation or coding needs, including the project scope and objectives.' },
              { title: 'Review & Assessment', description: 'Our development team will review the requirements to ensure we fully understand the task. We may follow up with clarifying questions or propose adjustments if needed.' },
              { title: 'Development Phase', description: 'Once the request is clear, we begin coding. Our developers will write clean, efficient code designed to meet your exact specifications.' },
              { title: 'Testing & Feedback', description: 'After the code is ready, we send it back to your team for testing in your environment. You’ll have the opportunity to review and ensure everything works as expected.' },
              { title: 'Approval & Finalization', description: 'Once testing is complete and your team gives the green light, we’ll finalize the code and ensure it’s production-ready.' },
              { title: 'Staging & Reporting (optional)', description: 'if you provided access, we can stage the code, deploy, and offer detailed reports on the project’s performance and progress.' },
            ].map((step, index) => (
              <li key={index} >
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

export default MaestroDetails;
