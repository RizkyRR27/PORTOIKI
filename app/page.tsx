import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FeaturedProjects from '@/components/FeaturedProjects';
import Skills from '@/components/Skills';
import CTA from '@/components/CTA';

export default function Page() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Skills />
      <CTA />
    </main>
  );
}
