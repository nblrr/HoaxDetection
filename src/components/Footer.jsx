import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
        <div className="flex flex-col gap-2 mb-8 md:mb-0 text-center md:text-left">
          <span className="text-label-md font-label-md font-bold text-on-surface">Veritas AI Research Lab</span>
          <p className="text-label-sm font-label-sm text-outline-variant max-w-sm">Advanced semantic news verification utilizing hybrid knowledge architectures for researchers and journalists.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a className="text-label-sm font-label-sm text-outline-variant hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
            <a className="text-label-sm font-label-sm text-outline-variant hover:text-on-surface transition-colors" href="#">Terms of Service</a>
            <a className="text-label-sm font-label-sm text-outline-variant hover:text-on-surface transition-colors" href="#">API Documentation</a>
            <a className="text-label-sm font-label-sm text-outline-variant hover:text-on-surface transition-colors" href="#">Methodology</a>
          </div>
          <span className="text-label-sm font-label-sm text-outline-variant">© 2024 Veritas AI Research Lab. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
