import { Link } from 'react-router-dom';
import { Users, BookOpen, Home as HomeIcon, Target, ArrowRight } from 'lucide-react';

const challengeItems = [
  { icon: Users, text: 'Overcrowded classrooms with students far beyond capacity', color: 'text-red-500 bg-red-50' },
  { icon: BookOpen, text: 'Severe shortage of textbooks — students share limited materials', color: 'text-orange-500 bg-orange-50' },
  { icon: Target, text: 'Teachers lack formal training in modern, competency-based methods', color: 'text-yellow-600 bg-yellow-50' },
  { icon: HomeIcon, text: 'Poor infrastructure with inadequate lighting and unsafe structures', color: 'text-blue-500 bg-blue-50' },
];

export default function ChallengeSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80"
                alt="Children in classroom"
                className="w-full h-80 md:h-[450px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-4 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-semibold text-gray-900 text-sm">SDG 4</span>
              </div>
              <p className="text-xs text-gray-600">Aligned with Quality Education goals for all</p>
            </div>
            {/* Accent blob */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="section-tag">
              <Target className="w-4 h-4" /> The Challenge
            </span>
            <h2 className="section-title mb-6">
              The Urgent Need for{' '}
              <span className="gradient-text">Quality Education</span>
            </h2>
            <p className="section-subtitle mb-8">
              In Mahama Refugee Camp, the largest in Rwanda, the promise of education is threatened.
              This isn't just about resources — it's about the future of a generation.
            </p>

            <div className="space-y-4">
              {challengeItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/need" className="btn-primary">
                Read the Full Context <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
