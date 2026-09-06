'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { Search, Filter, ExternalLink, Terminal, Code, Database, Smartphone, BookOpen } from 'lucide-react';

export default function ProjectPage() {
  const projects = [
    {
      title: "Sistem Kasir Bengkel",
      date: "Mei - Juni 2024",
      desc: "Mengelola pembuatan database sederhana untuk tugas mata kuliah Basis Data. Bertanggung jawab pada tahap analisis perencanaan kebutuhan sistem di bagian ERD, DDL, DML, dan DRL.",
      tech: ["SQL", "Database Design"],
      link: "https://drive.google.com/file/d/14Uh95TU5i9lY4G-LO_S3aovA2jAAnTkd/view?usp=drive_link",
      bg: "bg-[#00f0ff]",
      category: "database",
      icon: Database
    },
    {
      title: "Inventaris Gudang",
      date: "Sep - Des 2023",
      desc: "Mengembangkan sistem manajemen stok barang menggunakan Java. Mengerjakan fitur input barang, display barang, dan laporan barang rusak.",
      tech: ["Java", "OOP"],
      link: "https://github.com/arielreza/TA-InventarisGudang",
      bg: "bg-[#ffe600]",
      category: "java",
      icon: BookOpen
    },
    {
      title: "TOEIC TREGON",
      date: "Feb - Juni 2025",
      desc: "Berkontribusi dalam pengembangan fitur jadwal ujian dan verifikasi surat pernyataan admin, serta pembuatan desain UI menggunakan Figma.",
      tech: ["Web", "Figma"],
      links: [
        { label: "Live Demo", url: "https://toeicky.onrender.com/" },
        { label: "Github", url: "https://github.com/Fallujahrama/PBL_Toeic" }
      ],
      bg: "bg-[#ff3c88]",
      category: "web",
      icon: Code
    },
    {
      title: "HRIS Mobile App",
      date: "Nov - Des 2025",
      desc: "Sistem Manajemen SDM. Berkontribusi dalam pengembangan fitur jadwal ujian dan verifikasi surat pernyataan admin, serta pembuatan desain UI menggunakan Figma.",
      tech: ["Mobile", "Flutter"],
      link: "https://github.com/Fallujahrama/PBL3B_HRIS",
      bg: "bg-[#00ff66]",
      category: "mobile",
      icon: Smartphone
    },
    {
      title: "RCOURT",
      date: "Feb - Apr 2026",
      desc: "Menjadi Backend dalam Sistem booking lapangan olahraga online dengan fitur login, booking lapangan, dan pembayaran online dan page lainnya.",
      tech: ["PHP", "Laravel", "Tailwind"],
      link: "https://rcourt.onrender.com/",
      bg: "bg-[#c250ff]",
      category: "web",
      icon: Code
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Projek' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'database', label: 'Database' },
    { id: 'java', label: 'Java & OOP' }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20 relative z-10 font-sans text-white bg-[#141414] min-h-screen">
      
      {/* Title Header */}
      <div className="text-center mb-12 animate-fadeInDown">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white uppercase tracking-wider">
          Project <span className="text-[#E50914]">Portfolio</span>
        </h1>
        <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
          Daftar proyek dan studi kasus yang pernah saya kerjakan.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-[#181818] p-6 rounded-md shadow-2xl mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <input 
              type="text"
              placeholder="Cari projek atau skill (ex: SQL, Flutter)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#222222] border border-[#333333] rounded p-3 pl-10 text-sm font-medium text-white shadow-inner focus:outline-none focus:border-[#E50914] transition-colors"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
          </div>

          <div className="text-sm font-bold text-gray-400 uppercase flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter Status: {filteredProjects.length} Terpasang
          </div>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-bold text-xs uppercase transition-colors cursor-pointer ${
                selectedCategory === cat.id 
                  ? 'bg-[#E50914] text-white'
                  : 'bg-[#222222] text-gray-300 hover:bg-[#333333] hover:text-white border border-[#333333]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((p, index) => {
            const ProjectIcon = p.icon;
            return (
              <div 
                key={p.title} 
                className="flex flex-col bg-[#181818] rounded-md overflow-hidden group animate-fadeInUp hover:scale-[1.02] transition-transform duration-300 shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header card (simulating a movie thumbnail area) */}
                <div className="relative h-48 bg-gradient-to-br from-[#222222] to-[#111111] p-6 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 bg-[#E50914] p-2 rounded shadow-lg">
                    <ProjectIcon className="w-5 h-5 text-white" />
                  </div>

                  {/* Netflix N Logo */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[#E50914] text-sm font-black drop-shadow-lg">N</span>
                  </div>

                  <div className="mt-auto relative z-10">
                    <h3 className="text-2xl font-bold text-white uppercase drop-shadow-md">{p.title}</h3>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-1 block drop-shadow-md">{p.date}</span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    {p.desc}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-[#222222] text-gray-300 text-[10px] font-bold uppercase rounded border border-[#333333]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project Links buttons */}
                  {Array.isArray(p.links) ? (
                    <div className="flex gap-4 mt-auto">
                      {p.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-[#333333] hover:bg-[#404040] text-white text-xs font-bold rounded flex items-center justify-center gap-2 transition-colors"
                        >
                          {l.label} <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full text-center py-3 bg-[#E50914] hover:bg-[#F40612] text-white text-sm font-bold rounded flex items-center justify-center gap-2 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty search results */
        <div className="text-center p-16 bg-[#181818] rounded-md shadow-2xl">
          <p className="text-2xl font-bold mb-4 uppercase text-white">No Titles Found</p>
          <p className="text-sm font-medium text-gray-400">Tidak ada projek yang cocok dengan kata kunci "{searchQuery}" di kategori "{selectedCategory}".</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="mt-6 px-6 py-3 bg-[#E50914] hover:bg-[#F40612] text-white font-bold rounded text-sm cursor-pointer transition-colors"
          >
            Reset Filter
          </button>
        </div>
      )}

      {/* Breadcrumb navigator */}
      <div className="mt-16 flex justify-center">
        <Breadcrumb />
      </div>
    </div>
  );
}