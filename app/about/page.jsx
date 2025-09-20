"use client";

import React, { useEffect, useState, useRef } from "react";

const inaugurationImg = "/assets/inauguration.jpg";
const leadershipImg = "/api/placeholder/400/300";

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      options
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options.root, options.rootMargin, options.threshold]);
  return [ref, inView];
}

const FadeIn = ({ children, className = "", delay = 0, ...props }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen w-full text-slate-800 antialiased bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      <section className="relative min-h-[80vh] pt-20 pb-16 px-6 bg-gradient-to-br from-slate-600 via-blue-500 to-indigo-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 opacity-70">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-cyan-300 font-semibold">Official ACM Student Chapter</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Us</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-slate-200 mb-8">
                RCPIT ACM Student Chapter
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Inspiring Innovation, Building the Future of Computing.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="#mission-vision"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Discover Our Mission
              </a>
              <a
                href="#our-journey"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-medium backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                Our Journey
              </a>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50 via-transparent to-transparent pointer-events-none"></div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission-vision" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Purpose</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl rotate-1 opacity-10 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 h-full hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    To promote computing knowledge, foster innovation, and build a vibrant community of aspiring technologists at RCPIT. We bridge the gap between academic learning and real-world applications through hands-on workshops, collaborative projects, and industry engagement.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Advance computing education and research</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      <span>Foster collaboration and networking</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span>Promote ethical computing practices</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-3xl -rotate-1 opacity-10 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-cyan-100 h-full hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    To create the next generation of computing leaders who will drive technological innovation and contribute meaningfully to the global tech ecosystem. We envision RCPIT ACM Chapter as a catalyst for transformative ideas and groundbreaking solutions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      <span>Develop industry-ready professionals</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span>Champion innovation and entrepreneurship</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span>Impact the future of technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section id="our-journey" className="py-20 px-6 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Journey</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Every great movement starts with a single step. Here's how the RCPIT ACM Chapter came to life in 2025.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-400 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Founded in 2025</h3>
                      <p className="text-blue-200">The Beginning of Innovation</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">
                    RCPIT ACM Student Chapter was officially established in 2025, marking a historic milestone for computing education and student engagement at our institute.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">The Genesis Story</h3>
                  <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                    <p>
                      The RCPIT ACM Student Chapter was born from a vision shared by passionate students and dedicated faculty who recognized the need for a platform that bridges academic excellence with industry innovation.
                    </p>
                    <p>
                      Recognizing the rapid evolution of the computing landscape and the need for students to stay ahead of technological trends, our founding team embarked on a mission to create a community where learning transcends traditional classroom boundaries.
                    </p>
                    <p>
                      Our chapter was established to provide students with unprecedented access to cutting-edge resources, industry mentorship, and collaborative opportunities that prepare them for the challenges of tomorrow's technology-driven world.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl rotate-3 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-blue-100">
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src={inaugurationImg} 
                      alt="RCPIT ACM Chapter Inauguration Ceremony" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Inauguration Ceremony 2025</h3>
                    <p className="text-slate-600">
                      The moment our journey officially began, surrounded by enthusiastic students, supportive faculty, and industry leaders who believed in our vision.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">We Do</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Our comprehensive approach to computing education and professional development through diverse initiatives and programs.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Workshops & Seminars */}
            <FadeIn delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 group text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Workshops & Seminars</h3>
                <p className="text-slate-600 mb-6">
                  Hands-on technical workshops and industry seminars covering cutting-edge technologies, programming languages, and emerging trends in computing.
                </p>
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    Technical Skills Development
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    Industry Expert Sessions
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                    Certification Programs
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Hackathons & Competitions */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-cyan-100 hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 group text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Hackathons & Competitions</h3>
                <p className="text-slate-600 mb-6">
                  Organized coding challenges, hackathons, and programming competitions that encourage innovation, problem-solving, and collaborative development.
                </p>
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    Innovation Challenges
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                    Team Collaboration
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Prize Recognition
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Student Projects & Research */}
            <FadeIn delay={300}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-indigo-100 hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 group text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Student Projects & Research</h3>
                <p className="text-slate-600 mb-6">
                  Support and guidance for student-led research projects, open-source contributions, and innovative solutions to real-world computing challenges.
                </p>
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                    Research Mentorship
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Open Source Contributions
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    Publication Support
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Networking & Collaboration */}
            <FadeIn delay={400}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100 hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 group text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Networking & Collaboration</h3>
                <p className="text-slate-600 mb-6">
                  Building professional networks through industry partnerships, alumni connections, and peer-to-peer learning opportunities that extend beyond campus boundaries.
                </p>
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Industry Partnerships
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    Alumni Network
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span>
                    Professional Events
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}