'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import { Search, Filter, ExternalLink, Code, Database, Smartphone, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'Sistem Kasir Bengkel', date: 'Mei - Juni 2024',
    desc: 'Mengelola pembuatan database sederhana untuk tugas mata kuliah Basis Data. Bertanggung jawab pada tahap analisis perencanaan kebutuhan sistem di bagian ERD, DDL, DML, dan DRL.',
    tech: ['SQL', 'Database Design'], link: 'https://drive.google.com/file/d/14Uh95TU5i9lY4G-LO_S3aovA2jAAnTkd/view?usp=drive_link', category: 'database', icon: Database,
  },
  {
    title: 'Inventaris Gudang', date: 'Sep - Des 2023',
    desc: 'Mengembangkan sistem manajemen stok barang menggunakan Java. Mengerjakan fitur input barang, display barang, dan laporan barang rusak.',
    tech: ['Java', 'OOP'], link: 'https://github.com/arielreza/TA-InventarisGudang', category: 'java', icon: BookOpen,
  },
  {
    title: 'TOEIC TREGON', date: 'Feb - Juni 2025',
    desc: 'Berkontribusi dalam pengembangan fitur jadwal ujian dan verifikasi surat pernyataan admin, serta pembuatan desain UI menggunakan Figma.',
    tech: ['Web', 'Figma'], links: [{ label: 'Live Demo', url: 'https://toeicky.onrender.com/' }, { label: 'Github', url: 'https://github.com/Fallujahrama/PBL_Toeic' }], category: 'web', icon: Code,
  },
  {
    title: 'HRIS Mobile App', date: 'Nov - Des 2025',
    desc: 'Sistem Manajemen SDM. Berkontribusi dalam pengembangan fitur jadwal ujian dan verifikasi surat pernyataan admin, serta pembuatan desain UI menggunakan Figma.',
    tech: ['Mobile', 'Flutter'], link: 'https://github.com/Fallujahrama/PBL3B_HRIS', category: 'mobile', icon: Smartphone,
  },
  {
    title: 'RCOURT', date: 'Feb - Apr 2026',
    desc: 'Menjadi Backend dalam Sistem booking lapangan olahraga online dengan fitur login, booking lapangan, dan pembayaran online dan page lainnya.',
    tech: ['PHP', 'Laravel', 'Tailwind'], link: 'https://rcourt.onrender.com/', category: 'web', icon: Code,
  },
];

type Project = (typeof projects)[number];

const categories = [
  { id: 'all', label: 'Semua Projek' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'database', label: 'Database' },
  { id: 'java', label: 'Java & OOP' },
];

export default function ProjectPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return projects.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(query)
        || p.desc.toLowerCase().includes(query)
        || p.tech.some((t) => t.toLowerCase().includes(query));
      return matchesSearch && (selectedCategory === 'all' || p.category === selectedCategory);
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="mx-auto min-h-screen max-w-[1600px] px-5 pb-20 pt-32 md:px-10">
      <header className="mb-12">
        <Reveal dir="fade"><p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[#D2FF00]">02 / Project archive</p></Reveal>
        <h1 className="display text-6xl md:text-8xl">
          <Reveal dir="mask" delay={80}><span className="block">Project</span></Reveal>
          <Reveal dir="mask" delay={180}><span className="block text-[#D2FF00]">portfolio.</span></Reveal>
        </h1>
        <Reveal delay={300}><p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">Daftar proyek dan studi kasus yang pernah saya kerjakan.</p></Reveal>
      </header>

      <Reveal delay={150} className="mb-12">
      <section className="border border-[#27272a] bg-[#151517] p-5 md:p-6" aria-label="Project filters">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <label className="relative w-full md:max-w-md">
            <span className="sr-only">Cari projek atau skill</span>
            <input
              type="search"
              placeholder="Cari projek atau skill (ex: SQL, Flutter)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-[#27272a] bg-[#111112] p-3 pl-10 text-sm text-white placeholder:text-zinc-600 focus:border-[#D2FF00] focus:outline-none"
            />
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-500" aria-hidden />
          </label>
          <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-widest text-zinc-500">
            <Filter className="h-4 w-4" aria-hidden /> {filteredProjects.length} Terpasang
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`cursor-pointer rounded-full border px-4 py-2 mono text-[10px] font-bold uppercase tracking-widest transition-colors ${selectedCategory === cat.id
                ? 'border-[#D2FF00] bg-[#D2FF00] text-black'
                : 'border-[#27272a] text-zinc-400 hover:border-[#D2FF00] hover:text-[#D2FF00]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>
      </Reveal>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {filteredProjects.map((p: Project, index) => {
            const ProjectIcon = p.icon;
            return (
              <Reveal key={p.title} delay={index * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden border border-[#27272a] bg-[#151517] transition-colors hover:border-[#D2FF00]">
                <div className="relative flex h-48 flex-col justify-between overflow-hidden border-b border-[#27272a] bg-gradient-to-br from-[#252528] to-[#111112] p-6">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#D2FF00]/20 transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative z-10 flex justify-end"><div className="border border-[#D2FF00] bg-[#D2FF00] p-2 text-black"><ProjectIcon className="h-5 w-5" /></div></div>
                  <div className="relative z-10">
                    <h2 className="display text-2xl">{p.title}</h2>
                    <span className="mono mt-2 block text-[10px] uppercase tracking-widest text-zinc-500">{p.date}</span>
                  </div>
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <p className="mb-6 text-sm leading-7 text-zinc-400">{p.desc}</p>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {p.tech.map((t) => <span key={t} className="rounded-full border border-[#27272a] px-2.5 py-1 mono text-[10px] uppercase tracking-wider text-zinc-300">{t}</span>)}
                  </div>

                  {'links' in p && p.links ? (
                    <div className="mt-auto flex gap-2">
                      {p.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex-1 border border-[#27272a] py-3 text-center mono text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-[#D2FF00] hover:text-[#D2FF00]">{link.label} <ExternalLink className="ml-1 inline h-3.5 w-3.5" /></a>)}
                    </div>
                  ) : (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-auto flex w-full items-center justify-center gap-2 bg-[#D2FF00] py-3 text-center text-sm font-bold text-black transition-colors hover:bg-white">View Project <ExternalLink className="h-4 w-4" /></a>
                  )}
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      ) : (
        <div className="border border-[#27272a] bg-[#151517] p-16 text-center">
          <p className="display mb-4 text-2xl">No titles found</p>
          <p className="text-sm text-zinc-500">Tidak ada projek yang cocok dengan kata kunci &quot;{searchQuery}&quot; di kategori &quot;{selectedCategory}&quot;.</p>
          <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="mt-6 rounded-full bg-[#D2FF00] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-white">Reset Filter</button>
        </div>
      )}

      <div className="mt-16"><Breadcrumb /></div>
    </main>
  );
}
