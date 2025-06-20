import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import videoSrc from '../assets/the25maze_A_surreal_cinematic_office_drenched_in_artificial_r_a4c1c2e3-0d89-4baa-be7d-4335f7744932_0.mp4';

const DevelopmentVibe: React.FC = () => {
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-64">
      {/* Hero Section */}
      <div className="bg-blue-500 rounded-3xl text-center flex flex-col justify-end items-center p-4 md:p-6 h-[500px] md:h-[700px] mb-16 relative overflow-hidden">
        <video
          ref={videoRef}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center mb-4 md:mb-8">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white font-spartan tracking-wide">
            Build with Rhythm
          </h1>
          <p className="text-xl text-white max-w-3xl font-spartan">
            VIBE is how we build with intention — fast, free, and in step with your vision.
          </p>
        </div>
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      {/* VIBE for Development */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">VIBE for Development Teams</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Our VIBE methodology is specifically tailored for development teams looking to accelerate their workflow 
              while maintaining code quality and project coherence.
            </p>
            <p className="text-lg text-gray-600">
              By integrating visualization, ideation, building, and execution into your existing processes, 
              we help teams overcome technical challenges and deliver exceptional digital experiences.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">VIBE Development Benefits</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reduced development cycles</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Better alignment between design and development</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Improved code architecture and maintainability</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Faster time-to-market for new features</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
            <p className="text-gray-600 mb-4">
              Modern, responsive interfaces built with React, Angular, Vue, and other leading frameworks.
            </p>
            <p className="text-sm text-gray-500">React • Angular • Vue • Next.js • Tailwind CSS</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Backend Systems</h3>
            <p className="text-gray-600 mb-4">
              Scalable, secure API development and server architecture for robust applications.
            </p>
            <p className="text-sm text-gray-500">Node.js • Python • Java • GraphQL • REST</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-3">DevOps & Infrastructure</h3>
            <p className="text-gray-600 mb-4">
              Cloud-native deployment pipelines and infrastructure management for optimal performance.
            </p>
            <p className="text-sm text-gray-500">AWS • Azure • GCP • Docker • Kubernetes</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Development Success Stories</h2>
        <div className="space-y-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">E-commerce Platform Overhaul</h3>
            <p className="text-gray-600 mb-4">
              Modernized a legacy e-commerce system with a microservices architecture, 
              resulting in 40% faster page loads and a 25% increase in conversion rate.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">AWS</span>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
            <p className="text-gray-600 mb-4">
              Created a cross-platform mobile application for a healthcare provider, 
              enabling secure patient communications and appointment scheduling.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React Native</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Firebase</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">HIPAA Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 px-6 bg-gray-50 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to enhance your development process?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how our VIBE methodology can accelerate your development workflow and improve outcomes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://calendly.com/louiscollinsjr/atem-intro" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Schedule a Technical Consultation
          </a>
          <Link 
            to="/vibe-with-atem" 
            className="border border-black hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors"
          >
            Learn More About VIBE
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentVibe;
