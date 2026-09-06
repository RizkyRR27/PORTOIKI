'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Terminal, FolderGit2 } from 'lucide-react';
import ElectricBorder from './ElectricBorder';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const featured = [
    {
      title: "TOEIC TREGON",
      desc: "Platform ujian TOEIC modern dengan fitur real-time dan admin verification system",
      tech: ["React", "Next.js", "Figma"],
      link: "https://github.com/Fallujahrama/PBL_Toeic",
      badgeColor: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-450 border-blue-200 dark:border-blue-500/20",
      accentGlow: "hover:border-blue-500 hover:shadow-blue-500/10",
      electricColor: "#3b82f6"
    },
    {
      title: "HRIS Mobile App",
      desc: "Sistem manajemen SDM berbasis mobile dengan tracking real-time",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "https://github.com/Fallujahrama/PBL3B_HRIS",
      badgeColor: "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/20",
      accentGlow: "hover:border-red-500 hover:shadow-red-500/10",
      electricColor: "#E50914"
    },
    {
      title: "Inventaris Gudang",
      desc: "Sistem manajemen stok barang dengan laporan terintegrasi berbasis Java OOP",
      tech: ["Java", "OOP", "Database"],
      link: "https://github.com/arielreza/TA-InventarisGudang",
      badgeColor: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-450 border-blue-200 dark:border-blue-500/20",
      accentGlow: "hover:border-blue-500 hover:shadow-blue-500/10",
      electricColor: "#f59e0b"
    }
  ];

  useGSAP(() => {
    // Title reveal
    gsap.from('.projects-section-title', {
      scrollTrigger: {
        trigger: '.projects-section-title',
        start: 'top 90%',
      },
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
    });

    // Stagger card reveals
    gsap.from('.project-item-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // More projects button
    gsap.from('.projects-more-btn', {
      scrollTrigger: {
        trigger: '.projects-more-btn',
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 px-6 md:px-16 relative z-10 font-sans bg-[#141414] text-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="projects-section-title text-2xl font-bold text-white tracking-wide">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid flex gap-6 pb-4 items-stretch">
          {featured.map((project, index) => (
            <div key={project.title} className="project-item-card flex-1 min-w-0 h-[240px]">
              <ElectricBorder
                color={project.electricColor}
                speed={0.8}
                chaos={0.1}
                borderRadius={8}
                className="w-full h-full transition-all duration-300 hover:scale-[1.02] hover:z-10"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full h-full bg-[#181818] rounded-md overflow-hidden"
                >
                  {/* Background Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:from-neutral-700 group-hover:to-neutral-800 transition-colors"></div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#E50914] transition-colors drop-shadow-md">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-300 line-clamp-2 mb-2 font-medium drop-shadow-md">
                      {project.desc}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-black/60 rounded border border-gray-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top R Logo */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[#E50914] text-xs font-black drop-shadow-lg">R</span>
                  </div>
                </a>
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