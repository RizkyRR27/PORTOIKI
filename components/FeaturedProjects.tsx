'use client';

import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Reveal from '@/components/Reveal';

const projects = [
  { title: 'TOEIC TREGON', type: 'WEB PLATFORM', desc: 'Exam scheduling, admin verification, and a focused testing experience.', tech: ['WEB', 'FIGMA'], metric: '01 / PRODUCT DESIGN', link: 'https://toeicky.onrender.com/', tone: 'from-[#263000] via-[#151517] to-[#111112]' },
  { title: 'RCOURT', type: 'BOOKING SYSTEM', desc: 'Online sports-court booking with auth, payments, and a Laravel backend.', tech: ['PHP', 'LARAVEL'], metric: '02 / BACKEND', link: 'https://rcourt.onrender.com/', tone: 'from-[#122b2d] via-[#151517] to-[#111112]' },
  { title: 'HRIS MOBILE APP', type: 'MOBILE', desc: 'Human resources management built for practical, everyday workflows.', tech: ['FLUTTER', 'FIREBASE'], metric: '03 / MOBILE BUILD', link: 'https://github.com/Fallujahrama/PBL3B_HRIS', tone: 'from-[#2d2410] via-[#151517] to-[#111112]' },
  { title: 'INVENTARIS GUDANG', type: 'SYSTEM', desc: 'Java OOP inventory system with stock and damaged-goods reporting.', tech: ['JAVA', 'OOP'], metric: '04 / SYSTEM LOGIC', link: 'https://github.com/arielreza/TA-InventarisGudang', tone: 'from-[#211431] via-[#151517] to-[#111112]' },
  { title: 'SISTEM KASIR BENGKEL', type: 'DATABASE', desc: 'Database planning across ERD, DDL, DML, and reporting.', tech: ['SQL', 'DATABASE'], metric: '05 / DATA MODEL', link: 'https://drive.google.com/file/d/14Uh95TU5i9lY4G-LO_S3aovA2jAAnTkd/view?usp=drive_link', tone: 'from-[#162c1a] via-[#151517] to-[#111112]' },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Reveal dir="fade"><p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[#D2FF00]">02 / Selected work</p></Reveal>
            <h2 className="display text-6xl md:text-8xl">
              <Reveal dir="mask" delay={80}><span className="block">Featured</span></Reveal>
              <Reveal dir="mask" delay={180}><span className="block">projects<span className="text-[#D2FF00]">.</span></span></Reveal>
            </h2>
          </div>
          <Reveal dir="fade" delay={300}><p className="max-w-xs text-sm leading-6 text-zinc-500">A selection of systems, products, and interfaces built with intent.</p></Reveal>
        </div>
        <div className="grid gap-3 md:grid-cols-6 md:grid-rows-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 90}
              className={index === 0 ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2'}
            >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block h-full min-h-[300px] overflow-hidden border border-[#27272a] bg-gradient-to-br ${project.tone} p-5 transition-all duration-300 hover:border-[#D2FF00] hover:shadow-[0_0_40px_-12px_#D2FF00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2FF00] ${index === 0 ? 'md:min-h-[500px]' : ''}`}
            >
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#D2FF00]/20 transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute right-5 top-5 flex items-center gap-2 mono text-[10px] text-zinc-500"><span>0{index + 1}</span><ExternalLink className="h-3.5 w-3.5 transition-colors group-hover:text-[#D2FF00]" /></div>
              <div className="relative flex h-full flex-col justify-between">
                <div><p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-[#D2FF00]">{project.type}</p><div className="mb-8 display max-w-md text-4xl md:text-6xl">{project.title}</div></div>
                <div><p className="mb-5 max-w-md text-sm leading-6 text-zinc-400">{project.desc}</p><div className="flex flex-wrap items-center gap-2"><span className="mono mr-auto text-[10px] uppercase tracking-widest text-zinc-600">{project.metric}</span>{project.tech.map((tag) => <span key={tag} className="rounded-full border border-[#D2FF00]/50 px-2.5 py-1 mono text-[9px] font-bold tracking-widest text-[#D2FF00]">{tag}</span>)}</div></div>
              </div>
              <ArrowUpRight className="absolute bottom-5 right-5 h-5 w-5 text-zinc-600 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D2FF00]" />
            </a>
            </Reveal>
          ))}
        </div>
        <Reveal dir="fade" className="mt-7">
          <Link href="/project" className="group inline-flex items-center gap-2 border-b border-[#D2FF00] pb-1 mono text-xs uppercase tracking-[0.15em] text-[#D2FF00]">View all projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </Reveal>
      </div>
    </section>
  );
}
