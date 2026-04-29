'use client';

import { useEffect, useState } from 'react';

export default function Stats() {
  const [counters, setCounters] = useState([
    { label: 'Projects Completed', value: 0, target: 4, suffix: '+', bg: 'bg-[#00f0ff]' },
    { label: 'Internship Experience', value: 0, target: 2, suffix: '+', bg: 'bg-[#ff3c88]' },
    { label: 'Skills Mastered', value: 0, target: 13, suffix: '+', bg: 'bg-[#ffe600]' },
  ]);

  useEffect(() => {
    const intervals = counters.map((counter, idx) => {
      const increment = counter.target / 30;
      return setInterval(() => {
        setCounters(prev => {
          const updated = [...prev];
          if (updated[idx].value < updated[idx].target) {
            updated[idx].value += increment;
          }
          return updated;
        });
      }, 50);
    });

    return () => intervals.forEach(i => clearInterval(i));
  }, []);

  return (
    <section className="py-20 px-10 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {counters.map((stat, index) => (
          <div 
            key={stat.label}
            className={`brutal-card p-8 text-center group animate-fadeInUp ${stat.bg} ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={`text-6xl font-black mb-4 ${stat.bg === 'bg-[#ff3c88]' ? 'text-white' : 'text-black'} group-hover:scale-110 transition-transform duration-200`}>
              {Math.floor(stat.value)}{stat.suffix}
            </div>
            <p className={`font-bold uppercase tracking-widest border-t-4 border-black pt-4 ${stat.bg === 'bg-[#ff3c88]' ? 'text-white' : 'text-black'}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
