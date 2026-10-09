type Payout = {
  mult: string;
  shape: "star" | "diamond";
  id: string;
  amount: string;
  deposit: string;
};

const payouts: Payout[] = [
  { mult: "×9.9", shape: "star", id: "ID 89·····75", amount: "5 000 RUB", deposit: "504 RUB депозит" },
  { mult: "×2", shape: "diamond", id: "ID 38·····48", amount: "4 000 RUB", deposit: "1 986 RUB депозит" },
  { mult: "×4.3", shape: "diamond", id: "ID 99·····54", amount: "7 000 RUB", deposit: "1 627 RUB депозит" },
  { mult: "×5", shape: "diamond", id: "ID 93·····42", amount: "7 500 RUB", deposit: "1 507 RUB депозит" },
  { mult: "×7.7", shape: "star", id: "ID 24·····24", amount: "3 200 RUB", deposit: "415 RUB депозит" },
  { mult: "×5", shape: "diamond", id: "ID 79·····65", amount: "5 000 RUB", deposit: "1 003 RUB депозит" },
];

export default function PayoutsTicker() {
  return (
    <section aria-label="Топ выплаты игроков" className="px-3 md:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl bg-panel p-4 md:p-6">
        <div className="flex items-center gap-2">
          <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-snow md:text-xl">Топ выплаты</h2>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-ember" aria-hidden="true">
            <path d="m12 2 2.6 6.9L22 9.3l-5.4 4.8L18.2 22 12 17.8 5.8 22l1.6-7.9L2 9.3l7.4-.4L12 2Z" />
          </svg>
        </div>
        <p className="mt-1 font-heading text-2xl font-bold tracking-tight text-snow md:text-4xl">22 281 284 RUB</p>
        <ul className="w8k3-scroll mt-4 flex gap-3 overflow-x-auto pb-1">
          {payouts.map((p) => (
            <li key={p.id} className="flex min-w-42 shrink-0 items-center gap-2.5 rounded-xl bg-coal p-3">
              <span
                className={`${p.shape === "star" ? "w8k3-star bg-ember" : "w8k3-diamond bg-mint"} flex h-10 w-10 shrink-0 items-center justify-center font-heading text-xs font-bold text-snow`}
                aria-hidden="true"
              >
                {p.mult}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xs text-fog">{p.id}</span>
                <span className="flex items-center gap-1 text-sm font-bold text-snow">
                  {p.amount}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-mint" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
                <span className="text-xs text-fog">{p.deposit}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
