import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content pt-16 pb-8 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Block */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="brand-gradient text-white font-bold px-2.5 py-1 rounded-lg text-lg">DS</span>
              <span className="text-xl font-extrabold tracking-tight">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex space-x-4 text-gray-600">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1 font-medium text-sm">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1 font-medium text-sm">
                 Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1 font-medium text-sm">
                 LinkedIn
              </a>
            </div>
          </div>

          {/* Link Group 1: Product */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-primary transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Link Group 2: Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Link Group 3: Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-base-300 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}