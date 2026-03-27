import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  Gift,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  Library,
  Megaphone,
  MessageCircle,
  NotebookPen,
  School,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const donationTiers = [
  {
    amount: '$50',
    label: 'Seed',
    description: 'Provides essential notebooks and writing materials for 20 students.',
    icon: NotebookPen,
    color: 'border-green-500',
    bg: 'bg-green-50',
    badge: 'bg-green-100 text-green-800',
  },
  {
    amount: '$250',
    label: 'Grow',
    description: "Supports one teacher's full training and professional development program.",
    icon: GraduationCap,
    color: 'border-primary-500',
    bg: 'bg-primary-50',
    badge: 'bg-primary-100 text-primary-800',
    featured: true,
  },
  {
    amount: '$500',
    label: 'Flourish',
    description: 'Provides a full set of textbooks for 25 students across core subjects.',
    icon: Library,
    color: 'border-orange-500',
    bg: 'bg-orange-50',
    badge: 'bg-orange-100 text-orange-800',
  },
  {
    amount: '$1,000',
    label: 'Transform',
    description: 'Helps renovate a classroom, installing desks, a blackboard, and improved lighting.',
    icon: School,
    color: 'border-blue-500',
    bg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-800',
  },
  {
    amount: '$5,000',
    label: 'Champion',
    description: 'Funds an entire teacher training cohort of 20+ educators for one full semester.',
    icon: GraduationCap,
    color: 'border-purple-500',
    bg: 'bg-purple-50',
    badge: 'bg-purple-100 text-purple-800',
  },
  {
    amount: 'Custom',
    label: 'Pioneer',
    description: 'Every dollar makes a difference. Choose an amount that works for you.',
    icon: Sparkles,
    color: 'border-yellow-500',
    bg: 'bg-yellow-50',
    badge: 'bg-yellow-100 text-yellow-800',
  },
];

const waysToHelp = [
  {
    icon: Heart,
    title: 'Make a Donation',
    description: 'Your contribution goes directly to teacher training, learning materials, and classroom improvement.',
    cta: 'Discuss Funding',
    href: buildWhatsAppUrl('Hello MEII, I would like to discuss making a donation.'),
    color: 'bg-red-600',
    gradient: 'from-red-500 to-red-700',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'We are seeking NGOs, corporations, and foundations that want to scale education impact with us.',
    cta: 'Talk Partnerships',
    href: buildWhatsAppUrl('Hello MEII, I would like to explore a partnership with your initiative.'),
    color: 'bg-blue-600',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Megaphone,
    title: 'Spread the Word',
    description: 'Help more supporters discover MEII by sharing our story and the urgency of education in Mahama.',
    cta: 'Share Our Story',
    href: '/contact',
    color: 'bg-green-600',
    gradient: 'from-green-500 to-green-700',
  },
  {
    icon: Gift,
    title: 'Fundraise for MEII',
    description: 'Start a campaign with your friends, school, church, or company to support refugee education.',
    cta: 'Plan a Fundraiser',
    href: buildWhatsAppUrl('Hello MEII, I would like to organize a fundraiser for your work.'),
    color: 'bg-orange-600',
    gradient: 'from-orange-500 to-orange-700',
  },
  {
    icon: Users,
    title: 'Volunteer Your Expertise',
    description: 'Educators, project managers, and communicators can all strengthen our mission with practical support.',
    cta: 'Offer Your Skills',
    href: '/contact',
    color: 'bg-purple-600',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    icon: Globe,
    title: 'Corporate Social Responsibility',
    description: 'Connect your company’s CSR goals with measurable impact in refugee education.',
    cta: 'Explore CSR Options',
    href: buildWhatsAppUrl('Hello MEII, I would like to explore CSR support opportunities.'),
    color: 'bg-teal-600',
    gradient: 'from-teal-500 to-teal-700',
  },
];

export default function GetInvolved() {
  const [selectedAmount, setSelectedAmount] = useState('$250');
  const [customAmount, setCustomAmount] = useState('');

  const donationAmount = selectedAmount === 'Custom'
    ? (customAmount ? `$${customAmount}` : 'a custom amount')
    : selectedAmount;
  const donationWhatsappUrl = buildWhatsAppUrl(
    `Hello MEII, I would like to discuss contributing ${donationAmount} to support education in Mahama.`,
  );

  return (
    <div className="overflow-hidden">
      <PageHero
        badge={<><Heart className="h-4 w-4 text-accent-300" /> Make a Difference</>}
        title={<>Join the Movement for <span className="text-accent-300">Quality Education</span></>}
        description="Your support can transform a classroom, empower a teacher, and change a child's life. Together, we can build a brighter future for the children of Mahama."
        imageUrl="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80"
        imageAlt="Community support"
        actions={
          <>
            <a href="#donate" className="btn-accent px-8 py-4 text-base">
              <DollarSign className="h-5 w-5" /> Explore Giving
            </a>
            <a
              href={buildWhatsAppUrl('Hello MEII, I would like to discuss partnership and funding opportunities.')}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary border-white px-8 py-4 text-base text-white hover:bg-white/10 hover:text-white"
            >
              Discuss on WhatsApp <ArrowRight className="h-5 w-5" />
            </a>
          </>
        }
      />

      <section id="donate" className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            icon={DollarSign}
            label="Financial Support"
            title="Your Donation,"
            highlight="Real Impact"
            description="Every contribution, no matter the size, goes directly to our core programs. Choose an amount below to start the conversation."
            center
          />

          <div className="mb-10 mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {donationTiers.map((tier) => (
              <button
                key={tier.amount}
                type="button"
                onClick={() => setSelectedAmount(tier.amount)}
                className={`relative rounded-3xl border-2 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  selectedAmount === tier.amount
                    ? `${tier.color} ${tier.bg} shadow-md`
                    : 'border-gray-200 bg-white hover:border-gray-300'
                } ${tier.featured ? 'ring-2 ring-primary-500 ring-offset-2' : ''}`}
              >
                {tier.featured ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                ) : null}
                {selectedAmount === tier.amount ? (
                  <div className="absolute right-4 top-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                ) : null}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <tier.icon className="h-7 w-7 text-primary-700" />
                </div>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-black text-slate-900">{tier.amount}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${tier.badge}`}>{tier.label}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{tier.description}</p>
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-3 text-center font-heading text-xl font-bold text-slate-900">
              Discuss Your Contribution
            </h3>
            <p className="mb-6 text-center text-sm text-slate-500">
              Funding conversations now continue on WhatsApp so we can confirm the right giving option with you directly.
            </p>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Selected Amount</label>
                <div className="flex gap-3">
                  <div className="flex-1 rounded-xl border-2 border-primary-500 bg-white px-4 py-3 text-lg font-bold text-primary-700">
                    {selectedAmount === 'Custom' ? 'Custom amount' : selectedAmount}
                  </div>
                  {selectedAmount === 'Custom' ? (
                    <input
                      type="number"
                      placeholder="Enter amount ($)"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="flex-1 rounded-xl border-2 border-primary-500 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  ) : null}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" placeholder="Jane" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" placeholder="jane@example.com" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
              </div>
              <a
                href={donationWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-accent w-full justify-center py-4 text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Discuss {donationAmount} on WhatsApp
              </a>
              <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                <ShieldCheck className="h-4 w-4 text-primary-600" />
                We will confirm the details and next steps with you directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="partner" className="section-padding bg-gray-50">
        <div className="section-container">
          <SectionHeader
            icon={Star}
            label="Beyond Funding"
            title="Other Ways to"
            highlight="Make an Impact"
            description="Your expertise and voice are just as valuable as financial contributions. There’s a meaningful role for everyone in this movement."
            center
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {waysToHelp.map((way) => {
              const isExternal = way.href.startsWith('http');

              const content = (
                <>
                  <div className={`h-2 bg-gradient-to-r ${way.gradient}`} />
                  <div className="p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${way.color} shadow-md`}>
                      <way.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-bold text-slate-900">{way.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-600">{way.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                      {way.cta} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </>
              );

              return isExternal ? (
                <a
                  key={way.title}
                  href={way.href}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={way.title}
                  to={way.href}
                  className="overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-tag justify-center text-primary-400">
              <Megaphone className="h-4 w-4" /> Amplify Our Voice
            </span>
            <h2 className="section-title mb-6 text-white">
              Share Our Story with <span className="text-accent-300">the World</span>
            </h2>
            <p className="mb-10 leading-relaxed text-slate-300">
              Help us reach more donors, partners, and supporters by sharing MEII&apos;s mission.
              Follow up with us directly when you want campaign materials or partnership information.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={buildWhatsAppUrl('Hello MEII, I would like materials to help share your story.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" /> Share via WhatsApp
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-primary-700 transition-all hover:scale-105"
              >
                <ArrowRight className="h-5 w-5" /> Request Campaign Assets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
