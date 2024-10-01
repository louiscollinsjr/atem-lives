import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { SpotlightProvider } from './contexts/SpotlightContext.context';
import Navigation from './components/Navigation.component';
import { routes, defaultRoute } from './config/routes';
import ScrollToTop from './components/ScrollToTop.component';


const App: React.FC = () => {
 
  return (
      <SpotlightProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Navigation />}>
            {routes.map((route) => 
              route.index ? (
                <Route index key="index" element={<route.component />} />
              ) : (
                <Route key={route.path} path={route.path} element={<route.component />} />
              )
            )}
            <Route path={defaultRoute.path} element={<defaultRoute.component />} />
          </Route>
        </Routes>
      </SpotlightProvider>
  );
};

export default App;