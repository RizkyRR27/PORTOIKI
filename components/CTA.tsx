'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal main card
    gsap.from('.cta-main-card', {
      scrollTrigger: {
        trigger: '.cta-main-card',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 80,
      scale: 0.96,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.2)',
    });

    // Stagger reveal social buttons
    gsap.from('.cta-social-btn', {
      scrollTrigger: {
        trigger: '.cta-social-btn-container',
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-16 px-6 z-10 font-sans bg-[#141414] text-white">
      <div className="cta-main-card max-w-4xl mx-auto text-center p-8 md:p-12 rounded-md bg-[#181818] shadow-2xl relative overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-[#E50914]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-[#E50914]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Ready to <span className="text-[#E50914]">Collaborate?</span>
        </h2>

        {/* Paragraph Description */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
          Let's create something extraordinary together. Contact me for discussions, inquiries, or new project collaborations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/HUBi"
            className="w-full sm:w-auto px-8 py-3 bg-[#E50914] hover:bg-[#F40612] text-white font-bold rounded flex items-center justify-center gap-2 transition-colors"
          >
            Contact Me Now <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-3 bg-[#333333] hover:bg-[#404040] text-white font-bold rounded flex items-center justify-center gap-2 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-12 pt-8 border-t border-[#333333]">
          <p className="text-gray-400 font-bold mb-4 text-sm uppercase tracking-wide">
            Find me on:
          </p>
          <div className="cta-social-btn-container flex gap-3 sm:gap-4 justify-center flex-wrap">
            {[
              { name: 'GitHub', icon: Github, url: 'https://github.com/arielreza' },
              { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/rizky-roza-801a6a287' },
              { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/rizkyroza._' },
              { name: 'Email', icon: Mail, url: 'mailto:rizkyroza2005@gmail.com' }
            ].map(platform => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-social-btn flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-[#333333] border border-[#333333] rounded text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{platform.name}</span>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}