import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type SectionProps = {
  id: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, heading, subheading, children, className = '' }: SectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-20 sm:py-28 scroll-mt-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600 mb-3">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight"
          >
            {heading}
          </h2>
          {subheading && <p className="mt-4 text-lg text-gray-600 max-w-2xl">{subheading}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
