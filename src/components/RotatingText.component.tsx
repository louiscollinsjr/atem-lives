import { useState, useEffect } from 'react';

const RotatingText = ({ phrases }: { phrases: string[] }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const transitionInterval = 4000; // Total time for each phrase
    
    const interval = setInterval(() => {
      // Start transition out
      setIsTransitioning(true);
      
      // After fade out, change the text and fade in
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTransitioning(false);
      }, 600); // Fade out duration
      
    }, transitionInterval);

    return () => clearInterval(interval);
  }, [phrases.length]);
  
  // Find the longest phrase for consistent sizing
  const longestPhrase = phrases.reduce((longest, phrase) => 
    phrase.length > longest.length ? phrase : longest, "");

  return (
    <div className="inline-block relative">
      <div className="invisible" aria-hidden="true">
        {longestPhrase}
      </div>
      <div 
        className={`absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-2 text-righte' : 'opacity-100 transform translate-y-0 text-right'}`}
      >
        {phrases[currentPhraseIndex]}
      </div>
    </div>
  );
};

export default RotatingText;