
import React from 'react';
import { COMPARISON_DATA } from '../constants';

const ComparisonVisual: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-inkNavy/10 bg-white shadow-lg">
      {/* Desktop View */}
      <div className="hidden md:block">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-inkNavy text-white">
              <th className="p-6 font-serif text-lg">Key Feature</th>
              <th className="p-6 font-serif text-lg bg-brass text-white">2 Teachers Travel</th>
              <th className="p-6 font-serif text-lg">Big Travel Companies</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-inkNavy/10">
            {COMPARISON_DATA.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-warmStone/20'}>
                <td className="p-6 font-semibold text-inkNavy">{item.feature}</td>
                <td className="p-6 font-medium text-inkNavy bg-brass/5">{item.ourValue}</td>
                <td className="p-6 text-slate">{item.competitorValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {COMPARISON_DATA.map((item, idx) => (
          <div key={idx} className="p-6 border-b border-inkNavy/10 last:border-0">
            <h4 className="font-bold text-inkNavy mb-3 text-lg">{item.feature}</h4>
            <div className="space-y-3">
              <div className="bg-brass/10 p-4 rounded-lg border border-brass/20">
                <span className="block text-xs font-bold uppercase tracking-wider text-brass mb-1">2 Teachers Travel</span>
                <p className="font-medium text-inkNavy">{item.ourValue}</p>
              </div>
              <div className="bg-slate/5 p-4 rounded-lg border border-slate/10">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate mb-1">Big Companies</span>
                <p className="text-slate">{item.competitorValue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonVisual;
