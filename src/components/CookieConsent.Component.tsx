// src/components/CookieConsent.tsx

import React, { useEffect, useState } from 'react';
import posthog from 'posthog-js';

// Define styles for the cookie consent popup
const popupStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    padding: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
};

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage for consent status
    const consentStatus = localStorage.getItem('cookieConsent');
    if (consentStatus === null) {
      // Show the popup only if consent status is not set
      setVisible(true);
    } else {
      // Optionally handle the case where consent is already given or declined
      if (consentStatus === 'accepted') {
        posthog.opt_in_capturing();
      } else if (consentStatus === 'declined') {
        posthog.opt_out_capturing();
      }
    }
  }, []);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={popupStyle} className='w-80 text-sm rounded-lg bg-slate-700 text-white'>
      <p className='pb-2'>
        We use cookies to enhance your experience and provide personalized content. This website uses cookies that are strictly necessary for its operation.
      </p>
      <p className='pb-8'>
        By continuing to browse our site, you consent to our use of these essential cookies. Learn more about our cookie policy in our Privacy Policy.
      </p>
      <p className='pb-8 font-bold'>
        No private data is sent to a third party.
      </p>
      <button className='p-2 mr-2 bg-white text-black rounded-lg font-bold tracking-wide' onClick={acceptCookies}>Accept</button>
      <button className='p-2 bg-slate-400 rounded-lg text-black' onClick={declineCookies}>Decline</button>
    </div>
  );
};

export default CookieConsent;