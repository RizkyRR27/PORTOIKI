'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import { Send, MapPin, CheckCircle, Smartphone, Globe, MessageSquare, Mail, X, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { name: 'WhatsApp', val: '08118032005', url: 'https://wa.me/628118032005', icon: Smartphone },
  { name: 'LinkedIn', val: 'Rizky Roza Rahim', url: 'https://www.linkedin.com/in/rizkyrozarahim270505', icon: Globe },
  { name: 'Instagram', val: '@rizkyroza.r_', url: 'https://instagram.com/rizkyroza.r_', icon: MessageSquare },
  { name: 'Email', val: 'rizkyroza2005@gmail.com', url: 'mailto:rizkyroza2005@gmail.com', icon: Mail },
];

const input = 'w-full border border-[#27272a] bg-[#111112] p-4 text-sm text-white placeholder:text-zinc-600 focus:border-[#D2FF00] focus:outline-none';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMsg('Semua kolom formulir harus diisi!');
      return;
    }
    if (!email.includes('@')) {
      setErrorMsg('Alamat email tidak valid!');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <main className="relative z-10 mx-auto max-w-[1600px] px-5 pb-20 pt-32 md:px-10">
      <header className="mb-12">
        <Reveal dir="fade"><p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[#D2FF00]">05 / Open channel</p></Reveal>
        <h1 className="display text-6xl md:text-8xl">
          <Reveal dir="mask" delay={80}><span className="block">Contact</span></Reveal>
          <Reveal dir="mask" delay={180}><span className="block text-[#D2FF00]">me.</span></Reveal>
        </h1>
        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
            Interested in collaborating, hiring, or just saying hello? Send a message below.
          </p>
        </Reveal>
      </header>

      <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-12">
        {/* Form */}
        <Reveal dir="right" distance={40} className="border border-[#27272a] bg-[#151517] p-6 md:p-8 lg:col-span-7">
          <div className="mb-6 flex items-center gap-2 border-b border-[#27272a] pb-4">
            <Send className="h-5 w-5 text-[#D2FF00]" />
            <h2 className="display text-2xl">Send message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {errorMsg && (
              <div role="alert" className="border border-[#D2FF00] bg-[#D2FF00]/10 p-3 mono text-xs uppercase tracking-wider text-[#D2FF00]">
                Error: {errorMsg}
              </div>
            )}

            <label className="block">
              <span className="sr-only">Full Name</span>
              <input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className={input} />
            </label>
            <label className="block">
              <span className="sr-only">Email Address</span>
              <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className={input} />
            </label>
            <label className="block">
              <span className="sr-only">Your Message</span>
              <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message..." className={input} />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D2FF00] py-4 text-sm font-bold text-black transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </Reveal>

        {/* Social + location */}
        <div className="flex flex-col gap-3 lg:col-span-5">
          {socialLinks.map(({ name: n, val, url, icon: Icon }, i) => (
            <Reveal key={n} dir="left" distance={40} delay={150 + i * 90}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-[#27272a] bg-[#151517] p-5 transition-colors hover:border-[#D2FF00]"
            >
              <Icon className="h-7 w-7 flex-shrink-0 text-zinc-400 transition-colors group-hover:text-[#D2FF00]" />
              <div className="min-w-0 flex-grow">
                <p className="mono mb-1 text-[10px] font-bold uppercase tracking-widest text-white">{n}</p>
                <p className="truncate text-xs text-zinc-500">{val}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D2FF00]" />
            </a>
            </Reveal>
          ))}

          <Reveal dir="left" distance={40} delay={150 + socialLinks.length * 90} className="border border-[#27272a] bg-[#151517] p-6">
            <h3 className="mono mb-3 text-[10px] uppercase tracking-widest text-[#D2FF00]">Current location</h3>
            <p className="flex items-center gap-2 text-sm text-zinc-300">
              <MapPin className="h-5 w-5 flex-shrink-0 text-[#D2FF00]" />
              <span>Politeknik Negeri Malang (Malang, Indonesia)</span>
            </p>
          </Reveal>
        </div>
      </div>

      {showSuccess && (
        <div role="dialog" aria-modal="true" aria-label="Notification" className="fixed inset-0 z-[100] flex animate-fadeInUp items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden border border-[#27272a] bg-[#111112]">
            <div className="flex items-center justify-between border-b border-[#27272a] bg-[#151517] px-4 py-3">
              <span className="mono text-[10px] font-bold uppercase tracking-widest">Notification</span>
              <button onClick={() => setShowSuccess(false)} className="cursor-pointer text-zinc-500 transition-colors hover:text-[#D2FF00]" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D2FF00]">
                <CheckCircle className="h-8 w-8 text-[#D2FF00]" />
              </div>
              <h3 className="display text-3xl">Message sent</h3>
              <p className="mb-8 text-sm leading-7 text-zinc-400">
                Thank you! Your message has been successfully transmitted. I will reply to your email as soon as possible.
              </p>
              <button onClick={() => setShowSuccess(false)} className="w-full cursor-pointer rounded-full bg-[#D2FF00] py-3 text-sm font-bold text-black transition-colors hover:bg-white">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16"><Breadcrumb /></div>
    </main>
  );
}
