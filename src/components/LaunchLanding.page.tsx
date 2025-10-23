import React from "react";
import DesignDisplayShowcase from "./DesignDisplayShowcase.component";
import LaunchProblemSolution from "./LaunchProblemSolution.component";
import LaunchHero from "./LaunchHero.component";
import LaunchHowWeWork from "./LaunchHowWeWork.component";
import LaunchPricingTeaser from "./LaunchPricingTeaser.component";
import Cta from "./cta.component";
import Faq from "./Faq.component";

const LaunchLandingPage: React.FC = () => {

  return (
    <div className="relative text-black p-4">
      
       <section id="problem-solution" className="w-full md:max-w-5xl mx-auto px-0 md:px-10 py-6 text-center md:my-16">
        <LaunchHero />
      </section>

      <section id="problem-solution" className="w-full md:max-w-5xl mx-auto my-16 mb-0 px-0 md:px-10 py-6 pb-0 text-center md:my-16">
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

      <section id="faq">
        <Faq />
      </section>

      <Cta />

    </div>
  );
};

export default LaunchLandingPage;
