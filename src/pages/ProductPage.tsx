import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag, Star, Shield, Truck, RotateCcw, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h2>
          <Link
            to="/collections"
            className="text-gold-600 hover:text-gold-700 font-medium flex items-center justify-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux collections
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gold-600 transition-colors duration-300">Accueil</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-gold-600 transition-colors duration-300">Collections</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className={`animate-slideInLeft ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Thumbnail images would go here if we had multiple images */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`aspect-square bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-gold-500' : 'border-transparent hover:border-gold-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className={`animate-slideInRight ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Category and Rating */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gold-600 uppercase tracking-wide bg-gold-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gold-600">{product.price} TND</span>
                <span className="text-lg text-gray-500 ml-2 line-through">
                  {Math.round(product.price * 1.2)} TND
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Material */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Matériau</h3>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {product.material}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Quantité</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    Total: <span className="font-bold text-gold-600">{(product.price * quantity).toFixed(2)} TND</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-gold-600 to-gold-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-gold-700 hover:to-gold-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </button>
                <button className="px-6 py-4 border-2 border-gold-600 text-gold-600 rounded-lg font-semibold hover:bg-gold-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Favoris
                </button>
                <button className="px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-gold-600" />
                  <div>
                    <div className="font-medium text-gray-900">Garantie</div>
                    <div className="text-sm text-gray-600">2 ans</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-gold-600" />
                  <div>
                    <div className="font-medium text-gray-900">Livraison</div>
                    <div className="text-sm text-gray-600">Gratuite</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-6 w-6 text-gold-600" />
                  <div>
                    <div className="font-medium text-gray-900">Retour</div>
                    <div className="text-sm text-gray-600">30 jours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Produits <span className="bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">Similaires</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-slideUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                      {relatedProduct.name}
                    </h3>
                    <span className="text-lg font-bold text-gold-600">
                      {relatedProduct.price} TND
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;