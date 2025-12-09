import React from "react";
import DesignDisplayShowcase from "./DesignDisplayShowcase.component";
import LaunchProblemSolution from "./LaunchProblemSolution.component";
import LaunchHero from "./LaunchHero.component";
import LaunchHowWeWork from "./LaunchHowWeWork.component";
import LaunchPricingTeaser from "./LaunchPricingTeaser.component";
import Cta from "./cta.component";
import Faq from "./Faq.component";
import LearnMoreNightSky from "./LearnMoreNightSky.component";

const LaunchLandingPage: React.FC = () => {

  return (
    <div className="relative text-black">
      {/* Top section with gradient fade from #5ccaff to transparent */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#5ccaff_0%,#5ccaff_calc(100%-700px),transparent_100%)] pointer-events-none" />
       
        <div className="pt-[0px] min-h-screen flex items-center">
          <section id="learn-more" className="w-full md:max-w-9xl mx-auto px-4 md:px-10 text-center">
            <div className="light text-token-text-primary relative flex flex-col items-center px-4 selection:bg-transparent md:px-6 col-span-12 row-start-1 py-24"><div aria-hidden="true" className="pointer-events-none absolute -z-10 h-[350px] w-[700px] translate-y-[20px] transform bg-[radial-gradient(ellipse_at_center,_#4999E4_0%,_rgba(0,150,230,0.3)_35%,_rgba(73,153,228,0)_70%)] sm:w-[1000px]"></div><div className="mb-4 h-[80px] w-[80px] md:mb-6"><div className="h-full w-full"><div className="mx-auto h-full w-full overflow-hidden rounded-[24%] aspect-auto"></div></div></div><div className="relative"><h1 className="text-mkt-h1 text-token-text-inverted text-center font-bold text-white text-8xl mb-8 relative">atem.</h1></div></div>
            <LearnMoreNightSky heightClass="md:min-h-[570px]" />
          </section>
        </div>
      </div>
        <section id="launch-hero" className="w-full md:max-w-7xl mx-auto px-4 md:px-10 py-6 sm:py-32 text-center">
          <LaunchHero />
        </section>
      {/* Middle sections with white background */}
      <section id="problem-solution" className="w-full md:max-w-5xl mx-auto my-16 mb-0 px-4 md:px-10 py-6 pb-0 text-center md:my-28 md:mb-48">
        <LaunchProblemSolution />
      </section>

      <LaunchHowWeWork />

      <section className="hidden md:block max-w-5xl mx-auto px-6 md:px-10 py-12 text-center my-32">
        <DesignDisplayShowcase />
      </section>

      {/* <section className="py-24">
        <CaseStudyRail
          caseStudies={caseStudies}
          title="Recent Launches & Case Studies"
          description="A quick look at how founders partner with Atem to ship confidently."
        />
      </section> */}

      <LaunchPricingTeaser />

      {/* Bottom sections with gradient fade from transparent to #5ccaff */}
      <div className="relative">
        {/* <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_0%,#5ccaff_300px,#5ccaff_100%)] pointer-events-none" /> */}
        
        <section id="faq" className="px-4">
          <Faq />
        </section>

        <div className="px-4">
          <Cta />
        </div>
      </div>

    </div>
  );
};

export default LaunchLandingPage;