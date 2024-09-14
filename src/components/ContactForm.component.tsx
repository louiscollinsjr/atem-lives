import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase/config";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    comment: "",
    getUpdates: false,
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(null);
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      
      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        comment: "",
        getUpdates: false,
      });
      
      // Set success message
      setFormStatus({ message: "Form submitted successfully!", isError: false });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setFormStatus({ message: `An error occurred: ${error}`, isError: true });
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            className="h-10 pl-4"
            name="firstName"
            placeholder={t("First Name")}
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="h-10 pl-4"
            name="lastName"
            placeholder={t("Last Name")}
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          className="h-10 pl-4"
          name="email"
          placeholder={t("Business email address")}
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="h-10 pl-4"
          name="phoneNumber"
          placeholder={t("Phone Number (Optional)")}
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <textarea
          className="h-32 pl-4 pt-2"
          name="comment"
          placeholder={t("Your comment")}
          value={formData.comment}
          onChange={handleChange}
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="getUpdates"
            checked={formData.getUpdates}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-xs py-4">
            {t("Get updates about upcoming events, webinars, product announcements, and helpful resources.")}
          </label>
        </div>
        <button
          className="bg-black hover:bg-slate-800 text-white rounded-full px-4 py-2 text-sm"
          type="submit"
        >
          {t("Contact atem")}
        </button>
      </form>{formStatus && (
        <div className={`mb-4 pt-8 text-center ${formStatus.isError ? 'text-red-700' : ' text-slate-600'}`}>
          🎉  {formStatus.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
