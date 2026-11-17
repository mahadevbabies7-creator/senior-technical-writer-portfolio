import { Section } from './Section';
import { Reveal } from './Reveal';
import { certifications } from '@/data/portfolio';

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      heading="Certifications & Professional Learning"
      subheading="Formal certifications and continuing-education courses that keep my practice current."
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <li className="flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:shadow-card-hover">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <c.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-navy-900">{c.title}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                      c.type === 'certification'
                        ? 'bg-teal-50 text-teal-700'
                        : 'bg-navy-50 text-navy-600'
                    }`}
                  >
                    {c.type === 'certification' ? 'Certification' : 'Course'}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{c.issuer}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
