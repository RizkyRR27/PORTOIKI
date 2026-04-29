import Breadcrumb from '@/components/Breadcrumb';

export default function ProjectPage() {
  const projects = [
    { 
      title: "Sistem Kasir Bengkel", 
      date: "Mei - Juni 2024", 
      desc: "Mengelola pembuatan database sederhana untuk tugas mata kuliah Basis Data. Bertanggung jawab pada tahap analisis perencanaan kebutuhan sistem di bagian ERD, DDL, DML, dan DRL.", 
      tech: ["SQL", "Database Design"],
      link: "https://drive.google.com/file/d/14Uh95TU5i9lY4G-LO_S3aovA2jAAnTkd/view?usp=drive_link",
      bg: "bg-[#00f0ff]"
    },
    { 
      title: "Inventaris Gudang", 
      date: "Sep - Des 2023", 
      desc: "Mengembangkan sistem manajemen stok barang menggunakan Java. Mengerjakan fitur input barang, display barang, dan laporan barang rusak.", 
      tech: ["Java", "OOP"],
      link: "https://github.com/arielreza/TA-InventarisGudang",
      bg: "bg-[#ffe600]"
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
      bg: "bg-[#ff3c88]"
    },
     { 
      title: "HRIS Mobile App", 
      date: "Nov - Des 2025", 
      desc: "Sistem Manajemen SDM. Berkontribusi dalam pengembangan fitur jadwal ujian dan verifikasi surat pernyataan admin, serta pembuatan desain UI menggunakan Figma.", 
      tech: ["Mobile", "Flutter"],
      link: "https://github.com/Fallujahrama/PBL3B_HRIS",
      bg: "bg-[#00ff66]"
    }
  ];

  return (
    <div className="pt-32 px-10 max-w-6xl mx-auto pb-20 relative z-10">
      <div className="text-center mb-16 animate-fadeInDown">
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-black uppercase">
          <span className="bg-[#ff5e00] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] inline-block transform -rotate-2">Projek</span>
          <br/>
          <span className="bg-[#c250ff] text-black px-4 py-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 mt-4">Portofolio</span>
        </h1>
        <p className="text-xl text-black font-bold bg-white border-4 border-black p-4 inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)]">Daftar proyek dan studi kasus yang pernah saya kerjakan.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((p, index) => (
          <div key={p.title} className={`flex flex-col brutal-card ${p.bg} p-8 group animate-fadeInUp ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex-grow">
              <h3 className="text-3xl font-black mb-4 text-black uppercase bg-white border-4 border-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] inline-block">{p.title}</h3>
              <p className="text-black bg-white inline-block px-2 border-2 border-black font-black uppercase text-sm mb-6">{p.date}</p>
              <p className="text-black mb-8 leading-relaxed font-bold bg-white/60 p-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {p.tech.map((t) => (
                  <span key={t} className="px-4 py-2 bg-black text-white text-xs font-black uppercase border-2 border-white shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tombol Link Projek */}
            {Array.isArray(p.links) ? (
              <div className="flex gap-4 mt-auto">
                {p.links.map((l) => (
                  <a 
                    key={l.url}
                    href={l.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 brutal-btn text-center py-4 bg-white text-black"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : (
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full brutal-btn text-center py-4 bg-black text-white"
              >
                Lihat Projek
              </a>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-24 flex justify-center">
        <div className="bg-[#ffe600] border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] font-black">
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
}