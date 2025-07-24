import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  // Estado para controlar a visibilidade do menu responsivo
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-fixed p-4 md:p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-text-dark text-3xl md:text-4xl font-bold">
          Alice <span className="text-floral-green-text">Zinsly</span>
        </Link>

        {/* Botão do Hambúrguer para telas pequenas */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            to="/carrinho"
            className="relative text-text-dark hover:text-floral-green-text transition duration-300 text-2xl"
            onClick={handleLinkClick} // Fechar menu ao clicar no carrinho
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="cart-badge">
                {cartItemsCount}
              </span>
            )}
          </Link>
          {/* Botão de hambúrguer com background e opacidade */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-dark text-2xl focus:outline-none p-2 rounded-full bg-floral-pink bg-opacity-50 hover:bg-opacity-70 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navegação principal - visível em telas grandes, oculta por padrão em pequenas */}
        <nav className={`
          fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-floral-lavender z-50 transform
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:relative md:transform-none md:bg-transparent md:flex md:items-center md:gap-6
          flex flex-col items-center justify-start pt-8 gap-8 text-xl md:text-lg font-medium
          overflow-y-auto  /* Adicionado para permitir rolagem no menu se o conteúdo for grande */
        `}>
          {/* Botão de fechar menu para mobile (dentro do menu) */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-text-dark text-3xl md:hidden focus:outline-none"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <Link
            to="/"
            className={`transition duration-300 ${
              isActive('/')
                ? 'text-floral-green-text'
                : 'text-text-dark hover:text-floral-green-text'
            }`}
            onClick={handleLinkClick}
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
            onClick={handleLinkClick}
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
            onClick={handleLinkClick}
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
            onClick={handleLinkClick}
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
            onClick={handleLinkClick}
          >
            Jogos
          </Link>

          {/* Ícones de redes sociais e carrinho para desktop (permanecem visíveis) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Carrinho de compras */}
            <Link
              to="/carrinho"
              className="relative text-text-dark hover:text-floral-green-text transition duration-300 text-2xl"
              onClick={handleLinkClick}
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
            </a>

            {/* Link do TikTok (comentado)
            <a
              href="https://www.tiktok.com/@alicezinsly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok da Alice"
              className="text-text-dark hover:text-black transition duration-300 text-2xl"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            */}

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
        </nav>
      </div>
    </header>
  );
};

export default Header;
