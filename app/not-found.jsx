"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiArrowLeft,
  FiHome,
  FiCalendar,
  FiUsers,
  FiBookOpen,
  FiMail,
  FiCompass,
} from "react-icons/fi";

export default function NotFound() {
  const router = useRouter();

  const quickLinks = [
    {
      title: "Events & Workshops",
      description: "Explore technical sessions, bootcamps, and upcoming chapter activities.",
      href: "/events",
      icon: FiCalendar,
    },
    {
      title: "Our Team",
      description: "Connect with chapter leads, faculty advisors, and student organizers.",
      href: "/team",
      icon: FiUsers,
    },
    {
      title: "About Chapter",
      description: "Learn about the mission, charter, and initiatives of ACM RCPIT.",
      href: "/about",
      icon: FiBookOpen,
    },
    {
      title: "Contact & Support",
      description: "Reach chapter administrators or notify us about a missing resource.",
      href: "/contact",
      icon: FiMail,
    },
  ];

  return (
    <div className="w-full flex-grow flex items-center justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="w-full max-w-3xl">
        {/* Main Institutional Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 sm:p-10 md:p-12 transition-all">
          
          {/* Header Row: Chapter Identity & Status Code */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-100/80">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              ACM RCPIT Official Portal
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              <FiCompass className="w-3.5 h-3.5 text-slate-400" />
              <span>HTTP 404 • Not Found</span>
            </div>
          </div>

          {/* Heading and Description */}
          <div className="mb-8">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 uppercase mb-2">
              Resource Notice
            </p>
            <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              The requested page could not be found
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              The document, resource, or destination you attempted to access is unavailable. It may have been relocated, renamed, or temporarily archived as part of ongoing chapter website maintenance.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 active:bg-blue-800 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FiHome className="w-4 h-4" />
              Return to Homepage
            </Link>

            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-700 font-medium text-sm border border-slate-300 hover:bg-slate-50 active:bg-slate-100 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              <FiArrowLeft className="w-4 h-4" />
              Previous Page
            </button>
          </div>

          {/* Quick Navigation Directory */}
          <div className="pt-6 border-t border-slate-100">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <FiCompass className="w-4 h-4 text-blue-600" />
              Recommended Chapter Destinations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {quickLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-blue-50/40 hover:border-blue-200 transition duration-150 flex items-start gap-3.5"
                  >
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors shrink-0 shadow-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Helpdesk Notice */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              Report a broken link or inquiry:{" "}
              <a
                href="mailto:rcpitspoc@gmail.com"
                className="font-medium text-blue-600 hover:text-blue-800 underline underline-offset-2"
              >
                rcpitspoc@gmail.com
              </a>
            </p>
            <span className="text-slate-400">
              ACM Student Chapter • RCPIT Shirpur
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
