import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { SpotlightProvider } from './contexts/SpotlightContext.context';
import Navigation from './components/Navigation.component';
import { routes, defaultRoute } from './config/routes';
import CookieConsent from './components/CookieConsent.Component';
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
        <CookieConsent />
      </SpotlightProvider>
  );
};

export default App;

// import Navigation from './components/Navigation.component';
// import Home from './components/Home.component';
// import Design from './components/Design.component';
// import Satchel from './components/Satchel.components';
// import OnBoardingWizard from './components/OnBoardingWizard/OnBoardingWizard.component';
// import { Routes, Route } from 'react-router-dom';
// import { SpotlightProvider } from './contexts/SpotlightContext.context';
// import Maestro from './components/Maestro.component';
// import GetStarted from './components/OnBoardingWizard/GetStarted.component';



// function App() {
//   return (
//     <SpotlightProvider>
//     <Routes>
//       <Route element={<Navigation />}>
//         <Route index element={<Home />} />
//         <Route path="design" element={<Design />} />
//         <Route path="design349" element={<GetStarted />} />
//         <Route path="onboarding" element={<OnBoardingWizard />} />
//         <Route path="satchel" element={<Satchel />} />
//         <Route path="maestro" element={<Maestro />} />
//         </Route>
//       </Routes>
//     </SpotlightProvider>
//   );
// }

// export default App;
