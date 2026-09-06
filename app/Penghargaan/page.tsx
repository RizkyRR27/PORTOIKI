// import PenghargaanNavbar from '@/components/PenghargaanNavbar';
import PenghargaanGallery from '@/components/PenghargaanGallery';
import Breadcrumb from '@/components/Breadcrumb';

export default function PenghargaanPage() {
	return (
		<div className="min-h-screen bg-[#141414] text-white">
			<main className="pt-32 px-6 max-w-5xl mx-auto pb-20 relative z-10">
				<div className="text-center mb-16 animate-fadeInDown">
					<h1 className="text-4xl md:text-6xl font-bold mb-4 text-white uppercase tracking-wider">
						Awards & <span className="text-[#E50914]">Certificates</span>
					</h1>
					<p className="text-lg text-gray-400 font-medium">
						A collection of my achievements and certifications.
					</p>
				</div>

				<div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
					<PenghargaanGallery />
				</div>

				<div className="mt-20 flex justify-center">
					<Breadcrumb />
				</div>
			</main>
		</div>
	);
}
