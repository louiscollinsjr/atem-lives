import React from "react";  
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase/config";
import { useTranslation } from "react-i18next";




const HomeContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    explore: '',
    details: '',
    updates: false,
  });
  const [formStatus, setFormStatus] = React.useState<{ message: string; isError: boolean } | null>(null);
  const [loading, setLoading] = React.useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Handle explore button
  const handleExplore = (value: string) => {
    setFormData(prev => ({ ...prev, explore: value }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(null);
    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setFormStatus({ message: t('Thank you! We’ll be in touch soon.'), isError: false });
      setFormData({ name: '', email: '', phone: '', explore: '', details: '', updates: false });
    } catch (error: any) {
      setFormStatus({ message: t('Something went wrong. Please try again.'), isError: true });
    }
    setLoading(false);
  };

  return (
    <section id="contact-section" className="w-full flex flex-col content-center items-center min-h-[42.5rem] py-20 sm:py-24 md:py-48" tabIndex={-1}>
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="py-4 md:py-8 flex flex-col justify-center">
          <p className="text-base font-bold tracking-wide text-black mb-6">
          Build with atem
        </p>
            <h1 className="font-bold text-3xl md:text-7xl mb-6 w-[90%]">Ready to build? Let’s start with a quick intro — we’ll follow up personally.</h1>
            <p className="text-xs md:text-2xl font-medium text-gray-600 mb-6 w-[90%]">
  atem. offers a range of services — from rapid MVP builds to enterprise-grade automation with Maestro. Whether you’re looking to launch something new, improve existing systems, or explore how AI can power your business, we’d love to collaborate. Just tell us a bit about yourself.
</p>
          </div>
          <div className="p-2 md:p-1 rounded-lg bg-gradient-to-br from-pink-500 via-yellow-400 to-blue-500">
            <form className="space-y-6 bg-white p-8 rounded-lg shadow" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
                <input id="name" name="name" type="text" required placeholder="John Doe" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Email <span className="text-red-500">*</span></label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">Phone number</label>
                <input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label className="block font-semibold mb-6">What would you like to explore with atem? <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-3">
                  <button type="button" className={`px-4 py-2 rounded border ${formData.explore === 'build' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => handleExplore('build')}>Build something new</button>
                  <button type="button" className={`px-4 py-2 rounded border ${formData.explore === 'improve' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => handleExplore('improve')}>Improve existing systems</button>
                  <button type="button" className={`px-4 py-2 rounded border ${formData.explore === 'discuss' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => handleExplore('discuss')}>Not sure - want to discuss</button>
                </div>
              </div>
              <div>
                <label htmlFor="details" className="block font-semibold mb-1">Tell us a little about your project or idea (optional)</label>
                <textarea id="details" name="details" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring" rows={3} value={formData.details} onChange={handleChange} />
              </div>
              <div className="flex items-center">
                <input id="updates" name="updates" type="checkbox" checked={formData.updates} onChange={handleChange} className="mr-2" />
                <label htmlFor="updates" className="text-sm">Get updates about upcoming events, webinars, product announcements, and helpful resources.</label>
              </div>
              <button type="submit" className="w-full bg-black text-white py-3 rounded font-semibold flex items-center justify-center gap-2 rounded-full" disabled={loading}>{loading ? t('Submitting...') : <>Submit <span aria-hidden>→</span></>}</button>
              {formStatus && (
                <div className={`mb-4 pt-4 text-center ${formStatus.isError ? 'text-red-700' : 'text-slate-600'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactForm;
