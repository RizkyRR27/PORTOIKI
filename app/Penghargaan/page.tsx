import PenghargaanNavbar from '@/components/PenghargaanNavbar';
import PenghargaanGallery from '@/components/PenghargaanGallery';
import Breadcrumb from '@/components/Breadcrumb';

export default function PenghargaanPage() {
	return (
		<div className="bg-[#fdfbf7] min-h-screen">
			<PenghargaanNavbar />

			<main className="pt-32 px-6 max-w-5xl mx-auto pb-20 relative z-10">
        <div className="text-center mb-16 animate-fadeInDown">
				  <h1 className="text-6xl md:text-8xl font-black mb-8 text-black uppercase">
            Galeri <span className="bg-[#ff5e00] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] inline-block transform -rotate-2">Penghargaan</span>
          </h1>
				  <p className="text-xl text-black font-bold bg-[#00ff66] border-4 border-black p-4 inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-1">
            Koleksi sertifikat dan penghargaan yang pernah saya raih.
          </p>
        </div>

        <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
				  <PenghargaanGallery />
				</div>

				<div className="mt-20 flex justify-center">
          <div className="bg-[#ff3c88] text-white border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] font-black">
					  <Breadcrumb />
          </div>
				</div>
			</main>
		</div>
	);
}
