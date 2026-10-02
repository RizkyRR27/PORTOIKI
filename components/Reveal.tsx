'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

type Props = {
  as?: ElementType;
  /** mask: konten naik dari balik garis (untuk headline, anak harus satu elemen block) */
  dir?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'mask';
  /** ms */
  delay?: number;
  /** ms */
  duration?: number;
  /** px */
  distance?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  children: ReactNode;
};

export default function Reveal({
  as: Tag = 'div',
  dir = 'up',
  delay = 0,
  duration = 700,
  distance = 32,
  once = true,
  threshold = 0.15,
  className = '',
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = '';
          if (once) io.disconnect();
        } else if (!once) {
          delete el.dataset.in;
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const style = {
    '--rv-delay': `${delay}ms`,
    '--rv-dur': `${duration}ms`,
    '--rv-dist': `${distance}px`,
  } as CSSProperties;

  return (
    <Tag ref={ref} data-dir={dir} style={style} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
