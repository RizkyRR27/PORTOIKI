'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const pathNameDisplay = pathname === '/contact' 
    ? 'Hubungin Gue' 
    : pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <nav className="flex justify-center py-10 border-t border-white/5 mt-20 text-xs font-medium tracking-widest uppercase">
      <ol className="flex items-center space-x-3">
        <li>
          <Link href="/" className="text-slate-500 hover:text-blue-500 transition-colors">
            Home
          </Link>
        </li>
        <li className="text-slate-800">/</li>
        <li>
          <span className="text-red-600">
            {pathNameDisplay}
          </span>
        </li>
      </ol>
    </nav>
  );
}