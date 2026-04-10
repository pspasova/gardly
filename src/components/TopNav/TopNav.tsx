import { Bell, Settings, Search, Eye } from 'lucide-react';
import { PARENT_AVATAR_URL } from '../../constants/dashboard';

export default function TopNav() {
  return (
    <header className="bg-warm fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b border-primary/10 shadow-sm">
      <div className="flex items-center gap-2">
        <Eye className="w-6 h-6 text-primary" strokeWidth={2.5} />
        <span className="text-2xl font-black text-night font-headline tracking-tight">Gardly</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-night/50 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-white border border-accent/40 rounded-full pl-10 pr-5 py-2 text-sm text-night placeholder-night/50 focus:outline-none focus:ring-2 focus:ring-primary/30 w-64 shadow-sm"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-accent/20 transition-colors">
          <Bell className="w-5 h-5 text-night" />
        </button>
        <button className="p-2 rounded-full hover:bg-accent/20 transition-colors">
          <Settings className="w-5 h-5 text-night" />
        </button>
        <img
          src={PARENT_AVATAR_URL}
          alt="Parent profile"
          className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
        />
      </div>
    </header>
  );
}
