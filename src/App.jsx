import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import VerificationForm from './components/VerificationForm';
import AnalysisPipeline from './components/AnalysisPipeline';
import VerdictCard from './components/VerdictCard';
import KnowledgeGraphCard from './components/KnowledgeGraphCard';
import SupportingReferences from './components/SupportingReferences';
import StatisticsCards from './components/StatisticsCards';
import AboutModel from './components/AboutModel';
import Footer from './components/Footer';

import { verifyNews, checkHealth, fetchInfo } from './services/predict';

export default function App() {
  const [systemStatus, setSystemStatus] = useState('Checking');
  const [systemInfo, setSystemInfo] = useState(null);
  
  const [activeTab, setActiveTab] = useState('verify'); // Tab selection state: 'verify' or 'about'
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  // Background status check loop
  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        await checkHealth();
        setSystemStatus('Ready');
        const info = await fetchInfo();
        setSystemInfo(info);
      } catch (err) {
        console.error("Backend connection check failed:", err);
        setSystemStatus('Offline');
      }
    };
    checkBackendStatus();
    const interval = setInterval(checkBackendStatus, 15000); // Check status every 15s
    return () => clearInterval(interval);
  }, []);

  const handleVerify = async (query) => {
    setIsLoading(true);
    setPredictionResult(null);
    setError(null);
    setCurrentStep(1);

    const startTime = Date.now();

    // Progress animation timeline simulator
    let step = 1;
    const intervalId = setInterval(() => {
      if (step < 4) {
        step += 1;
        setCurrentStep(step);
      } else {
        clearInterval(intervalId);
      }
    }, 1200);

    try {
      const data = await verifyNews(query);
      
      // Ensure smooth progressive timeline transitions (at least 1.2s per step up to step 4)
      const elapsedTime = Date.now() - startTime;
      const minAnimationTime = 4.8 * 1000; // 4 steps * 1.2 seconds
      const remainingTime = Math.max(0, minAnimationTime - elapsedTime);

      setTimeout(() => {
        clearInterval(intervalId);
        setCurrentStep(5);
        setPredictionResult(data);
        setIsLoading(false);
      }, remainingTime);

    } catch (err) {
      clearInterval(intervalId);
      setIsLoading(false);
      setCurrentStep(0);
      
      let friendlyError = "Unable to connect to the AI verification service. Please try again later.";
      if (err.response) {
        friendlyError = err.response.data?.detail || `API request failed with code ${err.response.status}.`;
      } else if (err.code === 'ECONNABORTED') {
        friendlyError = "Request timed out. The AI analysis engine is taking longer than expected. Please try again.";
      } else if (err.message && err.message.toLowerCase().includes('network error')) {
        friendlyError = "Unable to connect to the AI verification service. The server or Ngrok tunnel may be offline. Please verify the backend status.";
      }
      setError(friendlyError);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col justify-between selection:bg-primary/30">
      <div>
        <Navbar systemStatus={systemStatus} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="pt-32 pb-24">
          {activeTab === 'about' ? (
            <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
              <AboutModel systemInfo={systemInfo} />
            </div>
          ) : (
            <>
              {/* Hero Header Section */}
              <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16 relative">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
                <h1 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-6 tracking-tight">
                  Political News AI Detector
                </h1>
                <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                  Verify political news using Knowledge Graph Search and IndoBERT Semantic Analysis for claim validation.
                </p>
                
                <VerificationForm onVerify={handleVerify} isLoading={isLoading} />
              </section>

              {/* Workflow/Progress Timeline */}
              {(isLoading || predictionResult) && (
                <AnalysisPipeline currentStep={currentStep} isLoading={isLoading} />
              )}

              {/* Dynamic Content States */}
              <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
                {/* 1. Loading Overlay & Step Messaging */}
                {isLoading && (
                  <div className="max-w-4xl mx-auto glass-surface-low rounded-3xl p-12 text-center border border-white/5 shadow-xl animate-pulse">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
                    <h3 className="text-headline-md font-bold text-on-surface mb-2">Analyzing Claim...</h3>
                    <p className="text-on-surface-variant transition-all duration-300">
                      {currentStep === 1 && "Running tokenization and extracting claim keywords..."}
                      {currentStep === 2 && "Traversing knowledge graph to find context candidates..."}
                      {currentStep === 3 && "Filtering overlapping nodes and pulling database evidence references..."}
                      {currentStep === 4 && "Processing IndoBERT transformer layers to calculate semantic similarities..."}
                      {currentStep === 5 && "Aggregating voting consensus to determine the final verdict..."}
                    </p>
                  </div>
                )}

                {/* 2. Error State */}
                {error && (
                  <div className="max-w-4xl mx-auto rounded-3xl p-8 bg-error/10 border border-error/20 text-center shadow-xl">
                    <span className="material-symbols-outlined text-[48px] text-error mb-4">warning</span>
                    <h3 className="text-headline-md font-bold text-error mb-2">Connection Failure</h3>
                    <p className="text-on-surface max-w-lg mx-auto mb-6">{error}</p>
                    <button 
                      onClick={() => setError(null)}
                      className="px-6 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-label-md font-label-md text-on-surface cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                {/* 3. Empty State */}
                {!isLoading && !predictionResult && !error && (
                  <div className="max-w-4xl mx-auto glass-surface-low rounded-3xl p-12 text-center border border-white/5 shadow-xl">
                    <span className="material-symbols-outlined text-[64px] text-primary/40 mb-6">explore</span>
                    <h3 className="text-headline-md font-bold text-on-surface mb-3">Ready to Analyze</h3>
                    <p className="text-on-surface-variant max-w-lg mx-auto">
                      Paste political news, a statement, or a headline in the verification form above to run the hybrid AI pipeline.
                    </p>
                  </div>
                )}

                {/* 4. Success State (Verdict + Path Cards) */}
                {!isLoading && predictionResult && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                    <VerdictCard 
                      verdict={predictionResult.verdict}
                      confidence={predictionResult.confidence}
                      candidatesFound={predictionResult.candidates_found}
                      topReferences={predictionResult.top_references}
                    />
                    <KnowledgeGraphCard 
                      keywords={predictionResult.keywords}
                      topReferences={predictionResult.top_references}
                    />
                  </div>
                )}
              </div>

              {/* References & Stats */}
              {!isLoading && predictionResult && (
                <>
                  <SupportingReferences topReferences={predictionResult.top_references} />
                  <StatisticsCards 
                    bfsNodesVisited={predictionResult.bfs_nodes_visited}
                    candidatesFound={predictionResult.candidates_found}
                    candidatesUsed={predictionResult.candidates_used}
                    precision={systemInfo?.metrics?.precision || 1.0000}
                  />
                </>
              )}
            </>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

