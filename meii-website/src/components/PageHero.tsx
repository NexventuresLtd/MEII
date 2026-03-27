import type { ReactNode } from 'react';

type PageHeroProps = {
  badge?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  imageUrl: string;
  imageAlt: string;
  actions?: ReactNode;
  children?: ReactNode;
  fullHeight?: boolean;
  tone?: 'forest' | 'slate';
};

const toneClasses = {
  forest: 'from-primary-950/90 via-primary-900/80 to-primary-900/90',
  slate: 'from-slate-950/90 via-slate-900/82 to-primary-950/92',
};

export default function PageHero({
  badge,
  title,
  description,
  imageUrl,
  imageAlt,
  actions,
  children,
  fullHeight = false,
  tone = 'forest',
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${fullHeight ? 'min-h-screen flex items-center' : 'pt-24 pb-16 md:pt-32 md:pb-24'}`}
    >
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${toneClasses[tone]}`} />
      </div>

      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute top-16 right-8 h-48 w-48 rounded-full bg-white/10 blur-3xl md:h-72 md:w-72" />
      <div className="absolute bottom-10 left-8 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl md:h-60 md:w-60" />

      <div className={`section-container relative z-10 ${fullHeight ? 'pt-24 pb-16 md:pt-28 md:pb-20' : ''}`}>
        <div className="mx-auto max-w-4xl text-center">
          {badge ? (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
              {badge}
            </div>
          ) : null}

          <h1 className="text-balance font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-50 md:text-xl">
            {description}
          </p>

          {actions ? (
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              {actions}
            </div>
          ) : null}

          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
