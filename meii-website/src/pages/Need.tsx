import { Link } from 'react-router-dom';
import {
  Users, BookOpen, Home as HomeIcon, AlertTriangle, TrendingDown,
  ArrowRight, Heart, Globe, Shield, Target, BarChart3, Flame
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import PageHero from '../components/PageHero';

const barriers = [
  {
    icon: Users,
    title: 'Overcrowded Classrooms',
    description: 'Classrooms are filled far beyond capacity, making individual attention and effective teaching nearly impossible. Teachers struggle to manage large groups without proper resources.',
    severity: 'Critical',
    severityColor: 'bg-red-100 text-red-700',
    iconBg: 'bg-red-600',
    stat: '80+',
    statLabel: 'Students per classroom on average',
  },
  {
    icon: Target,
    title: 'Untrained Teachers',
    description: 'Many dedicated teachers lack formal training in the Competency-Based Curriculum (CBC) adopted in Rwanda. They face significant challenges managing large, diverse classrooms without modern pedagogical skills.',
    severity: 'High',
    severityColor: 'bg-orange-100 text-orange-700',
    iconBg: 'bg-orange-500',
    stat: '60%',
    statLabel: 'Teachers lack structured professional training',
  },
  {
    icon: BookOpen,
    title: 'Resource Scarcity',
    description: 'A critical shortage of textbooks means learning is often a shared and passive activity. Students lack the basic materials needed for active, independent learning.',
    severity: 'Critical',
    severityColor: 'bg-red-100 text-red-700',
    iconBg: 'bg-yellow-600',
    stat: '1:5',
    statLabel: 'Textbook to student ratio in some classes',
  },
  {
    icon: HomeIcon,
    title: 'Poor Infrastructure',
    description: 'Inadequate lighting, lack of proper desks, and structural issues create a challenging and sometimes unsafe learning environment that reduces student motivation and performance.',
    severity: 'High',
    severityColor: 'bg-orange-100 text-orange-700',
    iconBg: 'bg-blue-600',
    stat: '40%',
    statLabel: 'Classrooms need urgent renovation',
  },
];

const rippleEffects = [
  { icon: TrendingDown, title: 'Low Student Engagement', description: 'Without materials and qualified teachers, students lose motivation and disengage from learning activities.' },
  { icon: AlertTriangle, title: 'High Dropout Rates', description: 'Poor learning conditions and limited progress lead to increased dropout rates, especially among girls.' },
  { icon: BarChart3, title: 'Diminished Outcomes', description: 'Students struggle to achieve basic literacy and numeracy, limiting their future opportunities.' },
  { icon: Flame, title: 'Lost Potential', description: 'A generation of talented young people loses the chance to contribute to rebuilding their communities.' },
];

const contextFacts = [
  { stat: '30,000+', label: 'Refugees in Mahama Camp', icon: Users, color: 'from-green-500 to-green-700' },
  { stat: '2015', label: 'Year Camp Was Established', icon: Globe, color: 'from-blue-500 to-blue-700' },
  { stat: '96%', label: 'Burundian Refugee Population', icon: Shield, color: 'from-purple-500 to-purple-700' },
  { stat: '#1', label: 'Largest Refugee Camp in Rwanda', icon: Target, color: 'from-orange-500 to-orange-700' },
];

export default function Need() {
  return (
    <div className="overflow-hidden">
      <PageHero
        badge={<><AlertTriangle className="h-4 w-4 text-accent-300" /> The Crisis</>}
        title={<>Education as a <span className="text-accent-300">Lifeline</span></>}
        description="For the tens of thousands of Burundian refugees in Mahama Camp, education is more than a subject. It is stability, dignity, and a pathway to a self-determined future."
        imageUrl="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
        imageAlt="Children learning together"
        tone="slate"
      >
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {contextFacts.map((fact, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${fact.color} shadow-md`}>
                <fact.icon className="h-5 w-5 text-white" />
              </div>
              <div className="font-heading text-2xl font-black text-white md:text-3xl">{fact.stat}</div>
              <div className="mt-1 text-xs text-slate-300">{fact.label}</div>
            </div>
          ))}
        </div>
      </PageHero>
      {false && <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80"
            alt="Children at school"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900" />
        </div>

        <div className="section-container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 text-red-300 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" /> The Crisis
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Education as a{' '}
            <span className="text-yellow-300">Lifeline</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            For the tens of thousands of Burundian refugees in Mahama Camp, education is more than
            a subject. It is stability, dignity, and a pathway to a self-determined future.
          </p>

          {/* Context stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {contextFacts.map((fact, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${fact.color} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <fact.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-white font-heading">{fact.stat}</div>
                <div className="text-gray-400 text-xs mt-1">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>}

      {/* THE REALITY */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-tag">
                <Globe className="w-4 h-4" /> The Reality in Mahama
              </span>
              <h2 className="section-title mb-6">
                Understanding the{' '}
                <span className="gradient-text">Depth of Need</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mahama Refugee Camp in Kirehe District, Rwanda, has been home to Burundian refugees
                since 2015. Following political unrest and violence in Burundi, tens of thousands fled,
                creating one of Rwanda's largest and most complex humanitarian challenges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                While the Government of Rwanda and UNHCR have established basic services, the education
                system remains severely under-resourced. Primary research conducted with teachers,
                students, and community leaders revealed critical, interconnected barriers that prevent
                quality education from reaching children.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                These are not isolated problems. Each barrier reinforces the others — an untrained teacher
                in an overcrowded classroom with no materials creates a cascade of educational failure
                that can define a child's entire future.
              </p>

              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-800 mb-3 font-heading">Based on Primary Research</h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  All findings presented here were gathered through direct field research in Mahama,
                  including surveys, interviews, and focus groups with teachers, students, school
                  administrators, and community leaders.
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=700&q=80"
                  alt="Students in Rwanda"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80"
                  alt="Children studying"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR BARRIERS */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag justify-center">
              <AlertTriangle className="w-4 h-4" /> Critical Barriers
            </span>
            <h2 className="section-title mb-4">
              Four Interconnected{' '}
              <span className="gradient-text">Challenges</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Research conducted directly with teachers and students revealed these critical barriers
              that prevent effective education in Mahama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {barriers.map((barrier, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 ${barrier.iconBg} rounded-2xl flex items-center justify-center shadow-md`}>
                      <barrier.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${barrier.severityColor}`}>
                      {barrier.severity}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{barrier.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{barrier.description}</p>

                  <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4">
                    <div className="text-3xl font-black text-gray-800 font-heading">{barrier.stat}</div>
                    <div className="text-gray-500 text-sm">{barrier.statLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RIPPLE EFFECT */}
      <section className="section-padding bg-gray-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag text-red-400">
                <TrendingDown className="w-4 h-4" /> The Ripple Effect
              </span>
              <h2 className="section-title text-white mb-6">
                When Education Falters, So Does{' '}
                <span className="text-yellow-300">Opportunity</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                These challenges don't exist in isolation. They create a cascade of consequences
                that ripple through every aspect of a young person's life and future. MEII was
                founded to break this cycle.
              </p>

              <div className="space-y-4">
                {rippleEffects.map((effect, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <div className="w-10 h-10 bg-red-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <effect.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{effect.title}</h4>
                      <p className="text-gray-400 text-sm">{effect.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-8 border border-primary-700">
                <h3 className="text-2xl font-bold text-white font-heading mb-6 text-center">
                  The Scale of Impact
                </h3>
                <div className="space-y-6">
                  {[
                    { label: 'Children in School-Age', value: 30000, color: 'from-green-400 to-green-600' },
                    { label: 'Teachers in the Camp', value: 400, color: 'from-orange-400 to-orange-600' },
                    { label: 'Students per Class (avg)', value: 80, color: 'from-red-400 to-red-600' },
                    { label: 'Schools in Mahama', value: 12, color: 'from-blue-400 to-blue-600' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                      <span className="text-green-200 text-sm">{item.label}</span>
                      <span className={`text-2xl font-black text-white font-heading`}>
                        <AnimatedCounter end={item.value} suffix="+" />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-primary-700 text-center">
                  <p className="text-green-300 text-sm mb-4">
                    These numbers represent real children whose futures depend on access to quality education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE ANSWER */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-tag justify-center">
              <Heart className="w-4 h-4" /> Breaking the Cycle
            </span>
            <h2 className="section-title mb-6">
              MEII Is the{' '}
              <span className="gradient-text">Answer</span>
            </h2>
            <p className="section-subtitle mx-auto mb-10">
              By investing in education today — training teachers, providing materials, and improving classrooms —
              we are building the foundation for a more resilient, empowered, and hopeful community tomorrow.
              We believe that by investing in education today, we are building the foundation for a
              more resilient community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Users, title: 'Train Teachers', desc: 'Building local capacity that outlasts any single funding cycle', color: 'bg-green-600' },
                { icon: BookOpen, title: 'Provide Materials', desc: 'Ensuring every student has the basic tools to succeed', color: 'bg-orange-500' },
                { icon: HomeIcon, title: 'Improve Spaces', desc: 'Creating environments where children feel safe to dream', color: 'bg-blue-600' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-heading mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/approach" className="btn-primary text-base px-8 py-4">
                See Our Solution <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/get-involved" className="btn-secondary text-base px-8 py-4">
                <Heart className="w-5 h-5 text-red-500" /> Support This Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
