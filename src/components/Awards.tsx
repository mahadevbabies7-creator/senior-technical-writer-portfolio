import { Section } from './Section';
import { Reveal } from './Reveal';
import { awards } from '@/data/portfolio';

export function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="Recognition"
      heading="Awards & Recognition"
      subheading="Professional acknowledgements for teamwork, performance, and writing."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 80}>
            <article className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <a.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy-900">{a.title}</h3>
              <p className="mt-1 text-sm font-medium text-teal-600">{a.context}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
