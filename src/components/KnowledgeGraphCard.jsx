import React, { useState } from 'react';

export default function KnowledgeGraphCard({ keywords = [], topReferences = [] }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Use actual API data
  const activeKeywords = keywords && keywords.length > 0 ? keywords.slice(0, 5) : [];
  const activeReferences = topReferences && topReferences.length > 0 ? topReferences.slice(0, 3) : [];

  // Calculate coordinates programmatically
  // Center is at (50%, 50%)
  const centerX = 50;
  const centerY = 50;

  // Keyword positions (Left side: X = 18%)
  const kwX = 18;
  const keywordNodes = activeKeywords.map((word, index) => {
    const total = activeKeywords.length;
    // Distribute vertically from 15% to 85%
    const y = total > 1 ? 15 + (70 * index) / (total - 1) : 50;
    return { id: `kw-${index}`, label: word, x: kwX, y, type: 'keyword' };
  });

  // Reference positions (Right side: X = 82%)
  const refX = 82;
  const referenceNodes = activeReferences.map((ref, index) => {
    const total = activeReferences.length;
    // Distribute vertically from 20% to 80%
    const y = total > 1 ? 20 + (60 * index) / (total - 1) : 50;
    return { id: `ref-${index}`, label: ref.source, title: ref.title, x: refX, y, type: 'reference' };
  });

  // Bipartite connections between keywords and references based on matched_kws
  const connections = [];
  referenceNodes.forEach((refNode, refIdx) => {
    const refData = activeReferences[refIdx];
    if (refData && refData.matched_kws) {
      refData.matched_kws.forEach((kw) => {
        // Find matching keyword node
        const kwNode = keywordNodes.find(n => n.label.toLowerCase() === kw.toLowerCase());
        if (kwNode) {
          connections.push({
            id: `edge-${kwNode.id}-${refNode.id}`,
            x1: kwNode.x,
            y1: kwNode.y,
            x2: refNode.x,
            y2: refNode.y,
            kwId: kwNode.id,
            refId: refNode.id
          });
        }
      });
    }
  });

  const handleMouseEnter = (nodeId) => {
    setHoveredNode(nodeId);
  };

  const handleMouseLeave = () => {
    setHoveredNode(null);
  };

  return (
    <div className="lg:col-span-5 glass-surface-low rounded-3xl p-8 border border-white/5 flex flex-col min-h-[420px] justify-between">
      <div>
        <h3 className="text-headline-md font-headline-md mb-2">Verification Path</h3>
        <p className="text-label-sm text-outline-variant uppercase tracking-wider mb-6">Real-Time Knowledge Architecture</p>
      </div>

      {/* Graph Area */}
      <div className="flex-grow relative w-full h-[240px] rounded-2xl bg-surface-container-low/20 border border-white/5 overflow-hidden">
        {/* Radial grid dots */}
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(187,195,255,0.2) 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>
        
        {/* SVG Connections Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Keyword Extraction Connections (Claim -> Keywords) */}
          {keywordNodes.map((node) => {
            const isHovered = hoveredNode === node.id || hoveredNode === 'center';
            return (
              <line
                key={`extract-${node.id}`}
                x1={`${centerX}%`}
                y1={`${centerY}%`}
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke={isHovered ? '#bbc3ff' : 'rgba(255, 255, 255, 0.15)'}
                strokeWidth={isHovered ? 2 : 1}
                strokeDasharray="4 3"
                className="transition-all duration-300"
              />
            );
          })}

          {/* Actual Bipartite Graph Edges (Keywords -> References) */}
          {connections.map((edge) => {
            const isHovered = hoveredNode === edge.kwId || hoveredNode === edge.refId || hoveredNode === 'center';
            return (
              <line
                key={edge.id}
                x1={`${edge.x1}%`}
                y1={`${edge.y1}%`}
                x2={`${edge.x2}%`}
                y2={`${edge.y2}%`}
                stroke={isHovered ? '#34d399' : 'rgba(187, 195, 255, 0.1)'}
                strokeWidth={isHovered ? 2 : 1}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Center Node (Claim Entity) */}
        <div
          style={{ left: `${centerX}%`, top: `${centerY}%`, transform: 'translate(-50%, -50%)' }}
          className={`absolute w-20 h-20 rounded-full border flex flex-col items-center justify-center text-center p-2 z-20 cursor-pointer transition-all duration-300 ${
            hoveredNode === 'center' 
              ? 'border-primary bg-primary/20 scale-105 shadow-[0_0_20px_rgba(187,195,255,0.4)]' 
              : 'border-primary/30 bg-primary/5 shadow-[0_0_12px_rgba(187,195,255,0.1)]'
          }`}
          onMouseEnter={() => handleMouseEnter('center')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="material-symbols-outlined text-[18px] text-primary mb-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
          <span className="text-[9px] font-bold text-primary uppercase leading-none tracking-tighter">Claim Node</span>
        </div>

        {/* Keyword Nodes (Left) */}
        {keywordNodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
              className={`absolute px-2.5 py-1.5 rounded-lg border text-on-surface font-mono text-[9px] flex items-center gap-1 z-20 cursor-default max-w-[120px] transition-all duration-300 truncate ${
                isHovered 
                  ? 'border-primary/60 bg-primary/10 shadow-lg scale-105' 
                  : 'border-white/10 bg-white/5'
              }`}
              onMouseEnter={() => handleMouseEnter(node.id)}
              onMouseLeave={handleMouseLeave}
              title={node.label}
            >
              <span className="material-symbols-outlined text-[10px] text-primary shrink-0">key</span>
              <span className="truncate">{node.label}</span>
            </div>
          );
        })}

        {/* Reference Nodes (Right) */}
        {referenceNodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
              className={`absolute px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 z-20 cursor-default max-w-[130px] transition-all duration-300 truncate ${
                isHovered 
                  ? 'border-emerald-400/60 bg-emerald-500/10 shadow-lg scale-105' 
                  : 'border-primary/20 bg-primary/5'
              }`}
              onMouseEnter={() => handleMouseEnter(node.id)}
              onMouseLeave={handleMouseLeave}
              title={`${node.label}: ${node.title}`}
            >
              <span className="material-symbols-outlined text-[10px] text-emerald-400 shrink-0">description</span>
              <span className="text-emerald-400 font-bold text-[9px] truncate">{node.label}</span>
            </div>
          );
        })}
      </div>

      {/* Explanation block below the graph */}
      <p className="mt-4 text-[11px] text-on-surface-variant/80 italic leading-relaxed text-center">
        This visualization represents the keywords extracted from the query and the supporting references retrieved through Knowledge Graph search.
      </p>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-label-sm text-outline-variant">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Lexical Entry Node (TF-IDF)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          BFS Document Match (KG)
        </span>
      </div>
    </div>
  );
}
