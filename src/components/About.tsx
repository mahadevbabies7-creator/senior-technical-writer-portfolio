import { Section } from './Section';
import { about } from '@/data/portfolio';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <Section id="about" eyebrow="About Me" heading={about.heading}>
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <aside
          aria-labelledby="about-summary"
          className="rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-6 sm:p-8 shadow-card"
        >
          <h3
            id="about-summary"
            className="text-lg font-semibold text-navy-900 mb-5"
          >
            Expertise Summary
          </h3>
          <ul className="space-y-4">
            {about.summary.map((item) => (
              <li key={item.label} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-none text-teal-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-sm text-navy-800 font-medium">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
