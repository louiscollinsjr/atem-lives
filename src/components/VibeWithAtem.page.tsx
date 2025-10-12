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
                "Ship",
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
              <p className="text-xs md:text-sm font-light font-inter text-gray-700 sm:pl-4 sm:pr-2 sm:w-auto sm:flex-1 text-center sm:mb-0 sm:text-left tracking-wide">Unlock Special Vibe Build Rates</p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-4 w-full sm:flex-1 text-sm sm:text-sm rounded-2xl text-white bg-black hover:bg-gray-700 transition-colors tracking-wider focus:outline-none"
              >
                Get started
              </button>
            </div>
          </div>
          <div>
          <p className="text-xs md:text-sm font-light font-inter text-gray-700 sm:w-auto sm:flex-1 text-center sm:mb-0 sm:text-left tracking-wide mt-4">Not ready to build? <a  href="#contact" className="text-black hover:underline">Stay updated →</a></p>
        </div>
        </div>
        
      </section>

      {/* VIBE is for Founders Section */}
      <section id="founders" className="py-24 md:py-32 px-4 fade-in-section">
        <VibeBlock
          title="Vibe for Visionaries"
          subtitle="A build partner for every idea"
          text={
            <div className="space-y-4">
              <p className="mt-8 text-center">
              From napkin sketch to unicorn startup, we build applications that scale. Tech founders choose Atem because we speak fluent startup—fast builds, smart architecture, real results. Your idea deserves code that works.</p>
            </div>
          }
        />
      </section>

      {/* VIBE is for Moving Fast Section */}
      <section id="moving-fast" className="py-24 md:py-32 px-4 fade-in-section">
        <VibeBlock
          title="Vibe is for Moving Fast"
          subtitle="You don’t have time to spec, scope, and stall. We get it — you just want to move."
          text=""
        //  cta={{
        //     text: "Partner with us",
        //     link: " #contact"
        //   }}
        />
      </section>

       {/* VIBE is for Moving Fast Section */}
       <section id="real-products" className="py-24 md:py-32 px-4 fade-in-section">
        <VibeBlock
          title="Vibe is for Real Products"
          subtitle="This isn’t just concept work. You’ll get working code, clean handoff, and a live MVP."
          text=""
        //  cta={{
        //     text: "Partner with us",
        //     link: " #contact"
        //   }}
        />
      </section>
      
      {/* VIBE is for Whats Next Section */}
      <section id="whats-next" className="py-24 md:py-32 px-4 fade-in-section">
        <VibeBlock
          title="Vibe is for Whats Next"
          subtitle="You’re building something that matters — and it’s time to take the next step."
          text=""
        //  cta={{
        //     text: "Partner with us",
        //     link: " #contact"
        //   }}
        />
      </section>

      {/* VIBE is for You Section */}
      <section id="you" className="py-24 md:py-32 px-4 fade-in-section">
        <VibeBlock
          title="Vibe is for You"
          subtitle="If you’ve got the vision, we’ve got the rhythm. Let’s build."
          text=""
        //  cta={{
        //     text: "Partner with us",
        //     link: " #contact"
        //   }}
        />
      </section>

      {/* VIBE is for Teams Section */}
      <section id="teams" className="py-24 md:py-32 px-4 fade-in-section">
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

      
    </div>
  );
};

export default VibeWithAtem;
