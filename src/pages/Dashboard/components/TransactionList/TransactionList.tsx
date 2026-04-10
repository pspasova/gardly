import { Gamepad2, Gift, UtensilsCrossed, ArrowUpCircle, BookOpen, LucideIcon } from 'lucide-react';
import { Transaction, TransactionCategory } from '../../../../types/transaction';
import { CHART_BARS, CHART_DAYS } from '../../../../constants/dashboard';

const CATEGORY_ICON_MAP: Record<TransactionCategory, LucideIcon> = {
  Gaming: Gamepad2,
  Allowance: Gift,
  'Food & Drink': UtensilsCrossed,
  'Top-up': ArrowUpCircle,
  Books: BookOpen,
  Other: ArrowUpCircle,
};

const CATEGORY_STYLE_MAP: Record<TransactionCategory, { bg: string; color: string }> = {
  Gaming: { bg: 'bg-haze', color: 'text-night' },
  Allowance: { bg: 'bg-secondary/20', color: 'text-secondary' },
  'Food & Drink': { bg: 'bg-haze', color: 'text-night' },
  'Top-up': { bg: 'bg-secondary/20', color: 'text-secondary' },
  Books: { bg: 'bg-tertiary/20', color: 'text-tertiary' },
  Other: { bg: 'bg-haze', color: 'text-night' },
};

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <section className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-xl">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-black font-headline text-night">Recent Transactions</h3>
        <button className="text-tertiary font-bold text-sm hover:underline font-label">View All</button>
      </div>

      <div className="space-y-2">
        {transactions.map((tx) => {
          const Icon = CATEGORY_ICON_MAP[tx.category];
          const { bg, color } = CATEGORY_STYLE_MAP[tx.category];
          return (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${bg} ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-headline text-night text-sm">{tx.merchant}</h4>
                  <p className="text-xs font-label text-night/50">
                    {tx.category} · {tx.date}
                  </p>
                </div>
              </div>
              <span className={`font-black font-headline text-lg ${tx.isPositive ? 'text-emerald-500' : 'text-night'}`}>
                {tx.amount}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-10 pt-8 border-t border-night/10">
        <div className="flex items-end justify-between h-28 gap-1.5">
          {CHART_BARS.map((bar, i) => (
            <div
              key={i}
              className={`flex-1 ${bar.colorClass} rounded-t-lg`}
              style={{ height: bar.height }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {CHART_DAYS.map((day) => (
            <span key={day} className="flex-1 text-center text-[10px] font-bold text-night/40 uppercase font-label">
              {day}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
