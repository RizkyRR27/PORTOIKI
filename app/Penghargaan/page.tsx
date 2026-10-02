import PenghargaanGallery from '@/components/PenghargaanGallery';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';

export default function PenghargaanPage() {
  return (
    <main className="mx-auto max-w-[1600px] px-5 pb-20 pt-32 md:px-10">
      <div className="mb-14">
        <Reveal dir="fade"><p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[#D2FF00]">Trophy room</p></Reveal>
        <h1 className="display text-6xl md:text-8xl">
          <Reveal dir="mask" delay={80}><span className="block">Awards &amp;</span></Reveal>
          <Reveal dir="mask" delay={180}><span className="block text-[#D2FF00]">certificates.</span></Reveal>
        </h1>
        <Reveal delay={300}>
          <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500">
            A collection of my achievements and certifications.
          </p>
        </Reveal>
      </div>

      <PenghargaanGallery />

      <div className="mt-20">
        <Breadcrumb />
      </div>
    </main>
  );
}
