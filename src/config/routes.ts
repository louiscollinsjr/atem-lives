import React from 'react';


export interface RouteConfig {
    path: string;
    spotlightText: string;
    isDarkBackground: boolean;
    component: React.ComponentType;
    index?: boolean;
  }
  
  import Home from '../components/Home.component';
  import Maestro from '../components/Maestro.component';
  import Design from '../components/Design.component';
  import Satchel from '../components/Satchel.components';
  import Design349 from '../components/Design349GetStarted.component';
  import OnBoardingWizard from '../components/OnBoardingWizard/OnBoardingWizard.component';
  import HomeContactForm from '../components/HomeContactForm.component';
 import NotFoundPage from '../components/NotFound.component';



  export const routes: RouteConfig[] = [
    { path: '/', spotlightText: 'Products and Services Spotlight', isDarkBackground: false,  component: Home, index: true },
    { path: '/maestro', spotlightText: 'Maestro Automations Spotlight', isDarkBackground: false, component: Maestro },
    { path: '/design', spotlightText: 'Design and Development Spotlight', isDarkBackground: false, component: Design },
    { path: '/satchel', spotlightText: 'Satchel Spotlight', isDarkBackground: false,  component: Satchel },
    { path: '/design349', spotlightText: '349.Design. Spotlight', isDarkBackground: true,  component: Design349 },
    { path: '/onboarding', spotlightText: '349.Design. Spotlight', isDarkBackground: false,  component: OnBoardingWizard },
    { path: '/contact', spotlightText: 'Contact', isDarkBackground: false,  component: HomeContactForm },
    { path: '*', spotlightText: '404 Page Not Found', isDarkBackground: false,  component: NotFoundPage},
  ];
  
  export const defaultRoute: RouteConfig = {
    path: '*',
    spotlightText: 'Products and Services Spotlight',
    isDarkBackground: false,
    component: Home,
    index: true,
  };
