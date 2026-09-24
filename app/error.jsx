"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiAlertTriangle,
  FiRefreshCw,
  FiHome,
  FiMail,
  FiChevronDown,
} from "react-icons/fi";

export default function Error({ error, reset }) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Optionally log error to monitoring service or console in development
    console.error("Portal Runtime Error:", error);
  }, [error]);

  return (
    <div className="w-full flex-grow flex items-center justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 sm:p-10 md:p-12 transition-all">
          
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-50 text-amber-800 border border-amber-200/80">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              Application Notice
            </div>
            {error?.digest ? (
              <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                Ref: {error.digest}
              </span>
            ) : (
              <span className="text-xs font-mono font-medium text-slate-400">
                System Error
              </span>
            )}
          </div>

          {/* Heading */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 shrink-0 shadow-xs">
              <FiAlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                An unexpected error occurred
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                The portal encountered an unhandled exception while attempting to render this page. This could be due to a temporary network disruption or a live update in progress.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 active:bg-blue-800 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FiRefreshCw className="w-4 h-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-700 font-medium text-sm border border-slate-300 hover:bg-slate-50 active:bg-slate-100 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              <FiHome className="w-4 h-4" />
              Return to Homepage
            </Link>
          </div>

          {/* Collapsible Diagnostic Details */}
          <div className="pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs font-medium text-slate-500 hover:text-slate-700 flex items-center gap-1.5 focus:outline-none"
            >
              <span>{showDetails ? "Hide technical diagnostic" : "View technical diagnostic"}</span>
              <FiChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  showDetails ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDetails && (
              <div className="mt-3 p-3.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
                <p className="text-red-400 font-semibold mb-1">
                  {error?.name || "Error"}: {error?.message || "An unhandled runtime error occurred."}
                </p>
                {error?.digest && (
                  <p className="text-slate-400 mt-1">Error Digest: {error.digest}</p>
                )}
              </div>
            )}
          </div>

          {/* Helpdesk Notice */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <p className="flex items-center gap-1.5">
              <FiMail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              Technical support:{" "}
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
