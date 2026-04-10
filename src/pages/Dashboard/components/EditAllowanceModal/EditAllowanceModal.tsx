import { useState } from 'react';
import { X } from 'lucide-react';
import { Allowance } from '../../../../types/allowance';
import { parseToIso, formatFromIso } from '../../../../utils/date';

interface EditAllowanceModalProps {
  childName: string;
  allowance: Allowance;
  onSave: (allowance: Allowance) => void;
  onClose: () => void;
}

export default function EditAllowanceModal({ childName, allowance, onSave, onClose }: EditAllowanceModalProps) {
  const [amount, setAmount] = useState(allowance.amount.replace('£', ''));
  const [isoDate, setIsoDate] = useState(parseToIso(allowance.nextDate));

  const handleSave = () => {
    if (!amount || !isoDate) return;
    onSave({ amount: `£${amount}`, nextDate: formatFromIso(isoDate) });
  };

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
        <div className="bg-tertiary px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs font-label uppercase tracking-wide">Editing allowance for</p>
            <h2 className="text-white font-headline font-bold text-lg">{childName}</h2>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          <div>
            <label className="block text-xs font-label font-semibold text-night/60 uppercase tracking-wide mb-2">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-night/60 font-bold font-headline text-lg">£</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-9 pr-4 py-3 border-2 border-haze rounded-xl font-headline font-bold text-night text-lg focus:outline-none focus:border-tertiary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-label font-semibold text-night/60 uppercase tracking-wide mb-2">
              Next Payment Date
            </label>
            <input
              type="date"
              value={isoDate}
              onChange={(e) => setIsoDate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-haze rounded-xl font-body text-night focus:outline-none focus:border-tertiary transition-colors cursor-pointer"
            />
            {isoDate && (
              <p className="text-xs text-night/50 font-label mt-1.5 pl-1">
                {formatFromIso(isoDate)}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border-2 border-haze text-night/60 font-label font-semibold text-sm hover:bg-haze/40 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!amount || !isoDate}
              className="flex-1 py-2.5 rounded-xl bg-tertiary text-white font-label font-semibold text-sm hover:bg-tertiary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
