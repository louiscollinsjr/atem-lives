import posthog from 'posthog-js';

// Initialize PostHog with your project API key and settings
export const initPostHog = () => {
    posthog.init('phc_BsNaC1hb17uaAbaoxcZCxhDkPlNFFmXbooKwdn0wv6C', {
        api_host: 'https://eu.i.posthog.com',
        capture_pageview: true,
        persistence: 'localStorage',
        autocapture: false,
        disable_session_recording: false,
        opt_out_capturing_by_default: false,
        loaded: () => {
          console.log('PostHog loaded');
        }
      });

    // Optional: Disable tracking by default until user consents
    posthog.opt_out_capturing();
    
};

export default posthog;
