import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-base font-bold text-white shadow-sm">
                Y
              </div>
              <span className="text-lg font-bold text-emerald-500">YouthRise</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empowering South African youth with access to bursaries, funding, and free courses to build their future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Bursaries
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Funding Options
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Free Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  My Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@youthrise.org.za" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors break-all">
                  info@youthrise.org.za
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+27108275000" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  +27 (10) 827 5000
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} YouthRise. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-emerald-50 hover:text-emerald-500 transition-colors text-xs"
            >
              f
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-emerald-50 hover:text-emerald-500 transition-colors"
            >
              𝕏
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-emerald-50 hover:text-emerald-500 transition-colors text-xs font-bold"
            >
              in
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-emerald-50 hover:text-emerald-500 transition-colors"
            >
              ◉
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
