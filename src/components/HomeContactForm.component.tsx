import React from "react";  
import ContactForm from "./ContactForm.component";
import { useTranslation } from "react-i18next";




const AtemPerfectFitForm: React.FC = () => {
  const { t } = useTranslation();


  return (
    <section id="contact-section" className="max-w-7xl mx-auto px-4 md:px-6 py-12 pb-24 md:py-24 text-left" tabIndex={-1}>
      <div className="max-w-screen-2xl">
        <p className="~text-base/lg tracking-wide text-black font-bold uppercase mb-4 md:mb-6">
          {t("Earning trust one client at a time")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="py-4 md:py-8">
            <h2 className="font-bold tracking-normal ~text-5xl/7xl mb-4">{t("Discover the perfect fit with atem")}</h2>
            <h3 className="~text-lg/xl font-semi py-4 md:py-6">{t("We're happy to answer your questions.")}</h3> 
           <ul className="list-disc pl-5 md:px-4 space-y-2 md:space-y-4 ~text-base/xl">
            <li>{t("Secure an appointment to talk to one of our developers")}</li>
            <li>{t("Explore use cases based on your industry")}</li>
            <li>{t("Learn how atem can improve your customer relationships")}</li>
           </ul>
          </div>
          <div className="p-6 md:p-12 bg-slate-100">
            <h3 className="font-bold text-center ~text-xl/5xl mb-6">{t("Tell us about yourself and we'll get back to you shortly.")}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtemPerfectFitForm;
