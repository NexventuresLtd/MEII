import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Globe,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const footerLinks = {
  initiative: [
    { name: 'Home', path: '/' },
    { name: 'Our Approach', path: '/approach' },
    { name: 'The Need', path: '/need' },
    { name: 'About Us', path: '/about' },
  ],
  getInvolved: [
    { name: 'Donate', path: '/get-involved' },
    { name: 'Partner With Us', path: '/get-involved' },
    { name: 'Volunteer', path: '/get-involved' },
    { name: 'Fundraise', path: '/get-involved' },
  ],
};

export default function Footer() {
  const whatsappSupportUrl = buildWhatsAppUrl(
    'Hello MEII, I would like to discuss supporting your education work in Mahama.',
  );

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="bg-gradient-to-r from-primary-800 to-primary-600 py-12">
        <div className="section-container text-center">
          <h2 className="mb-3 font-heading text-2xl font-bold text-white md:text-3xl">
            Ready to Make a Difference?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-primary-50">
            Every contribution helps us train a teacher, provide materials to a student,
            or renovate a classroom.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/get-involved" className="btn-accent">
              <Heart className="h-4 w-4" /> Donate Now
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10 hover:text-white">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 shadow-glow-green">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="block font-heading text-lg font-bold leading-none text-white">MEII</span>
                <span className="text-xs leading-none text-gray-400">Education Initiative</span>
              </div>
            </Link>
            <p className="mb-5 text-sm leading-relaxed text-gray-400">
              Transforming education for refugee learners in Mahama Camp through teacher training,
              learning materials, and classroom improvement.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappSupportUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 transition-all duration-200 hover:bg-primary-600"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:info@meii.org"
                className="group flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 transition-all duration-200 hover:bg-primary-600"
                aria-label="Email"
              >
                <Send className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </a>
              <Link
                to="/contact"
                className="group flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 transition-all duration-200 hover:bg-primary-600"
                aria-label="Partnerships"
              >
                <BriefcaseBusiness className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </Link>
              <Link
                to="/"
                className="group flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 transition-all duration-200 hover:bg-primary-600"
                aria-label="Website"
              >
                <Globe className="h-4 w-4 text-gray-400 group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold text-white">The Initiative</h3>
            <ul className="space-y-2.5">
              {footerLinks.initiative.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold text-white">Get Involved</h3>
            <ul className="space-y-2.5">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-900">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-gray-500">Email</p>
                  <a href="mailto:info@meii.org" className="text-sm text-gray-300 transition-colors hover:text-primary-400">
                    info@meii.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-900">
                  <Phone className="h-4 w-4 text-primary-400" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-gray-500">Phone</p>
                  <a href="tel:+250788000000" className="text-sm text-gray-300 transition-colors hover:text-primary-400">
                    +250 788 000 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-900">
                  <MapPin className="h-4 w-4 text-primary-400" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-gray-500">Location</p>
                  <p className="text-sm text-gray-300">Kirehe District, Rwanda</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2026 Mahama Education Improvement Initiative. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-gray-500">
            Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> for Mahama&apos;s children
          </p>
        </div>
      </div>
    </footer>
  );
}
