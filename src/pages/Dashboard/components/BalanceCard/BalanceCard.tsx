interface BalanceCardProps {
  childName: string;
  balance: string;
}

export default function BalanceCard({ childName, balance }: BalanceCardProps) {
  return (
    <section
      className="rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg"
      style={{
        aspectRatio: '4 / 3',
        background: 'radial-gradient(circle at 100% 100%, #F472C0 0%, #E040A0 28%, #C02888 55%, #C02888 100%)',
      }}
    >
      <div>
        <span className="uppercase tracking-widest text-xs font-bold text-white/70 font-label">
          {childName}'s Balance
        </span>
        <h1 className="text-6xl font-black font-headline mt-2">{balance}</h1>
      </div>
    </section>
  );
}
