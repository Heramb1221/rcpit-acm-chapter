"use client";

import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
const heroImages = [
  { src: "/assets/inauguration.jpg", caption: "Chapter Inauguration Ceremony" },
  { src: "/assets/lokeshAnchoring.jpg", caption: "" },
  { src: "/assets/crowd.jpg", caption: "" },
  {
    src: "/assets/prajaktawelcome.jpg",
    caption: "Value-added course inaugration",
  },
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setIsInView(true)),
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

const SlideShow = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative h-full group">
      <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">
            {images[currentSlide].caption}
          </h3>
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300"
        onClick={nextSlide}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default function Homepage() {
  return (
    <main className="min-h-screen w-full text-slate-800 antialiased bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* HERO SECTION */}
      <section className="min-h-screen pt-12 pb-16 px-6 bg-gradient-to-br from-slate-600 via-blue-500 to-indigo-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <FadeIn className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-800/10 to-cyan-100/10 rounded-2xl blur opacity-75 -z-10"></div>
                  <img
                    src="/assets/footer.png"
                    alt="ACM Logo"
                    // className="w-20 h-20 rounded-2xl shadow-lg relative z-10"
                  />
                </div>

                <div>
                  <h3 className="text-cyan-300 text-lg font-semibold">
                    Official ACM Chapter
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Association for Computing Machinery
                  </p>
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  RCPIT ACM
                </span>{" "}
                Student Chapter
              </h1>

              <p className="text-lg text-justify text-slate-200 leading-relaxed max-w-2xl">
                The RCPIT ACM Student Chapter is a vibrant community dedicated
                to fostering innovation, learning, and collaboration among
                aspiring technologists. We organize diverse events, workshops,
                and competitions to bridge the gap between academic knowledge
                and real-world applications. Our mission is to empower students
                with cutting-edge skills, leadership opportunities, and access
                to a global network of computing professionals. Join us to
                explore, create, and lead in the ever-evolving world of
                technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Join Our Community
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#about-acm"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-medium backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={300} className="h-[500px] lg:h-[600px]">
              <SlideShow images={heroImages} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT ACM SECTION */}
      <section
        id="about-acm"
        className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl rotate-6 opacity-20"></div>
                <div className="relative bg-blue-50 rounded-3xl p-12 shadow-2xl border border-blue-100">
                  <div className="flex items-center justify-center mb-8">
                    <img
                      src={logo}
                      alt="ACM Logo"
                      className="w-32 h-32 rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      About ACM Student Chapter
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  ACM
                </span>
              </h2>
              <div className="prose prose-lg text-slate-700">
                <p className="text-xl text-justify leading-relaxed mb-6">
                  ACM - "Association For Computer Machinery" founded in 1947 is
                  the world's biggest network, which has impacted over thousands
                  of young minds and assist them with diverse possibilities to
                  uplift their skills.
                </p>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  It supports the professional growth of its members for a
                  life-long learning, career development and professional
                  working. Benefits of being an ACM member is, it provides
                  unique volunteering opportunities to gain hands-on experience
                  and knowledge which enables to form the destiny of computing.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    75+
                  </div>
                  <div className="text-sm text-slate-600">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    100K+
                  </div>
                  <div className="text-sm text-slate-600">Global Members</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    190+
                  </div>
                  <div className="text-sm text-slate-600">Countries</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT RCPIT SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  R. C. Patel Institute
                </span>{" "}
                of Technology
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl rotate-3 opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/assets/college.jpg"
                    alt="RCPIT Campus"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="prose prose-lg text-slate-700">
                <p className="text-xl text-justify leading-relaxed mb-6">
                  R. C. Patel Institute of Technology (RCPIT), established in
                  2001, is one of the leading engineering institutes in North
                  Maharashtra. The institute is committed to fostering
                  excellence in technical education, research, and innovation.
                </p>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  With modern infrastructure, state-of-the-art laboratories, and
                  highly qualified faculty, RCPIT provides students with an
                  environment that nurtures academic growth and practical
                  skills. The institute offers a wide range of undergraduate and
                  postgraduate programs in engineering and technology, preparing
                  students to meet the challenges of a rapidly evolving
                  industry.
                </p>
                <p className="text-lg text-justify leading-relaxed mb-8">
                  RCPIT is known for its strong emphasis on industry
                  collaboration, student-driven innovation, and extracurricular
                  engagement. Through technical events, professional communities
                  like ACM, and continuous learning opportunities, the institute
                  empowers students to become competent professionals and
                  responsible innovators.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.rcpit.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Visit College Website
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT COMPUTER ENGINEERING DEPARTMENT SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Computer Engineering
                </span>{" "}
                Department
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={200}>
              <div className="prose prose-lg text-slate-700">
                <p className="text-xl text-justify leading-relaxed mb-6">
                  Established in 2001, the Department of Computer Engineering at
                  R. C. Patel Institute of Technology (RCPIT), Shirpur, offers a
                  dynamic and industry-aligned education. The department
                  provides B.Tech, M.E. (since 2010), and Ph.D. programs,
                  fostering innovation, professional growth, and research
                  excellence.
                </p>

                <p className="text-lg text-justify leading-relaxed mb-6">
                  With 27 dedicated faculty members (10 Ph.D. holders), modern
                  laboratories, and cutting-edge infrastructure, the department
                  consistently produces graduates who excel globally. The
                  department has a strong record of academic excellence,
                  research contributions (300+ papers, 30+ patents), and a
                  legacy of 2,296+ alumni placed in top IT companies worldwide.
                </p>

                <p className="text-lg text-justify leading-relaxed mb-8">
                  The department emphasizes coding culture, innovation,
                  hackathons, higher studies, and student communities like GDSC
                  and ACES. With smart classrooms, ICT-enabled learning, add-on
                  certifications, and strong industry collaborations, the
                  department nurtures students into competent engineers,
                  innovators, and socially responsible professionals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.rcpit.ac.in/department-of-computer-engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Explore Department
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 28 28"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl -rotate-3 opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/assets/aboutcomputerdepartment.svg"
                    alt="Computer Engineering Department"
                    className="w-full h-100 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* RECENT EVENTS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Recent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Events
                </span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Highlights from our workshops, seminars, and technical
                activities that shape the future of computing.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Event Card */}
            {/* <FadeIn className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img src={eventThumb} alt="Web Development Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Workshop</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Introduction to Web Development</h3>
                <p className="text-slate-600 mb-4">Comprehensive hands-on workshop covering React, Next.js, and modern deployment strategies for aspiring web developers.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">January 2025</span>
                  <a href="/events" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn> */}

            <FadeIn
              delay={200}
              className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl shadow-xl border border-slate-200 p-8 flex items-center justify-center text-center group hover:from-blue-50 hover:to-cyan-50 hover:border-blue-200 transition-all duration-300"
            >
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Exciting Events Coming Soon!
                </h3>
                <p className="text-slate-600 mb-4">
                  Stay tuned for upcoming workshops, hackathons, and technical
                  seminars. Follow our social media for updates.
                </p>
                <a
                  href="/events"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View All Events →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section
        id="membership"
        className="py-20 px-6 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Become a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Member
              </span>
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the global ACM community and unlock access to cutting-edge
              resources, exclusive workshops, mentorship opportunities, and the
              renowned ACM Digital Library. Membership is open to all passionate
              RCPIT students ready to shape the future of computing.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Digital Library Access
                </h3>
                <p className="text-slate-300 text-sm">
                  Access to world's largest computing research library
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Global Network
                </h3>
                <p className="text-slate-300 text-sm">
                  Connect with computing professionals worldwide
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Workshops & Events
                </h3>
                <p className="text-slate-300 text-sm">
                  Exclusive technical workshops and networking events
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ready to Join?
                  </h3>
                  <p className="text-slate-300">
                    Connect with us to start your ACM journey and unlock
                    opportunities for growth, learning, and innovation in
                    computing.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                  >
                    Contact Us to Join
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.acm.org/membership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl font-medium border border-white/30 transition-all duration-300 whitespace-nowrap"
                  >
                    Learn About ACM
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="text-center">
              <p className="text-slate-400 text-sm">
                Join thousands of students worldwide who are shaping the future
                of computing technology
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
