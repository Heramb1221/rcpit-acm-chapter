"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInfoCircle } from "react-icons/fa";

const team = [
  {
    name: "Dr. R. B. Wagh",
    role: "Head of Department",
    img: "/assets/hod.jpg",
    info: "Expert in Computer Science with 21+ years of teaching experience.",
  },
  {
    name: "Dr. M. M. Saiyyad",
    role: "Faculty Sponsor",
    img: "/assets/Saiyyad.jpg",
    info: "Passionate about student development and academic coordination.",
  },
  {
    name: "Borse Ojaswini",
    role: "Chair",
    img: "/assets/ojas.jpg",
    github: "https://github.com/Ojasz-borse",
    linkedin: "https://www.linkedin.com/in/ojaswini-borse-409942286/",
    info: "As the Chairperson of the RCPIT ACM Student Chapter, I am dedicated to fostering a culture of innovation, collaboration, and leadership. Together with my team, I aim to create meaningful opportunities, organize impactful events, and inspire every member to excel in their journey of learning and growth.",
  },
  {
    name: "Mahajan Prajakta",
    role: "Vice Chair",
    img: "/assets/Praju.jpg",
    github: "https://github.com/Prajakta-rcpit",
    linkedin: "https://www.linkedin.com/in/prajakta-m25/",
    info: " As the Vice Chairperson of the RCPIT ACM Student Chapter, I am committed to supporting our leadership in fostering a culture of innovation, collaboration, and growth. I work closely with our team to ensure we create meaningful opportunities, organize impactful events, and empower every member to excel in their learning journey. Together, we strive to build a community where ideas flourish and every voice is heard.",
  },
  {
    name: "Chaudhari Gaurav",
    role: "Secretary",
    img: "/assets/Gaurav.jpg",
    github: "https://github.com/chaudhariGaurav07",
    linkedin: "https://www.linkedin.com/in/gaurav-chaudhari-b20176227/",
    info: "As the Secretary of the RCPIT ACM Student Chapter, I am dedicated to fostering collaboration and smooth communication among our members. Our goal is to create a vibrant community where ideas transform into impactful initiatives for learning and growth.",
  },
  {
    name: "Chaudhari Heramb",
    role: "Treasurer",
    img: "/assets/heramb.jpg",
    github: "https://github.com/Heramb1221",
    linkedin: "https://www.linkedin.com/in/heramb-chaudhari/",
    info: "As the Treasurer of the RCPIT ACM Student Chapter, I am committed to ensuring transparent and responsible management of our resources. Together, we strive to support impactful events and opportunities that empower every member to grow and innovate.",
  },
  {
    name: "Dhande Sarvesh",
    role: "Web Master",
    img: "/assets/sarvesh.jpg",
    github: "https://github.com/sarvesh871",
    linkedin: "https://www.linkedin.com/in/sarvesh-dhande/",
    info: "As the WebMaster of the RCPIT ACM Student Chapter, I commit to building and maintaining a digital space that reflects our vision and drives our mission forward. I will ensure that our platforms stay functional, accessible, and inspiring. Through clean design, reliable systems, and constant innovation, I will support my team, amplify their efforts, and make every member’s contribution visible to the world.",
  },
  {
    name: "Chaudhari Lokesh",
    role: "Membership Chair",
    img: "/assets/Lokesh.jpg",
    github: "https://github.com/Lokesh-Squazzo",
    linkedin: "https://www.linkedin.com/in/lokesh-chaudhari-917778280/",
    info: "As the Membership Chair of the RCPIT ACM Student Chapter, I am committed to building a strong, engaged, and inclusive community. My focus is on connecting students with valuable opportunities, encouraging active participation, and ensuring every member feels empowered to contribute, collaborate, and grow within the chapter.",
  },
];

const FadeIn = ({ children, delay = 0 }) => {
  return (
    <div
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const TeamCard = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <FadeIn delay={200}>
      <div
        className="relative mb-8 group w-80 h-96 bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 shadow-2xl border border-cyan-300 overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <div className="flex justify-center mt-6">
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-slate-300 shadow-lg group-hover:scale-105 transition-transform duration-500">
            <img
              src={imageError ? "/assets/placeholder-avatar.jpg" : member.img}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="text-center mt-5 mb-3 px-4">
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-gray-600 mt-1">{member.role}</p>

          {(member.github || member.linkedin) && (
            <div className="flex justify-center space-x-5 mt-4 z-10 relative">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 transform hover:scale-110 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-xl text-gray-700" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors duration-300 transform hover:scale-110 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedin className="text-xl text-blue-600" />
                </a>
              )}
            </div>
          )}
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-sky-400 to-indigo-500 ${
            showInfo ? "h-full opacity-100" : "opacity-0"
          } transition-all duration-500 flex flex-col items-center justify-center text-white px-4 overflow-hidden`}
        >
          <FaInfoCircle className="text-3xl mb-2 transform transition-transform duration-500" />
          <p className="text-sm text-center transition-transform duration-500">
            {member.info}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

const TeamPage = () => {
  return (
    <div className="px-2 pb-5 sm:px-6 bg-gradient-to-br from-slate-100 via-blue-100 to-cyan-50 min-h-screen">
      <div className="max-w-20xl mx-auto">
        <FadeIn delay={100}>
          <section className="relative min-h-[20vh] pt-20  pb-16 px-6 bg-gradient-to-br from-slate-600 via-blue-500 to-indigo-500 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="absolute inset-0 opacity-70">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10 text-center">
              <FadeIn>
                <div className="mb-6">
                  <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-cyan-300 font-semibold">Official ACM Student Chapter</span>
              </div>
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200">
                      Team
                    </span>
                  </h1>
                </div>

                <div className="mb-8 text-center">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-slate-200 mb-6">
                    Meet Our Team
                  </h2>
                  <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    The backbone of the RCPIT ACM Student Chapter — a passionate group of students and faculty leaders 
                    working together to inspire innovation, share knowledge, and shape the future of computing on campus.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="absolute  bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50 via-transparent to-transparent pointer-events-none"></div>
          </section>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
        </FadeIn>
        <div className="mb-16">
          <FadeIn delay={150}>
            <div className="flex justify-center">
              <h3 className="inline-block px-6 py-2 mb-6 text-2xl font-semibold text-gray-700 bg-white/60 backdrop-blur-md border border-cyan-300 rounded-xl shadow transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white hover:scale-105">
                Faculty Advisors
              </h3>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-8">
            {team.slice(0, 2).map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        <div>
          <FadeIn delay={150}>
            <div className="flex justify-center">
              <h3 className="inline-block mb-6 px-6 py-2 text-2xl font-semibold text-gray-700 bg-white/60 backdrop-blur-md border border-cyan-300 rounded-xl shadow transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white hover:scale-105">
                Student Members
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-y-8 justify-items-center">
            {team.slice(2).map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
