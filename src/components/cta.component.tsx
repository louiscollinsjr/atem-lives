import React from 'react';

export interface CtaProps {
  className?: string;
  background?: string;
  foreground?: string;
  cta?: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
      ariaLabel?: string;
    };
    secondaryLink?: {
      text: string;
      href: string;
    };
  };
}

const Cta: React.FC<CtaProps> = ({ 
  className = "",
  background = "bg-gray-100",
  foreground = "text-black",
  cta = {
    title: "Ready to ship?",
    description: "Schedule a call to scope your MVP and lock in a launch slot.",
    primaryButton: {
      text: "Schedule a call",
      href: "https://calendly.com/louiscollinsjr/atem-intro",
      ariaLabel: "Schedule a call with Atem"
    },
    secondaryLink: {
      text: "Prefer email? hello@atem.gdn",
      href: "mailto:hello@atem.gdn"
    }
  }
}) => {
  return ( 
    <section className={`max-w-7xl mx-auto px-6 md:px-10 py-24 mb-40 rounded-2xl ${background} ${className}`}>
      <div className="text-center space-y-6">
        <h2 className={`text-3xl font-semibold ${foreground}`}>
          {cta.title}
        </h2>
        <p className={`text-base leading-relaxed ${foreground === 'text-black' ? 'text-slate-700' : foreground}`}>
          {cta.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 justify-center">
          <a
            href={cta.primaryButton.href}
            aria-label={cta.primaryButton.ariaLabel}
            className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-xl font-roboto transition-colors duration-300 ${
              foreground === 'text-white' 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {cta.primaryButton.text}
          </a>
          {cta.secondaryLink && (
            <a
              href={cta.secondaryLink.href}
              className={`text-sm font-roboto tracking-wide underline ${
                foreground === 'text-white' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-slate-600 hover:text-slate-800'
              } transition-colors`}
            >
              {cta.secondaryLink.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;
