'use client';

import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumbs: BreadcrumbItem[];
};

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: PageHeroProps) {
  const lastIndex = Math.max(0, breadcrumbs.length - 1);

  return (
    <div
      className="relative h-[475px] flex items-end justify-around bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white mb-24">
        <h1 className="text-3xl md:text-5xl mb-4 tracking-wider">{title}</h1>
        <p className="text-base md:text-base tracking-widest text-gray-100">
          {subtitle}
        </p>

        <nav
          className="mt-32 flex justify-center gap-2 text-sm tracking-wider"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((item, idx) => {
            const isLast = idx === lastIndex;
            const content =
              item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              );

            return (
              <span key={`${item.label}-${idx}`} className="inline-flex gap-2">
                {content}
                {!isLast ? <span aria-hidden="true">•</span> : null}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

