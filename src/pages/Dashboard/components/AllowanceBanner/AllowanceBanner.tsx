import { CalendarDays, Pencil } from 'lucide-react';
import { Allowance } from '../../../../types/allowance';

interface AllowanceBannerProps {
  allowance: Allowance;
  onEdit: () => void;
}

export default function AllowanceBanner({ allowance, onEdit }: AllowanceBannerProps) {
  return (
    <section className="bg-indigo-500 rounded-3xl p-6 text-white flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
          <CalendarDays className="w-8 h-8" />
        </div>
        <div>
          <p className="text-xs font-label uppercase tracking-wider opacity-80">Upcoming Allowance</p>
          <h2 className="text-3xl font-black font-headline">{allowance.amount}</h2>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold font-label whitespace-nowrap">
          Next: {allowance.nextDate}
        </span>
        <button
          onClick={onEdit}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          title="Edit allowance"
        >
          <Pencil size={15} />
        </button>
      </div>
    </section>
  );
}
