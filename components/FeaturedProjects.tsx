'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, EyeOff } from 'lucide-react';
import ElectricBorder from './ElectricBorder';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const featured = [
    {
      title: "TOEIC TREGON",
      desc: "Platform ujian TOEIC modern dengan fitur real-time dan admin verification system",
      tech: ["React", "Next.js", "Figma"],
      link: "https://github.com/Fallujahrama/PBL_Toeic",
      image: "/images/projects/toeic.png",
      electricColor: "#3b82f6",
      overlayGradient: "from-blue-900/60 via-purple-900/50 to-pink-900/60"
    },
    {
      title: "HRIS Mobile App",
      desc: "Sistem manajemen SDM berbasis mobile dengan tracking real-time",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "https://github.com/Fallujahrama/PBL3B_HRIS",
      image: "/images/projects/hris.png",
      electricColor: "#E50914",
      overlayGradient: "from-orange-900/60 via-red-900/50 to-rose-900/60"
    },
    {
      title: "Inventaris Gudang",
      desc: "Sistem manajemen stok barang dengan laporan terintegrasi berbasis Java OOP",
      tech: ["Java", "OOP", "Database"],
      link: "https://github.com/arielreza/TA-InventarisGudang",
      image: "/images/projects/inventaris.png",
      electricColor: "#f59e0b",
      overlayGradient: "from-yellow-900/60 via-amber-900/50 to-orange-900/60"
    }
  ];

  const handleReveal = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    setRevealed(prev => ({ ...prev, [title]: true }));
  };

  useGSAP(() => {
    gsap.from('.projects-section-title', {
      scrollTrigger: { trigger: '.projects-section-title', start: 'top 90%' },
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });

    gsap.from('.project-item-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    gsap.from('.projects-more-btn', {
      scrollTrigger: {
        trigger: '.projects-more-btn',
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 px-6 md:px-16 relative z-10 font-sans bg-[#141414] text-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="projects-section-title text-2xl font-bold text-white tracking-wide">
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="projects-grid flex gap-6 pb-4 items-stretch">
          {featured.map((project) => (
            <div key={project.title} className="project-item-card flex-1 min-w-0 h-[240px]">
              <ElectricBorder
                color={project.electricColor}
                speed={0.8}
                chaos={0.1}
                borderRadius={8}
                className="w-full h-full transition-all duration-300 hover:scale-[1.02] hover:z-10"
              >
                <div className="relative w-full h-full bg-[#181818] rounded-md overflow-hidden">

                  {/* Actual project background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})`, backgroundColor: '#222' }}
                  />

                  {/* After reveal: dim gradient + clickable link content */}
                  {revealed[project.title] && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group absolute inset-0 flex flex-col justify-end p-4"
                      >
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#E50914] transition-colors drop-shadow-md">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-2 mb-2 font-medium drop-shadow-md">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(t => (
                            <span key={t} className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-black/60 rounded border border-gray-600">
                              {t}
                            </span>
                          ))}
                        </div>
                      </a>
                    </>
                  )}

                  {/* SENSITIVE CONTENT OVERLAY */}
                  {!revealed[project.title] && (
                    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${project.overlayGradient} backdrop-blur-xl`}>
                      {/* Blurred bg hint */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-25 blur-2xl scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-1.5 px-6 text-center">
                        <EyeOff className="w-8 h-8 text-white/90 stroke-[1.5] mb-1" />
                        <p className="text-white font-semibold text-sm">Sensitive Content</p>
                        <p className="text-white/70 text-[11px] leading-snug max-w-[190px]">
                          This photo may contain content some people find offensive or disturbing
                        </p>
                        <div className="w-full h-px bg-white/30 my-2" />
                        <button
                          onClick={(e) => handleReveal(e, project.title)}
                          className="text-white font-semibold text-sm hover:text-white/70 transition-colors active:scale-95 cursor-pointer"
                        >
                          See Photo
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Top R Logo */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="text-[#E50914] text-xs font-black drop-shadow-lg">R</span>
                  </div>
                </div>
              </ElectricBorder>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/project"
            className="projects-more-btn px-6 py-2 bg-transparent border border-gray-500 hover:border-white text-white font-medium text-sm rounded transition-colors flex items-center gap-2"
          >
            See All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
