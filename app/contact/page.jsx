"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="mb-10 md:mx-auto sm:text-center border-t w-full pt-10">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Get</span>
          </span>{" "}
          in Touch!
        </h2>
        <p className="text-base text-gray-700 md:text-lg font-sans lg:max-w-2xl max-w-xl w-fit mx-auto">
          We would love to hear from you, reach out to us with your questions,
          feedback, or ideas and we will be happy to assist.
        </p>
      </div>

      <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
        <div className="container px-5 pb-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.712970731551!2d74.87621107472337!3d21.36181397625709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf3203969b41c7%3A0xb4050432d04ef5b8!2sR.%20C.%20Patel%20Institute%20of%20Technology%2C%20Shirpur!5e0!3m2!1sen!2sin!4v1758136347595!5m2!1sen!2sin"
                width="800"
                height="650"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

         <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-10 mt-8 md:mt-0 p-8 shadow-xl rounded-2xl border border-gray-100">
            <h2 className="flex text-gray-900 justify-center text-lg font-semibold title-font mb-2">
              Note
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-sm">
              Please do not fill in any personal, sensitive, or confidential
              information in this form to ensure your privacy and security.
            </p>

            <form>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-4"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 
                        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                        text-gray-800 text-sm py-2 px-4 outline-none transition-all duration-200"
                    />
                </div>

              <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-4"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 
                    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                    text-gray-800 text-sm py-2 px-4 outline-none transition-all duration-200"
                />
                </div>

                <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-4"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 
                    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                    text-gray-800 text-sm py-2 px-4 outline-none transition-all duration-200 resize-none"
                />
                </div>

                <button
                type="submit"
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 
                focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg 
                text-sm px-6 py-3 transition-all duration-200"
                >
                Send Message
                </button>
            </form>
            <p className="flex text-xs text-gray-500 mt-5 justify-center">
              Please ensure your message is clear; 
              we will respond promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-200/60 flex max-w-7xl mx-auto mb-10 p-10 rounded-lg shadow-lg">
        <div className="container p-6 mx-auto">
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-400">
                📧
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">
                Email
              </h2>
              <p className="mt-2 text-gray-600">
                For questions or support, feel free to reach out to us anytime.
              </p>
              <p className="mt-2 text-blue-500">
                example@gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-400">
                📍
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">
                Address
              </h2>
              <p className="mt-2 text-gray-600">
                Nimzari Naka, Shirpur, Maharashtra
              </p>
              <p className="mt-2 text-blue-500">
                Shirpur -424 405, Dhule, Maharashtra, India
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-400">
                📞
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">
                Phone
              </h2>
              <p className="mt-2 text-gray-600">
                Mon-Fri from 10am to 5pm.
              </p>
              <p className="mt-2 text-blue-500">
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
