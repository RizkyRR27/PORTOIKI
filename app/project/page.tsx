export default function Page() {
  const projects = [
    { title: "Sistem Kasir Bengkel", date: "2024", desc: "Manajemen database kasir bengkel (ERD, DDL, DML)." },
    { title: "Inventaris Gudang", date: "2023", desc: "Program manajemen stok menggunakan Java." },
    { title: "TOEIC TREGON", date: "2025", desc: "Sistem pendaftaran TOEIC berbasis web & desain UI Figma." }
  ];
  return (
    <div className="pt-32 px-10 max-w-6xl mx-auto pb-20">
      <h1 className="text-5xl font-bold mb-10">Projek Portofolio</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(p => (
          <div key={p.title} className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-red-600 transition-all">
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="text-blue-500 text-sm mb-4">{p.date}</p>
            <p className="text-slate-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}