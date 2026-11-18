
import { Section } from './Section';
import { Reveal } from './Reveal';
import { CaseStudyModal, useCaseStudyModal } from './CaseStudyModal';
import { portfolio } from '@/data/portfolio';
import { ArrowUpRight, Clock, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

export function Portfolio() {
  const { active, open, close } = useCaseStudyModal();

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close]);

  return (
    <Section
      id="portfolio"
      eyebrow="Selected Work"
      heading="Portfolio"
      subheading="The following section highlights a selection of online help documentation and associated products I have contributed to throughout my professional career, showcasing my experience in developing clear, structured, and user-focused technical content."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item, i) => {
          const sampleUrl = item.sampleUrl?.trim();

          return (
            <Reveal key={item.type} delay={i * 70}>
              <div className="group flex h-full w-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-teal-200">

                {/* Icon and case study button */}
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-400 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                    <item.icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </span>

               
                </div>

                {/* Portfolio title */}
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {item.type}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                {/* Tags */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Portfolio actions */}
                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-navy-100 pt-4">

                  {sampleUrl ? (
                    <a
                      href={sampleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                      aria-label={`View live sample for ${item.type}`}
                    >
                      <ExternalLink
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      View Live Sample
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400">
                      <Clock
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                      Sample Coming Soon
                    </span>
                  )}

                 

                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {active && (
        <CaseStudyModal
          item={active}
          onClose={close}
        />
      )}
    </Section>
  );
}
