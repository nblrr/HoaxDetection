import React from 'react';

export default function AboutModel({ systemInfo = null }) {
  // Use loaded backend info, fallback to static defaults if server is loading or offline
  const nodes = systemInfo?.knowledge_graph?.nodes_count || 29806;
  const edges = systemInfo?.knowledge_graph?.edges_count || 200442;
  const vocabSize = systemInfo?.tfidf?.num_features || 5000;
  const embeddingsCache = systemInfo?.embeddings_cache?.cache_size || 25070;
  const device = systemInfo?.device ? systemInfo.device.toUpperCase() : 'CPU';

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Hero Header Section */}
      <section className="text-center max-w-3xl mx-auto mb-16 relative">
        <h1 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-6 tracking-tight">
          Veritas AI Model Architecture
        </h1>
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
          A hybrid decision engine combining TF-IDF lexical analysis, Breadth-First Search (BFS) Knowledge Graph retrieval, and context-aware IndoBERT semantic similarity.
        </p>
      </section>

      {/* Grid: System Architecture Flow */}
      <section className="glass-surface-low rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] -translate-y-1/2 -translate-x-1/2"></div>
        
        <h2 className="text-headline-lg font-headline-lg text-on-surface mb-8">System Architecture</h2>
        
        {/* Timeline Flow */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 before:md:left-1/2 before:-translate-x-[0.5px] before:w-[1px] before:bg-white/10">
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center relative gap-6 md:gap-12">
            <div className="md:w-1/2 md:text-right flex flex-row-reverse md:flex-row items-center gap-4 justify-end">
              <div>
                <span className="bg-white/5 border border-white/10 text-outline-variant px-3 py-1 rounded-full text-label-sm uppercase font-mono tracking-wider">Step 1</span>
                <h3 className="text-body-lg font-bold text-on-surface mt-2">Text Normalization & TF-IDF</h3>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container-high border border-white/15 flex items-center justify-center text-primary z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
              <span className="material-symbols-outlined text-lg">key</span>
            </div>
            <div className="md:w-1/2">
              <p className="text-body-md text-on-surface-variant">
                The input news query is cleaned, lowercased, and processed. The system extracts the top 8 most informative keywords using a pre-trained TF-IDF vectorizer fitted on the corpus.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center relative gap-6 md:gap-12">
            <div className="md:w-1/2 md:text-right flex flex-row-reverse md:flex-row items-center gap-4 justify-end md:order-last">
              <div className="md:text-left">
                <span className="bg-white/5 border border-white/10 text-outline-variant px-3 py-1 rounded-full text-label-sm uppercase font-mono tracking-wider">Step 2</span>
                <h3 className="text-body-lg font-bold text-on-surface mt-2">Knowledge Graph Traversals</h3>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container-high border border-white/15 flex items-center justify-center text-primary z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
              <span className="material-symbols-outlined text-lg">hub</span>
            </div>
            <div className="md:w-1/2 md:text-right md:order-first">
              <p className="text-body-md text-on-surface-variant">
                The extracted keywords act as entry points into our 29,806-node Knowledge Graph. A Breadth-First Search (BFS) traverses up to a depth of 2 to retrieve candidate articles that share structural keywords with the query.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center relative gap-6 md:gap-12">
            <div className="md:w-1/2 md:text-right flex flex-row-reverse md:flex-row items-center gap-4 justify-end">
              <div>
                <span className="bg-white/5 border border-white/10 text-outline-variant px-3 py-1 rounded-full text-label-sm uppercase font-mono tracking-wider">Step 3</span>
                <h3 className="text-body-lg font-bold text-on-surface mt-2">IndoBERT Semantic Embedding</h3>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container-high border border-white/15 flex items-center justify-center text-primary z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
              <span className="material-symbols-outlined text-lg">compare_arrows</span>
            </div>
            <div className="md:w-1/2">
              <p className="text-body-md text-on-surface-variant">
                The query text and retrieved candidate texts are passed to a pre-trained IndoBERT Transformer model. Contextual embeddings are generated to measure fine-grained semantic cosine similarity.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-start md:items-center relative gap-6 md:gap-12">
            <div className="md:w-1/2 md:text-right flex flex-row-reverse md:flex-row items-center gap-4 justify-end md:order-last">
              <div className="md:text-left">
                <span className="bg-white/5 border border-white/10 text-outline-variant px-3 py-1 rounded-full text-label-sm uppercase font-mono tracking-wider">Step 4</span>
                <h3 className="text-body-lg font-bold text-on-surface mt-2">Similarity Filtering & Voting</h3>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container-high border border-white/15 flex items-center justify-center text-primary z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
              <span className="material-symbols-outlined text-lg">verified</span>
            </div>
            <div className="md:w-1/2 md:text-right md:order-first">
              <p className="text-body-md text-on-surface-variant">
                Candidates with similarity scores exceeding the configured threshold (default 0.45) vote on the outcome. The final verdict (HOAX or VALID) is decided by a voting consensus weighted by each article's cosine similarity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Two Column details: Stats and Dataset */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        
        {/* Live Model Statistics */}
        <section className="glass-surface-low rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
          <div>
            <h2 className="text-headline-md font-headline-md mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Live Model Parameters
            </h2>
            <p className="text-body-md text-on-surface-variant mb-8">
              Active parameters loaded into the FastAPI server lifespan state, demonstrating real-time knowledge graph density and precomputed caches.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <span className="text-[10px] text-outline-variant uppercase font-bold tracking-wider block">Graph Nodes</span>
                <span className="text-[24px] font-mono font-bold text-primary">{nodes.toLocaleString()}</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <span className="text-[10px] text-outline-variant uppercase font-bold tracking-wider block">Graph Edges</span>
                <span className="text-[24px] font-mono font-bold text-primary">{edges.toLocaleString()}</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <span className="text-[10px] text-outline-variant uppercase font-bold tracking-wider block">TF-IDF Features</span>
                <span className="text-[24px] font-mono font-bold text-primary">{vocabSize.toLocaleString()}</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <span className="text-[10px] text-outline-variant uppercase font-bold tracking-wider block">Cached Embeddings</span>
                <span className="text-[24px] font-mono font-bold text-primary">{embeddingsCache.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-label-sm text-outline-variant">
            <span>Inference Device: <span className="font-mono text-on-surface font-semibold">{device}</span></span>
            <span>Status: <span className="text-emerald-400 font-semibold">Active</span></span>
          </div>
        </section>

        {/* Dataset Statistics */}
        <section className="glass-surface-low rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
          <div>
            <h2 className="text-headline-md font-headline-md mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">database</span>
              Dataset Statistics
            </h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              The graph is constructed from 31,325 preprocessed Indonesian news and fact-checking articles.
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-body-md">
                <span className="text-on-surface-variant">Total Corpus Articles</span>
                <span className="font-mono font-bold text-on-surface">31,325</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex">
                <div className="bg-emerald-400 h-full" style={{ width: '66.88%' }} title="Valid News"></div>
                <div className="bg-error h-full" style={{ width: '33.12%' }} title="Hoax News"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-label-sm pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-400"></span>
                  <span className="text-on-surface-variant">Valid News (CNN/Tempo/Kompas): 20,949 (66.9%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-error"></span>
                  <span className="text-on-surface-variant">Hoaxes (TurnBackHoax): 10,376 (33.1%)</span>
                </div>
              </div>
              
              <div className="border-t border-white/5 pt-4 mt-4">
                <span className="text-label-sm text-outline-variant font-bold uppercase tracking-wider block mb-2">Sources Distribution</span>
                <div className="grid grid-cols-2 gap-2 text-label-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">TurnBackHoax:</span>
                    <span className="text-on-surface">10,376</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">CNN Indonesia:</span>
                    <span className="text-on-surface">9,630</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Tempo:</span>
                    <span className="text-on-surface">6,592</span>
                  </div>
                  <div className="flex justify-between text-label-sm font-mono">
                    <span className="text-on-surface-variant">Kompas:</span>
                    <span className="text-on-surface">4,727</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
