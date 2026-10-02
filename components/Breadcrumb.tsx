'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const pathNameDisplay = pathname === '/HUBi'
    ? 'Hubungin Gue'
    : pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <nav aria-label="Breadcrumb" className="flex justify-center border-t border-[#27272a] py-10 mono text-[10px] uppercase tracking-[0.2em]">
      <ol className="flex items-center space-x-3">
        <li>
          <Link href="/" className="text-zinc-500 transition-colors hover:text-[#D2FF00]">
            Home
          </Link>
        </li>
        <li className="text-zinc-700" aria-hidden>/</li>
        <li>
          <span className="text-[#D2FF00]">{pathNameDisplay}</span>
        </li>
      </ol>
    </nav>
  );
}
