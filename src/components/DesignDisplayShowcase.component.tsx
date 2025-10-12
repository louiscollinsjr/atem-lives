import React from 'react';

import monitorImage from '../assets/monitor.png';

type FeatureVariant = 'dominant' | 'compact';

interface FeatureItem {
  eyebrow?: string;
  headline: string;
  description: string;
  variant: FeatureVariant;
}

const features: FeatureItem[] = [
  {
    eyebrow: 'Up to',
    headline: '4 times faster',
    description: 'for founders who want to move from idea to MVP in weeks, not months.',
    variant: 'dominant',
  },
  {
    headline: 'Custom AI + Dev integrations',
    description: "combine generative design, coding automation, and live feedback — built right into your workflow.",
    variant: 'compact',
  },
  {
    eyebrow: 'Up to',
    headline: '70% less overhead',
    description: 'when using our hybrid AI + human development model.',
    variant: 'dominant',
  },
  {
    headline: 'Complete creative control',
    description: 'with transparent build stages and collaborative iteration through your personal project channel.',
    variant: 'compact',
  },
  {
    headline: 'Incredible product fidelity',
    description: 'your vision, pixel-perfect — across web, mobile, and backend systems.',
    variant: 'dominant',
  },
  {
    headline: 'Striking performance and clarity',
    description: 'from load times to code quality—optimized, measurable, ready to scale',
    variant: 'compact',
  },
];

const titleClasses: Record<FeatureVariant, string> = {
  dominant: 'text-2xl md:text-4xl font-semibold tracking-tight leading-tight text-left',
  compact: 'text-xl md:text-xl font-semibold tracking-tight leading-snug text-left',
};

const descriptionClasses: Record<FeatureVariant, string> = {
  dominant: 'text-base md:text-xs font-bold leading-relaxed text-gray-400 text-left',
  compact: 'text-sm md:text-xs font-bold leading-relaxed text-gray-400 text-left',
};

const DescriptionDisplayShowcase: React.FC = () => {
  const featureRows: FeatureItem[][] = [];
  for (let i = 0; i < features.length; i += 2) {
    featureRows.push(features.slice(i, i + 2));
  }

  return (
    <section className="bg-white text-[#1d1d1f] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden">
          <div
            className="absolute inset-0 bg-contain bg-top bg-no-repeat "
            style={{ backgroundImage: `url(${monitorImage})` }}
          />
          <div className="relative w-full pt-[55%] md:pt-[45%]">
             <div className="mt-16 flex flex-col gap-0 md:mt-0">
          {featureRows.map((rowFeatures, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0;
            const gridTemplate = isEvenRow ? 'md:grid-cols-[0.6fr_0.4fr]' : 'md:grid-cols-[0.4fr_0.6fr]';
            const arrangedColumns = isEvenRow ? rowFeatures : [...rowFeatures].reverse();

            return (
              <div key={`${rowFeatures[0]?.headline ?? 'feature'}-${rowIndex}`} className="relative">
                <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
                  <div className="h-px w-full max-w-[760px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden md:flex justify-center">
                  <div className="h-px w-full max-w-[760px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>

                <div className={`grid grid-cols-1 gap-y-0 pt-0 md:gap-y-0 md:gap-x-0 ${gridTemplate}`}>
                  {arrangedColumns.map((feature, columnIndex) => {
                    const isCompactColumn = (isEvenRow && columnIndex === 1) || (!isEvenRow && columnIndex === 0);
                    const paddingClasses = isCompactColumn
                      ? 'px-0 md:py-12'
                      : 'px-0 md:py-12';
                    const gapClasses = isCompactColumn ? 'gap-0 md:gap-1' : 'gap-0 md:gap-2';
                    const borderClass = columnIndex === 1 ? 'md:border-l md:border-gray-200 pl-12' : 'pr-12';

                    return (
                      <div
                        key={feature.headline}
                        className={`flex flex-col ${gapClasses} ${paddingClasses} ${borderClass}`}
                      >
                        {feature.eyebrow && (
                          <span className="text-xs font-semibold text-gray-400 text-left">
                            {feature.eyebrow}
                          </span>
                        )}
                        <h3 className={titleClasses[feature.variant]}>{feature.headline}</h3>
                        <p className={descriptionClasses[feature.variant]}>{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default DescriptionDisplayShowcase;
