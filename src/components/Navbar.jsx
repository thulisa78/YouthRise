import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Home, GraduationCap, Briefcase, BookOpen, User, LogOut,
  ClipboardList, FileText, Map, TrendingUp, Users, ChevronDown, Zap,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const mainNavItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/bursaries', label: 'Bursaries', icon: GraduationCap },
  { to: '/funding', label: 'Funding', icon: Briefcase },
  { to: '/courses', label: 'Free Courses', icon: BookOpen },
  { to: '/learnerships', label: 'Learnerships', icon: Map },
  { to: '/profile', label: 'My Profile', icon: User },
];

const toolsItems = [
  { to: '/job-tracker', label: 'Job Tracker', icon: ClipboardList, desc: 'Track every application', color: 'text-blue-500' },
  { to: '/cv-builder', label: 'AI CV Builder', icon: FileText, desc: 'ATS feedback & rewrite', color: 'text-purple-500' },
  { to: '/skills-roadmaps', label: 'Roadmaps', icon: TrendingUp, desc: 'Step-by-step career paths', color: 'text-green-500' },
  { to: '/mentorship', label: 'Mentorship', icon: Users, desc: 'Connect with professionals', color: 'text-red-500' },
];

// All items flat for mobile nav
const allMobileItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/bursaries', label: 'Bursaries', icon: GraduationCap },
  { to: '/funding', label: 'Funding', icon: Briefcase },
  { to: '/courses', label: 'Courses', icon: BookOpen },
  { to: '/learnerships', label: 'Learnerships', icon: Map },
  { to: '/job-tracker', label: 'Job Tracker', icon: ClipboardList },
  { to: '/cv-builder', label: 'AI CV', icon: FileText },
  { to: '/skills-roadmaps', label: 'Roadmaps', icon: TrendingUp },
  { to: '/mentorship', label: 'Mentorship', icon: Users },
  { to: '/profile', label: 'Profile', icon: User },
];

export default function Navbar() {
  const { isLoggedIn, logout, user } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isToolsActive = toolsItems.some(item => location.pathname === item.to);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-base font-bold text-white shadow-sm">
            Y
          </div>
          <span className="text-lg font-bold text-emerald-500">YouthRise</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {isLoggedIn && (
            <>
              {mainNavItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    }`
                  }
                >
                  <Icon size={14} strokeWidth={2.25} />
                  {label}
                </NavLink>
              ))}

              {/* Tools Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(v => !v)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors ${
                    isToolsActive || open
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  }`}
                >
                  <Zap size={14} strokeWidth={2.25} />
                  Tools
                  <ChevronDown
                    size={12}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  />
                </button>

                {open && (
                  <div className="absolute left-0 top-full mt-2 w-60 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-lg">
                    {/* Arrow */}
                    <div className="absolute -top-1.5 left-5 h-3 w-3 rotate-45 rounded-sm border-l border-t border-gray-200 bg-white" />

                    <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Career Tools
                    </p>
                    {toolsItems.map(({ to, label, icon: Icon, desc, color }) => {
                      const isActive = location.pathname === to;
                      return (
                        <NavLink
                          key={to}
                          to={to}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                            isActive ? 'bg-emerald-50' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 ${color}`}>
                            <Icon size={15} strokeWidth={2.2} />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold ${isActive ? 'text-emerald-700' : 'text-gray-800'}`}>
                              {label}
                            </p>
                            <p className="text-xs text-gray-400">{desc}</p>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                aria-label="Log out"
                className="rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
                title="Log out"
              >
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Log in
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="rounded-full px-4 py-2 text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile nav */}
      {isLoggedIn && (
        <nav className="flex items-center gap-1 overflow-x-auto border-t border-gray-100 px-3 py-2 md:hidden">
          {allMobileItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-gray-500 hover:bg-gray-100'
                }`
              }
            >
              <Icon size={14} strokeWidth={2.25} />
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
