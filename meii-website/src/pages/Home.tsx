import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, BookOpen, Home as HomeIcon, Target, CheckCircle,
  TrendingUp, Heart, Star, Quote, ChevronDown, Sparkles, Globe
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import PageHero from '../components/PageHero';
import ChallengeSection from '../components/sections/ChallengeSection';
import PillarsSection from '../components/sections/PillarsSection';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import ImpactNumbersSection from '../components/sections/ImpactNumbersSection';

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
      <ChallengeSection />

      {/* THREE PILLARS */}
      <PillarsSection pillars={pillars} />

      {/* VISION & MISSION */}
      <VisionMissionSection sdgGoals={sdgGoals} />

      {/* IMPACT NUMBERS */}
      <ImpactNumbersSection impacts={impacts} />

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
