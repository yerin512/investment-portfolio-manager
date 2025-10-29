import React from "react";

type Row = { symbol: string; shares: number; price: number };

const sample: Row[] = [
  { symbol: "AAPL", shares: 10, price: 170 },
  { symbol: "TSLA", shares: 5, price: 230 },
  { symbol: "GOOG", shares: 2, price: 2850 },
];

export default function PortfolioTable() {
  return (
    <section className="w-full mx-auto max-w-4xl px-6 py-8">
      <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Symbol</th>
              <th className="pb-2">Shares</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {sample.map((r) => (
              <tr key={r.symbol} className="border-t">
                <td className="py-3">{r.symbol}</td>
                <td className="py-3">{r.shares}</td>
                <td className="py-3">${r.price.toLocaleString()}</td>
                <td className="py-3">${(r.shares * r.price).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
