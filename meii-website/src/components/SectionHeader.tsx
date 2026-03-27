import type { LucideIcon } from 'lucide-react';

type SectionHeaderProps = {
  icon: LucideIcon;
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  dark?: boolean;
};

export default function SectionHeader({
  icon: Icon,
  label,
  title,
  highlight,
  description,
  center = false,
  dark = false,
}: SectionHeaderProps) {
  const wrapper = center ? 'text-center' : '';
  const tagClass = dark ? 'section-tag text-primary-300' : 'section-tag';
  const titleClass = dark ? 'section-title text-white' : 'section-title';
  const descriptionClass = dark ? 'mx-auto max-w-3xl text-lg leading-relaxed text-slate-300' : 'section-subtitle';

  return (
    <div className={wrapper}>
      <span className={`${tagClass} ${center ? 'justify-center' : ''}`}>
        <Icon className="h-4 w-4" /> {label}
      </span>
      <h2 className={titleClass}>
        {title}{' '}
        {highlight ? <span className={dark ? 'text-accent-300' : 'gradient-text'}>{highlight}</span> : null}
      </h2>
      {description ? (
        <p className={`${descriptionClass} ${center ? 'mx-auto mt-4' : 'mt-4'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
