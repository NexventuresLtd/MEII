import { Link } from 'react-router-dom';
import {
  Users, BookOpen, Heart, Star, ArrowRight, GraduationCap,
  Building2, Globe, Shield, Award, Target, Sparkles
} from 'lucide-react';
import PageHero from '../components/PageHero';

const teamMembers = [
  {
    name: 'Sheilla Igiraneza',
    role: 'Founder & Project Director',
    description: 'Driven by a deep belief in the power of education to empower and heal, Sheilla conducted extensive research in Mahama Camp to understand the community\'s most urgent needs. Her leadership is rooted in a commitment to community, dignity, and lasting impact.',
    credentials: 'BSc Entrepreneurial Leadership, African Leadership University',
    color: 'bg-primary-600',
    icon: Star,
    image: "https://t4.ftcdn.net/jpg/03/92/25/09/360_F_392250914_2Od8jNRBPgpMu8W29vCh4hiu5EUXbgGU.jpg",
  },
  {
    name: 'Dr. Mildred Kasaya Amugune',
    role: 'Academic Supervisor',
    description: 'Providing academic guidance and supervisory oversight to ensure the initiative meets the highest standards of research, design, and implementation. Dr. Amugune brings extensive expertise in education and development.',
    credentials: 'African Leadership University Faculty',
    color: 'bg-blue-600',
    icon: GraduationCap,
    image: 'https://t4.ftcdn.net/jpg/03/92/25/09/360_F_392250914_2Od8jNRBPgpMu8W29vCh4hiu5EUXbgGU.jpg',
  },
];

const operationalTeam = [
  { role: 'Education Specialist', desc: 'Background in curriculum development and teacher training', icon: BookOpen, color: 'bg-green-600' },
  { role: 'Operations Manager', desc: 'Expertise in logistics, procurement, and resource distribution', icon: Target, color: 'bg-orange-500' },
  { role: 'Finance Officer', desc: 'Qualifications in accounting, budgeting, and financial accountability', icon: Shield, color: 'bg-blue-600' },
  { role: 'Marketing & Partnerships', desc: 'Strong communication and stakeholder engagement skills', icon: Globe, color: 'bg-purple-600' },
  { role: 'M&E Officer', desc: 'Expertise in data collection, analysis, and evaluation reporting', icon: Award, color: 'bg-red-600' },
  { role: 'Community Liaison', desc: 'Deep roots in the refugee community for authentic engagement', icon: Users, color: 'bg-yellow-600' },
];

const partners = [
  {
    name: 'G.S Paysannat-L A',
    role: 'Key Implementation Partner',
    description: 'Our primary partner for training delivery and coordination within Mahama Refugee Camp.',
    icon: Building2,
    color: 'bg-green-600',
  },
  {
    name: 'Munini Sector Authorities',
    role: 'Local Governance Support',
    description: 'Providing essential local governance support, authorization, and community coordination.',
    icon: Shield,
    color: 'bg-blue-600',
  },
  {
    name: 'UNHCR',
    role: 'International Partner',
    description: 'Alignment with UNHCR\'s education strategy ensures integration with broader humanitarian efforts.',
    icon: Globe,
    color: 'bg-purple-600',
  },
  {
    name: 'MINEDUC',
    role: 'Government Alignment',
    description: 'All programs align with Rwanda\'s Ministry of Education national curriculum and policies.',
    icon: GraduationCap,
    color: 'bg-orange-600',
  },
  {
    name: 'African Leadership University',
    role: 'Academic Foundation',
    description: 'Academic backing and supervision from ALU ensures rigorous research and implementation standards.',
    icon: Star,
    color: 'bg-yellow-600',
  },
];

const values = [
  { title: 'Dignity', desc: 'Every refugee learner deserves to be treated with dignity and respect.', icon: Heart },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards in every program we deliver.', icon: Star },
  { title: 'Community', desc: 'Real change happens when communities lead their own transformation.', icon: Users },
  { title: 'Accountability', desc: 'We are fully transparent about how resources are used and outcomes achieved.', icon: Shield },
  { title: 'Innovation', desc: 'We embrace evidence-based approaches and adapt to what works.', icon: Sparkles },
  { title: 'Sustainability', desc: 'We build capacity that lasts beyond our direct involvement.', icon: Target },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      <PageHero
        badge={<><Heart className="h-4 w-4 text-accent-300" /> Our Story</>}
        title={<>Driven by a Passion for <span className="text-accent-300">Education & Equity</span></>}
        description="MEII was founded to turn a vision of educational opportunity into a reality for the refugee community of Mahama."
        imageUrl="https://agaciropress.com/wp-content/uploads/2026/02/image-118.png"
        imageAlt="Education team working together"
      />
      {false && <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 green-gradient overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div className="section-container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 text-red-400" /> Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Driven by a Passion for{' '}
            <span className="text-yellow-300">Education & Equity</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            MEII was founded to turn a vision of educational opportunity into a reality
            for the refugee community of Mahama.
          </p>
        </div>
      </section>}

      {/* FOUNDER'S STORY */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Sheilla's profile.jpeg"
                  alt="Founder Sheilla Igiraneza"
                  className="w-full h-120 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[220px]">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-900 text-sm">Founder</span>
                </div>
                <p className="text-xs text-gray-600">BSc Entrepreneurial Leadership, African Leadership University</p>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-100 rounded-full -z-10" />
            </div>

            <div>
              <span className="section-tag">
                <Star className="w-4 h-4" /> A Vision Born from Experience
              </span>
              <h2 className="section-title mb-6">
                The Story Behind{' '}
                <span className="gradient-text">MEII</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong className="text-gray-900">Sheilla Igiraneza</strong>, a student of Entrepreneurial Leadership
                at African Leadership University, founded MEII driven by a deep belief in the power of education
                to empower and heal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Sheilla conducted extensive primary research in Mahama Camp to understand the community's
                most urgent needs. Through surveys, interviews, and focus groups with teachers, students,
                school administrators, and community leaders, a clear picture emerged: the education system
                was failing these children not from lack of will, but lack of resources and support.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                This initiative is the result of that journey — a mission to restore hope and support
                the dreams of young learners whose futures have been disrupted. Her leadership is rooted
                in a commitment to community, dignity, and lasting impact.
              </p>

              <blockquote className="border-l-4 border-primary-500 pl-5 italic text-gray-700 bg-primary-50 rounded-r-2xl py-4 pr-5">
                "Education is the best investment that can be made in any given community, and more so
                in the case of refugees whose futures have been broken. Enhancing the learning conditions
                in Mahama is not merely a development project — it is a mission to revive hope."
                <footer className="mt-2 text-primary-700 font-semibold text-sm not-italic">— Sheilla Igiraneza, Founder</footer>
              </blockquote>
            </div>
          </div>

          {/* Team Cards */}
          <div>
            <div className="text-center mb-10">
              <span className="section-tag justify-center">
                <Users className="w-4 h-4" /> Leadership
              </span>
              <h2 className="section-title mb-4">
                Committed to Excellence &{' '}
                <span className="gradient-text">Accountability</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-card border border-gray-100 overflow-hidden hover:shadow-card-hover transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className={`inline-flex items-center gap-2 ${member.color} text-white text-xs px-3 py-1.5 rounded-full font-medium mb-3`}>
                      <member.icon className="w-3 h-3" />
                      {member.role}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{member.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <GraduationCap className="w-4 h-4" />
                      {member.credentials}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL TEAM */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag justify-center">
              <Target className="w-4 h-4" /> Our Team
            </span>
            <h2 className="section-title mb-4">
              The People Behind{' '}
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Our multidisciplinary team brings together expertise in education, operations,
              finance, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {operationalTeam.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${member.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <member.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 font-heading mb-2">{member.role}</h3>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>

          {/* Org Chart */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 font-heading text-center mb-8">Organizational Structure</h3>
            <div className="flex flex-col items-center">
              {/* Director */}
              <div className="bg-primary-600 text-white rounded-2xl px-6 py-3 font-semibold text-center shadow-lg mb-4">
                Project Director
              </div>
              {/* Line */}
              <div className="w-px h-6 bg-gray-300" />
              {/* Middle row */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl relative">
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gray-300" />
                {['Education Specialist', 'Operations Manager', 'Finance Officer'].map((role, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-px h-6 bg-gray-300" />
                    <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 text-center w-full">
                      {role}
                    </div>
                  </div>
                ))}
              </div>
              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg mt-4">
                {['Marketing & Partnerships', 'M&E Officer', 'Community Liaison'].map((role, i) => (
                  <div key={i} className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-sm font-medium text-green-800 text-center">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section-padding bg-gray-900">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag text-primary-400 justify-center">
              <Heart className="w-4 h-4" /> What Drives Us
            </span>
            <h2 className="section-title text-white mb-4">
              Our Core{' '}
              <span className="text-yellow-300">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-primary-600 transition-colors group">
                <div className="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <value.icon className="w-5 h-5 text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white font-heading mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-tag justify-center">
              <Globe className="w-4 h-4" /> Strategic Partners
            </span>
            <h2 className="section-title mb-4">
              Collaborating for{' '}
              <span className="gradient-text">Greater Impact</span>
            </h2>
            <p className="section-subtitle mx-auto">
              We are proud to work with key stakeholders who share our vision of quality
              education for all refugee learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${partner.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <partner.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 font-heading mb-1">{partner.name}</h3>
                <span className="text-xs text-primary-600 font-medium bg-primary-50 px-2 py-0.5 rounded-full">{partner.role}</span>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding green-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
            Join Us in Building a Better Future
          </h2>
          <p className="text-green-100 mb-10 leading-relaxed">
            Whether you want to support financially, partner organizationally, or contribute your
            expertise — there's a meaningful role for you in MEII's mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="btn-primary bg-white text-primary-700 hover:bg-green-50 text-base px-8 py-4">
              <Heart className="w-5 h-5 text-red-500" /> Get Involved
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-green-900 hover:bg-white/10 hover:text-white text-base px-8 py-4">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
