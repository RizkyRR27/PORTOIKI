'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/project', label: 'Projek' },
  { href: '/Penghargaan', label: 'Penghargaan' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 border-b ${
        isScrolled || isOpen
          ? 'bg-[#111112]/90 backdrop-blur-md border-[#27272a]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Home" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/iki_logo.svg"
            alt="Iki logo"
            width={52}
            height={40}
            unoptimized
            priority
            className="h-10 w-auto rounded-md transition-transform duration-200 hover:scale-105"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 mono text-xs uppercase tracking-widest">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-150 hover:text-[#D2FF00] ${
                  active ? 'text-[#D2FF00]' : 'text-zinc-300'
                }`}
              >
                {link.label}
                {active && <span className="absolute -bottom-0.5 left-0 h-px w-full bg-[#D2FF00]" />}
              </Link>
            );
          })}
          <Link
            href="/HUBi"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#D2FF00] px-5 py-2.5 font-bold text-black transition-all duration-200 hover:bg-white hover:shadow-[0_0_30px_-4px_#D2FF00]"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-[#27272a] text-white"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#27272a] bg-[#111112] px-5 pb-6 pt-4">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`display text-4xl py-3 border-b border-[#27272a] ${
                  pathname === link.href ? 'text-[#D2FF00]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/HUBi"
              onClick={() => setIsOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#D2FF00] px-6 py-3 mono text-sm font-bold uppercase tracking-widest text-black"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
