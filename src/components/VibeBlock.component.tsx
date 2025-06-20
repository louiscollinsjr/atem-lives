import React, { ReactNode } from 'react';

interface VibeBlockProps {
  title?: string;
  subtitle?: string;
  text?: string | ReactNode;
  images?: {
    src: string;
    alt: string;
  }[];
  imageDescription?: string;
  cta?: {
    text: string;
    link: string;
  };
  className?: string;
}

const VibeBlock: React.FC<VibeBlockProps> = ({ 
  title, 
  subtitle, 
  text, 
  images, 
  imageDescription, 
  cta, 
  className = ''
}) => {
  return (
    <section className={`py-16 md:py-24 lg:py-32 px-4 w-full max-w-screen-xl mx-auto ${className}`}>
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-center">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-center">
            {subtitle}
          </h3>
        )}
        
        {text && (
          <div className="text-lg md:text-xl font-light mb-10 text-center max-w-2xl mx-auto">
            {text}
          </div>
        )}
        
        {images && images.length > 0 && (
          <div className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto" 
                  />
                </div>
              ))}
            </div>
            {imageDescription && (
              <p className="text-sm text-center mt-4 text-gray-600">{imageDescription}</p>
            )}
          </div>
        )}
        
        {cta && (
          <div className="flex justify-center mt-8">
            <a 
              href={cta.link} 
              className="inline-block px-8 py-3 bg-black text-white rounded-full text-lg transition-all hover:bg-gray-800"
            >
              {cta.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default VibeBlock;
