import Link from 'next/link';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Dekorasi Cahaya */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <h1 className="text-[64px] font-extrabold leading-tight tracking-tighter mb-6">
          Selamat datang para penggemar <br />
          <span className="text-red-600">Rizky Roza Rahim</span>
        </h1>
        <p className="text-[32px] text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
          Membangun solusi digital melalui kode, kreativitas, dan inovasi teknologi terbaru.
        </p>
        <div className="mt-12 flex gap-6 justify-center">
          <Link href="/projects/" className="px-8 py-4 bg-red-600 hover:bg-red-700 font-bold rounded-lg transition-all">
            Lihat Projek
          </Link>
          <Link href="/about/" className="px-8 py-4 border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white font-bold rounded-lg transition-all">
            Tentang Saya
          </Link>
        </div>
      </div>
    </section>
  );
}