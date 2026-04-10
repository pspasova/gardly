import { QUICK_ACTIONS } from '../../../../constants/dashboard';

interface QuickActionsProps {
  onAccountDetails: () => void;
  onCardDetails: () => void;
}

const ACTION_HANDLERS: Record<string, keyof QuickActionsProps> = {
  'Account Details': 'onAccountDetails',
  'Card Details': 'onCardDetails',
};

export default function QuickActions({ onAccountDetails, onCardDetails }: QuickActionsProps) {
  const handlers = { onAccountDetails, onCardDetails };

  return (
    <section className="grid grid-cols-2 gap-4">
      {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={handlers[ACTION_HANDLERS[label]]}
          className="flex flex-col items-center justify-center gap-3 bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-bold text-sm font-headline text-night">{label}</span>
        </button>
      ))}
    </section>
  );
}
