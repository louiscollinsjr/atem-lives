import React from 'react';

export interface FeatureSquare {
  id: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  subtitle?: string;
  backgroundImage?: string;
  overlayColor?: string;
  icon?: string;
  accent?: string;
}

interface AnimatedFeatureGridProps {
  items: FeatureSquare[];
  intervalMs?: number;
}

const toRgba = (color: string, alpha: number) => {
  if (!color) return color;

  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const normalized = hex.length === 3
      ? hex.split('').map((char) => char + char).join('')
      : hex.slice(0, 6);
    const int = parseInt(normalized, 16);
    const r = (int >> 16) & 255;
    const g = (int >> 8) & 255;
    const b = int & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const rgbMatch = color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (rgbMatch) {
    const [, r, g, b] = rgbMatch;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const rgbaMatch = color.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/i);
  if (rgbaMatch) {
    const [, r, g, b] = rgbaMatch;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return color;
};

// Animated 3x3 grid where ambient squares frame a live, animated feature tile in the center.
const AnimatedFeatureGrid: React.FC<AnimatedFeatureGridProps> = ({ items, intervalMs = 5000 }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [displayItem, setDisplayItem] = React.useState<FeatureSquare | undefined>(items[0]);
  const [isVisible, setIsVisible] = React.useState(true);
  const overlayGradient = React.useMemo(() => {
    if (!displayItem?.overlayColor) {
      return 'linear-gradient(0deg, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.82) 46%, rgba(15,23,42,0) 95%)';
    }

    const mid = toRgba(displayItem.overlayColor, 0.9);
    const tail = toRgba(displayItem.overlayColor, 0);
    return `linear-gradient(0deg, rgba(0,0,0,0.88) 0%, ${mid} 0%, ${tail} 55%)`;
  }, [displayItem?.overlayColor]);

  React.useEffect(() => {
    if (items.length <= 1) return;
    if (typeof window === 'undefined') return;

    // Rotate through provided feature items on a timed interval.
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [items.length, intervalMs]);

  React.useEffect(() => {
    if (!items.length) return;

    // Fade current tile out, swap content, then fade it back in for a smooth transition.
    setIsVisible(false);
    const timeout = window.setTimeout(() => {
      setDisplayItem(items[activeIndex]);
      setIsVisible(true);
    }, 180);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, items]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,249,249,0.9)_0%,_rgba(249,249,249,0.9)_35%,_rgba(249,249,249,0.1)_90%)]" />
      {/* 3×3 grid with the center square reserved for the animated feature card. */}
      <div className="relative z-10 grid grid-cols-3 gap-5 md:gap-5 overflow-visible">
        {Array.from({ length: 9 }).map((_, index) => {
          const isCenter = index === 4;
          return (
            <div
              key={index}
              className={`relative aspect-square rounded-[2.5rem] transition duration-700 ease-out ${
                isCenter
                  ? 'z-20 bg-red-500/0 shadow-[0_28px_50px_-26px_rgba(15,23,42,0.88),_0_-10px_24px_-18px_rgba(15,23,42,0.28),_-18px_12px_28px_-18px_rgba(15,23,42,0.35)]'
                  : 'z-10 bg-[#eaeaea]/30 border border-red-500/0 overflow-hidden'
              }`}
            >
              {isCenter && (
                <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-white via-white to-[#e1e3e3] p-[0.3rem] md:p-[0.4rem]">
                  <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.50rem]">
                  {displayItem?.backgroundImage && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-95"
                      style={{ backgroundImage: `url(${displayItem.backgroundImage})` }}
                    />
                  )}
                  <div className="absolute inset-0" style={{ background: overlayGradient }} />

                  <div
                    className={`relative flex h-full w-full flex-col justify-end px-6 pb-7 sm:px-8 sm:pb-9 md:px-5 md:pb-4 transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'
                    }`}
                  >
                    <div className="space-y-1 text-center">
                      {displayItem?.accent && (
                        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-0 text-[0.65rem] uppercase tracking-[0.32em] text-white/80">
                          {displayItem.accent}
                        </span>
                      )}
                      <div className="space-y-0">
                        <h3 className="text-[0.75rem] text-white sm:text-[2rem] md:text-[1.65rem]">
                          {displayItem?.title}
                        </h3>
                        {displayItem?.subtitle && (
                          <p className="text-sm text-white/70 sm:text-base md:text-[0.75rem] mx-auto" style={{ lineHeight: '1.1' }}>
                            {displayItem.subtitle}
                          </p>
                        )}
                      </div>
                      {displayItem?.description && (
                        <p className="text-sm text-white/65 sm:text-base md:text-lg">
                          {displayItem.description}
                        </p>
                      )}
                    </div>

                    {/* {displayItem?.ctaLabel && (
                      <div className="mt-4 flex w-full justify-center">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-full bg-white/50 px-3 py-1 text-[0.65rem] text-white transition duration-300 hover:bg-slate-200"
                        >
                          {displayItem.ctaLabel}
                        </button>
                      </div>
                    )} */}
                  </div>
                  </div>
                </div>
              )}
              {!isCenter && (
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <div className="h-[55%] w-[55%] rounded-2xl bg-[#eaeaea]/00" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-[-1%] z-30 rounded-[4rem] bg-[radial-gradient(circle,_rgba(255,255,255,0)_42%,_rgba(255,255,255,0.85)_78%,_rgba(255,255,255,1)_95%)]" />
    </div>
  );
};

export default AnimatedFeatureGrid;
