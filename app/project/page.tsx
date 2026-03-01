import Breadcrumb from '@/components/Breadcrumb';

export default function ProjectPage() {
  const projects = [
    { 
      title: "Sistem Kasir Bengkel", 
      date: "Mei - Juni 2024", 
      desc: "Mengelola pembuatan database sederhana untuk tugas mata kuliah Basis Data. Bertanggung jawab pada tahap analisis perencanaan kebutuhan sistem di bagian ERD, DDL, DML, dan DRL.", 
      tech: ["SQL", "Database Design"],
      link: "https://drive.google.com/file/d/14Uh95TU5i9lY4G-LO_S3aovA2jAAnTkd/view?usp=drive_link"
    },
    { 
      title: "Inventaris Gudang", 
      date: "Sep - Des 2023", 
      desc: "Mengembangkan sistem manajemen stok barang menggunakan Java. Mengerjakan fitur input barang, display barang, dan laporan barang rusak.", 
      tech: ["Java", "OOP"],
      link: "https://github.com/arielreza/TA-InventarisGudang"
    },
    { 
      title: "TOEIC TREGON", 
      date: "Feb - Juni 2025", 
      desc: "Berkontribusi dalam pengembangan fitur jadwal ujian dan verifikasi surat pernyataan admin, serta pembuatan desain UI menggunakan Figma.", 
      tech: ["Web Development", "Figma", "UI/UX"],
      links: [
        { label: "Live Demo", url: "https://toeicky.onrender.com/" },
        { label: "Github", url: "https://github.com/Fallujahrama/PBL_Toeic" }
      ]
    },
     { 
      title: "Human Resource Information System", 
      date: "Nov - Des 2025", 
      desc: "Berkontribusi dalam pengembangan fitur jadwal ujian dan verifikasi surat pernyataan admin, serta pembuatan desain UI menggunakan Figma.", 
      tech: ["Mobile Development", "Flutter"],
      link: "https://github.com/Fallujahrama/PBL3B_HRIS"
    }
  ];

  return (
    <div className="pt-32 px-10 max-w-6xl mx-auto pb-20 bg-orange-50/50">
      <h1 className="text-5xl font-bold mb-10 animate-fadeInUp text-gray-800">Projek Portofolio</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, index) => (
          <div key={p.title} className="flex flex-col p-8 bg-orange-50/70 border border-orange-200 rounded-2xl hover:border-orange-300 transition-all group animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{p.title}</h3>
              <p className="text-pink-500 text-sm mb-4 font-semibold">{p.date}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-pink-100 border border-pink-200 rounded text-xs text-blue-600 hover:bg-pink-200 transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tombol Link Projek */}
            {Array.isArray(p.links) ? (
              <div className="flex gap-3">
                {p.links.map((l) => (
                  <a 
                    key={l.url}
                    href={l.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-blue-500/10 border border-blue-500/30 text-blue-500 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            ) : (
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-red-600/10 border border-red-600/30 text-red-500 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Lihat Projek →
              </a>
            )}
          </div>
        ))}
      </div>
      
      {/* Breadcrumb sesuai permintaan di posisi bawah */}
      <Breadcrumb />
    </div>
  );
}