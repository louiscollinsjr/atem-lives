import React from "react";
import how01 from "../assets/how01.png";
import how02 from "../assets/how02.png";
import how03 from "../assets/how03.png";

export interface HowWeWorkProps {
  className?: string;
}

const LaunchHowWeWork: React.FC<HowWeWorkProps> = ({ className = "" }) => {
  const sections = [
    {
      title: "Direct Collaboration",
      text: "Work one-on-one with a SE who understands both code and business impact. No layers. No lag. Just flow.",
      image: how01,
      alt: "Direct Collaboration",
      icon: "pen",
      blurb: "Direct Collaboration",
    },
    {
      title: "Focused on Launch",
      text: "We build only what matters — 2–4 core features that prove your idea. Your MVP ships in 8–12 weeks, ready for real users.",
      image: how02,
      alt: "Focused on Launch",
      icon: "chart-bar",
      blurb: "Focused on Launch",
    },
    {
      title: "Built to Grow",
      text: "Clean, documented, and transparent code that scales with you. Know what’s built — and why it works.",
      image: how03,
      alt: "Built to Grow",
      icon: "clock",
      blurb: "Built to Grow",
    },
  ];

  
  return (
    <section
      className={`w-full max-w-5xl mx-auto text-center mt-16 mb-36 rounded-2xl ${className}`}>
      <div className="mb-24 text-center mx-auto max-w-4xl">
        <p className="text-2xl  text-black font-bold font-roboto pb-6 tracking-[0.04em]">
          Our approach
        </p>
        <h1 className="text-3xl md:text-7xl text-gray-900 font-bold mx-auto font-roboto pb-8 tracking-tight">
          Made to move with you.
        </h1>
        <div className="text-black text-sm sm:text-xl md:text-2xl px-5 font-medium mx-auto">
          <div className="font-roboto text-[#86868b] tracking-[0.011em] leading-[1.5]">
            <h2 className="text-black inline">Made to move with you.</h2>{" "}
            <span>At Atem, every build follows three rhythms — close collaboration, disciplined scope, and code that grows with you. The result: MVPs that move fast, stay lean, and are built to evolve.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap  justify-center md:gap-8 gap-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="flex-1 min-w-80 max-w-lg flex flex-col text-center rounded-2xl"
          >
            <div className="p-0 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-red-50 via-yellow-100 to-blue-100">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full object-contain rounded-2xl"
                  />
                  {/* <div className="absolute bottom-6 right-6 bg-black/50 rounded-lg p-2 shadow-sm text-white/50">
                    {renderIcon(section.icon)}
                  </div> */}
                </div>
              </div>
              <h3 className="text-2xl max-w-[350px] text-gray-900 my-5 pl-4 font-medium">
                {section.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed flex-grow pl-4 max-w-[260px] mx-auto">
                {section.text}
              </p>
            </div>
          </div>
        ))}

         <div className="md:mt-20 mt-10">
          <a
            href="/#faq"
            aria-label="Go to FAQ section"
            className="group inline-flex items-center text-left md:text-center justify-between gap-6 rounded-full border border-black bg-black px-8 py-3 text-sm md:text-md font-normal tracking-wide text-white transition-colors duration-300 hover:bg-gray-800 hover:text-white"
            style={{ minWidth: "196px" } }
          >
            <span>Learn more about how we can help below</span>
            <span className="flex items-center rotate-90">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M12 4L20 12L12 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 12H4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LaunchHowWeWork;
