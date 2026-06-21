import React, { useState } from 'react';

export default function VerificationForm({ onVerify, isLoading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onVerify(query);
    }
  };

  return (
    <div className="glass-surface-high rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
          className="w-full bg-transparent border-none focus:ring-0 text-body-lg placeholder:text-outline-variant resize-none h-40 mb-6 text-on-surface focus:outline-none"
          placeholder="Paste a political news article, claim, or statement here for real-time verification..."
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex gap-4">
            <button
              type="button"
              className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">link</span>
              Paste URL
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">upload_file</span>
              Upload PDF
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="w-full sm:w-auto bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-headline-md text-headline-md px-10 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary-container/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? 'Verifying...' : 'Verify News'}
          </button>
        </div>
      </form>
    </div>
  );
}
