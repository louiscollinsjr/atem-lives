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
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#5ccaff_0%,#5ccaff_calc(100%-300px),transparent_100%)] pointer-events-none" />
        
        <section id="learn-more" className="w-full md:max-w-9xl mx-auto mt-0 mb-16 px-4 md:px-10 pb-0 text-center md:mt-0 md:mb-32">
          <LearnMoreNightSky heightClass="md:min-h-[570px]" />
        </section>

        
      </div>
      <section id="launch-hero" className="w-full md:max-w-7xl mx-auto px-4 md:px-10 py-6 text-center md:my-16">
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
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_0%,#5ccaff_300px,#5ccaff_100%)] pointer-events-none" />
        
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