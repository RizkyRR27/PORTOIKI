'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { Send, MapPin, CheckCircle, Smartphone, Globe, MessageSquare, Mail, Terminal, X } from 'lucide-react';

export default function ContactPage() {
  const socialLinks = [
    { name: 'WhatsApp', val: '08118032005', url: 'https://wa.me/628118032005', icon: Smartphone },
    { name: 'LinkedIn', val: 'Rizky Roza Rahim', url: 'https://www.linkedin.com/in/rizkyrozarahim270505', icon: Globe },
    { name: 'Instagram', val: '@rizkyroza.r_', url: 'https://instagram.com/rizkyroza.r_', icon: MessageSquare },
    { name: 'Email', val: 'rizkyroza2005@gmail.com', url: 'mailto:rizkyroza2005@gmail.com', icon: Mail },
  ];

  // Contact Form State
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
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20 relative z-10 font-sans text-white bg-[#141414] min-h-screen">
      <header className="text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Contact <span className="text-[#E50914]">Me</span>
        </h1>
        <p className="text-lg text-gray-300 font-medium max-w-2xl">
          Interested in collaborating, hiring, or just saying hello? Send a message below.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Side: Contact Form (7 columns) */}
        <div className="lg:col-span-7 bg-[#181818] rounded-md p-6 md:p-8 shadow-xl text-white">
          <div className="border-b border-gray-700 pb-4 mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Send className="w-5 h-5 text-[#E50914]" /> Send Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && (
              <div className="bg-[#E50914] text-white p-3 rounded font-medium text-sm">
                Error: {errorMsg}
              </div>
            )}

            <div className="space-y-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-[#333333] border-none rounded p-4 text-sm font-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              />
            </div>

            <div className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-[#333333] border-none rounded p-4 text-sm font-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              />
            </div>

            <div className="space-y-2">
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message..."
                className="w-full bg-[#333333] border-none rounded p-4 text-sm font-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#E50914] text-white rounded font-bold text-lg flex items-center justify-center hover:bg-[#F40612] transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Right Side: Social links & Map (5 columns) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex flex-col gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-[#181818] hover:bg-[#333333] rounded-md flex items-center gap-4 transition-colors"
                >
                  <div className="text-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-bold text-white mb-1">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{item.val}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Lokasi card */}
          <div className="p-6 bg-[#181818] rounded-md text-white mt-8">
            <h3 className="text-lg font-bold mb-2">
              Current Location
            </h3>
            <p className="font-medium text-sm text-gray-300 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#E50914] flex-shrink-0" />
              <span>Politeknik Negeri Malang (Malang, Indonesia)</span>
            </p>
          </div>
        </div>

      </div>

      {/* Success Dialog Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeInUp">
          <div className="max-w-md w-full bg-[#181818] text-white rounded-md overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-[#333333] px-4 py-3 flex items-center justify-between">
              <span className="font-bold">Notification</span>
              <button
                onClick={() => setShowSuccess(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-transparent border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
              <p className="text-gray-300 mb-8">
                Thank you! Your message has been successfully transmitted. I will reply to your email as soon as possible.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 bg-white text-black rounded font-bold hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="mt-16 flex justify-center">
        <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-4">
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
}