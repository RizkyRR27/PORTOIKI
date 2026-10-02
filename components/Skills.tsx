'use client';

import Reveal from '@/components/Reveal';

const skills = [
  ['Web programming', 88], ['UI / UX design', 82], ['Manual testing', 92], ['Automation testing', 76], ['SQL + database', 84], ['ELK stack', 68],
];
const tools = ['Figma', 'VS Code', 'Bizagi', 'Firebase', 'Laravel', 'Power BI', 'Notion', 'Git'];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-[#27272a] bg-[#151517] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <Reveal dir="fade"><p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[#D2FF00]">03 / Telemetry</p></Reveal>
          <h2 className="display text-6xl md:text-8xl">
            <Reveal dir="mask" delay={80}><span className="block">Tools</span></Reveal>
            <Reveal dir="mask" delay={160}><span className="block">of the</span></Reveal>
            <Reveal dir="mask" delay={240}><span className="block text-[#D2FF00]">trade.</span></Reveal>
          </h2>
          <Reveal dir="fade" delay={350}><p className="mt-8 max-w-sm text-sm leading-7 text-zinc-500">A practical stack for translating messy problems into clear, reliable digital systems.</p></Reveal>
        </div>
        <Reveal dir="right" delay={150} className="border border-[#27272a] bg-[#111112] p-5 md:p-8">
          <div className="mb-8 flex items-center justify-between border-b border-[#27272a] pb-4 mono text-[10px] uppercase tracking-widest text-zinc-500"><span>Skill telemetry / live</span><span className="flex items-center gap-2 text-[#D2FF00]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D2FF00]" /> Online</span></div>
          <div className="space-y-6">{skills.map(([name, level], index) => <div key={name}><div className="mb-2 flex justify-between mono text-[10px] uppercase tracking-widest"><span className="text-zinc-300">{name}</span><span className="text-[#D2FF00]">{String(index + 1).padStart(2, '0')} / {level}%</span></div><div className="h-1 bg-[#27272a]"><div className="bar-grow h-full bg-[#D2FF00]" style={{ width: `${level}%`, transitionDelay: `${250 + index * 90}ms` }} /></div></div>)}</div>
          <div className="mt-10 border-t border-[#27272a] pt-5"><p className="mono mb-3 text-[10px] uppercase tracking-widest text-zinc-500">Supporting systems</p><div className="flex flex-wrap gap-2">{tools.map((tool) => <span key={tool} className="rounded-full border border-[#27272a] px-3 py-1.5 mono text-[10px] uppercase tracking-wider text-zinc-300 transition-colors hover:border-[#D2FF00] hover:text-[#D2FF00]">{tool}</span>)}</div></div>
        </Reveal>
      </div>
    </section>
  );
}
