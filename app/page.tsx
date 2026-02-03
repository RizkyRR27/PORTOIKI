import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FeaturedProjects from '@/components/FeaturedProjects';
import CTA from '@/components/CTA';

export default function Page() { 
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <CTA />
    </>
  );
}