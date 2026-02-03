export default function About() {
  const hardSkills = ["Web Programming", "Java Programming", "UI/UX Design", "BPMN", "SQL", "ELK Stack"];
  const software = ["Bizagi", "Figma", "VS Code", "ERDPlus", "draw.io"];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 space-y-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold border-l-4 border-red-600 pl-4">Profil & Pendidikan</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Mahasiswa <span className="text-blue-500 font-semibold">Sistem Informasi Bisnis di Politeknik Negeri Malang</span>. 
            Pribadi yang jujur, disiplin, dan mampu bekerja secara tim. Memiliki pengalaman magang sebagai System Admin di PT FAN Integrasi Teknologi.
          </p>
          <div className="space-y-2">
             <p className="font-bold">Politeknik Negeri Malang (D4)</p>
             <p className="text-slate-400">2023 - Sekarang</p>
             <p className="font-bold mt-4">SMA Muhammadiyah 9 Bekasi</p>
             <p className="text-slate-400">2020 - 2023</p>
          </div>
        </div>
        <div className="w-full md:w-[350px] aspect-[3/4] bg-slate-900 border-2 border-blue-600 rounded-2xl flex items-center justify-center">
          <span className="text-slate-500">Foto: /public/images/profil.jpg</span>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-4xl font-bold border-l-4 border-blue-600 pl-4">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-red-500 font-bold mb-4 uppercase">Hard Skills</h3>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map(s => <span key={s} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">{s}</span>)}
            </div>
          </div>
          <div>
            <h3 className="text-blue-500 font-bold mb-4 uppercase">Software</h3>
            <div className="flex flex-wrap gap-2">
              {software.map(s => <span key={s} className="bg-blue-600/10 border border-blue-600/30 text-blue-400 px-4 py-2 rounded-lg">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}