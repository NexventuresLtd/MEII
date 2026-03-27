import { CheckCircle } from 'lucide-react';
import type { FC } from 'react';

type Pillar = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  features: string[];
  image: string;
};

interface PillarsSectionProps {
  pillars: Pillar[];
}

const PillarsSection: FC<PillarsSectionProps> = (props) => {
  const { pillars } = props;
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-tag justify-center">
            <CheckCircle className="w-4 h-4 text-green-500" /> Our Solution
          </span>
          <h2 className="section-title mb-4">
            Three Pillars,{' '}
            <span className="gradient-text">One Integrated Solution</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Unlike fragmented programs, MEII provides a comprehensive and coordinated system
            that tackles the root causes of educational disparity simultaneously.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar: Pillar, i: number) => (
            <div key={i} className={`pillar-card border-2 ${pillar.color}`}>
              <div className="h-44 rounded-xl overflow-hidden mb-6 -mx-2">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${pillar.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-5xl font-black text-gray-100 font-heading">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.features.map((feature: string, fi: number) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/approach" className="btn-primary">
            Explore Our Full Approach <CheckCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;
