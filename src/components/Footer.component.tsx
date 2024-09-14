import React from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';

import navLogo from '../assets/atem-logo-with-wings-black.svg';
import metaThreads from '../assets/metaThreads-icon.svg';
import metaInstagram from '../assets/metaInstagram-icon.svg';
import xTwitter from '../assets/xTwitter-icon.svg';
import linkedIn from '../assets/linkedIn-icon.svg';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section className="bg-zinc-50 flex flex-col md:content-center md:items-center min-h-[20rem] py-12 px-10">
        <div className="max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full text-xs">
            <div className="text-black">
              <img className="w-40" src={navLogo} alt="" />
              <p className="text-xs font-normal mt-6">{t("Follow us")}</p>
              <div className="flex flex-row">
                <img className="w-6" src={metaThreads} alt="" />
                <img className="w-6 m-2" src={metaInstagram} alt="" />
                <img className="w-6 m-2" src={xTwitter} alt="" />
                <img className="w-6 m-2" src={linkedIn} alt="" />
              </div>
            </div>

            <div className="">
              {' '}
              {/* colum 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="">
                  <div className="font-bold ">{t("Maestro DEX Automations")}</div>
                  <div>
                    <NavLink
                      className=" text-slate-700 hover:text-black"
                      to="/maestro"
                    >
                      {t("Get Started")}
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className=" text-slate-700 hover:text-black"
                      to="/maestro"
                    >
                      {t("Subscription Information & Pricing")}
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className=" text-slate-700 hover:text-black"
                      to="/maestro"
                    >
                      {t("Referrals")}
                    </NavLink>
                  </div>
                </div>

                <div className="">
                  <div className="font-bold">{t("Augmented reality")}</div>
                  <div>
                    <NavLink className="text-xs nav-link" to="">
                      {t("Developers")}
                    </NavLink>
                  </div>
                  <div>
                    <NavLink className="text-xs nav-link" to="">
                      {t("Made for Satchel partner program")}
                    </NavLink>
                  </div>
                  <div>
                    <NavLink className="text-xs nav-link" to="">
                      {t("Blog")}
                    </NavLink>
                  </div>
                </div>

                <div className=" ">
                  <div className="font-bold ">{t("Devolop and Design")}</div>
                  <div>
                    <NavLink className="text-xs nav-link" to="">
                      {t("Get Started")}
                    </NavLink>
                  </div>
                  <div>
                    <NavLink className="text-xs nav-link" to="">
                      {t("Pricing")}
                    </NavLink>
                  </div>
                </div>

                <div className="">
                  <div className="font-bold">{t("About us")}</div>
                  <div>
                    <NavLink className="text-xs nav-link" to="">
                      {t("About atem")}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
