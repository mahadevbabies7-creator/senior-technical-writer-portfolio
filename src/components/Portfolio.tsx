import { Section } from './Section';
import { Reveal } from './Reveal';
import { CaseStudyModal, useCaseStudyModal } from './CaseStudyModal';
import { portfolio } from '@/data/portfolio';
import { ArrowUpRight, Clock } from 'lucide-react';
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
      subheading="A starter gallery of documentation types I produce. Each card opens to a reusable case-study view — detailed content will appear once approved samples are provided."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item, i) => (
          <Reveal key={item.type} delay={i * 70}>
            <button
              type="button"
              onClick={() => open(item)}
              className="group flex h-full w-full flex-col text-left rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label={`Open case study for ${item.type}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-400 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-gray-300 transition-colors group-hover:text-teal-500"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-navy-900">{item.type}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Sample Coming Soon
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active && <CaseStudyModal item={active} onClose={close} />}
    </Section>
  );
}
