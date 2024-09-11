import React from 'react';
import { NavLink } from 'react-router-dom';
const DesignServices: React.FC = () => {
  return (
    <section className="bg-[#1d1d1f] text-white pt-24">
      <div className="max-w-7xl mx-auto md:px-4 py-8 text-left px-12">
        <h1 className="~text-5xl/7xl font-semi mb-4 md:w-1/2 pb-4 font-medium bg-gradient-to-r from-lime-500 via-amber-400 to-orange-300 bg-clip-text text-transparent">
          Stunning, Functional Web Design Solutions.
        </h1>
        <p className="mb-8 md:w-3/4 tracking-wide text-xl leading-8 font-roboto font-light">
          Our web design process ensures your website or app reflects your
          brand’s strategy, visual identity, and unique voice. By crafting a
          cohesive online presence, we help you build trust with your audience
          and stand out in a crowded market.
          <br />
          <br /> The result is not just a beautiful design but a digital
          experience that truly represents your brand and drives success.
        </p>

        <div className="grid grid-cols-1 grid-rows-4 gap-12 pt-12">
          <div>
            <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-lime-500 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              Stunning Design Meets Front-End Precision
            </h2>
            <p className="md:w-3/4 text-xl tracking-wide font-bold">
              We start by understanding your users and their needs to ensure
              your website is not only beautiful but easy to navigate and
              inclusive for all.
            </p>
            <ul
              className="space-y-2 p-4 text-sm text-gray-300"
              style={{ listStyleType: 'disc' }}
            >
              <li>
                Discovery: We dive deep into understanding your audience and
                goals.
              </li>
              <li>
                UI/UX Audit: We analyze your current site for improvements in
                usability and flow.
              </li>
              <li>
                Information Architecture: We design the structure to help users
                find what they need.
              </li>
              <li>Copy & CTAs: Clear, persuasive messaging to drive action.</li>
              <li>
                Inclusive Design: We ensure accessibility for every visitor.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-lime-500 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              Crafting the Ultimate User Experience
            </h2>
            <p className="md:w-3/4 text-xl tracking-wide font-bold">
              Our design team brings your brand to life with visuals and
              interactivity that captivate, while our front-end developers
              ensure it all works seamlessly.
            </p>
            <ul
              className="space-y-2 p-4 text-sm text-gray-300"
              style={{ listStyleType: 'disc' }}
            >
              <li>
                Visual Design & Interactions: Engaging designs and animations
                tailored to your brand.
              </li>
              <li>
                UI/UX Audit: We analyze your current site for improvements in
                usability and flow.
              </li>
              <li>CMS Integration: Easily manage and update your content.</li>
              <li>
                Iconography & Illustrations: Custom visuals that make your site
                stand out.
              </li>
              <li>
                3rd Party Integrations: We connect the tools you need, like
                payment systems and analytics.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-lime-500 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              Powered by Leading Technology
            </h2>
            <p className="md:w-3/4 text-xl tracking-wide font-bold">
              We use cutting-edge technology to deliver fast, scalable websites
              that perform. Whether it’s a custom-coded site or a CMS solution,
              we ensure you’re set up for success.
            </p>
            <ul
              className="space-y-2 p-4 text-sm text-gray-300"
              style={{ listStyleType: 'disc' }}
            >
              <li>
                Astro | NEXT.js | Gatsby: Modern frameworks for fast,
                high-performance websites.
              </li>
              <li>
                Headless CMS: Flexible content management systems for dynamic,
                adaptable sites.
              </li>
              <li>CMS Integration: Easily manage and update your content.</li>
              <li>
                Webflow: A no-code option for simple, efficient web design.
              </li>
              <li>
                React Native: Build native mobile apps for iOS and Android.
              </li>
              <li>
                Node.js: A powerful server-side runtime for building scalable
                applications.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-light tracking-wide">
              <b>Ready to Elevate Your Digital Presence?</b> Our approach combines
              thoughtful design with powerful technology to create a website
              that not only looks great but drives results.
              <br/><br/>
              <NavLink to="/contact" className={'text-blue-500'}>
                {' '}
                Start your project today
              </NavLink>
              , and let’s make something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
