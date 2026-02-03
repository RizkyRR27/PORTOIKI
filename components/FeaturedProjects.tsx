'use client';

import Link from 'next/link';

export default function FeaturedProjects() {
  const featured = [
    {
      title: "TOEIC TREGON",
      desc: "Platform ujian TOEIC modern dengan fitur real-time dan admin verification system",
      tech: ["React", "Next.js", "Figma"],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      link: "https://github.com/Fallujahrama/PBL_Toeic"
    },
    {
      title: "HRIS Mobile App",
      desc: "Sistem manajemen SDM berbasis mobile dengan tracking real-time",
      tech: ["Flutter", "Mobile Dev"],
      image: "bg-gradient-to-br from-green-500/20 to-blue-500/20",
      link: "https://github.com/Fallujahrama/PBL3B_HRIS"
    },
    {
      title: "Inventaris Gudang",
      desc: "Sistem manajemen stok barang dengan laporan terintegrasi",
      tech: ["Java", "OOP", "Database"],
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      link: "https://github.com/arielreza/TA-InventarisGudang"
    }
  ];

  return (
    <section className="py-32 px-10 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-extrabold mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-400">Beberapa proyek terbaik yang pernah saya kerjakan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 ${project.image}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative p-8 h-full flex flex-col justify-between min-h-[300px]">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center text-blue-500 group-hover:text-red-500 transition-colors duration-300 font-semibold">
                  View Project <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Link href="/project" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/50">
            Lihat Semua Projek
          </Link>
        </div>
      </div>
    </section>
  );
}
