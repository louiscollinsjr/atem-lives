import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.component'
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClientSetup';
import './i18next.ts';





// Import the PostHog initialization function
import { initPostHog } from './posthog.ts';

// Initialize PostHog
initPostHog();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
     
    </BrowserRouter>
  </StrictMode>,
)
