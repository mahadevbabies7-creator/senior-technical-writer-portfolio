import { Section } from './Section';
import { Reveal } from './Reveal';
import { expertise } from '@/data/portfolio';

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Areas of Expertise"
      heading="What I Do Best"
      subheading="A focused skill set covering the full documentation lifecycle, from structured authoring to multimedia and Agile collaboration."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <article className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-teal-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-400 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
