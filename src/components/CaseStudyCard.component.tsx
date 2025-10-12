import React from 'react';
import { Link } from 'react-router-dom';

import type { CaseStudyMeta } from '../utils/caseStudyLoader';

interface CaseStudyCardProps {
  caseStudy: CaseStudyMeta;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, className }) => {
  const { slug, title, summary, summaryImage, highlights = [], backgroundMedia, cta, mainText, theme } = caseStudy;
  const themeVariant = theme?.variant ?? 'light';
  const baseTextColor = theme?.textColor ?? (themeVariant === 'dark' ? '#f8fafc' : '#0f172a');
  const mutedTextColor = theme?.mutedTextColor ?? (themeVariant === 'dark' ? 'rgba(248, 250, 252, 0.72)' : '#475569');
  const accentColor = theme?.accentColor ?? (themeVariant === 'dark' ? '#38bdf8' : '#2563eb');
  const overlayColor = theme?.overlayColor ?? (themeVariant === 'dark' ? 'rgba(15,23,42,0.82)' : 'rgba(248,250,252,0.92)');
  const backgroundFallback = theme?.backgroundColor ?? (themeVariant === 'dark' ? '#0f172a' : '#f4f4f5');

  const backgroundContent = backgroundMedia ? (
    backgroundMedia.type === 'video' ? (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={backgroundMedia.src}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img className="absolute inset-0 h-full w-full object-cover" src={backgroundMedia.src} alt={title} />
    )
  ) : (
    <div className="absolute inset-0" style={{ backgroundColor: backgroundFallback }} />
  );

  const summaryIsVideo = typeof summaryImage === 'string' && /\.(mp4|webm|ogg)$/i.test(summaryImage);

  return (
    <article
      className={`relative flex h-[600px] w-[390px] flex-col overflow-hidden rounded-[2rem]  ${className ?? ''}`}
    >
      {/* shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] */}
      <div className="absolute inset-0">
        {backgroundContent}
        <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
      </div>

      <div
        className="relative flex h-full flex-col p-8 py-12"
        style={{ color: baseTextColor }}
      >
        <div className="space-y-4">
          {summaryImage && (
            <div className="overflow-hidden rounded-2xl">
              {summaryIsVideo ? (
                <video
                  src={summaryImage}
                  className="h-40 w-full object-cover mb-4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img src={summaryImage} alt={`${title} summary`} className="h-40 w-full object-cover" />
              )}
            </div>
          )}
          <div className="space-y-3">
            <h3 className="text-3xl font-semibold tracking-tight" style={{ color: baseTextColor }}>
              {title}
            </h3>
            <p className="text-sm" style={{ color: mutedTextColor }}>
              {summary}
            </p>
            <p className="text-sm" style={{ color: mutedTextColor }}>
              {mainText}
            </p>
          </div>
        </div>

        <div className="space-y-4 mt-3">
          {highlights.length > 0 && (
            <ul className="space-y-2 text-sm" style={{ color: baseTextColor }}>
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="text-lg leading-none" style={{ color: accentColor }}>
                    •
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div
            className="flex flex-col items-start gap-1 pt-3 text-sm font-medium"
            style={{ color: accentColor }}
          >
            <Link to={`/case-studies/${slug}`} className="inline-flex items-center">
              View case study
            </Link>
            {cta?.href && (
              <a
                href={cta.href}
                className="inline-flex items-center text-sm"
                style={{ color: accentColor }}
              >
                {cta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyCard;
