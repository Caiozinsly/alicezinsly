import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header-fixed p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-text-dark text-3xl md:text-4xl font-bold mb-4 md:mb-0">
          Alice <span className="text-floral-green-text">Zinsly</span>
        </Link>

        <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-lg font-medium">
          <Link 
            to="/" 
            className={`transition duration-300 ${
              isActive('/') 
                ? 'text-floral-green-text' 
                : 'text-text-dark hover:text-floral-green-text'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/acessorios" 
            className={`transition duration-300 ${
              isActive('/acessorios') 
                ? 'text-floral-green-text' 
                : 'text-text-dark hover:text-floral-green-text'
            }`}
          >
            Acessórios
          </Link>
          <Link 
            to="/contato" 
            className={`transition duration-300 ${
              isActive('/contato') 
                ? 'text-floral-green-text' 
                : 'text-text-dark hover:text-floral-green-text'
            }`}
          >
            Contato
          </Link>
          <Link 
            to="/metricas" 
            className={`transition duration-300 ${
              isActive('/metricas') 
                ? 'text-floral-green-text' 
                : 'text-text-dark hover:text-floral-green-text'
            }`}
          >
            Métricas
          </Link>
          <Link 
            to="/jogos" 
            className={`transition duration-300 ${
              isActive('/jogos') 
                ? 'text-floral-green-text' 
                : 'text-text-dark hover:text-floral-green-text'
            }`}
          >
            Jogos
          </Link>
        </nav>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Carrinho de compras */}
          <Link 
            to="/carrinho" 
            className="relative text-text-dark hover:text-floral-green-text transition duration-300 text-2xl"
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="cart-badge">
                {cartItemsCount}
              </span>
            )}
          </Link>

          {/* Redes sociais */}
          <a 
            href="https://www.youtube.com/@alicezinsly" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube da Alice" 
            className="text-text-dark hover:text-red-600 transition duration-300 text-2xl"
          >
            <i className="fab fa-youtube"></i>
            {/*</a>
          <a 
            href="https://www.tiktok.com/@alicezinsly" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="TikTok da Alice" 
            className="text-text-dark hover:text-black transition duration-300 text-2xl"
          >
            <i className="fab fa-tiktok"></i>
          </a>*/}
          <a 
            href="https://www.instagram.com/alicezinsly/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram da Alice" 
            className="text-text-dark hover:text-pink-500 transition duration-300 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

