import React from 'react';

import type { CaseStudyMeta } from '../utils/caseStudyLoader';
import CaseStudyCard from './CaseStudyCard.component';

interface CaseStudyRailProps {
  caseStudies: CaseStudyMeta[];
  title?: string;
  description?: string;
}

const CaseStudyRail: React.FC<CaseStudyRailProps> = ({ caseStudies, title, description }) => {
  if (!caseStudies.length) {
    return null;
  }

  return (
    <section className="w-full" id="case-studies">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-10 space-y-4 text-center">
          {title && <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>}
          {description && <p className="text-base text-slate-600 md:text-lg">{description}</p>}
        </div>
      </div>
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex snap-x snap-mandatory gap-10 overflow-x-auto pb-6">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.slug} className="snap-start">
              <CaseStudyCard caseStudy={caseStudy} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyRail;
