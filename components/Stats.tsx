const stats = [
  ['Projects completed', '05+'],
  ['Internship experience', '02'],
  ['Skills mastered', '14+'],
  ['Test passes', '98%'],
];

export default function Stats() {
  const items = [...stats, ...stats];
  return (
    <section aria-label="Portfolio metrics" className="marquee overflow-hidden border-b border-black bg-[#D2FF00] text-black">
      <div className="animate-marquee flex w-max whitespace-nowrap py-3">
        {items.map(([label, value], index) => (
          <div key={`${label}-${index}`} className="flex items-center gap-5 px-6 md:px-10">
            <span className="mono text-[10px] font-bold uppercase tracking-[0.18em]">{label}</span>
            <strong className="display text-3xl tracking-tight">{value}</strong>
            {/* <span className="text-xl" aria-hidden>✳</span> */}
          </div>
        ))}
      </div>
    </section>
  );
}
