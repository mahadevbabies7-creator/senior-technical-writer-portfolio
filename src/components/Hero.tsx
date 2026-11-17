import { ArrowRight, Mail, Download, MapPin, FileText } from 'lucide-react';
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
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.35]">
        <div className="absolute top-16 -right-24 h-72 w-72 rounded-full bg-teal-100 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-navy-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center`}
        >
          {/* Left column */}
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              {profile.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-900 leading-[1.15] tracking-tight max-w-xl">
              {profile.headline}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-teal-700 font-medium leading-relaxed max-w-xl">
              {profile.tagline}
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              {profile.introduction}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {profile.expertise.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-navy-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-navy-700"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-teal-500" aria-hidden="true" />
              {profile.location}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo('#portfolio')}
                className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-card-hover"
              >
                View My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 transition-all hover:border-teal-400 hover:text-teal-600"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in Touch
              </button>
              {resumeReady ? (
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 transition-all hover:border-teal-400 hover:text-teal-600"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 opacity-50 cursor-not-allowed"
                  aria-disabled="true"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume — Coming Soon
                </button>
              )}
            </div>
          </div>

          {/* Right column — refined avatar placeholder */}
          <div className="flex flex-col items-center lg:items-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[2rem] border border-navy-100 -z-10" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-teal-100 -z-10" />

              <div className="relative flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-navy-800 to-navy-900 shadow-card-hover overflow-hidden">
                {/* subtle texture */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-teal-400 blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-teal-500 blur-2xl" />
                </div>

                <div className="relative flex flex-col items-center gap-3">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                    <FileText className="h-8 w-8 text-teal-300" aria-hidden="true" />
                  </span>
                  <span className="text-4xl sm:text-5xl font-bold text-teal-400 tracking-wide">SM</span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-navy-200">
                    Technical Writer
                  </span>
                </div>
              </div>

              {/* Experience badge */}
              <span className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-teal-700 shadow-card border border-teal-100">
                <span className="h-2 w-2 rounded-full bg-teal-500" aria-hidden="true" />
                10+ Years
              </span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {profile.highlights.map((h, i) => (
            <li
              key={h.title}
              className="reveal rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <h.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-semibold text-navy-900 text-sm sm:text-base">{h.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
