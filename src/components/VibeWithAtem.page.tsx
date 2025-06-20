import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VibeBlock from './VibeBlock.component';
import RotatingText from './RotatingText.component';
import BouncingLogo from './BouncingLogo.component';

const VibeWithAtem: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Build with Vibe",
    "Design with Vibe",
    "Launch with Vibe",
    "Prototype with Vibe",
    "Create with Vibe",
    "Iterate with Vibe"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Smooth scroll for section transitions
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    
    // Add fade-in animation when scrolling
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden font-light">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/assets/VibeBackground.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 text-black p-6"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-4xl md:text-4xl font-normal font-spartan text-gray-900 sm:w-auto text-center mb-6 md:mb-10 tracking-wide flex items-center justify-center">
            <BouncingLogo />
            atem.
          </p>
          <h1 className="text-5xl md:text-7xl font-spartan text-black mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-center w-full">
            <div className="flex justify-center md:justify-end">
              <RotatingText phrases={[
                "Build",
                "Design",
                "Launch",
                "Prototype",
                "Create",
                "Iterate"
              ]} />
            </div>
            <div className="mt-1 md:mt-0 md:ml-2 whitespace-nowrap">with Vibe</div>
          </h1>
          {/* <p className="text-xl md:text-2xl text-black mb-10 max-w-2xl mx-auto text-center">
            VIBE is how we turn vision into product — fast, focused, and AI-powered.
          </p> */}

          <div className="flex justify-center max-w-[300px] sm:max-w-[350px] w-full items-center mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 items-center bg-zinc-200 p-2 sm:p-2 rounded-3xl w-full mx-auto">
              <p className="text-xs md:text-sm font-light font-inter text-gray-700 sm:pl-4 sm:pr-2 sm:w-auto sm:flex-1 text-center sm:mb-0 sm:text-left tracking-wide">Unlock Special Vibe Dev Rates</p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-4 w-full sm:flex-1 text-sm sm:text-sm rounded-2xl text-white bg-black hover:bg-gray-700 transition-colors tracking-wider focus:outline-none"
              >
                Start building
              </button>
            </div>
          </div>
          <div>
          <p className="text-xs md:text-sm font-light font-inter text-gray-700 sm:w-auto sm:flex-1 text-center sm:mb-0 sm:text-left tracking-wide mt-4">Want in on special dev rates? <a  href="#contact" className="text-black hover:underline">Join the waitlist →</a></p>
        </div>
        </div>
        
      </section>

      {/* VIBE is for Founders Section */}
      <section id="founders" className="py-24 md:py-32 px-4 fade-in-section">
        <VibeBlock
          subtitle="Launch your MVP in a week — no spec required."
          text={
            <div className="space-y-4">
              <ul className="space-y-2 max-w-md mx-auto text-left">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Send idea</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>We build</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You own it</span>
                </li>
              </ul>
              <p className="mt-8 text-center">Just tell us what you're trying to build.</p>
            </div>
          }
          cta={{
            text: "Get started",
            link: "#contact"
          }}
        />
      </section>

      {/* VIBE is for Studios Section */}
      <section id="studios" className="py-24 md:py-32 px-4 fade-in-section">
        <VibeBlock
          subtitle="No dev bandwidth? We've got you."
          text="We build client-ready MVPs under your label. Fast, clean, silent."
          cta={{
            text: "Partner with us",
            link: "#contact"
          }}
        />
      </section>

      {/* VIBE is for Teams Section */}
      <section id="teams" className="py-24 md:py-32 px-4 fade-in-section bg-gray-50">
        <VibeBlock
          subtitle="Ship fast without slowing your sprint."
          text="You share the idea, we return a live prototype."
          cta={{
            text: "Talk to us about your workflow",
            link: "#contact"
          }}
        />
      </section>

      {/* How VIBE Works Section */}
      <section id="process" className="py-24 md:py-32 px-4 fade-in-section bg-gray-50">
        <VibeBlock
          title="The VIBE Process"
          text={
            <ol className="list-decimal pl-6 max-w-md mx-auto text-left space-y-4">
              <li>You share the idea</li>
              <li>We plan rhythm</li>
              <li>We build</li>
              <li>You own it</li>
            </ol>
          }
          cta={{
            text: "See examples",
            link: "#"
          }}
        />
      </section>

      {/* Process Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Process</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Discovery Session</h3>
              <p className="text-gray-600">
                We begin with a comprehensive discussion to understand your vision, goals, and requirements.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Concept Development</h3>
              <p className="text-gray-600">
                We create wireframes and prototypes to visualize the solution, iterating based on your feedback.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Rapid Development</h3>
              <p className="text-gray-600">
                Our team builds your solution using modern technologies and best practices for optimal performance.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="font-bold">4</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
              <p className="text-gray-600">
                We deploy your solution and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What You Get</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Digital Products</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Responsive web applications</li>
              <li>Mobile app prototypes</li>
              <li>Interactive user interfaces</li>
              <li>API integrations</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Documentation</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Technical specifications</li>
              <li>User guides</li>
              <li>System architecture</li>
              <li>Maintenance guidelines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="what-you-get" className="py-24 md:py-32 px-4 fade-in-section">
        <VibeBlock
          subtitle="Everything you need to keep building"
          text={
            <ul className="space-y-2 max-w-md mx-auto text-left">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Working MVP</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Clean repo</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Walkthrough video</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Optional support</span>
              </li>
            </ul>
          }
          cta={{
            text: "What can we build for you?",
            link: "#contact"
          }}
        />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-4 fade-in-section bg-gray-50">
        <VibeBlock
          title="Common Questions"
          text={
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-2">Do I need specs or a design?</h3>
                <p className="text-gray-600">No, just share your idea and we'll handle the rest.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How long does it take?</h3>
                <p className="text-gray-600">We deliver MVPs in 1-2 weeks.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">What's included?</h3>
                <p className="text-gray-600">A working MVP, clean codebase, and walkthrough video.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Who owns the code?</h3>
                <p className="text-gray-600">You own 100% of the code and intellectual property.</p>
              </div>
            </div>
          }
          cta={{
            text: "Still have questions?",
            link: "#contact"
          }}
        />
      </section>

      {/* CTA Footer Section */}
      <section id="contact" className="py-24 md:py-32 px-4 fade-in-section bg-black text-white">
        <VibeBlock
          title="Ready to start?"
          subtitle="Tell us your idea — and let's build it together."
          text={
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a 
                href="https://tally.so/r/mRDXdp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-gray-100 text-black font-medium py-3 px-8 rounded-full transition-colors text-center"
              >
                Send Your Idea
              </a>
              <a 
                href="https://calendly.com/louiscollinsjr/atem-intro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-white hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-colors text-center"
              >
                Schedule a 15-min call
              </a>
            </div>
          }
        />
      </section>
    </div>
  );
};

export default VibeWithAtem;
