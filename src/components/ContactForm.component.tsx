import React, { Fragment } from "react";  


const ContactForm: React.FC = () => {
  
  return (
   <Fragment> 
            <form className="mt-12 grid grid-flow-row gap-4">
              <input className="h-10 pl-4" name="first-name" placeholder="First Name" type="text" />
              <input className="h-10 pl-4" name="last-name" placeholder="Last Name" type="text" />
              <input className="h-10 pl-4" name="business-emai-address" placeholder="Business email adress" type="text" />
              <input className="h-10 pl-4" name="phone-number" placeholder="Phone Number (Optional)" type="text" />
              <div className="mt-6 mb-6" ><input type="checkbox" name="more-info"/> <label className="text-sm">Get updates about upcoming events, webinars, product announcements, and helpful resources.</label></div>
              <button className="bg-black hover:bg-blue-400 text-white rounded-full ~px-4/8 ~py-2/4 ~text-sm/xl" type="submit">Contact atem </button>
            </form>
      </Fragment>
  );
};

export default ContactForm;
