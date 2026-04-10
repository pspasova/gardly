import { Child } from '../../../../types/child';

interface ChildSelectorProps {
  child: Child;
  onSwitch: () => void;
}

export default function ChildSelector({ child, onSwitch }: ChildSelectorProps) {
  return (
    <section className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-between shadow-sm border border-white/50">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-primary to-secondary flex-shrink-0">
          <img
            src={child.avatarUrl}
            alt={child.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-headline font-bold text-xl text-night">
            {child.name}, {child.age}
          </h3>
          <p className="text-sm font-label text-night/50">{child.accountLabel}</p>
        </div>
      </div>
      <button
        onClick={onSwitch}
        className="bg-accent/20 text-tertiary font-bold font-label px-4 py-2 rounded-xl text-sm hover:bg-accent/30 transition-colors"
      >
        Switch
      </button>
    </section>
  );
}
