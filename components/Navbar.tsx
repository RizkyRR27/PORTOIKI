import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 p-5 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        RRR<span className="text-red-600">.</span>
      </Link>
      <div className="flex gap-8 font-medium uppercase tracking-widest text-xs">
        <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-red-500 transition-colors">About</Link>
        <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
      </div>
    </nav>
  );
}