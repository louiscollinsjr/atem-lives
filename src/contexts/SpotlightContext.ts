import { createContext, useContext } from 'react';

const SpotlightContext = createContext<string>('');

export const useSpotlight = () => useContext(SpotlightContext);

export default SpotlightContext;