import { Eye, HelpCircle, LogOut, Search, Bell, Settings, UserPlus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SIDEBAR_NAV_ITEMS } from '../../constants/dashboard';
import { PARENT_AVATAR_URL } from '../../constants/dashboard';
import { NavItem } from '../../types/navigation';
import { isRouteActive } from '../../utils/navigation';

const SIDEBAR_ROUTES: Record<string, string> = {
  Dashboard: '/',
  Family: '/family',
  Savings: '/savings',
  Tasks: '/tasks',
  Cards: '/cards',
};

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (label: string) => isRouteActive(pathname, SIDEBAR_ROUTES[label] ?? '/');

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-white flex-col border-r border-night/5 z-40 shadow-sm">

      {/* Logo */}
      <div className="px-6 pt-7 pb-5">
        <div className="flex items-center gap-2.5">
          <Eye className="w-6 h-6 text-primary" strokeWidth={2.5} />
          <span className="text-2xl font-black text-night font-headline tracking-tight">Gardly</span>
        </div>
        <p className="text-xs text-night/40 font-label mt-1 ml-0.5">Family finance, simplified</p>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-night/30 w-3.5 h-3.5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-warm border-0 rounded-xl pl-8 pr-3 py-2 text-sm text-night placeholder-night/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Section label */}
      <p className="px-6 mb-2 text-[10px] font-bold text-night/30 uppercase tracking-widest font-label">Menu</p>

      {/* Nav */}
      <nav className="flex-1">
        {SIDEBAR_NAV_ITEMS.map(({ icon: Icon, label }: NavItem) => (
          <button
            key={label}
            onClick={() => navigate(SIDEBAR_ROUTES[label] ?? '/')}
            className={`w-full flex items-center gap-3 py-2.5 px-4 mx-0 transition-all duration-200 ${
              isActive(label)
                ? 'text-primary font-bold'
                : 'text-night/50 hover:text-primary hover:bg-primary/5'
            }`}
          >
            {isActive(label) && (
              <span className="absolute left-0 w-1 h-7 bg-primary rounded-r-full" />
            )}
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
              isActive(label) ? 'bg-primary/10' : 'bg-transparent'
            }`}>
              <Icon className="w-4 h-4" />
            </div>
            <span className="font-label text-sm">{label}</span>
          </button>
        ))}
      </nav>

      {/* Add Child */}
      <div className="px-4 pb-4">
        <button
          onClick={() => navigate('/family?modal=addChild')}
          className="w-full py-2.5 text-white rounded-xl font-bold font-headline text-sm active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md hover:opacity-90"
          style={{ background: 'radial-gradient(circle at 100% 100%, #F472C0 0%, #E040A0 28%, #C02888 55%, #C02888 100%)' }}
        >
          <UserPlus size={15} />
          Add Child
        </button>
      </div>

      {/* Profile strip */}
      <div className="border-t border-night/5 px-4 py-4 flex items-center gap-3">
        <img
          src={PARENT_AVATAR_URL}
          alt="Parent profile"
          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-night font-label truncate">Sarah Green</p>
          <p className="text-xs text-night/40 font-label truncate">Parent account</p>
        </div>
        <div className="flex items-center gap-0.5">
          <button className="p-1.5 rounded-lg hover:bg-warm transition-colors">
            <Bell className="w-4 h-4 text-night/40" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-warm transition-colors">
            <Settings className="w-4 h-4 text-night/40" />
          </button>
        </div>
      </div>

      {/* Bottom util links */}
      <div className="border-t border-night/5 py-2">
        {[{ icon: HelpCircle, label: 'Help' }, { icon: LogOut, label: 'Logout' }].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 text-night/40 py-2 px-4 hover:text-primary hover:bg-primary/5 transition-colors"
          >
            <Icon className="w-4 h-4" />
            <span className="font-label text-xs">{label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
