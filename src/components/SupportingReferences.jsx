import React from 'react';

export default function SupportingReferences({ topReferences = [] }) {
  if (!topReferences || topReferences.length === 0) {
    return null;
  }

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
      <h3 className="text-headline-lg font-headline-lg mb-8">Supporting References</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {topReferences.map((ref, idx) => {
          const similarityPercentage = `${Math.round(ref.similarity * 100)}%`;
          
          // Rotate category labels for diversity
          const categories = ['Politics', 'Public Opinion', 'Media Evidence'];
          const category = categories[idx % categories.length];

          return (
            <div 
              key={idx} 
              className="glass-surface-low rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    {category}
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-headline-md font-bold text-on-surface">{similarityPercentage}</span>
                    <span className="text-[10px] text-outline-variant uppercase">Similarity</span>
                  </div>
                </div>
                <h4 className="text-body-md font-bold text-on-surface mb-3 line-clamp-2" title={ref.title}>
                  {ref.title}
                </h4>
                <p className="text-label-sm text-on-surface-variant mb-6">Source: {ref.source}</p>
              </div>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-label-md font-label-md transition-colors flex items-center justify-center gap-2 text-on-surface text-center cursor-pointer"
              >
                Open Source
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
