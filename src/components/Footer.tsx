import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.jpg" 
                alt="Golden Touch" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Golden Touch
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Créateur de bijoux de luxe en or et argent 925. Nos créations personnalisées 
              sont fabriquées avec passion et savoir-faire artisanal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100076350391468"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full hover:from-gold-700 hover:to-gold-600 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/gt_golden_touch/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full hover:from-gold-700 hover:to-gold-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Collections
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/collections"
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Colliers
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Bracelets
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Accessoires
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Sfax, Tunisie
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+216 25 922 759</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">chaabena239@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Lun - Ven: 9h00 - 18h00</p>
                  <p className="text-gray-300 text-sm">Sam: 9h00 - 17h00</p>
                  <p className="text-gray-300 text-sm">Dim: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Restez informé de nos nouveautés
            </h3>
            <p className="text-gray-300 mb-6">
              Inscrivez-vous à notre newsletter pour découvrir en avant-première nos nouvelles créations
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-3 rounded-lg font-medium hover:from-gold-700 hover:to-gold-600 transition-all duration-300 transform hover:scale-105">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2025 Golden Touch. Tous droits réservés.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Mentions légales
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Fait avec</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>en Sfax</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;