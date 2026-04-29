'use client';

import Link from 'next/link';

export default function FeaturedProjects() {
  const featured = [
    {
      title: "TOEIC TREGON",
      desc: "Platform ujian TOEIC modern dengan fitur real-time dan admin verification system",
      tech: ["React", "Next.js", "Figma"],
      bg: "bg-[#00f0ff]",
      link: "https://github.com/Fallujahrama/PBL_Toeic"
    },
    {
      title: "HRIS Mobile App",
      desc: "Sistem manajemen SDM berbasis mobile dengan tracking real-time",
      tech: ["Flutter", "Mobile Dev"],
      bg: "bg-[#ffe600]",
      link: "https://github.com/Fallujahrama/PBL3B_HRIS"
    },
    {
      title: "Inventaris Gudang",
      desc: "Sistem manajemen stok barang dengan laporan terintegrasi",
      tech: ["Java", "OOP", "Database"],
      bg: "bg-[#ff5e00]",
      link: "https://github.com/arielreza/TA-InventarisGudang"
    }
  ];

  return (
    <section className="py-32 px-10 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="inline-block text-5xl md:text-6xl font-black mb-4 bg-white text-black border-4 border-black px-6 py-2 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-1">
            FEATURED PROJECTS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`brutal-card ${project.bg} overflow-hidden group animate-fadeInUp flex flex-col`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-40 bg-white border-b-4 border-black w-full flex items-center justify-center p-4">
                 <div className="text-5xl border-4 border-black bg-[#ff3c88] w-20 h-20 flex items-center justify-center rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-200">💻</div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black mb-3 text-black">
                    {project.title}
                  </h3>
                  <p className="text-black font-bold text-sm leading-relaxed mb-6 bg-white/50 border-2 border-black p-3">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white border-2 border-black text-black text-xs font-black uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-black uppercase text-black border-t-4 border-black pt-4">
                  <span>View Project</span> 
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-200">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-20 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Link href="/project" className="brutal-btn px-10 py-5 bg-[#c250ff] text-white text-xl">
            Lihat Semua Projek
          </Link>
        </div>
      </div>
    </section>
  );
}
