import React from "react";
import CaseStudyRail from "./CaseStudyRail.component";
import DesignDisplayShowcase from "./DesignDisplayShowcase.component";
import { getCaseStudies } from "../utils/caseStudyLoader";
import LaunchProblemSolution from "./LaunchProblemSolution.component";
import LaunchHero from "./LaunchHero.component";
import LaunchHowWeWork from "./LaunchHowWeWork.component";
import LaunchPricingTeaser from "./LaunchPricingTeaser.component";
import Cta from "./cta.component";
import Faq from "./Faq.component";

const LaunchLandingPage: React.FC = () => {
  const caseStudies = getCaseStudies();

  return (
    <div className="relative bg-white text-black ">
      
       <section id="problem-solution" className="max-w-5xl mx-auto px-6 md:px-10 py-12 text-center my-16">
        <LaunchHero />
      </section>

      <section id="problem-solution" className="max-w-5xl mx-auto px-6 md:px-10 py-12 text-center my-32 mb-64">
        <LaunchProblemSolution />
      </section>

      <LaunchHowWeWork />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-12 text-center my-32">
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

      <Faq />

      <Cta />

    </div>
  );
};

export default LaunchLandingPage;
