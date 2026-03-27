import type { FC } from 'react';

type SdgGoal = {
  number: string;
  title: string;
  color: string;
};

interface VisionMissionSectionProps {
  sdgGoals: SdgGoal[];
}

const VisionMissionSection: FC<VisionMissionSectionProps> = (props) => {
  const { sdgGoals } = props;
  return (
    <section className="section-padding green-gradient relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="section-tag text-green-200">
              <span className="inline-block w-4 h-4 bg-green-400 rounded-full mr-2" /> Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-8">
              Our Promise to Mahama's Children
            </h2>
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-yellow-300 font-semibold text-lg mb-2 font-heading">Our Vision</h3>
                <p className="text-green-100 leading-relaxed text-sm">
                  To become a leading community-based initiative, recognized for transforming educational
                  quality in Mahama, empowering every refugee learner to achieve their full potential.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-yellow-300 font-semibold text-lg mb-2 font-heading">Our Mission</h3>
                <p className="text-green-100 leading-relaxed text-sm">
                  To improve education by strengthening teacher capacity, enhancing learning resources,
                  and creating safe, conducive learning spaces for all refugee learners in Mahama.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-white font-bold text-xl font-heading mb-6 text-center">
                SDG Alignment
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {sdgGoals.map((goal: SdgGoal) => (
                  <div key={goal.number} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <div className={`w-10 h-10 ${goal.color} rounded-lg flex items-center justify-center font-bold text-white text-sm flex-shrink-0`}>
                      {goal.number}
                    </div>
                    <span className="text-green-100 text-xs font-medium">{goal.title}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-green-200 text-sm mb-4">MEII is aligned with global education priorities</p>
                <a href="/approach" className="btn-primary bg-white text-primary-700 hover:bg-green-50 text-sm px-6 py-2.5">
                  See Our Strategic Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMissionSection;
