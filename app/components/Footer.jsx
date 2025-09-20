"use client";

import React from "react";
import footer from '../../public/assets/ACMOB.png'
import Image from "next/image";

const Footer = () => {

  return (
    <div>
        <footer className="bg-gradient-to-b from-blue-300 via-transparent pt-10 sm:pt-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-9xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6">
                    <div className="col-span-2 sm:col-span-2 md:col-span-1 gap-6 sm:gap-8">
                        <Image src={footer} height={175} width={200} alt="ACM Logo" className="sm:pb-6 md:pb-8 lg:pb-10" />
                        {/* <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere atque molestias vero eum voluptates, reprehenderit nostrum fuga quis modi.</p> */}
                    </div>
                    <div className="justify-center">
                        <h3 className="text-base text-blue-400 uppercase sm:text-lg font-semibold mb-3 sm:mb-4">Membership</h3>
                        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                            <li><a href="/events" className="text-gray-800 hover:text-blue-600">Our Events</a></li>
                            <li><a href="/team" className="text-gray-800 hover:text-blue-600">Our Team</a></li>
                            <li><a href="https://dl.acm.org/" target="_blank" className="text-gray-800 hover:text-blue-600">ACM Digital Library</a></li>
                            <li><a href="https://www.acm.org/membership/membership-benefits" target="_blank" className="text-gray-800 hover:text-blue-600">Membership Benefits</a></li>
                        </ul>
                    </div>
                    <div className="items-center justify-between">
                        <h3 className="text-base text-blue-400 uppercase sm:text-lg font-semibold mb-3 sm:mb-4">Official Resources</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[10px] sm:text-base">
                            <li><a href="https://learning.acm.org/" className="text-gray-800 hover:text-blue-600">ACM Learning Center</a></li>
                            <li><a href="https://www.acm.org/code-of-ethics" className="text-gray-800 hover:text-blue-600">ACM Code of Ethics</a></li>
                            <li><a href="https://www.acm.org/publications" target="_blank" className="text-gray-800 hover:text-blue-600">ACM Publications</a></li>
                            <li><a href="https://awards.acm.org/" target="_blank" className="text-gray-800 hover:text-blue-600">ACM Awards</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-base text-blue-400 sm:text-lg font-semibold mb-3 sm:mb-4">Lets Connect with each other</h3>
                        <p className="text-gray-500 text-xs">Feel free to reach out for any inquiries, partnerships, or support—we’re here to help!</p>
                        <div className="pt-6">
                            <div className="flex flex-wrap " bis_skin_checked="1">
                                <div className="p-2 w-full " bis_skin_checked="1">
                                    <div className="h-full min-w-fit flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-50" bis_skin_checked="1">
                                    <img alt="mial" className=" w-8 h-8 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 hidden md:block" src="https://cdn-icons-png.freepik.com/512/3870/3870795.png?ga=GA1.1.737403525.1733342298"/>
                                    <div className="flex-grow" bis_skin_checked="1">
                                        <a href="mailto:example@gmail.com" className="text-gray-900 title-font font-medium underline text-xs">example@gmail.com</a>
                                        <p className="text-gray-500 text-xs">Team ACM, RCPIT, Shirpur</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div>
            <p className="text-sm px-8 p-4">Copyright © <span className="text-blue-400"><a href="https://www.rcpit.ac.in/">RCPIT, Shirpur</a></span>. All Rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
