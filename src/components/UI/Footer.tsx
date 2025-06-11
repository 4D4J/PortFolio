
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Nathan Auvray. All rights reserved.
            </p>
          </div>

          {/* Center - Legal Links */}
          <div className="flex flex-col space-y-2">
            {/* French Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-gray-500 font-semibold">🇫🇷 Français</span>
              <Link 
                to="/legal-notice" 
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Confidentialité
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                to="/terms-of-service" 
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                CGU
              </Link>
            </div>
            
            {/* English Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-gray-500 font-semibold">🇺🇸 English</span>
              <Link 
                to="/en/legal-notice" 
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Legal Notice
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                to="/en/privacy-policy" 
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                to="/en/terms-of-service" 
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Right side - Additional info */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              Professional Portfolio
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
          <p className="text-xs text-gray-500">
            Built with React & TypeScript • Hosted securely on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
