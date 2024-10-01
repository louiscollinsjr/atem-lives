// ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset the viewport position to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // Trigger this effect when the pathname changes

  return null; // This component doesn't render anything in the UI
};

export default ScrollToTop;