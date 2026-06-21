import React from 'react';

export default function StatisticsCards({ bfsNodesVisited = 0, candidatesFound = 0, candidatesUsed = 0, precision = 0.9982 }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-8 border-t border-white/5 opacity-60">
        <div className="flex items-center gap-2">
          <span className="text-label-sm font-label-sm text-outline-variant uppercase tracking-tighter">BFS Nodes Visited:</span>
          <span className="font-mono text-primary font-bold">{bfsNodesVisited.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-label-sm font-label-sm text-outline-variant uppercase tracking-tighter">Candidates Found:</span>
          <span className="font-mono text-primary font-bold">{candidatesFound}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-label-sm font-label-sm text-outline-variant uppercase tracking-tighter">Candidates Used:</span>
          <span className="font-mono text-primary font-bold">{candidatesUsed}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-label-sm font-label-sm text-outline-variant uppercase tracking-tighter">Semantic Precision:</span>
          <span className="font-mono text-primary font-bold">{precision.toFixed(4)}</span>
        </div>
      </div>
    </section>
  );
}
