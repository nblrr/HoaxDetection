import React, { useRef } from 'react';

export default function VerdictCard({ verdict, confidence, candidatesFound, topReferences = [] }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  // Determine colors based on verdict
  let verdictColor = 'text-amber-400';
  let glowColor = 'bg-amber-400/10';
  let strokeColor = 'text-amber-400';

  if (verdict === 'HOAX') {
    verdictColor = 'text-error';
    glowColor = 'bg-error/10';
    strokeColor = 'text-error';
  } else if (verdict === 'VALID') {
    verdictColor = 'text-emerald-400';
    glowColor = 'bg-emerald-400/10';
    strokeColor = 'text-emerald-400';
  }

  // Calculate highest similarity
  const highestSimilarityVal = topReferences.length > 0 ? topReferences[0].similarity : 0;
  const highestSimilarityText = highestSimilarityVal > 0 ? `${Math.round(highestSimilarityVal * 100)}%` : '0%';

  // SVG dash offset calculation (Circumference of circle r=42 is ~264)
  const circumference = 264;
  const dashoffset = Math.round(circumference * (1 - confidence));

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="lg:col-span-7 glass-surface-low rounded-3xl p-10 border border-white/5 relative overflow-hidden group transition-all duration-300"
    >
      <div className={`absolute top-0 right-0 w-64 h-64 ${glowColor} blur-[80px] -translate-y-1/2 translate-x-1/2 transition-all duration-500`}></div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-start mb-12">
        <div>
          <h2 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-2">Primary Verdict</h2>
          <span className={`text-[44px] sm:text-[72px] lg:text-[80px] font-bold ${verdictColor} leading-none tracking-tighter transition-all duration-300 break-words block`}>
            {verdict}
          </span>
        </div>
        <div className="relative w-32 h-32 flex-shrink-0 mx-auto sm:mx-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="8"></circle>
            <circle
              className={`${strokeColor} transition-all duration-500`}
              cx="50"
              cy="50"
              fill="transparent"
              r="42"
              stroke="currentColor"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              strokeLinecap="round"
              strokeWidth="8"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-headline-md font-bold text-on-surface">{Math.round(confidence * 100)}%</span>
            <span className="text-[10px] text-on-surface-variant uppercase font-bold">Confidence</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
          <h3 className="text-label-md font-label-md text-on-surface mb-4">Explainable AI Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <span className="text-display-lg text-[28px] font-bold text-primary mb-1">{highestSimilarityText}</span>
              <span className="text-label-sm text-outline-variant">Highest Similarity</span>
            </div>
            <div className="flex flex-col">
              <span className="text-display-lg text-[28px] font-bold text-primary mb-1">
                {verdict === 'TIDAK DAPAT DIVERIFIKASI' ? 'N/A' : verdict}
              </span>
              <span className="text-label-sm text-outline-variant">Voting Result</span>
            </div>
            <div className="flex flex-col">
              <span className="text-display-lg text-[28px] font-bold text-primary mb-1">{candidatesFound} Found</span>
              <span className="text-label-sm text-outline-variant">Matching Sources</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
