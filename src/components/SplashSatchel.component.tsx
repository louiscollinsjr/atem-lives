import React from "react";

const SplashSatchel: React.FC = () => {
  return (
    <section className="bg-gray-100 items-center justify-center">
      <div className='container flex flex-col items-center justify-center h-screen transition-all duration-800 mx-auto'>
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="~text-[6rem]/[10rem] font-medium font-spartan text-gray-900 items-center justify-center text-center uppercase tracking-widest">
     S❤️tchel.
          </h1>
          <p className="~text-xs/sm tracking-wide justify-center font-space text-center">
          At the core of our business lies a passion for crafting designs that inspire and ignite emotions in our clients and their customers. 
          </p> 
          <p className="justify-center pt-20">
          <a
            href="https://calendly.com/louiscollinsjr/atem-intro"
            className="bg-black text-white text-xs px-3 py-1.5 rounded-full"
          >
            Learn more
          </a>
        </p>
        </div>
       
      </div>
    </section>
  );
}

export default SplashSatchel;