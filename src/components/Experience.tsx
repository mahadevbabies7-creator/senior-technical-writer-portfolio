
import { Section } from './Section';
import { Reveal } from './Reveal';
import { experience } from '@/data/portfolio';
import { Briefcase } from 'lucide-react';
import { useState } from 'react';

function monogram(name: string) {
  const clean = name.replace(/\(.*\)/, '').trim();
  const words = clean.split(/\s+/).filter(Boolean);
  const letters = words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '');

  return letters.join('') || '•';
}

function CompanyLogo({
  company,
  logo,
}: {
  company: string;
  logo?: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <span
      className="flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm"
    >
      {logo && !imageError ? (
        <img
          src={logo}
          alt={`${company} logo`}
          className="h-full w-full object-contain p-1"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <span
          className="flex h-full w-full items-center justify-center bg-navy-900 text-sm font-bold text-teal-400"
          aria-label={company}
        >
          {monogram(company)}
        </span>
      )}
    </span>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      heading="Professional Experience"
      subheading="A decade of developing documentation across software, hardware, and cross-functional Agile teams."
    >
      <ol className="relative ml-2 space-y-10 border-l-2 border-navy-100 sm:ml-3">
        {experience.map((job, i) => (
          <Reveal
            key={`${job.company}-${job.period}`}
            delay={i * 60}
          >
            <li className="relative pl-8 sm:pl-10">
              {/* Timeline dot */}
              <span className="absolute -left-[10px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-teal-500 bg-white">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
              </span>

              {/* Experience card */}
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:shadow-card-hover">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  {/* Company logo and details */}
                  <div className="flex items-start gap-4">
                    <CompanyLogo
                      company={job.company}
                      logo={job.logo}
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-navy-900">
                        {job.company}
                      </h3>

                      <p className="text-sm font-medium text-teal-600">
                        {job.title}
                      </p>
                    </div>
                  </div>

                  {/* Employment period */}
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700">
                    <Briefcase
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                    {job.period}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="mt-4 space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 text-sm leading-relaxed text-gray-600"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-500"
                        aria-hidden="true"
                      />

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
