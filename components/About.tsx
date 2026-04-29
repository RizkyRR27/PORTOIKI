"use client";

import Link from 'next/link';

export default function About() {
  const hardSkills = ["Web Programming", "UI/UX Design", "BPMN", "SQL", "ELK Stack", "Automation testing", "Manual Testing"];
  const software = ["Bizagi", "Figma", "VS Code", "ERDPlus", "draw.io", "ELK", "Notion", "Cisco Packet Tracer", "Power BI"];

  const randomColors = ['bg-[#ffe600]', 'bg-[#ff3c88]', 'bg-[#00f0ff]', 'bg-[#00ff66]', 'bg-[#c250ff]', 'bg-[#ff5e00]', 'bg-white'];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 space-y-20 relative z-10">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6 animate-slideInLeft brutal-card p-10 bg-[#00f0ff] transform rotate-1">
          <h2 className="text-5xl font-black text-black uppercase border-b-4 border-black pb-4 mb-4 bg-white inline-block px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Profil & Pendidikan</h2>
          <p className="text-xl text-black leading-relaxed font-bold bg-white border-4 border-black p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            Mahasiswa lulusan SMA tahun 2023 jurusan MIPA yang saat ini sedang menempuh kuliah jurusan <span className="bg-[#ffe600] px-2 border-2 border-black">Sistem Informasi Bisnis di Politeknik Negeri Malang</span>.
            Pribadi jujur, bisa diandalkan, disiplin dan siap bekerja dalam tim.
          </p>
          <div className="space-y-6 mt-8 pt-6">
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <p className="font-black text-black text-xl">Politeknik Negeri Malang (D4)</p>
              <p className="text-black font-bold bg-[#ff3c88] text-white px-2 inline-block mt-2">2023 - Sekarang</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-1">
              <p className="font-black text-black text-xl">SMA Muhammadiyah 9 Bekasi</p>
              <p className="text-black font-bold bg-[#00ff66] px-2 inline-block mt-2">2020 - 2023</p>
            </div>
            <div className="mt-10 pt-4">
              <Link href="/about/more" className="brutal-btn px-6 py-4 bg-[#ffe600] text-black">
                Read More About Me
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[350px] aspect-[3/4] brutal-card bg-[#ff3c88] p-2 flex flex-col items-center justify-center gap-4 animate-slideInRight transform -rotate-2">
          <div className="w-full h-full relative overflow-hidden border-4 border-black">
            <img src="/images/ww.jpeg" className="w-full h-full object-cover filter contrast-125 saturate-150" alt="profile" />
          </div>
        </div>
      </div>

      <div className="space-y-8 animate-fadeInUp brutal-card p-10 bg-[#ffe600] transform -rotate-1">
        <h2 className="text-5xl font-black text-black uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <div>
            <h3 className="bg-black text-white font-black mb-6 uppercase tracking-widest text-lg p-2 inline-block border-2 border-black shadow-[4px_4px_0px_rgba(0,f0,ff,1)]">Hard Skills</h3>
            <div className="flex flex-wrap gap-4">
              {hardSkills.map((s, index) => (
                <span
                  key={s}
                  className={`border-4 border-black text-black font-black px-4 py-2 text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer animate-fadeInUp ${randomColors[(index * 3) % randomColors.length]}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="bg-black text-white font-black mb-6 uppercase tracking-widest text-lg p-2 inline-block border-2 border-black shadow-[4px_4px_0px_rgba(255,60,136,1)]">Software</h3>
            <div className="flex flex-wrap gap-4">
              {software.map((s, index) => (
                <span
                  key={s}
                  className={`border-4 border-black text-black font-black px-4 py-2 text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer animate-fadeInUp ${randomColors[(index * 5) % randomColors.length]}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 animate-fadeInUp brutal-card p-10 bg-[#c250ff] transform rotate-1">
        <h2 className="text-5xl font-black text-black uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">Pengalaman Magang</h2>

        <div className="mt-8 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-1 relative">
          <div className="absolute w-8 h-8 bg-[#00f0ff] border-4 border-black rounded-full -left-4 -top-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
          <span className="text-3xl text-black font-black block uppercase bg-[#ffe600] inline-block px-2 border-2 border-black">PT FAN Integrasi Teknologi</span>
          <div className="text-sm mt-4 mb-6 flex gap-4 text-black font-black uppercase">
            <p className="bg-[#00ff66] px-2 py-1 border-2 border-black">📍 Kota Bekasi</p>
            <p className="bg-[#ff3c88] text-white px-2 py-1 border-2 border-black">🗓 Jan 2025 - Jan 2025</p>
          </div>
          <div className="p-6 bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <p className="text-2xl text-black font-black uppercase underline decoration-4 decoration-[#ff3c88]">System Admin</p>
            <p className="text-black font-bold leading-relaxed mt-4 text-lg">
              Memahami kegunaan ELK (Elasticsearch, Logstash, Kibana) serta mengimplementasikannya untuk pemantauan, analisis log, dan visualisasi data real-time.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform rotate-1 relative">
          <div className="absolute w-8 h-8 bg-[#ff5e00] border-4 border-black rounded-full -right-4 -top-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
          <span className="text-3xl text-black font-black block uppercase bg-[#00f0ff] inline-block px-2 border-2 border-black">PT Timedoor Indonesia</span>
          <div className="text-sm mt-4 mb-6 flex gap-4 text-black font-black uppercase">
            <p className="bg-[#00ff66] px-2 py-1 border-2 border-black">📍 BALI</p>
            <p className="bg-[#ff3c88] text-white px-2 py-1 border-2 border-black">🗓 Jan 2026 - Sekarang</p>
          </div>
          <div className="p-6 bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <p className="text-2xl text-black font-black uppercase underline decoration-4 decoration-[#00f0ff]">Quality Assurance (Web)</p>
            <p className="text-black font-bold leading-relaxed mt-4 text-lg">
              Melakukan pengujian perangkat lunak untuk memastikan kualitas fungsionalitas sesuai standar, menggunakan pengujian manual dan otomatis untuk identifikasi bug.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}