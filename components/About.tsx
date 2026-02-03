"use client";

import Link from 'next/link';

export default function About() {
  const hardSkills = ["Web Programming", "Java Programming", "UI/UX Design", "BPMN", "SQL", "ELK Stack", "Automation testing", "Manual Testing"];
  const software = ["Bizagi", "Figma", "VS Code", "ERDPlus", "draw.io", "ELK", "Notion", "Cisco Packet Tracer", "Power BI"];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 space-y-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6 animate-slideInLeft">
          <h2 className="text-4xl font-bold border-l-4 border-red-600 pl-4">Profil & Pendidikan</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Mahasiswa 
            Saya merupakan lulusan SMA tahun 2023 jurusan MIPA yang saat ini sedang menempuh kuliah jurusan <span className="text-blue-500 font-semibold">Sistem Informasi Bisnis di Politeknik Negeri Malang</span>.
            saya memiliki pribadi yang jujur, bisa diandalkan, disiplin dan juga bisa bekerja secara team. saya memiliki minat serta ketertarikan terhadap hal baru, Saya siap berkontribusi
            bekerja dengan sesuai prosedur Perusahaan dan memberikan kontribusi nyata
          </p>
          <div className="space-y-2">
             <p className="font-bold">Politeknik Negeri Malang (D4)</p>
             <p className="text-slate-400">2023 - Sekarang</p>
             <p className="font-bold mt-4">SMA Muhammadiyah 9 Bekasi</p>
             <p className="text-slate-400">2020 - 2023</p>
              <div className="mt-10">
              <Link href="/about/more" className="mt-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white rounded-lg transition-transform transform hover:scale-105">
               More About Me
              </Link>
              </div>
          </div>
        </div>
        <div className="h-87.5 w-full md:w-[350px] aspect-[3/4] bg-slate-900 border-2 border-blue-600 rounded-2xl flex flex-col items-center justify-center gap-4 animate-slideInRight hover:border-red-600 transition-colors duration-500 group">
          <img src="/images/w.jpeg" className="rounded-2xl text-slate-500 transform group-hover:scale-105 transition-transform duration-500" alt="profile" />
        
        </div>
         

      </div>

    

      <div className="space-y-8 animate-fadeInUp">
        <h2 className="text-4xl font-bold border-l-4 border-blue-600 pl-4">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-red-500 font-bold mb-4 uppercase">Hard Skills</h3>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((s, index) => (
                <span 
                  key={s} 
                  className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 hover:border-red-500 transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-blue-500 font-bold mb-4 uppercase">Software</h3>
            <div className="flex flex-wrap gap-2">
              {software.map((s, index) => (
                <span 
                  key={s} 
                  className="bg-blue-600/10 border border-blue-600/30 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600/30 hover:border-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 animate-fadeInUp">
         <h2 className="text-4xl font-bold border-l-4 border-red-600 pl-4">Pengalaman Magang</h2>
         <span className="text-3xl text-blue-500 font-semibold hover:text-blue-400 transition-colors duration-300 block">PT FAN Integrasi Teknologi</span>
          <div className="">
             <p className="font-bold">Kota Bekasi</p>
             <p className="text-slate-400">Januari 2025 - Januari 2025</p>
          </div>
          <div className="space-y-1 p-4 rounded-lg border border-white/10 hover:border-green-500/30 transition-colors duration-300">
          <p><span className="text-xl text-green-500 font-semibold">System Admin</span></p>
          <p className="text-xl text-slate-300 leading-relaxed">
         memahami kegunaan ELK(Elasticsearch, Logstash, Kibana) serta dapat mengimplementasikannya untuk kebutuhan pemantauan, analisis
          log, dan visualisasi data secara real-time.  
         </p>
     </div>

        <div className="space-y-6">
         <span className="text-3xl text-blue-500 font-semibold hover:text-blue-400 transition-colors duration-300 block">PT Timedoor Indonesia</span>
          <div className="">
             <p className="font-bold">Kota Bekasi</p>
             <p className="text-slate-400">Januari 2026 - Sekarang</p>
          </div>
          <div className="space-y-1 p-4 rounded-lg border border-white/10 hover:border-green-500/30 transition-colors duration-300">
          <p><span className="text-xl text-green-500 font-semibold">Quality Assurance (web) </span></p>
          <p className="text-xl text-slate-300 leading-relaxed">
          Melakukan pengujian perangkat lunak untuk memastikan kualitas dan fungsionalitasnya sesuai dengan standar yang ditetapkan, menggunakan 
          pengujian manual dan otomatis untuk mengidentifikasi bug serta masalah lainnya sebelum perangkat lunak dirilis ke pengguna akhir.
         </p>
         </div>
      </div>
      </div>
    </section>
  );
}