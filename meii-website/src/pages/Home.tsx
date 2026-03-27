import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, BookOpen, Home as HomeIcon, Target, CheckCircle,
  TrendingUp, Heart, Star, Quote, ChevronDown, Sparkles, Globe
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import PageHero from '../components/PageHero';

const stats = [
  { label: 'School-aged Children', value: 30000, suffix: '+', icon: Users, color: 'from-green-400 to-green-600' },
  { label: 'Teachers Needing Support', value: 400, suffix: '+', icon: Users, color: 'from-orange-400 to-orange-600' },
  { label: 'Integrated Solutions', value: 1, prefix: '', suffix: ' Holistic Model', icon: Target, color: 'from-blue-400 to-blue-600' },
  { label: 'Year Launch', value: 2026, suffix: '', icon: Sparkles, color: 'from-purple-400 to-purple-600' },
];

const pillars = [
  {
    icon: Users,
    title: 'Teacher Capacity Development',
    description: 'Equipping teachers with modern, learner-centered skills through ongoing training and mentorship programs.',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-600',
    features: ['Competency-based teaching', 'Classroom management', 'Inclusive education', 'Peer mentorship'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
  },
  {
    icon: BookOpen,
    title: 'Provision of Learning Materials',
    description: 'Ensuring every student has the textbooks, notebooks, and tools they need to learn effectively.',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-500',
    features: ['Core subject textbooks', 'Notebooks & stationery', 'Science & math kits', 'Visual teaching aids'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
  },
  {
    icon: HomeIcon,
    title: 'Classroom Infrastructure',
    description: 'Creating safe, comfortable, and inspiring learning environments by renovating and equipping classrooms.',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-600',
    features: ['Desks & blackboards', 'Lighting & ventilation', 'Structural repairs', 'Child-friendly spaces'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
  },
];

const impacts = [
  { icon: Users, label: 'Teachers to Train', value: 200, suffix: '+', color: 'text-green-600', bg: 'bg-green-100' },
  { icon: BookOpen, label: 'Students to Equip', value: 5000, suffix: '+', color: 'text-orange-600', bg: 'bg-orange-100' },
  { icon: HomeIcon, label: 'Classrooms to Renovate', value: 10, suffix: '', color: 'text-blue-600', bg: 'bg-blue-100' },
  { icon: TrendingUp, label: 'Attendance Increase Target', value: 20, suffix: '%', color: 'text-purple-600', bg: 'bg-purple-100' },
];

const testimonialQuotes = [
  {
    text: "Education in the camp has always been a challenge. We need more trained teachers and proper materials. Initiatives like MEII give us real hope.",
    author: "Teacher, G.S Paysannat-L A",
    role: "Primary School Educator, Mahama",
  },
  {
    text: "When classrooms are overcrowded and we lack textbooks, children lose motivation. Better resources mean better futures for our children.",
    author: "Community Leader",
    role: "Mahama Refugee Camp",
  },
];

const sdgGoals = [
  { number: '4', title: 'Quality Education', color: 'bg-red-500' },
  { number: '10', title: 'Reduced Inequalities', color: 'bg-pink-500' },
  { number: '16', title: 'Peace & Justice', color: 'bg-blue-500' },
  { number: '17', title: 'Partnerships', color: 'bg-indigo-500' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <PageHero
        fullHeight
        badge={<><Globe className="h-4 w-4 text-accent-300" /> Kirehe District, Rwanda · Est. 2026</>}
        title={<>Building Futures, <span className="text-accent-300">One Classroom</span> at a Time.</>}
        description={<>The Mahama Education Improvement Initiative (MEII) is transforming education for over <strong className="text-white">30,000 refugee learners</strong> in Rwanda. We provide teachers with skills, students with tools, and schools with safe spaces to learn and thrive.</>}
        imageUrl="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
        imageAlt="Students learning in a classroom"
        actions={
          <>
            <Link to="/approach" className="btn-primary bg-white text-primary-700 hover:bg-green-50 hover:text-primary-800 shadow-xl text-base px-8 py-4">
              Learn About Our Work <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/get-involved" className="btn-secondary border-white text-white hover:bg-white/10 hover:text-white text-base px-8 py-4">
              <Heart className="w-5 h-5 text-accent-300" /> Support Our Mission
            </Link>
          </>
        }
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
              <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-md`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div className="font-heading text-2xl font-bold text-white md:text-3xl">
                <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="mt-0.5 text-xs text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ChevronDown className="h-6 w-6 animate-bounce text-white/70" />
        </div>
      </PageHero>
      {/* HERO SECTION */}
      {/* Legacy hero removed below */}
      {false && <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30" />

        {/* Animated circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full blur-2xl" style={{ transform: 'translate(-50%, -50%)' }} />

        {/* Floating elements */}
        <div className="absolute top-32 left-8 md:left-16 animate-float opacity-60">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-40 right-12 md:right-24 animate-float opacity-60" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Heart className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-1/3 right-8 md:right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Star className="w-5 h-5 text-yellow-300" />
          </div>
        </div>

        <div className="section-container relative z-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-8">
              <Globe className="w-4 h-4 text-green-300" />
              Kirehe District, Rwanda · Est. 2026
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6 text-balance">
              Building Futures,{' '}
              <span className="text-yellow-300 drop-shadow-sm">
                One Classroom
              </span>{' '}
              at a Time.
            </h1>

            <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed mb-10">
              The Mahama Education Improvement Initiative (MEII) is transforming education
              for over <strong className="text-white">30,000 refugee learners</strong> in Rwanda.
              We provide teachers with skills, students with tools, and schools with safe spaces to learn and thrive.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/approach" className="btn-primary bg-white text-primary-700 hover:bg-green-50 hover:text-primary-800 shadow-xl text-base px-8 py-4">
                Learn About Our Work <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/get-involved" className="btn-secondary border-white text-white hover:bg-white/10 hover:text-white text-base px-8 py-4">
                <Heart className="w-5 h-5 text-red-400" /> Support Our Mission
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white font-heading">
                    <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-green-200 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>}

      {/* THE CHALLENGE SECTION */}
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
                {[
                  { icon: Users, text: 'Overcrowded classrooms with students far beyond capacity', color: 'text-red-500 bg-red-50' },
                  { icon: BookOpen, text: 'Severe shortage of textbooks — students share limited materials', color: 'text-orange-500 bg-orange-50' },
                  { icon: Target, text: 'Teachers lack formal training in modern, competency-based methods', color: 'text-yellow-600 bg-yellow-50' },
                  { icon: HomeIcon, text: 'Poor infrastructure with inadequate lighting and unsafe structures', color: 'text-blue-500 bg-blue-50' },
                ].map((item, i) => (
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

      {/* THREE PILLARS */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag justify-center">
              <Sparkles className="w-4 h-4" /> Our Solution
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
            {pillars.map((pillar, i) => (
              <div key={i} className={`pillar-card border-2 ${pillar.color}`}>
                {/* Image */}
                <div className="h-44 rounded-xl overflow-hidden mb-6 -mx-2">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Icon + number */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${pillar.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-5xl font-black text-gray-100 font-heading">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{pillar.description}</p>

                <ul className="space-y-2">
                  {pillar.features.map((feature, fi) => (
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
            <Link to="/approach" className="btn-primary">
              Explore Our Full Approach <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-padding green-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-tag text-green-200">
                <Heart className="w-4 h-4" /> Our Promise
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
                  {sdgGoals.map((goal) => (
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
                  <Link to="/approach" className="btn-primary bg-white text-primary-700 hover:bg-green-50 text-sm px-6 py-2.5">
                    See Our Strategic Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="section-padding bg-gray-900">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag text-primary-400 justify-center">
              <TrendingUp className="w-4 h-4" /> Year 1 Targets
            </span>
            <h2 className="section-title text-white mb-4">
              Creating Tangible Change
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              MEII is not just a plan; it's a movement. In our first year, we're committed to measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impacts.map((impact, i) => (
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
            <Link to="/get-involved" className="btn-accent">
              <Heart className="w-4 h-4" /> Support This Mission
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-warm-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag justify-center">
              <Quote className="w-4 h-4" /> Voices from Mahama
            </span>
            <h2 className="section-title mb-4">
              Heard from the{' '}
              <span className="gradient-text">Community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialQuotes.map((quote, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300">
                <Quote className="w-10 h-10 text-primary-200 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                  "{quote.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{quote.author}</p>
                    <p className="text-gray-500 text-sm">{quote.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="section-container">
          <p className="text-center text-gray-400 text-sm font-medium mb-8 uppercase tracking-wider">
            Aligning with & supported by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {['UNHCR', 'MINEDUC', 'G.S Paysannat-L A', 'Munini Sector', 'African Leadership University'].map((partner) => (
              <div key={partner} className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all duration-200">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-tag justify-center">
              <Heart className="w-4 h-4" /> Join the Movement
            </span>
            <h2 className="section-title mb-6">
              Be Part of the{' '}
              <span className="gradient-text">Change</span>
            </h2>
            <p className="section-subtitle mx-auto mb-10">
              Every teacher trained, every book distributed, every classroom improved — it all starts with your support.
              Together, we can ensure that no child's potential is lost because of their circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved" className="btn-primary text-base px-8 py-4">
                <Heart className="w-5 h-5" /> Get Involved Today
              </Link>
              <Link to="/approach" className="btn-secondary text-base px-8 py-4">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
