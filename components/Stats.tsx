'use client';

import { useEffect, useState } from 'react';

export default function Stats() {
  const [counters, setCounters] = useState([
    { label: 'Projects Completed', value: 0, target: 4, suffix: '+' },
    { label: 'Internship Experience', value: 0, target: 2, suffix: '+' },
    { label: 'Skills Mastered', value: 0, target: 17, suffix: '+' },
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
    <section className="py-20 px-10 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {counters.map((stat, index) => (
          <div 
            key={stat.label}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-900/20 hover:to-white/5 group animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="text-center">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent mb-2">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <p className="text-slate-400 group-hover:text-white transition-colors">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
