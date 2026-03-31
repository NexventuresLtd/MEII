import { Link } from 'react-router-dom';
import {
  Users, BookOpen, Home as HomeIcon, CheckCircle, ArrowRight,
  Target, Lightbulb, Shield, TrendingUp, Layers, Heart, Star
} from 'lucide-react';
import PageHero from '../components/PageHero';

const pillars = [
  {
    number: '01',
    icon: Users,
    title: 'Teacher Capacity Development',
    problem: 'Teachers in Mahama often manage large classes without formal training in modern, competency-based curriculums, limiting effective instruction.',
    solution: 'We provide structured professional development programs, ongoing mentorship, and peer-learning sessions focused on classroom management, inclusive education, and learner-centered teaching.',
    iconBg: 'bg-green-600',
    accentColor: 'text-green-600',
    borderColor: 'border-green-500',
    bgColor: 'bg-green-50',
    features: [
      'Competency-based teaching methods',
      'Classroom management strategies',
      'Inclusive and differentiated instruction',
      'Continuous mentorship and peer learning',
    ],
    image: 'https://www.unicef.org/rwanda/sites/unicef.org.rwanda/files/styles/media_large_image/public/UN0302620.jpg.webp?itok=Ra30cE75',
    stat: { value: '200+', label: 'Teachers to Train in Year 1' },
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Provision of Learning Materials',
    problem: 'Students frequently share outdated textbooks or lack basic supplies like notebooks, severely hindering their ability to learn independently.',
    solution: 'We procure and distribute essential materials including core subject textbooks, notebooks, writing tools, and science kits. Every student gets the resources for effective learning.',
    iconBg: 'bg-orange-500',
    accentColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50',
    features: [
      'Core subject textbooks',
      'Notebooks and writing materials',
      'Mathematics tools and science kits',
      'Visual learning aids and teaching resources',
    ],
    image: 'https://www.wvi.org/sites/default/files/styles/medium_landscape/public/2025-04/8Q5A3111.jpg?itok=tmQHRReU',
    stat: { value: '5,000+', label: 'Students to Equip in Year 1' },
  },
  {
    number: '03',
    icon: HomeIcon,
    title: 'Classroom Infrastructure Improvement',
    problem: 'Overcrowded, poorly lit, and structurally unsound classrooms create an environment that is unsafe and not conducive to learning.',
    solution: 'We renovate and equip learning spaces, installing proper desks, blackboards, improved lighting, and ventilation. We transform dilapidated rooms into safe, welcoming, and child-friendly environments.',
    iconBg: 'bg-blue-600',
    accentColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50',
    features: [
      'Installation of desks and blackboards',
      'Improved lighting and ventilation',
      'Repair of floors, walls, and windows',
      'Creation of child-friendly learning spaces',
    ],
    image: 'https://agaciropress.com/wp-content/uploads/2026/02/image-118.png',
    stat: { value: '10+', label: 'Classrooms to Renovate in 18 Months' },
  },
];

const differentiators = [
  {
    icon: Layers,
    title: 'Integrated Model',
    description: 'We address teacher skills, learning materials, and the physical environment simultaneously, creating a multiplier effect on impact.',
    color: 'bg-green-600',
  },
  {
    icon: Shield,
    title: 'Community Owned',
    description: 'Deep partnerships with schools, local leaders, and government ensure our work is community-owned and built to last.',
    color: 'bg-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Evidence-Based',
    description: 'Every intervention is grounded in primary research conducted directly with teachers, students, and stakeholders in Mahama.',
    color: 'bg-purple-600',
  },
  {
    icon: Target,
    title: 'Measurable Impact',
    description: 'Our robust M&E system tracks outcomes every three months, ensuring transparency, accountability, and continuous improvement.',
    color: 'bg-orange-600',
  },
  {
    icon: Lightbulb,
    title: 'Low-Cost, High-Impact',
    description: 'Efficient use of resources through local procurement and community engagement maximizes the impact of every dollar invested.',
    color: 'bg-yellow-600',
  },
  {
    icon: Heart,
    title: 'Sustainable by Design',
    description: 'Diversified funding, community ownership, and scalable models ensure MEII creates lasting change beyond initial funding periods.',
    color: 'bg-red-600',
  },
];

const timeline = [
  { phase: 'Phase 1', time: 'Months 1–6', title: 'Establishment & Partnerships', tasks: ['Register MEII officially', 'Form partnerships with 5+ stakeholders', 'Conduct baseline needs assessment', 'Set up M&E systems'] },
  { phase: 'Phase 2', time: 'Months 6–12', title: 'Full Implementation', tasks: ['Launch teacher training programs', 'Distribute learning materials to 5,000 students', 'Begin classroom renovations', 'Quarterly M&E reviews'] },
  { phase: 'Phase 3', time: 'Year 2', title: 'Expansion & Scaling', tasks: ['Train additional 200+ teachers', 'Scale material distribution', 'Complete all 10 classroom renovations', 'Evaluate and refine programs'] },
  { phase: 'Phase 4', time: 'Year 3', title: 'Sustainability', tasks: ['Establish local capacity for continuity', 'Diversify funding sources', 'Document and share impact', 'Replicate successful models'] },
];

export default function Approach() {
  return (
    <div className="overflow-hidden">
      <PageHero
        badge={<><Star className="h-4 w-4 text-accent-300" /> Our Methodology</>}
        title={<>A Comprehensive Plan for a <span className="text-accent-300">Brighter Future</span></>}
        description="We address the interconnected challenges of education in Mahama through an integrated, sustainable model that puts students and teachers first."
        imageUrl="/students mahama (2).jpeg"
        imageAlt="Teacher supporting students"
      />
      {false && <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 green-gradient overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-400/10 rounded-full blur-2xl" />

        <div className="section-container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-300" /> Our Methodology
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            A Comprehensive Plan for a{' '}
            <span className="text-yellow-300">Brighter Future</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            We address the interconnected challenges of education in Mahama through an integrated,
            sustainable model that puts students and teachers first.
          </p>
        </div>
      </section>}

      {/* THREE PILLARS IN DETAIL */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="section-tag justify-center">
              <Layers className="w-4 h-4" /> The Three Pillars
            </span>
            <h2 className="section-title mb-4">
              Deep Dive into Our{' '}
              <span className="gradient-text">Core Programs</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Each pillar tackles a specific barrier to quality education. Together, they form a
              complete ecosystem for learning.
            </p>
          </div>

          <div className="space-y-20">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image side */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="text-3xl font-black font-heading text-primary-600">{pillar.stat.value}</div>
                        <div className="text-gray-600 text-sm">{pillar.stat.label}</div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -z-10 w-40 h-40 ${pillar.bgColor} rounded-full blur-2xl opacity-60 mt-4 ml-4`} />
                </div>

                {/* Content side */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${pillar.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-6xl font-black text-gray-100 font-heading">{pillar.number}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-6">
                    {pillar.title}
                  </h3>

                  <div className={`${pillar.bgColor} rounded-2xl p-5 mb-6 border-l-4 ${pillar.borderColor}`}>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">The Problem</p>
                    <p className="text-gray-700 leading-relaxed">{pillar.problem}</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Our Solution</p>
                    <p className="text-gray-700 leading-relaxed">{pillar.solution}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Activities</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pillar.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 ${pillar.accentColor} flex-shrink-0 mt-0.5`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR MODEL WORKS */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag justify-center">
              <Lightbulb className="w-4 h-4" /> The MEII Difference
            </span>
            <h2 className="section-title mb-4">
              Why Our Model{' '}
              <span className="gradient-text">Works</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Our strength lies in integration and sustainability. By addressing all dimensions
              simultaneously, we create a multiplier effect that maximizes every dollar invested.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {differentiators.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Integration diagram */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 font-heading text-center mb-8">
              The Integration Multiplier Effect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Trained Teacher</h4>
                <p className="text-gray-600 text-sm">Uses learner-centered methods effectively</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-1 bg-primary-300 mx-auto hidden md:block" />
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">+ Materials</h4>
                <p className="text-gray-600 text-sm">Can now use proper books and resources</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">+ Safe Classroom</h4>
                <p className="text-gray-600 text-sm">Students can focus and participate actively</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-primary-50 rounded-2xl px-8 py-4">
                <TrendingUp className="w-6 h-6 text-primary-600" />
                <span className="font-bold text-primary-800 text-lg">= Maximum Learning Outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-gray-900">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag text-primary-400 justify-center">
              <Target className="w-4 h-4" /> Implementation Roadmap
            </span>
            <h2 className="section-title text-white mb-4">
              Our Phased Approach
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured, phased implementation ensures we build strong foundations before scaling,
              maximizing sustainability and impact.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-900" />

            <div className="space-y-8 lg:space-y-0">
              {timeline.map((phase, i) => (
                <div
                  key={i}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:order-2 lg:pl-8'} mb-4 lg:mb-0`}>
                    <div className={`bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-primary-600 transition-colors`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary-900 text-primary-400 rounded-full text-xs font-semibold">{phase.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white font-heading mb-4">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, ti) => (
                          <li key={ti} className="flex items-center gap-2 text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex items-center justify-center relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center z-10 shadow-glow-green">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>

                  {i % 2 === 1 && <div className="hidden lg:block lg:order-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-6">
            Ready to Be Part of This{' '}
            <span className="gradient-text">Journey?</span>
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            Whether you're an educator, donor, NGO, or community member —
            there's a role for you in transforming education in Mahama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="btn-primary text-base px-8 py-4">
              <Heart className="w-5 h-5" /> Get Involved
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-8 py-4">
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
