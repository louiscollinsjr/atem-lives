import type { ComponentType } from 'react';

import Home from '../components/Home.component';
import Maestro from '../components/Maestro.component';
import Design from '../components/Design.component';
import Satchel from '../components/Satchel.components';
import Design349 from '../components/Design349GetStarted.component';
import OnBoardingWizard from '../components/OnBoardingWizard/OnBoardingWizard.component';
import HomeContactForm from '../components/HomeContactForm.component';
import NotFound from '../components/not-found';
import VibeWithAtem from '../components/VibeWithAtem.page';
import LaunchNavigation from '../components/LaunchNavigation.component';
import LaunchLandingPage from '../components/LaunchLanding.page';
import LaunchPricingPage from '../components/LaunchPricing.page';
import CaseStudyPage from '../components/CaseStudyPage.component';
import StoriesPage from '../pages/Stories.page';
import StoryDetailPage from '../pages/StoryDetail.page';
import { LAUNCH_ENABLED } from './launch';

export interface RouteConfig {
  path: string;
  spotlightText: string;
  isDarkBackground: boolean;
  component: ComponentType;
  index?: boolean;
  navigation?: ComponentType;
}

export const routes: RouteConfig[] = [
  { path: '/launch', spotlightText: 'Products and Services Spotlight', isDarkBackground: false, component: LaunchLandingPage, navigation: LaunchNavigation, index: true },
  { path: '/pricing', spotlightText: 'Launch Pricing Spotlight', isDarkBackground: false, component: LaunchPricingPage, navigation: LaunchNavigation },
  { path: '/stories/:slug', spotlightText: 'Story Detail', isDarkBackground: false, component: StoryDetailPage },
  { path: '/stories', spotlightText: 'Stories', isDarkBackground: false, component: StoriesPage },
  { path: '/maestro', spotlightText: 'Maestro Automations Spotlight', isDarkBackground: false, component: Maestro },
  { path: '/design', spotlightText: 'Design and Development Spotlight', isDarkBackground: false, component: Design },
  { path: '/vibing-with-atem', spotlightText: 'Vibe Coding with Atem', isDarkBackground: false, component: VibeWithAtem },
  { path: '/satchel', spotlightText: 'Satchel Spotlight', isDarkBackground: false, component: Satchel },
  { path: '/design349', spotlightText: '349.Design. Spotlight', isDarkBackground: true, component: Design349 },
  { path: '/onboarding', spotlightText: 'Local❤️349.Design', isDarkBackground: false, component: OnBoardingWizard },
  { path: '/contact', spotlightText: 'Contact', isDarkBackground: false, component: HomeContactForm },
  { path: '/case-studies/:slug', spotlightText: 'Case Study Detail', isDarkBackground: false, component: CaseStudyPage },
  { path: '*', spotlightText: '404 Page Not Found', isDarkBackground: false, component: NotFound },
];

export const launchRoutes: RouteConfig[] = LAUNCH_ENABLED
  ? []
  : [];

export const defaultRoute: RouteConfig = {
  path: '*',
  spotlightText: 'Products and Services Spotlight',
  isDarkBackground: false,
  component: Home,
  index: true,
};