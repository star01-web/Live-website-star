import React from 'react'

export default function ContactForm() {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-4 md:px-12">
        <h3 className="text-yellow-500 font-semibold text-md underline underline-offset-8 mb-2">GET IN TOUCH</h3>
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8">        
          <h2 className="text-2xl font-bold mt-1">We Are Connected To Help Your Business!</h2>
          <p className="text-gray-600 mt-2">
            Ever find yourself staring at your computer screen, waiting for a good consulting slogan to come to mind? Oftentimes.
          </p>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Name</label>
              <input type="text" placeholder="Name *" className="border p-2 rounded-md w-full" required />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Email</label>
              <input type="email" placeholder="E-mail *" className="border p-2 rounded-md w-full" required />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Phone</label>
              <input type="text" placeholder="Phone *" className="border p-2 rounded-md w-full" required />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Location</label>
              <input type="text" placeholder="Location *" className="border p-2 rounded-md w-full" required />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold text-sm mb-1">Installation Place</label>
              <textarea placeholder="Installation Place" className="border p-2 rounded-md w-full" rows="2"></textarea>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg md:col-span-2">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    );
  }