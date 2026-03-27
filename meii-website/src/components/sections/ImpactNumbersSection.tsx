import AnimatedCounter from '../AnimatedCounter';

import type { FC } from 'react';

type Impact = {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix?: string;
  color: string;
  bg: string;
};

interface ImpactNumbersSectionProps {
  impacts: Impact[];
}

const ImpactNumbersSection: FC<ImpactNumbersSectionProps> = (props) => {
  const { impacts } = props;
  return (
    <section className="section-padding bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-tag text-primary-400 justify-center">
            <span className="inline-block w-4 h-4 bg-primary-400 rounded-full mr-2" /> Year 1 Targets
          </span>
          <h2 className="section-title text-white mb-4">
            Creating Tangible Change
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            MEII is not just a plan; it's a movement. In our first year, we're committed to measurable impact.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impacts.map((impact: Impact, i: number) => (
            <div key={i} className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700 hover:border-primary-600 transition-colors group">
              <div className={`w-14 h-14 ${impact.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <impact.icon className={`w-7 h-7 ${impact.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-black font-heading mb-1 ${impact.color}`}>
                <AnimatedCounter end={impact.value} suffix={impact.suffix} />
              </div>
              <p className="text-gray-400 text-sm">{impact.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 text-center border border-primary-700">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">
            Initial Investment: <span className="text-yellow-300">$35,000</span>
          </h3>
          <p className="text-green-200 mb-8 max-w-2xl mx-auto">
            Our Year 1 budget covers teacher training, learning materials, classroom renovation,
            and operational costs. Every dollar is a direct investment in a child's future.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Teacher Training', amount: '$10,000', pct: '29%' },
              { label: 'Learning Materials', amount: '$12,000', pct: '34%' },
              { label: 'Classroom Renovation', amount: '$8,000', pct: '23%' },
              { label: 'Operations & M&E', amount: '$5,000', pct: '14%' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-4">
                <div className="text-xl font-bold text-white font-heading">{item.amount}</div>
                <div className="text-green-300 text-xs font-medium">{item.pct}</div>
                <div className="text-green-200 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <a href="/get-involved" className="btn-accent">
            <span className="inline-block w-4 h-4 bg-red-400 rounded-full mr-2 align-middle" /> Support This Mission
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImpactNumbersSection;
