import { X, CreditCard, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CardDetails } from '../../../../constants/dashboard';

interface CardDetailsModalProps {
  childName: string;
  childId: string;
  details: CardDetails;
  onClose: () => void;
}

export default function CardDetailsModal({ childName, childId, details, onClose }: CardDetailsModalProps) {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 bg-night/40 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        id="modal-dialog"
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs font-label uppercase tracking-wide">Card details for</p>
            <h2 className="text-white font-headline font-bold text-lg">{childName}</h2>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Card visual */}
        <div className="px-6 pt-6">
          <div className="bg-gradient-to-br from-primary to-primary/70 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <span className="font-headline font-black text-lg tracking-tight">Gardly</span>
              <CreditCard size={24} className="opacity-80" />
            </div>
            <p className="font-label tracking-widest text-sm opacity-90 mb-4">{details.cardNumber}</p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-white/60 text-xs font-label mb-0.5">CARDHOLDER</p>
                <p className="font-label font-semibold text-sm">{details.cardholderName}</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs font-label mb-0.5">EXPIRES</p>
                <p className="font-label font-semibold text-sm">{details.expiry}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 space-y-3">
          <div className="flex items-center justify-between py-2.5 border-b border-haze/60">
            <p className="text-xs font-label text-night/50 uppercase tracking-wide">Card Type</p>
            <p className="font-label font-semibold text-night text-sm">{details.cardType}</p>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <p className="text-xs font-label text-night/50 uppercase tracking-wide">Status</p>
            <span className={`px-3 py-1 rounded-full text-xs font-label font-bold ${
              details.status === 'Active'
                ? 'bg-secondary/20 text-secondary'
                : details.status === 'Frozen'
                ? 'bg-accent/20 text-tertiary'
                : 'bg-haze text-night/50'
            }`}>
              {details.status}
            </span>
          </div>
        </div>

        <div className="px-6 pb-6 flex flex-col gap-2">
          <button
            onClick={() => { onClose(); navigate(`/cards?child=${childId}`); }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white font-label font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Manage Card
            <ArrowRight size={15} />
          </button>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-haze/60 text-night font-label font-semibold text-sm hover:bg-haze transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
