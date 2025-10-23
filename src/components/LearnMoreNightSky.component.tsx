import React, { useEffect, useRef } from "react";
import nightSkyVideoSrc from "../assets/videos/night_sky.mp4";

export interface LearnMoreNightSkyProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  destination?: string;
  heightClass?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundClass?: string;
  overlayClass?: string;
  backgroundPlaybackRate?: number;
  onClose?: () => void;
  header?: React.ReactNode;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  actions?: React.ReactNode;
}

const LearnMoreNightSky: React.FC<LearnMoreNightSkyProps> = ({
  eyebrow = "Introducing",
  title = "Discover what JobPostScore can do",
  description = "Understand our process, philosophy, and how we elevate your job postings for modern hiring teams.",
  ctaLabel = "Learn More",
  destination = "/learn-more",
  heightClass = "min-h-[420px]",
  backgroundImage = "",
  backgroundVideo = nightSkyVideoSrc,
  backgroundClass = "bg-slate-900",
  overlayClass = "bg-black/55",
  backgroundPlaybackRate = 1,
  onClose,
  header,
  body,
  cta,
  actions,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = backgroundPlaybackRate;
  }, [backgroundPlaybackRate, backgroundVideo]);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${heightClass} flex items-center justify-center`}>
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      ) : backgroundVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={backgroundImage || undefined}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div className={`absolute inset-0 ${backgroundClass}`} />
      )}

      <div className={`absolute inset-0 ${overlayClass}`} />

      <button
        className="absolute right-8 top-8 inline-flex items-center justify-center rounded-2xl py-2 px-4 bg-white/20 text-white/50 transition hover:scale-105 hover:bg-white/40 text-sm"
        type="button"
        aria-label="Close"
        onClick={onClose}
      >
        Close
      </button>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center justify-center gap-10 px-6 py-12 text-center text-white sm:px-10">
        <div className="space-y-4 lg:max-w-3xl">
          {header ?? (
            <>
              {eyebrow && (
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">{eyebrow}</p>
              )}

              {title && (
                <h2 className="text-2xl sm:text-4xl font-aeonik tracking-wide">{title}</h2>
              )}

              {description && (
                <p className="text-base text-white/80 sm:text-lg">{description}</p>
              )}
            </>
          )}

          {body}
        </div>

        <div className="flex items-center justify-center gap-4">
          {cta ?? (
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm  text-slate-900 transition hover:bg-white/90"
              href={destination}
            >
              {ctaLabel}
            </a>
          )}

          {actions}
        </div>
      </div>
    </div>
  );
};

export default LearnMoreNightSky;
