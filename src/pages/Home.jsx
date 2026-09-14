import { Link } from 'react-router-dom';
import {
  Sparkles,
  Star,
  GraduationCap,
  Briefcase,
  BookOpen,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Users,
  Map,
  Zap,
  ClipboardList,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { bursaries, fundingOptions, courses } from '../data/listings';
import { useApp } from '../context/AppContext';

const stats = [
  { key: 'bursaries', label: 'Bursaries', icon: GraduationCap, color: 'text-emerald-500 bg-emerald-50' },
  { key: 'funding', label: 'Funding Options', icon: Briefcase, color: 'text-orange-500 bg-orange-50' },
  { key: 'courses', label: 'Free Courses', icon: BookOpen, color: 'text-indigo-500 bg-indigo-50' },
];

const opportunities = [
  {
    to: '/bursaries',
    icon: GraduationCap,
    title: 'Bursaries',
    description:
      'Find bursaries for your studies — from matric to postgrad. Filter by field, province, and deadline.',
    bg: 'from-emerald-50 to-emerald-100/60',
    iconBg: 'bg-emerald-500',
    linkColor: 'text-emerald-600',
  },
  {
    to: '/funding',
    icon: Briefcase,
    title: 'Business Funding',
    description:
      'Discover grants, loans, and programs to start or grow your business. Government and private sector options.',
    bg: 'from-orange-50 to-orange-100/60',
    iconBg: 'bg-orange-500',
    linkColor: 'text-orange-600',
  },
  {
    to: '/courses',
    icon: BookOpen,
    title: 'Free Courses',
    description:
      'Upskill yourself for free — tech, business, trades, and more. Many come with certificates.',
    bg: 'from-indigo-50 to-indigo-100/60',
    iconBg: 'bg-indigo-500',
    linkColor: 'text-indigo-600',
  },
];

const features = [
  {
    to: '/job-tracker',
    icon: ClipboardList,
    title: 'Job Application Tracker',
    description: 'Track every application, get interview and follow-up reminders, and see your success rate at a glance.',
    badge: 'bg-blue-50 text-blue-700',
    iconBg: 'bg-blue-500',
    cardBg: 'from-blue-50/80 to-blue-100/40',
    border: 'border-blue-100',
  },
  {
    to: '/cv-builder',
    icon: FileText,
    title: 'AI CV Builder',
    description: 'Upload your CV, get ATS compatibility feedback, a rewritten profile summary, and keyword suggestions.',
    badge: 'bg-purple-50 text-purple-700',
    iconBg: 'bg-purple-500',
    cardBg: 'from-purple-50/80 to-pink-50/40',
    border: 'border-purple-100',
  },
  {
    to: '/learnerships',
    icon: Map,
    title: 'Learnerships & Internships',
    description: 'Opportunities from government, SETAs, municipalities, and graduate programmes — all in one place.',
    badge: 'bg-pink-50 text-pink-700',
    iconBg: 'bg-pink-500',
    cardBg: 'from-pink-50/80 to-rose-50/40',
    border: 'border-pink-100',
  },
  {
    to: '/skills-roadmaps',
    icon: TrendingUp,
    title: 'Free Skills Roadmaps',
    description: 'Pick a career path and see exactly which skills, free courses, projects, and certificates you need.',
    badge: 'bg-green-50 text-green-700',
    iconBg: 'bg-green-500',
    cardBg: 'from-green-50/80 to-teal-50/40',
    border: 'border-green-100',
  },
  {
    to: '/mentorship',
    icon: Users,
    title: 'Mentorship',
    description: 'Connect with volunteer professionals for career advice, industry insights, and network access.',
    badge: 'bg-red-50 text-red-700',
    iconBg: 'bg-red-500',
    cardBg: 'from-red-50/80 to-orange-50/40',
    border: 'border-red-100',
  },
];

const tips = [
  { icon: '1', color: 'bg-emerald-500', text: 'Apply early — most bursaries close months before the school year starts.' },
  { icon: '2', color: 'bg-orange-500', text: 'Save opportunities you like so you can come back to them later.' },
  { icon: '3', color: 'bg-blue-500', text: 'Free courses with certificates look great on your CV.' },
  { icon: '4', color: 'bg-purple-500', text: 'Government funding programs often have less competition — don\u2019t skip them.' },
];

export default function Home() {
  const { user, isLoggedIn } = useApp();
  const firstName = isLoggedIn ? user.name.split(' ')[0] : 'there';

  const counts = {
    bursaries: bursaries.length,
    funding: fundingOptions.length,
    courses: courses.length,
  };

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 px-6 py-8 text-white sm:px-8 sm:py-9">
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10" />
        <Star size={18} className="absolute right-6 top-5 text-white/50" />
        <Sparkles size={14} className="absolute bottom-6 right-14 text-white/40" />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
          <Sparkles size={13} /> Youth Empowerment Portal
        </span>
        <h1 className="mt-3 text-[26px] font-extrabold leading-tight sm:text-3xl">
          Hey {firstName}! 👋<br />
          Your future starts here.
        </h1>
        <p className="mt-2 max-w-lg text-[15px] text-white/90">
          Whether you need money for school, want to start a business, or just
          want to learn new skills — we&rsquo;ve got you. Everything in one
          place, completely free.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map(({ key, label, icon: Icon, color }) => (
          <div
            key={key}
            className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white py-6 text-center"
          >
            <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
              <Icon size={19} strokeWidth={2.25} />
            </div>
            <p className="text-2xl font-extrabold text-gray-900">{counts[key]}</p>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      {/* Explore Opportunities */}
      <div>
        <h2 className="mb-3 text-lg font-bold text-gray-900">Explore Opportunities</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {opportunities.map((op) => (
            <div
              key={op.to}
              className={`flex flex-col rounded-2xl bg-gradient-to-br ${op.bg} p-5`}
            >
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${op.iconBg} text-white`}>
                <op.icon size={19} strokeWidth={2.25} />
              </div>
              <h3 className="font-bold text-gray-900">{op.title}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-gray-600">
                {op.description}
              </p>
              <Link
                to={op.to}
                className={`mt-3 text-sm font-semibold ${op.linkColor} hover:underline`}
              >
                Explore now →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes It Stand Out — now with real links */}
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6">
        <h2 className="mb-1 text-lg font-bold text-gray-900">What Makes YouthRise Stand Out</h2>
        <p className="mb-4 text-sm text-gray-500">Tools designed specifically for what South African youth actually need.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.to}
              to={feature.to}
              className={`group flex flex-col rounded-xl border ${feature.border} bg-gradient-to-br ${feature.cardBg} p-4 transition-all hover:shadow-md hover:-translate-y-0.5`}
            >
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${feature.iconBg} text-white`}>
                <feature.icon size={18} strokeWidth={2} />
              </div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
              <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">
                Open <ArrowRight size={11} />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50/40 p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-white">
            <Lightbulb size={15} />
          </div>
          <h2 className="text-base font-bold text-gray-900">Quick Tips</h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl bg-white/70 p-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${tip.color}`}
              >
                {tip.icon}
              </span>
              <p className="text-sm text-gray-600">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
