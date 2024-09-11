
import { NavLink } from 'react-router-dom'



const DesignOutsourcing = () => {
  return (
    <section className=" w-full flex flex-col content-center items-center min-h-[42.5rem] py-24">
    <div className="max-w-screen-2xl">
      <div className="max-w-2xl mx-auto w-[61.25rem] sm:px-6 lg:p-12">
        <h2 className="~text-4xl/6xl font-bold text-black text-center tracking-wide">
          Hiring or traditional outsourcing? Neither.
        </h2>
        <div className="~text-base/lg text-left lg:w-245 py-10 pb-0 lg:text-left">
        <p>Let's be real: traditional web design services are outdated. They were built for a time when businesses didn't need constant updates or adaptability. </p>
        <p className='pt-4'>In today's fast-paced digital world, having a website that evolves with your needs is essential. That's why Design by Atem offers a subscription-based model—providing you with continuous updates, flexibility, and modern solutions that grow alongside your business.</p>
        </div>
        <div className="text-center">
          <NavLink
            to="https://calendly.com/louiscollinsjr/atem-intro" // Adjust this path to the correct route in your app
            title="Schedule a call with atem"
            className="inline-flex items-center justify-center px-4 py-3 my-12 font-semibold text-white bg-black transition-all duration-200 border border-transparent rounded-xl border-gray-700 hover:bg-slate-50 hover:text-black focus:text-black focus:bg-white"
            //activeClassName="bg-slate-50 text-black" // Optional: Styles for active link
          >
            Schedule a call
          </NavLink>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DesignOutsourcing