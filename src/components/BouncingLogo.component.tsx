import React, { useEffect, useState } from 'react';

const BouncingLogo: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    // Stop animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="inline-flex items-center mr-2">
      <div 
        className={`h-4 w-4 md:h-5 md:w-5 bg-black rounded-full transition-transform duration-500 ${
          isAnimating 
            ? 'animate-bounce' 
            : 'transform translate-y-0'
        }`}
      ></div>
    </div>
  );
};

export default BouncingLogo;
