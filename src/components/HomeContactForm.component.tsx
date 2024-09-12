import React from "react";  
import ContactForm from "./ContactForm.component";



const AtemPerfectFitForm: React.FC = () => {


  return (
    <section id="contact-section" className={`max-w-7xl mx-auto md:px-4 py-6 pt-52 pb-24 text-left px-12`} tabIndex={-1}>
      <div className="max-w-screen-2xl">
        <p className="~text-base/lg tracking-wide text-black font-bold uppercase">
          Earning trust one client at a time
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-6">
          <div className="items-center content-start justify-items-center py-8">
            <h2 className="font-bold tracking-normal ~text-5xl/7xl">Discover the <br/> perfect fit with<br/> atem</h2>
            <h3 className="~text-lg/xl font-semi py-6">We’re happy to answer your questions.</h3> 
           <ul className="list-disc px-4 leading-10 ~text-base/xl">
            <li>Secure an appointment to talk to one of our developers</li>
            <li>Explore use cases based on your industry</li>
            <li>Learn how atem can improve your customer relationships</li>
           </ul>
          </div>
          <div className="p-12 bg-slate-100 content-start items-center justify-items-center">
            <h3 className="font-bold text-left md:text-center ~text-2xl/5xl">Tell us about yourself and well get back to you shortly.</h3>
            {/* <form className="mt-12 grid grid-flow-row gap-4">
              <input className="h-10 pl-4" name="first-name" placeholder="First Name" type="text" />
              <input className="h-10 pl-4" name="last-name" placeholder="Last Name" type="text" />
              <input className="h-10 pl-4" name="business-emai-address" placeholder="Business email adress" type="text" />
              <input className="h-10 pl-4" name="phone-number" placeholder="Phone Number (Optional)" type="text" />
              <div className="mt-6 mb-6" ><input type="checkbox" name="more-info"/> <label className="text-sm">Get updates about upcoming events, webinars, product announcements, and helpful resources.</label></div>
              <button className="bg-black hover:bg-blue-400 text-white rounded-full ~px-4/8 ~py-2/4 ~text-sm/xl" type="submit">Contact atem </button>
            </form> */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtemPerfectFitForm;
