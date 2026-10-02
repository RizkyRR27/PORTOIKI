import Link from 'next/link';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';

const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/RizkyRR27' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/rizkyrozarahim270505' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/rizkyroza.r_' },
];

export default function CTA() {
  return (
    <footer id="contact" className="relative overflow-hidden px-5 pb-7 pt-20 md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-10 border-b border-[#27272a] pb-20 md:flex-row md:items-end md:pb-28">
          <div>
            <Reveal dir="fade"><p className="mono mb-5 text-xs uppercase tracking-[0.2em] text-[#D2FF00]">04 / Open channel</p></Reveal>
            <h2 className="display text-[clamp(4rem,11vw,10rem)]">
              <Reveal dir="mask" delay={80}><span className="block">Let&apos;s build</span></Reveal>
              <Reveal dir="mask" delay={200}><span className="block text-[#D2FF00]">something fast.</span></Reveal>
            </h2>
          </div>
          <Reveal delay={350} className="max-w-xs"><p className="mb-6 text-sm leading-7 text-zinc-500">Have a system to improve or an idea to put on track? Send a signal.</p><a href="mailto:rizkyroza2005@gmail.com" className="group inline-flex items-center gap-3 rounded-full bg-[#D2FF00] px-6 py-4 text-sm font-bold text-black transition-all duration-200 hover:bg-white hover:shadow-[0_0_40px_-8px_#D2FF00]"><Mail className="h-4 w-4" /> rizkyroza2005@gmail.com <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></Reveal>
        </div>
        <div aria-hidden className="marquee overflow-hidden border-b border-[#27272a] py-6">
          <div className="animate-marquee-slow flex w-max whitespace-nowrap">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="display px-6 text-[clamp(3rem,8vw,7rem)] text-transparent [-webkit-text-stroke:1px_#3f3f46]">Driven by precision - Built for speed -</span>
            ))}
          </div>
        </div>
        <Reveal dir="fade" delay={100} className="flex flex-col justify-between gap-5 py-6 md:flex-row md:items-center"><Link href="/" className="display text-2xl">RR<span className="text-[#D2FF00]">R</span></Link><div className="flex flex-wrap gap-5 mono text-[10px] uppercase tracking-widest text-zinc-500">{socials.map(({ name, icon: Icon, url }) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-[#D2FF00]"><Icon className="h-3.5 w-3.5" />{name}</a>)}</div><p className="mono text-[10px] uppercase tracking-widest text-zinc-600">© 2026 / Rizky Roza Rahim</p></Reveal>
      </div>
    </footer>
  );
}
