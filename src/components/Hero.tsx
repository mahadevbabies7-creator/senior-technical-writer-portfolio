
import { ArrowRight, Mail, Download, MapPin } from 'lucide-react';
import { profile, resumeReady, resumeUrl } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-12"
      aria-label="Introduction"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 opacity-[0.35]">
        <div className="absolute top-16 -right-24 h-72 w-72 rounded-full bg-teal-100 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-navy-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${
            visible ? 'is-visible' : ''
          } grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center`}
        >
          {/* Left column */}
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              {profile.eyebrow}
            </p>

            <h1 className="mt-3 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
              {profile.headline}
            </h1>

            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-teal-700 sm:text-lg">
              {profile.tagline}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              {profile.introduction}
            </p>

            {/* Expertise tags */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {profile.expertise.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-navy-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-700 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Location */}
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500">
              <MapPin
                className="h-4 w-4 text-teal-500"
                aria-hidden="true"
              />
              {profile.location}
            </p>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo('#portfolio')}
                className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-card-hover"
              >
                View My Work
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 transition-all hover:border-teal-400 hover:text-teal-600"
              >
                <Mail
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Get in Touch
              </button>

              {resumeReady ? (
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 transition-all hover:border-teal-400 hover:text-teal-600"
                >
                  <Download
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Download Resume
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 opacity-50"
                >
                  <Download
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Resume — Coming Soon
                </button>
              )}
            </div>
          </div>

          {/* Right column — larger portrait photograph */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">

              {/* Decorative rings */}
              <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-navy-100" />
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] border border-teal-100" />

              {/* Enlarged portrait photograph */}
              <div className="relative h-80 w-64 overflow-hidden rounded-[1.75rem] border-4 border-white bg-navy-900 shadow-card-hover sm:h-96 sm:w-72 lg:h-[400px] lg:w-[320px]">
                <img
                  src="/profile-photo.png"
                  alt="Suntul Mahadik — Senior Technical Writer"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Experience badge */}
              <span className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-full border border-teal-100 bg-white px-4 py-2.5 text-xs font-semibold text-teal-700 shadow-card">
                <span
                  className="h-2 w-2 rounded-full bg-teal-500"
                  aria-hidden="true"
                />
                10+ Years
              </span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {profile.highlights.map((h, i) => (
            <li
              key={h.title}
              className="reveal rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <h.icon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>

                <p className="text-sm font-semibold text-navy-900 sm:text-base">
                  {h.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
