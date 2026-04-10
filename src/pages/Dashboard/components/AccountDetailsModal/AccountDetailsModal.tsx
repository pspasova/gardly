import { X, Copy, CheckCheck } from 'lucide-react';
import { useState } from 'react';
import { AccountDetails } from '../../../../constants/dashboard';

interface AccountDetailsModalProps {
  childName: string;
  details: AccountDetails;
  onClose: () => void;
}

function CopyableRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between py-3.5 border-b border-haze/60 last:border-0">
      <div>
        <p className="text-xs font-label text-night/50 uppercase tracking-wide mb-0.5">{label}</p>
        <p className="font-headline font-semibold text-night">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="p-2 rounded-lg hover:bg-haze/60 transition-colors text-night/40 hover:text-tertiary"
      >
        {copied ? <CheckCheck size={16} className="text-secondary" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function AccountDetailsModal({ childName, details, onClose }: AccountDetailsModalProps) {
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
        <div className="bg-secondary px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs font-label uppercase tracking-wide">Account details for</p>
            <h2 className="text-white font-headline font-bold text-lg">{childName}</h2>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-2">
          <CopyableRow label="Account Name" value={details.accountName} />
          <CopyableRow label="Account Number" value={details.accountNumber} />
          <CopyableRow label="Sort Code" value={details.sortCode} />
          <CopyableRow label="IBAN" value={details.iban} />
          <CopyableRow label="Bank" value={details.bankName} />
        </div>

        <div className="px-6 pb-6 pt-3">
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
