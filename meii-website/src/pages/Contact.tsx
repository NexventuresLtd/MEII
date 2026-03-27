import { useState } from 'react';
import {
  BriefcaseBusiness,
  CheckCircle,
  Clock,
  Globe,
  HandCoins,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const contactReasons = [
  'General Inquiry',
  'Partnership Opportunity',
  'Donation / Financial Support',
  'Volunteering',
  'Media / Press',
  'Research Collaboration',
  'Other',
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@meii.org',
    sub: 'We respond within 24-48 hours',
    color: 'bg-primary-600',
    href: 'mailto:info@meii.org',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat with our team',
    sub: 'Best for funding and partnership discussions',
    color: 'bg-accent-500',
    href: buildWhatsAppUrl('Hello MEII, I would like to discuss funding or partnership opportunities.'),
  },
  {
    icon: MapPin,
    title: 'Find Us',
    value: 'Kirehe District, Rwanda',
    sub: 'Near Mahama Refugee Camp',
    color: 'bg-slate-700',
    href: '#location',
  },
];

const quickLinks = [
  { name: 'WhatsApp', icon: MessageCircle, color: 'hover:bg-green-600', href: buildWhatsAppUrl('Hello MEII, I would like to stay updated on your work.') },
  { name: 'Funding', icon: HandCoins, color: 'hover:bg-accent-500', href: buildWhatsAppUrl('Hello MEII, I would like to discuss a funding contribution.') },
  { name: 'Partner', icon: BriefcaseBusiness, color: 'hover:bg-blue-700', href: buildWhatsAppUrl('Hello MEII, I would like to explore a partnership.') },
  { name: 'Website', icon: Globe, color: 'hover:bg-primary-700', href: '/' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="overflow-hidden">
      <PageHero
        badge={<><MessageCircle className="h-4 w-4 text-accent-300" /> Let&apos;s Connect</>}
        title={<>Get in <span className="text-accent-300">Touch</span></>}
        description="We'd love to hear from you. Whether you have a question, want to partner, or are interested in supporting our work, please reach out."
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
        imageAlt="Community discussion"
      />

      <section className="bg-gray-50 py-12">
        <div className="section-container">
          <div className="relative z-10 -mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${info.color} shadow-md`}>
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">{info.title}</p>
                  <p className="font-heading font-bold text-slate-900">{info.value}</p>
                  <p className="mt-1 text-xs text-gray-500">{info.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 pt-4">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-card">
                <h2 className="mb-2 font-heading text-2xl font-bold text-slate-900">Send Us a Message</h2>
                <p className="mb-8 text-sm text-slate-500">
                  Fill out the form and our team will get back to you within 24-48 hours.
                </p>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
                      <CheckCircle className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="mb-3 font-heading text-2xl font-bold text-slate-900">Message Sent</h3>
                    <p className="mx-auto max-w-sm text-slate-600">
                      Thank you for reaching out. We&apos;ll review your message and respond within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                      >
                        {contactReasons.map((reason) => (
                          <option key={reason} value={reason}>{reason}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Message *</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your inquiry, interest in partnering, or how you'd like to get involved..."
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div id="location" className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
                <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                  <img
                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80"
                    alt="Rwanda landscape"
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                  <div className="relative z-10 text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-bold text-white shadow-sm">Mahama Refugee Camp</p>
                    <p className="text-sm text-white/80">Kirehe District, Rwanda</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    Located in Kirehe District in Eastern Province, Rwanda - approximately
                    120km from Kigali near the Burundian border.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="mb-4 flex items-center gap-2 font-heading font-bold text-slate-900">
                  <Clock className="h-5 w-5 text-primary-600" />
                  Response Times
                </h3>
                <div className="space-y-3">
                  {[
                    { type: 'General Inquiries', time: '24-48 hours' },
                    { type: 'Partnership Requests', time: '3-5 business days' },
                    { type: 'Media / Press', time: '24 hours' },
                    { type: 'Volunteer Applications', time: '5-7 business days' },
                  ].map((item) => (
                    <div key={item.type} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{item.type}</span>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-slate-900">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="mb-4 flex items-center gap-2 font-heading font-bold text-slate-900">
                  <Users className="h-5 w-5 text-primary-600" />
                  Follow Our Journey
                </h3>
                <p className="mb-5 text-sm text-slate-500">
                  Reach out through the channel that fits your question best.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className={`group flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 transition-all duration-200 hover:text-white ${link.color}`}
                    >
                      <link.icon className="h-5 w-5 text-gray-500 transition-colors group-hover:text-white" />
                      <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-white">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
