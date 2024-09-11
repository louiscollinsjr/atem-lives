import React from 'react';

const DesignAdditionalServices: React.FC = () => {
  const services = [
    { title: 'Branding', description: 'Create a unique and memorable brand identity for your business.' },
    { title: 'UI/UX Design', description: 'Craft intuitive and visually appealing user interfaces and experiences.' },
    { title: 'App Design', description: 'Design beautiful and functional mobile applications for iOS and Android.' },
    { title: 'Web App Development', description: 'Build powerful and scalable web applications tailored to your needs.' },
    { title: 'Design Systems', description: 'Develop consistent and reusable design components for your digital products.' },
    { title: 'Startup Web Design', description: 'Create impactful websites to launch and grow your startup.' },
    { title: 'SEO Optimization', description: 'Improve your website\'s visibility and ranking in search engine results.' },
    { title: 'Content Strategy', description: 'Develop effective content plans to engage and grow your audience.' },
    { title: 'Analytics & Reporting', description: 'Gain insights into your digital performance with data-driven analysis.' },
  ];

  return (
    <section className="w-full px-4 py-12 text-left bg-slate-100">
    <div className="max-w-6xl mx-auto py-24 text-left">
      <h1 className="text-4xl font-bold mb-4 px-8">Additional Services</h1>
      <p className="text-lg mb-8 px-8">We offer a range of additional services to enhance your website and business.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {services.map((service, index) => (
          <div key={index} className="">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 md:text-sm text-base md:w-3/4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
   
  );
};

export default DesignAdditionalServices;