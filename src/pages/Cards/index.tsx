import { useState } from 'react';
import { CreditCard, Snowflake, Zap, ShieldCheck, ArrowUpDown, Eye, EyeOff } from 'lucide-react';
import {
  MOCK_CHILDREN,
  CHILD_CARD_DETAILS,
  CHILD_INACTIVE_CARDS,
  CardDetails,
  InactiveCard,
} from '../../constants/dashboard';
import { Child } from '../../types/child';
import { getSearchParam } from '../../utils/url';

const CARD_GRADIENT = 'radial-gradient(circle at 100% 100%, #818CF8 0%, #6366F1 28%, #4338CA 55%, #3730A3 100%)';

type CardStatus = 'Active' | 'Frozen';
interface CardState { [childId: string]: CardStatus; }

const buildInitialStatus = (): CardState =>
  Object.fromEntries(
    Object.entries(CHILD_CARD_DETAILS).map(([id, d]) => [id, d.status as CardStatus])
  );

function CardVisual({ details, isFrozen }: {
  details: CardDetails | InactiveCard;
  isFrozen?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className={`rounded-2xl p-5 text-white shadow-lg transition-all duration-300 relative ${isFrozen ? 'opacity-50 grayscale' : ''}`}
      style={{ background: CARD_GRADIENT }}
    >
      <div className="flex items-center justify-between mb-8">
        <span className="font-headline font-black text-xl tracking-tight">Gardly</span>
        <button
          onClick={() => setRevealed((v) => !v)}
          className="text-white/70 hover:text-white transition-colors"
          title={revealed ? 'Hide card details' : 'Show card details'}
        >
          {revealed ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <p className="font-label tracking-[0.2em] text-sm opacity-90 mb-6">
        {revealed ? details.fullCardNumber : details.cardNumber}
      </p>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-white/60 text-xs font-label mb-0.5">CARDHOLDER</p>
          <p className="font-label font-semibold">{details.cardholderName}</p>
        </div>
        <div className="flex gap-5">
          <div className="text-right">
            <p className="text-white/60 text-xs font-label mb-0.5">EXPIRES</p>
            <p className="font-label font-semibold">{details.expiry}</p>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-xs font-label mb-0.5">CVV</p>
            <p className="font-label font-semibold">{revealed ? details.cvv : '•••'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InactiveCardRow({ card }: { card: InactiveCard }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex items-center justify-between py-3 border-b border-haze/60 last:border-0 gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-haze flex items-center justify-center flex-shrink-0">
          <CreditCard size={14} className="text-night/30" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-label font-semibold text-night/60">
            {revealed ? card.fullCardNumber : card.cardNumber}
          </p>
          <p className="text-xs text-night/40 font-label">Closed {card.closedDate}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => setRevealed((v) => !v)}
          className="text-night/30 hover:text-night/60 transition-colors"
          title={revealed ? 'Hide' : 'Show card number'}
        >
          {revealed ? <EyeOff size={14} /> : <Eye size={14} />}
        </button>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-label font-bold ${
          card.status === 'Cancelled' ? 'bg-primary/10 text-primary' : 'bg-haze text-night/50'
        }`}>
          {card.status}
        </span>
      </div>
    </div>
  );
}

function CardPanel({ child, details, status, inactiveCards, onToggleFreeze }: {
  child: Child;
  details: CardDetails;
  status: CardStatus;
  inactiveCards: InactiveCard[];
  onToggleFreeze: () => void;
}) {
  const isFrozen = status === 'Frozen';

  return (
    <div className="flex flex-col gap-4">
      {/* Active card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6">
          <CardVisual details={details} isFrozen={isFrozen} />
        </div>

        {/* Child info + status */}
        <div className="px-6 pb-2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-primary to-secondary flex-shrink-0">
            <img
              src={child.avatarUrl}
              alt={child.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="font-headline font-bold text-sm text-night">{child.name}, {child.age}</p>
            <p className="text-xs text-night/50 font-label">{details.cardType}</p>
          </div>
          <span className={`ml-auto px-3 py-1 rounded-full text-xs font-label font-bold flex-shrink-0 ${
            isFrozen ? 'bg-accent/20 text-tertiary' : 'bg-secondary/20 text-secondary'
          }`}>
            {status}
          </span>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 pt-4 grid grid-cols-2 gap-3">
          <button
            onClick={onToggleFreeze}
            className={`flex flex-col items-center gap-2 py-4 rounded-xl font-label text-sm font-semibold transition-colors ${
              isFrozen
                ? 'bg-secondary/10 text-secondary hover:bg-secondary/20'
                : 'bg-accent/10 text-tertiary hover:bg-accent/20'
            }`}
          >
            {isFrozen ? <Zap size={20} /> : <Snowflake size={20} />}
            {isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
          </button>
          <button className="flex flex-col items-center gap-2 py-4 rounded-xl bg-haze/60 text-night/70 font-label text-sm font-semibold hover:bg-haze transition-colors">
            <ArrowUpDown size={20} />
            Spending Limits
          </button>
          <button className="flex flex-col items-center gap-2 py-4 rounded-xl bg-haze/60 text-night/70 font-label text-sm font-semibold hover:bg-haze transition-colors">
            <ShieldCheck size={20} />
            Security
          </button>
          <button className="flex flex-col items-center gap-2 py-4 rounded-xl bg-haze/60 text-night/70 font-label text-sm font-semibold hover:bg-haze transition-colors">
            <CreditCard size={20} />
            Replace Card
          </button>
        </div>
      </div>

      {/* Inactive cards — separate container */}
      {inactiveCards.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm px-6 py-4">
          <p className="text-xs font-label font-semibold text-night/40 uppercase tracking-wide mb-2">
            Inactive cards
          </p>
          {inactiveCards.map((card, i) => (
            <InactiveCardRow key={i} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Cards() {
  const [cardStatus, setCardStatus] = useState<CardState>(buildInitialStatus);

  const focusChildId = getSearchParam('child');
  const orderedChildren = focusChildId
    ? [...MOCK_CHILDREN].sort((a) => (a.id === focusChildId ? -1 : 1))
    : MOCK_CHILDREN;

  const toggleFreeze = (childId: string) =>
    setCardStatus((prev) => ({
      ...prev,
      [childId]: prev[childId] === 'Active' ? 'Frozen' : 'Active',
    }));

  return (
    <div className="flex flex-col gap-8 pt-6">
      <div>
        <h1 className="font-headline font-extrabold text-3xl text-night">Cards</h1>
        <p className="text-night/60 font-body mt-1">Manage your children's Gardly debit cards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {orderedChildren.map((child) => (
          <CardPanel
            key={child.id}
            child={child}
            details={CHILD_CARD_DETAILS[child.id]}
            status={cardStatus[child.id]}
            inactiveCards={CHILD_INACTIVE_CARDS[child.id] ?? []}
            onToggleFreeze={() => toggleFreeze(child.id)}
          />
        ))}
      </div>
    </div>
  );
}
