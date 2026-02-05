import PenghargaanNavbar from '@/components/PenghargaanNavbar';
import PenghargaanGallery from '@/components/PenghargaanGallery';
import Breadcrumb from '@/components/Breadcrumb';

export default function PenghargaanPage() {
	return (
		<div>
			<PenghargaanNavbar />

			<main className="pt-28 px-6 max-w-4xl mx-auto pb-20">
				<h1 className="text-4xl font-bold mb-6">Penghargaan</h1>

				<p className="text-slate-400 mb-6">Di bawah ini terdapat beberapa penghargaan dan sertifikat RRR. Silakan klik untuk melihat.</p>

<div className="mt-6">
				<PenghargaanGallery />
				</div>

				<div className="mt-12">
					<Breadcrumb />
				</div>
			</main>
		</div>
	);
}
