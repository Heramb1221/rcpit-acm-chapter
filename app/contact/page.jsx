"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      <div className="pt-24 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Touch</span>!
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            We would love to hear from you, reach out to us with your questions,
            feedback, or ideas and we will be happy to assist.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.712970731551!2d74.87621107472337!3d21.36181397625709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf3203969b41c7%3A0xb4050432d04ef5b8!2sR.%20C.%20Patel%20Institute%20of%20Technology%2C%20Shirpur!5e0!3m2!1sen!2sin!4v1758136347595!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
            />
          </div>

         <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy Note</h3>
              <p className="text-slate-600 text-sm">
                Please do not fill in any personal, sensitive, or confidential
                information in this form to ensure your privacy and security.
              </p>
            </div>

            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200  text-slate-800 py-3 px-4 outline-none transition-all duration-300 hover:border-slate-300"
                    />
                </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-slate-800 py-3 px-4 outline-none transition-all duration-300 hover:border-slate-300"
                />
                </div>

                <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200  text-slate-800 py-3 px-4 outline-none transition-all duration-300 resize-none hover:border-slate-300"
                />
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl py-3 px-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Send Message
                </button>
            </form>
            <p className="text-center text-xs text-slate-500 mt-4">
              Please ensure your message is clear; 
              we will respond promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-xl border border-blue-100 p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 mb-3">
                For questions or support, feel free to reach out to us anytime.
              </p>
              <p className="text-blue-600 font-semibold">
                example@gmail.com
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Address</h3>
              <p className="text-slate-600 mb-3">
                Nimzari Naka, Shirpur, Maharashtra
              </p>
              <p className="text-blue-600 font-semibold">
                Shirpur - 424 405, Dhule, Maharashtra, India
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 mb-3">
                Mon-Fri from 10am to 5pm.
              </p>
              <p className="text-blue-600 font-semibold">
                +91 ----- -----
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;