export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black text-white px-4 overflow-hidden">
      {/* Efek Cahaya */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-red-600/20 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <h1 className="text-[64px] font-extrabold leading-tight tracking-tighter">
          Selamat datang para penggemar <br />
          <span className="text-red-600">Rizky Roza Rahim</span>
        </h1>
        <p className="text-[32px] text-slate-400 mt-6 max-w-4xl mx-auto leading-relaxed">
          Membangun solusi digital melalui kode, kreativitas, dan inovasi teknologi terbaru.
        </p>
        
        <div className="mt-12 flex gap-6 justify-center">
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 font-bold rounded-lg transition-all">
            Lihat Projek
          </button>
          {/* Navigasi ke ID 'about' */}
          <a 
            href="#about" 
            className="px-8 py-4 border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white font-bold rounded-lg transition-all"
          >
            Tentang Saya
          </a>
        </div>
      </div>
    </section>
  );
}