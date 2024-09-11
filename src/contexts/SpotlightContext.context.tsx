import React, { useMemo, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { routes, defaultRoute } from '../config/routes';

interface SpotlightContextType {
  spotlightText: string;
  isDarkBackground: boolean;
}

const SpotlightContext = React.createContext<SpotlightContextType | undefined>(undefined);

export const SpotlightProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  const contextValue = useMemo(() => {
    const currentRoute = routes.find(route => route.path === location.pathname) || defaultRoute;
    return {
      spotlightText: currentRoute.spotlightText,
      isDarkBackground: currentRoute.isDarkBackground,
    };
  }, [location.pathname]);

  return (
    <SpotlightContext.Provider value={contextValue}>
      {children}
    </SpotlightContext.Provider>
  );
};

export const useSpotlight = () => {
  const context = useContext(SpotlightContext);
  if (context === undefined) {
    throw new Error('useSpotlight must be used within a SpotlightProvider');
  }
  return context;
};

// Make sure to export the context as well if needed elsewhere
export default SpotlightContext;