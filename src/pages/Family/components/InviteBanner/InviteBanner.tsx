import { Send } from 'lucide-react';

interface InviteBannerProps {
  onInvite: () => void;
}

export default function InviteBanner({ onInvite }: InviteBannerProps) {
  return (
    <div
      className="relative rounded-2xl p-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3EC0C0 0%, #3CA0D8 60%, #6366F1 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-white/10" />
      <div className="absolute -bottom-10 -right-2 w-32 h-32 rounded-full bg-white/10" />
      <div className="absolute top-4 right-32 w-16 h-16 rounded-full bg-white/10" />

      {/* Illustration — two people side by side */}
      <div className="absolute right-10 bottom-0 flex items-end gap-2 opacity-30">
        <svg width="52" height="80" viewBox="0 0 52 80" fill="none">
          <circle cx="16" cy="16" r="12" fill="white"/>
          <path d="M0 60c0-14 7-24 16-24s16 10 16 24v20H0V60z" fill="white"/>
        </svg>
        <svg width="52" height="80" viewBox="0 0 52 80" fill="none">
          <circle cx="16" cy="12" r="10" fill="white"/>
          <path d="M2 58c0-12 6-20 14-20s14 8 14 20v22H2V58z" fill="white"/>
        </svg>
      </div>

      <div className="relative flex flex-col gap-5">
        <div>
          <p className="text-white/70 text-xs font-label uppercase tracking-widest mb-1">Family account</p>
          <h3 className="font-headline font-black text-white text-2xl leading-tight">
            Co-manage with<br />a partner
          </h3>
          <p className="text-white/80 text-sm font-body mt-2 max-w-sm">
            Invite another parent or guardian to share access and manage your children's accounts together.
          </p>
        </div>
        <button
          onClick={onInvite}
          className="self-start flex items-center gap-2 bg-white text-secondary font-label font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors shadow-sm"
        >
          <Send size={15} />
          Send Invite
        </button>
      </div>
    </div>
  );
}
