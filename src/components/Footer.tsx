import { navLinks, profile, contact } from '@/data/portfolio';
import { Linkedin, Mail, MapPin } from 'lucide-react';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1.8fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-teal-400 font-bold text-sm">
                SM
              </span>
              <span className="font-semibold text-navy-900">{profile.name}</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">{profile.role}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-teal-500" aria-hidden="true" />
              {contact.location}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={contact.email ? `mailto:${contact.email}` : '#contact'}
                onClick={(e) => {
                  if (!contact.email) {
                    e.preventDefault();
                    scrollTo('#contact');
                  }
                }}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-navy-100 text-navy-700 hover:text-teal-600 hover:border-teal-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              {contact.linkedin ? (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-navy-100 text-navy-700 hover:text-teal-600 hover:border-teal-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : (
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-navy-100 text-gray-300 cursor-not-allowed"
                  aria-label="LinkedIn — available on request"
                  title="LinkedIn — available on request"
                >
                  <Linkedin className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-navy-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">Senior Technical Writer · Pune, India</p>
        </div>
      </div>
    </footer>
  );
}
