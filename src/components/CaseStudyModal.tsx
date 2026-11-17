import { useState } from 'react';
import { X, Clock } from 'lucide-react';
import type { PortfolioItem } from '@/data/portfolio';

const fieldLabels: { key: keyof PortfolioItem['caseStudy']; label: string }[] = [
  { key: 'overview', label: 'Project Overview' },
  { key: 'audience', label: 'Intended Audience' },
  { key: 'challenge', label: 'Documentation Challenge' },
  { key: 'responsibilities', label: 'My Responsibilities' },
  { key: 'tools', label: 'Tools and Workflow' },
  { key: 'approach', label: 'Documentation Approach' },
  { key: 'sample', label: 'Sample Artifact' },
  { key: 'outcome', label: 'Verified Outcome' },
];

export function CaseStudyModal({
  item,
  onClose,
}: {
  item: PortfolioItem;
  onClose: () => void;
}) {
  const hasContent = Object.values(item.caseStudy).some((v) => v.trim().length > 0);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
    >
      <button
        type="button"
        aria-label="Close case study"
        className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-card-hover p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-teal-400">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 id="case-title" className="text-xl font-semibold text-navy-900">
                {item.type}
              </h3>
              <p className="text-sm text-gray-500">Case study</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-2 text-gray-400 hover:bg-navy-50 hover:text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 text-gray-600 leading-relaxed">{item.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-navy-100 pt-6">
          {hasContent ? (
            <dl className="space-y-5">
              {fieldLabels.map(({ key, label }) => {
                const value = item.caseStudy[key];
                if (!value.trim()) return null;
                return (
                  <div key={key}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-700 leading-relaxed">{value}</dd>
                  </div>
                );
              })}
            </dl>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl bg-navy-50 px-6 py-10 text-center">
              <Clock className="h-8 w-8 text-teal-500" aria-hidden="true" />
              <p className="mt-3 font-semibold text-navy-900">Case study coming soon</p>
              <p className="mt-1 text-sm text-gray-500 max-w-sm">
                Detailed project information will be displayed here once approved content is provided.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function useCaseStudyModal() {
  const [active, setActive] = useState<PortfolioItem | null>(null);

  return {
    active,
    open: (item: PortfolioItem) => setActive(item),
    close: () => setActive(null),
  };
}
