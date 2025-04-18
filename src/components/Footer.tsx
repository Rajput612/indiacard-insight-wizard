import { CreditCard, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-6 w-6 text-gold" />
              <h2 className="text-xl font-bold">IndiaCard<span className="text-gold">Insight</span></h2>
            </div>
            <p className="text-gray-300 text-sm">
              Helping Indian consumers find the perfect credit card match based on their unique spending habits.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-2">
            <h3 className="font-medium text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/cards" className="text-gray-300 hover:text-white transition-colors">All Credit Cards</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4 sm:space-y-2">
            <h3 className="font-medium text-gold mb-4">Card Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/cards" className="text-gray-300 hover:text-white transition-colors">Rewards Cards</Link></li>
              <li><Link to="/cards" className="text-gray-300 hover:text-white transition-colors">Cashback Cards</Link></li>
              <li><Link to="/cards" className="text-gray-300 hover:text-white transition-colors">Travel Cards</Link></li>
              <li><Link to="/cards" className="text-gray-300 hover:text-white transition-colors">Fuel Cards</Link></li>
              <li><Link to="/cards" className="text-gray-300 hover:text-white transition-colors">No Annual Fee Cards</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4 sm:space-y-2">
            <h3 className="font-medium text-gold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} IndiaCardInsight. All rights reserved.</p>
          <p className="mt-1">
            IndiaCardInsight is not affiliated with any banking institution. We provide recommendations based on user-provided information.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;