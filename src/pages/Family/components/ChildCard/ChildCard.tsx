import { Eye, CreditCard, TrendingDown, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FamilyChild } from '../../../../types/family';

interface ChildCardProps {
  child: FamilyChild;
}

export default function ChildCard({ child }: ChildCardProps) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <div className="p-0.5 rounded-full bg-gradient-to-br from-primary to-secondary shrink-0">
          <img
            src={child.avatarUrl}
            alt={child.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-white"
          />
        </div>
        <div>
          <p className="font-headline font-bold text-lg text-night leading-tight">
            {child.name}, {child.age}
          </p>
          <span className="text-xs font-label text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full">
            {child.accountLabel}
          </span>
        </div>
      </div>

      <div>
        <p className="text-xs font-label text-night/50 uppercase tracking-wide mb-1">Balance</p>
        <p className="font-headline font-extrabold text-3xl text-night">{child.balance}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-indigo-50 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
            <TrendingDown size={13} />
            <p className="text-xs font-label">Spent this week</p>
          </div>
          <p className="font-semibold text-sm text-night">{child.weeklySpend}</p>
        </div>
        <div className="bg-indigo-50 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
            <CalendarDays size={13} />
            <p className="text-xs font-label">Next allowance</p>
          </div>
          <p className="font-semibold text-sm text-night">{child.nextAllowanceDate}</p>
        </div>
      </div>

      <div className="flex gap-3 pt-1">
        <button
          onClick={() => navigate(`/?child=${child.id}`)}
          className="flex-1 flex items-center justify-center gap-2 text-indigo-600 text-sm font-label font-medium py-2.5 rounded-xl border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all"
        >
          <Eye size={15} />
          View Account
        </button>
        <button
          onClick={() => navigate(`/cards?child=${child.id}`)}
          className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-label font-medium py-2.5 rounded-xl transition-all hover:brightness-110" style={{ background: 'linear-gradient(135deg, #3EC0C0 0%, #3CA0D8 100%)' }}
        >
          <CreditCard size={15} />
          Manage Card
        </button>
      </div>
    </div>
  );
}
