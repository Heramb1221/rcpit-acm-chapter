"use client"

import { useEffect, useState, useRef } from 'react';

// Events Data Array
const eventsData = {
  upcoming: [
  ],
  past: [
    {
      id: 1,
      title: "Introduction to Web Development",
      date: "2024-11-15",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab 1, RCPIT",
      category: "Workshop",
      type: "workshop",
      description: "A comprehensive hands-on workshop covering modern web development technologies including React, Next.js, and deployment strategies.",
      fullDescription: "This intensive workshop provided students with practical experience in modern web development. Participants learned the fundamentals of React, explored Next.js for full-stack applications, and gained hands-on experience with deployment strategies using platforms like Vercel and Netlify. The workshop covered responsive design principles, state management, API integration, and best practices for modern web development.",
      image: "/assets/img1.jpg",
      instructor: "Dr. Amit Sharma",
      participants: 45,
      highlights: [
        "Hands-on React development",
        "Next.js project creation",
        "Live deployment session",
        "Q&A with industry expert"
      ],
      outcomes: [
        "Built a complete web application",
        "Deployed project to cloud platform",
        "Learned industry best practices",
        "Received completion certificate"
      ]
    },
    {
      id: 2,
      title: "AI & Machine Learning Fundamentals",
      date: "2024-10-28",
      time: "2:00 PM - 6:00 PM",
      location: "Auditorium, RCPIT",
      category: "Seminar",
      type: "seminar",
      description: "An enlightening seminar on artificial intelligence and machine learning concepts with real-world applications and career guidance.",
      fullDescription: "This seminar brought together leading AI researchers and industry professionals to share insights into the rapidly evolving field of artificial intelligence and machine learning. Attendees gained understanding of core ML concepts, explored real-world applications across industries, and received guidance on career paths in AI. The event featured interactive demonstrations of popular ML frameworks and tools.",
      image: "/assets/img2.jpg",
      instructor: "Prof. Priya Patel & Industry Experts",
      participants: 120,
      highlights: [
        "Industry expert panel discussion",
        "Live ML model demonstration",
        "Career guidance session",
        "Networking opportunities"
      ],
      outcomes: [
        "Understanding of AI/ML fundamentals",
        "Industry insights and trends",
        "Career pathway clarity",
        "Professional networking connections"
      ]
    },
    {
      id: 3,
      title: "CodeSprint Hackathon 2024",
      date: "2024-09-20",
      time: "9:00 AM - 9:00 PM",
      location: "Innovation Hub, RCPIT",
      category: "Hackathon",
      type: "hackathon",
      description: "24-hour hackathon challenging students to build innovative solutions using cutting-edge technologies and collaborative problem-solving.",
      fullDescription: "CodeSprint 2024 was an intensive 12-hour hackathon that brought together passionate programmers, designers, and innovators to create solutions for real-world problems. Teams worked on challenges spanning web development, mobile apps, AI/ML applications, and IoT projects. The event fostered creativity, collaboration, and technical excellence while providing mentorship from industry professionals.",
      image: "/assets/img3.jpg",
      instructor: "ACM Student Chapter Team",
      participants: 80,
      highlights: [
        "12-hour intensive coding session",
        "Industry mentor guidance",
        "Diverse technology challenges",
        "Prize distribution ceremony"
      ],
      outcomes: [
        "5 innovative project solutions",
        "Enhanced teamwork skills",
        "Technical skill development",
        "Recognition and prizes for winners"
      ]
    }
  ]
};

const categories = [
  { id: 'all', name: 'All Events', color: 'from-blue-500 to-cyan-500' },
  { id: 'workshop', name: 'Workshops', color: 'from-green-500 to-emerald-500' },
  { id: 'seminar', name: 'Seminars', color: 'from-purple-500 to-indigo-500' },
  { id: 'hackathon', name: 'Hackathons', color: 'from-orange-500 to-red-500' },
  { id: 'competition', name: 'Competitions', color: 'from-pink-500 to-rose-500' }
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setIsInView(true)),
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
      className={`transform transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

const EventModal = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  const getCategoryColor = (type) => {
    const category = categories.find(cat => cat.id === type);
    return category ? category.color : 'from-blue-500 to-cyan-500';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <span className={`bg-gradient-to-r ${getCategoryColor(event.type)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
              {event.category}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{event.title}</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">{event.fullDescription}</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Event Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-blue-50 rounded-lg p-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Key Outcomes</h3>
                <div className="space-y-2">
                  {event.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 h-fit">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Event Details</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-slate-900">Date</span>
                  </div>
                  <p className="text-slate-600 ml-8">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-slate-900">Time</span>
                  </div>
                  <p className="text-slate-600 ml-8">{event.time}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium text-slate-900">Location</span>
                  </div>
                  <p className="text-slate-600 ml-8">{event.location}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium text-slate-900">Instructor</span>
                  </div>
                  <p className="text-slate-600 ml-8">{event.instructor}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium text-slate-900">Participants</span>
                  </div>
                  <p className="text-slate-600 ml-8">{event.participants} students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, onClick, delay = 0 }) => {
  const getCategoryColor = (type) => {
    const category = categories.find(cat => cat.id === type);
    return category ? category.color : 'from-blue-500 to-cyan-500';
  };

  return (
    <FadeIn delay={delay} className="group cursor-pointer" onClick={() => onClick(event)}>
      <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className={`bg-gradient-to-r ${getCategoryColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
              {event.category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="text-sm font-medium text-slate-700">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {event.title}
          </h3>
          <p className="text-slate-600 mb-4 line-clamp-2">{event.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{event.time.split(' - ')[0]}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{event.participants}</span>
              </div>
            </div>
            
            <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold">
              <span className="text-sm">View Details</span>
              <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPastEvents = selectedCategory === 'all' 
    ? eventsData.past 
    : eventsData.past.filter(event => event.type === selectedCategory);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <main className="min-h-screen w-full text-slate-800 antialiased bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* HERO SECTION */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-slate-600 via-blue-500 to-indigo-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <img
                  src="/assets/ACMOB.png"
                  alt="ACM Logo"
                  className="w-20 h-20 rounded-2xl shadow-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-700/50 to-cyan-700/10 rounded-2xl blur opacity-75"></div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Events at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                ACM RCPIT
              </span>{" "}
              Chapter
            </h1>

            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Workshops, Hackathons, and Seminars to Inspire Innovation and Shape the Future of Computing
            </p>
          </FadeIn>
        </div>
      </section>

      {/* UPCOMING EVENTS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Events</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl shadow-xl border border-slate-200 p-12 text-center group hover:from-blue-50 hover:to-cyan-50 hover:border-blue-200 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Exciting Events Coming Soon!</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We're working hard to bring you amazing workshops, hackathons, and seminars. 
                  Stay tuned for announcements and follow our social media for the latest updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Notified
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 0 1 1.5 17V9A2.5 2.5 0 0 1 4 6.5h11A2.5 2.5 0 0 1 17.5 9v8a2.5 2.5 0 0 1-2.5 2.5" />
                    </svg>
                  </a>
                  <a
                    href="#past-events"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/70 hover:bg-white text-slate-700 rounded-xl font-medium border border-slate-200 hover:border-blue-200 transition-all duration-300"
                  >
                    View Past Events
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EVENT CATEGORIES FILTER */}
      <section className="py-8 px-6 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-slate-700 hover:bg-slate-50 shadow-md border border-slate-200'
                  }`}
                >
                  {category.name}
                  {category.id !== 'all' && (
                    <span className="ml-2 text-sm opacity-75">
                      ({eventsData.past.filter(event => event.type === category.id).length})
                    </span>
                  )}
                  {category.id === 'all' && (
                    <span className="ml-2 text-sm opacity-75">
                      ({eventsData.past.length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PAST EVENTS SECTION */}
      <section id="past-events" className="py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Events</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Highlights from our workshops, seminars, and technical activities that shaped the future of computing.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
            </div>
          </FadeIn>

          {filteredPastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPastEvents.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onClick={handleEventClick}
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <FadeIn delay={200}>
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">No Events Found</h3>
                <p className="text-lg text-slate-600">No events found for the selected category. Try selecting a different filter.</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* EVENT GALLERY SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Gallery</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Capturing moments of learning, innovation, and collaboration from our events.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventsData.past.map((event, index) => (
              <FadeIn key={event.id} delay={index * 100}>
                <div 
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="aspect-square">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold mb-1">{event.title}</h3>
                      <p className="text-sm opacity-90">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
            
            {/* Additional gallery placeholder */}
            <FadeIn delay={300}>
              <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center group hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 cursor-pointer">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-700">More Photos<br/>Coming Soon</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-600 via-blue-500 to-indigo-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Participate?</span>
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Want to be part of our next exciting event? Join the ACM RCPIT Chapter community today and get exclusive access to workshops, hackathons, and networking opportunities that will accelerate your tech career.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Become a Member
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#past-events"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl font-medium border border-white/30 transition-all duration-300"
              >
                Explore Past Events
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Event Detail Modal */}
      <EventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </main>
  );
}