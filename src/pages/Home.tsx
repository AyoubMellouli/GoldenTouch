import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag, ArrowRight, Sparkles, Shield, Palette, Truck, Award } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useCart();
  const featuredProducts = products.filter(product => product.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Luxury jewelry background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-gold-400 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-32 w-1 h-1 bg-gold-300 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gold-500 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-gold-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <Sparkles className="h-16 w-16 text-gold-400 mx-auto mb-6 animate-float" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
              Portez un bijou
            </span>
            <br />
            <span className="text-white">de luxe avec</span>
            <br />
            <span className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Golden Touch
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Notre marque propose des bijoux en or et en argent 925.<br />
            Nos créations sont personnalisées et fabriquées avec passion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collections"
              className="group bg-gradient-to-r from-gold-600 to-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-700 hover:to-gold-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
            >
              Découvrir nos collections
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Why Choose Golden Touch Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi choisir <span className="bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">Golden Touch</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une excellence qui se transmet à travers chaque création
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Guarantee */}
            <div className="group text-center animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-500">
                  <Shield className="h-10 w-10 text-gold-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                Qualité Garantie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bijoux certifiés en or et argent 925, avec garantie de qualité et d'authenticité
              </p>
            </div>

            {/* Personalized Creations */}
            <div className="group text-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-500">
                  <Palette className="h-10 w-10 text-gold-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                Créations Personnalisées
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Designs uniques selon vos désirs, créés sur mesure par nos artisans experts
              </p>
            </div>

            {/* Free Delivery */}
            <div className="group text-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-500">
                  <Truck className="h-10 w-10 text-gold-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                Livraison Gratuite
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Livraison offerte dès 200 TND partout en Tunisie, emballage luxe inclus
              </p>
            </div>

            {/* Artisanal Excellence */}
            <div className="group text-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-500">
                  <Award className="h-10 w-10 text-gold-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                Excellence Artisanale
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Savoir-faire traditionnel français allié aux techniques modernes de joaillerie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos <span className="bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">Créations</span> Phares
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de bijoux d'exception, créés avec passion et savoir-faire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-slideUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors duration-300">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-gradient-to-r from-gold-600 to-gold-500 text-white py-3 rounded-lg font-medium hover:from-gold-700 hover:to-gold-600 transition-all duration-300 flex items-center justify-center"
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gold-600 uppercase tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold-600">
                      {product.price} TND
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-gold-600 hover:text-gold-700 font-medium flex items-center group/link"
                    >
                      Voir détails
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-flex items-center bg-gradient-to-r from-gold-600 to-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-700 hover:to-gold-600 transition-all duration-300 transform hover:scale-105"
            >
              Voir toutes nos collections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                L'Art de la <span className="bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">Bijouterie</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez Golden Touch, chaque bijou raconte une histoire. Nos artisans passionnés 
                travaillent avec les métaux les plus nobles pour créer des pièces uniques qui 
                reflètent votre personnalité et votre style.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous sélectionnons uniquement les matériaux 
                de la plus haute qualité pour garantir la durabilité et l'éclat de vos bijoux.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">500+</div>
                  <div className="text-gray-600">Créations uniques</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">10+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl transform rotate-6"></div>
                <img
                  src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Artisan bijoutier"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce que disent nos <span className="bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">clients</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ayoub M.",
                text: "Des bijoux d'une qualité exceptionnelle ! Mon collier Golden Touch fait sensation à chaque sortie.",
                rating: 5
              },
              {
                name: "Aymen C.",
                text: "Service client impeccable et créations sur mesure parfaites. Je recommande vivement !",
                rating: 5
              },
              {
                name: "Oussama S.",
                text: "La finition est parfaite, les matériaux nobles. Golden Touch, c'est du luxe accessible.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slideUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;