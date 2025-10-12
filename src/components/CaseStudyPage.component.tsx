import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { getCaseStudyBySlug } from '../utils/caseStudyLoader';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : null;

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  const { title, summary, summaryImage, highlights = [], backgroundMedia, cta, body } = caseStudy;

  return (
    <article className="min-h-screen bg-white text-slate-900">
      <header className="relative isolate overflow-hidden bg-slate-950 text-white">
        {backgroundMedia ? (
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
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={backgroundMedia.src}
              alt={title}
            />
          )
        ) : (
          <div className="absolute inset-0 bg-slate-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-20 pt-24 md:px-10 md:pt-32">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">Case Study</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base text-white/80 md:text-lg">{summary}</p>
          {highlights.length > 0 && (
            <ul className="grid gap-2 text-sm text-white/80 md:grid-cols-2 md:gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {cta?.href && (
            <div>
              <a
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.35em] backdrop-blur transition hover:bg-white/20"
              >
                {cta.label}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-12 px-6 py-16 md:px-10">
        {summaryImage && (
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <img src={summaryImage} alt={`${title} summary`} className="h-full w-full object-cover" />
          </div>
        )}
        <ReactMarkdown className="prose prose-slate prose-lg max-w-none">
          {body}
        </ReactMarkdown>
      </main>
    </article>
  );
};

export default CaseStudyPage;
