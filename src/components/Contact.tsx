import { Section } from './Section';
import { contact, contactIcons } from '@/data/portfolio';

export function Contact() {
  const { MapPin, Mail, Linkedin } = contactIcons;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      heading={contact.heading}
      subheading={contact.supporting}
    >
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Location
          </h3>
          <p className="mt-1 text-navy-900 font-medium">{contact.location}</p>
        </div>

        <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Email
          </h3>
          {contact.email ? (
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 inline-block text-navy-900 font-medium hover:text-teal-600 break-all"
            >
              {contact.email}
            </a>
          ) : (
            <p className="mt-1 text-sm text-gray-500">Available on request</p>
          )}
        </div>

        <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
            LinkedIn
          </h3>
          {contact.linkedin ? (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-navy-900 font-medium hover:text-teal-600 break-all"
            >
              View LinkedIn profile
            </a>
          ) : (
            <p className="mt-1 text-sm text-gray-500">Available on request</p>
          )}
        </div>
      </div>
    </Section>
  );
}
