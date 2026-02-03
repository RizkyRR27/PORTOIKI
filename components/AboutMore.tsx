"use client";

import Breadcrumb from '@/components/Breadcrumb';

export default function AboutMore() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 space-y-8">
      <h1 className="text-3xl font-bold">More About Me</h1>

      <div className="space-y-4">
        <p className="text-lg text-slate-300">Saya lahir di Jakarta, 27 Mei 2005 — sudah pasti Gemini (HIDUP GEMINI). Saya besar di Bekasi dan menempuh pendidikan dasar hingga menengah di lingkungan Muhammadiyah.</p>

        {/* <div>
          <p className="font-bold">Pendidikan</p>
          <ul className="text-slate-400 list-disc list-inside ml-2">
            <li>SD Muhammadiyah 47 Bekasi</li>
            <li>SMP Muhammadiyah 28 Bekasi</li>
            <li>SMA Muhammadiyah 09 Bekasi</li>
          </ul>
        </div> */}

        <div>
          <p className="font-bold">Hobi & Kegiatan</p>
          <p className="text-slate-300">Saya suka nongkrong, main, jalan-jalan bareng teman, dan olahraga seperti basket, futsal, badminton, billiard, serta jalan santai.</p>
        </div>

        <div>
          <p className="font-bold">Foto (placeholder)</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {['ww.jpeg','1.jpg','2.jpg','3.jpg','4.jpeg','5.jpeg','6.jpeg'].map((f) => (
              <div key={f} className="w-full h-36 bg-slate-800 rounded overflow-hidden flex items-center justify-center border border-white/5">
                <img src={`/images/${f}`} alt={f} className="object-cover w-full h-full" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold">Favorit</p>
          <p className="text-slate-300">Makanan: belum menemukan satu favorit — semuanya enak. Lagu favorit: "AKU CINTA KAU DAN DIA" by Maliq & D'Essentials.</p>
        </div>
      </div>

      <Breadcrumb />
    </section>
  );
}
