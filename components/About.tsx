'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { Calendar, MapPin, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';

const hardSkills = ['Web Programming', 'UI/UX Design', 'BPMN', 'SQL', 'ELK Stack', 'Automation testing', 'Manual Testing'];
const software = ['Bizagi', 'Figma', 'VS Code', 'ERDPlus', 'draw.io', 'ELK', 'Notion', 'Cisco Packet Tracer', 'Power BI'];

const card = 'border border-[#27272a] bg-[#151517] p-6 md:p-10';
const label = 'mono mb-4 text-xs uppercase tracking-[0.2em] text-[#D2FF00]';
const chip = 'cursor-default rounded-full border border-[#27272a] px-3 py-1.5 mono text-[10px] uppercase tracking-wider text-zinc-300 transition-colors hover:border-[#D2FF00] hover:text-[#D2FF00]';

const education = [
  { school: 'Politeknik Negeri Malang', major: 'D4 Sistem Informasi Bisnis', year: '2023 - Sekarang', active: true },
  { school: 'SMA Muhammadiyah 9 Bekasi', major: 'Jurusan MIPA (Matematika & IPA)', year: '2020 - 2023', active: false },
];

const experience = [
  {
    company: 'PT FAN Integrasi Teknologi',
    place: 'Kota Bekasi',
    date: 'Jan 2025 - Jan 2025',
    role: 'System Admin',
    desc: 'Memahami kegunaan ELK (Elasticsearch, Logstash, Kibana) serta mengimplementasikannya untuk pemantauan server, analisis file log sistem, dan visualisasi dashboard data secara real-time.',
  },
  {
    company: 'PT Timedoor Indonesia',
    place: 'Denpasar, Bali',
    date: 'Jan 2026 - Sekarang',
    role: 'Quality Assurance (Web)',
    desc: 'Melakukan pengujian perangkat lunak (website) untuk memastikan kualitas fungsionalitas aplikasi sesuai dengan dokumen SRS. Menerapkan pengujian manual untuk eksplorasi dan pengujian otomatis (automated testing) untuk skenario regresi serta dokumentasi penemuan bug yang terstruktur.',
  },
];

export default function About() {
  return (
    <section className="relative z-10 space-y-3 pb-10">
      <div className="mb-10">
        <Reveal dir="fade"><p className={label}>01 / Driver profile</p></Reveal>
        <h1 className="display text-6xl md:text-8xl">
          <Reveal dir="mask" delay={80}><span className="block">About</span></Reveal>
          <Reveal dir="mask" delay={180}><span className="block text-[#D2FF00]">me.</span></Reveal>
        </h1>
      </div>

      {/* Profil & Pendidikan */}
      <div className="grid gap-3 lg:grid-cols-[1fr_350px]">
        <Reveal dir="right" distance={40} className={card}>
          <h2 className="display mb-6 text-3xl md:text-4xl">Profil &amp; Pendidikan</h2>
          <p className="text-base leading-8 text-zinc-400">
            Mahasiswa lulusan SMA tahun 2023 jurusan MIPA yang saat ini sedang menempuh kuliah jurusan <span className="font-bold text-white">Sistem Informasi Bisnis di Politeknik Negeri Malang</span>. Pribadi jujur, bisa diandalkan, disiplin, dan siap bekerja dalam tim maupun individu.
          </p>

          <div className="mt-8 space-y-3 border-t border-[#27272a] pt-6">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 120} className="flex items-start gap-4 border border-[#27272a] bg-[#111112] p-5 transition-colors hover:border-[#D2FF00]">
                <GraduationCap className={`mt-1 h-6 w-6 flex-shrink-0 ${e.active ? 'text-[#D2FF00]' : 'text-zinc-500'}`} />
                <div>
                  <p className="text-lg font-bold text-white">{e.school}</p>
                  <p className="mt-1 text-sm text-zinc-500">{e.major}</p>
                  <span className="mono mt-2 block text-[10px] uppercase tracking-widest text-zinc-500">{e.year}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Link href="/about/more" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D2FF00] px-6 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-white">
            More About Me <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Reveal dir="left" distance={40} delay={150} className="flex flex-col gap-4 border border-[#27272a] bg-[#151517] p-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ww.jpeg"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Rizky Roza Rahim profile picture"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60';
              }}
            />
          </div>
          <p className="mono text-center text-[10px] uppercase tracking-[0.2em] text-zinc-500">Rizky Roza Rahim</p>
        </Reveal>
      </div>

      {/* Skills */}
      <Reveal className={card}>
        <p className={label}>02 / Telemetry</p>
        <h2 className="display mb-8 text-3xl md:text-4xl">Skills &amp; Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mono mb-4 text-[10px] uppercase tracking-widest text-zinc-500">Core Skills</h3>
            <div className="flex flex-wrap gap-2">{hardSkills.map((s) => <span key={s} className={chip}>{s}</span>)}</div>
          </div>
          <div>
            <h3 className="mono mb-4 text-[10px] uppercase tracking-widest text-zinc-500">Software Tools</h3>
            <div className="flex flex-wrap gap-2">{software.map((s) => <span key={s} className={chip}>{s}</span>)}</div>
          </div>
        </div>
      </Reveal>

      {/* Experience */}
      <Reveal className={card}>
        <p className={label}>03 / Race history</p>
        <h2 className="display mb-10 text-3xl md:text-4xl">Experience</h2>
        <div className="relative space-y-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-[#27272a]">
          {experience.map((x, i) => (
            <Reveal key={x.company} dir="right" delay={i * 150} className="group relative pl-10">
              <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-[#D2FF00] bg-[#111112] transition-colors group-hover:bg-[#D2FF00]" />
              <div className="border border-[#27272a] bg-[#111112] p-6 transition-colors hover:border-[#D2FF00]">
                <h3 className="display mb-3 text-2xl md:text-3xl">{x.company}</h3>
                <div className="mono mb-4 flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-zinc-500">
                  <p className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {x.place}</p>
                  <p className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {x.date}</p>
                </div>
                <div className="border-t border-[#27272a] pt-4">
                  <p className="mb-2 flex items-center gap-2 font-bold text-zinc-200"><Briefcase className="h-4 w-4 text-[#D2FF00]" /> {x.role}</p>
                  <p className="text-sm leading-7 text-zinc-400">{x.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
