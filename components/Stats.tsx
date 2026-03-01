'use client';

import { useEffect, useState } from 'react';

export default function Stats() {
  const [counters, setCounters] = useState([
    { label: 'Projects Completed', value: 0, target: 4, suffix: '+' },
    { label: 'Internship Experience', value: 0, target: 2, suffix: '+' },
    { label: 'Skills Mastered', value: 0, target: 13, suffix: '+' },
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
    <section className="py-20 px-10 bg-pink-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {counters.map((stat, index) => (
          <div 
            key={stat.label}
            className="p-8 rounded-2xl bg-white shadow-lg border border-blue-200 hover:border-pink-300 transition-all duration-500 group animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="text-center">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
