import { Section } from './Section';
import { Reveal } from './Reveal';
import { tools } from '@/data/portfolio';

export function Tools() {
  return (
    <Section
      id="tools"
      eyebrow="Tools & Technologies"
      heading="My Toolkit"
      subheading="The authoring, collaboration, visual, and methodology tools I use to plan, produce, and publish technical content."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((group, i) => (
          <Reveal key={group.category} delay={i * 70}>
            <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:shadow-card-hover">
              <h3 className="text-base font-semibold text-navy-900 border-b border-navy-100 pb-3 mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-md bg-navy-50 px-3 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
