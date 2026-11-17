import { Section } from './Section';
import { Reveal } from './Reveal';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      heading="Academic Background"
      subheading="Formal qualifications supporting analytical and technical communication work."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 80}>
            <article className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:shadow-card-hover">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-400">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                  {item.year}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">{item.degree}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.institution}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
