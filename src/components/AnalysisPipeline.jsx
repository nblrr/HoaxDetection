import React from 'react';

const steps = [
  { id: 1, label: 'Keyword Extraction', icon: 'key' },
  { id: 2, label: 'Knowledge Graph Search', icon: 'hub' },
  { id: 3, label: 'Related Discovery', icon: 'travel_explore' },
  { id: 4, label: 'Semantic Analysis', icon: 'compare_arrows' },
  { id: 5, label: 'AI Verdict', icon: 'verified', isVerdict: true }
];

export default function AnalysisPipeline({ currentStep = 0, isLoading = false }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
      <div className="flex justify-between items-center relative gap-4 overflow-x-auto pb-4 no-scrollbar">
        {steps.map((step, idx) => {
          const isCompleted = currentStep > step.id;
          const isActive = isLoading && currentStep === step.id;
          
          let circleClass = "";
          let textClass = "text-on-surface-variant";
          
          if (step.isVerdict) {
            if (isActive) {
              circleClass = "w-14 h-14 rounded-full bg-primary/30 border border-primary animate-pulse flex items-center justify-center text-primary";
              textClass = "text-primary font-bold animate-pulse";
            } else if (isCompleted || (!isLoading && currentStep === 5)) {
              circleClass = "w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(187,195,255,0.4)]";
              textClass = "text-primary font-bold";
            } else {
              circleClass = "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant/40 opacity-40";
              textClass = "text-on-surface-variant opacity-40";
            }
          } else {
            if (isActive) {
              circleClass = "w-12 h-12 rounded-full bg-primary/20 border border-primary animate-pulse flex items-center justify-center text-primary";
              textClass = "text-primary font-semibold";
            } else if (isCompleted || (!isLoading && currentStep >= step.id)) {
              circleClass = "w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary";
              textClass = "text-on-surface";
            } else {
              circleClass = "w-12 h-12 rounded-full glass-surface-high flex items-center justify-center text-on-surface-variant/40 opacity-40";
              textClass = "text-on-surface-variant/40 opacity-40";
            }
          }

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-3 min-w-[140px] transition-all duration-300">
                <div className={circleClass}>
                  <span className="material-symbols-outlined" style={step.isVerdict ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                    {step.icon}
                  </span>
                </div>
                <span className={`text-label-md font-label-md text-center ${textClass}`}>
                  {step.label}
                </span>
              </div>
              
              {idx < steps.length - 1 && (
                <div className={`flex-grow h-px min-w-[40px] transition-all duration-500 ${
                  (isCompleted || (!isLoading && currentStep > step.id))
                    ? 'bg-gradient-to-r from-primary via-primary/50 to-transparent' 
                    : 'bg-white/5'
                }`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
