'use client';

import Link from 'next/link';
import { Calendar, MapPin, Briefcase, Award, GraduationCap, ChevronRight } from 'lucide-react';

export default function About() {
  const hardSkills = [
    { name: "Web Programming", color: "bg-[#00f0ff]" },
    { name: "UI/UX Design", color: "bg-[#ff3c88]" },
    { name: "BPMN", color: "bg-[#00ff66]" },
    { name: "SQL", color: "bg-[#ffe600]" },
    { name: "ELK Stack", color: "bg-[#c250ff]" },
    { name: "Automation testing", color: "bg-[#ff5e00]" },
    { name: "Manual Testing", color: "bg-[#00ff66]" }
  ];

  const software = ["Bizagi", "Figma", "VS Code", "ERDPlus", "draw.io", "ELK", "Notion", "Cisco Packet Tracer", "Power BI"];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 space-y-20 relative z-10 font-sans bg-[#141414] text-white">

      {/* Profil & Pendidikan */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Profile Card text */}
        <div className="flex-1 space-y-6 animate-fadeInDown bg-[#181818] p-8 md:p-10 rounded-md shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-[#E50914] pl-4">
            Profil & Pendidikan
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-medium">
            Mahasiswa lulusan SMA tahun 2023 jurusan MIPA yang saat ini sedang menempuh kuliah jurusan <span className="text-white font-bold">Sistem Informasi Bisnis di Politeknik Negeri Malang</span>. Pribadi jujur, bisa diandalkan, disiplin, dan siap bekerja dalam tim maupun individu.
          </p>

          <div className="space-y-4 mt-8 pt-6 border-t border-[#333333]">
            <div className="bg-[#222222] p-5 rounded flex items-start gap-4 hover:bg-[#2a2a2a] transition-colors">
              <GraduationCap className="w-6 h-6 text-[#E50914] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white text-lg">Politeknik Negeri Malang</p>
                <p className="text-sm text-gray-400 mt-1">D4 Sistem Informasi Bisnis</p>
                <span className="text-xs font-bold text-gray-400 mt-2 block">2023 - Sekarang</span>
              </div>
            </div>

            <div className="bg-[#222222] p-5 rounded flex items-start gap-4 hover:bg-[#2a2a2a] transition-colors">
              <GraduationCap className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white text-lg">SMA Muhammadiyah 9 Bekasi</p>
                <p className="text-sm text-gray-400 mt-1">Jurusan MIPA (Matematika & IPA)</p>
                <span className="text-xs font-bold text-gray-400 mt-2 block">2020 - 2023</span>
              </div>
            </div>

            <div className="mt-8 flex justify-start">
              <Link href="/about/more" className="px-6 py-3 bg-[#E50914] hover:bg-[#F40612] text-white font-bold rounded flex items-center gap-2 transition-colors">
                More About Me <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-[350px] bg-[#181818] p-4 flex flex-col items-center justify-center gap-4 animate-fadeInUp rounded-md shadow-2xl flex-shrink-0">
          <div className="w-full aspect-[3/4] relative overflow-hidden rounded">
            <img
              src="/images/ww.jpeg"
              className="w-full h-full object-cover filter contrast-110 saturate-110 hover:scale-105 transition-transform duration-500"
              alt="Rizky Roza Rahim profile picture"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60";
              }}
            />
          </div>
          <div className="w-full text-center font-bold text-sm text-gray-400 tracking-wider">
            RIZKY ROZA RAHIM
          </div>
        </div>
      </div>

      {/* Keahlian (Skills) */}
      <div className="space-y-8 animate-fadeInUp bg-[#181818] p-8 md:p-10 rounded-md shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-[#E50914] pl-4">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Hard Skills */}
          <div className="space-y-6">
            <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-wider text-sm">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-[#222222] text-gray-300 font-medium text-sm rounded border border-[#333333] hover:border-[#E50914] hover:text-white transition-colors cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Software Tools */}
          <div>
            <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-wider text-sm">
              Software Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {software.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 bg-[#222222] text-gray-300 font-medium text-sm rounded border border-[#333333] hover:border-[#E50914] hover:text-white transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pengalaman Magang Timeline */}
      <div className="space-y-8 animate-fadeInUp bg-[#181818] p-8 md:p-10 rounded-md shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-[#E50914] pl-4">
          Experience
        </h2>

        {/* Timelines */}
        <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#333333]">

          {/* Card 1 */}
          <div className="pl-12 relative group">
            {/* Timeline Circle */}
            <div className="absolute w-4 h-4 bg-[#E50914] rounded-full left-[9px] top-1.5 shadow-[0_0_10px_rgba(229,9,20,0.5)] group-hover:scale-125 transition-transform" />

            <div className="bg-[#222222] p-6 rounded hover:bg-[#2a2a2a] transition-colors border border-transparent hover:border-[#333333]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                PT FAN Integrasi Teknologi
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-medium mb-4">
                <p className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Kota Bekasi</p>
                <p className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 2025 - Jan 2025</p>
              </div>

              <div className="pt-4 border-t border-[#333333]">
                <p className="text-md font-bold text-gray-200 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#E50914]" /> System Admin
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Memahami kegunaan ELK (Elasticsearch, Logstash, Kibana) serta mengimplementasikannya untuk pemantauan server, analisis file log sistem, dan visualisasi dashboard data secara real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="pl-12 relative group">
            {/* Timeline Circle */}
            <div className="absolute w-4 h-4 bg-[#E50914] rounded-full left-[9px] top-1.5 shadow-[0_0_10px_rgba(229,9,20,0.5)] group-hover:scale-125 transition-transform" />

            <div className="bg-[#222222] p-6 rounded hover:bg-[#2a2a2a] transition-colors border border-transparent hover:border-[#333333]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                PT Timedoor Indonesia
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-medium mb-4">
                <p className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Denpasar, Bali</p>
                <p className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 2026 - Sekarang</p>
              </div>

              <div className="pt-4 border-t border-[#333333]">
                <p className="text-md font-bold text-gray-200 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#E50914]" /> Quality Assurance (Web)
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Melakukan pengujian perangkat lunak (website) untuk memastikan kualitas fungsionalitas aplikasi sesuai dengan dokumen SRS. Menerapkan pengujian manual untuk eksplorasi dan pengujian otomatis (automated testing) untuk skenario regresi serta dokumentasi penemuan bug yang terstruktur.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}