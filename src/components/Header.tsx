import { useEffect, useState } from 'react';
import { Menu, X, Download, MapPin } from 'lucide-react';
import { navLinks, profile, resumeReady, resumeUrl } from '@/data/portfolio';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const sections = navLinks.map((l) => l.href.slice(1));
      const offset = window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActive(sections[i]);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-card border-b border-navy-100'
          : 'bg-white/0'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#home');
            }}
            className="flex items-center gap-2.5 group"
            aria-label={`${profile.name} — home`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-teal-400 font-bold text-sm transition-transform group-hover:scale-105">
              SM
            </span>
            <span
              className={`font-semibold text-base transition-colors ${
                scrolled ? 'text-navy-900' : 'text-navy-900'
              }`}
            >
              {profile.name}
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-x-1.5 xl:gap-x-2.5">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={`whitespace-nowrap px-2.5 xl:px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-teal-600'
                        : 'text-navy-700 hover:text-teal-600'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            {resumeReady ? (
              <a
                href={resumeUrl}
                download
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-navy-900 px-3.5 py-2 text-sm font-semibold text-white whitespace-nowrap transition-all hover:bg-navy-800 hover:shadow-card-hover"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span className="hidden md:inline">Download Resume</span>
                <span className="md:hidden">Resume</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-navy-900 px-3.5 py-2 text-sm font-semibold text-white whitespace-nowrap cursor-not-allowed opacity-60"
                aria-disabled="true"
                title="Resume coming soon"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span className="hidden md:inline">Resume — Coming Soon</span>
                <span className="md:hidden">Resume</span>
              </button>
            )}

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-navy-900 hover:bg-navy-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-b border-navy-100 shadow-card"
        >
          <div className="mx-auto max-w-6xl px-6 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                        isActive
                          ? 'bg-teal-50 text-teal-700'
                          : 'text-navy-800 hover:bg-navy-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-navy-100 pt-4">
              {resumeReady ? (
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white opacity-60 cursor-not-allowed"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume — Coming Soon
                </button>
              )}
              <p className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin className="h-4 w-4 text-teal-500" aria-hidden="true" />
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
