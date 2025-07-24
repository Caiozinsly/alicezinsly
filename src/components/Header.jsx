import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Certifique-se de ter uma biblioteca de ícones, como a lucide-react
// npm install lucide-react
import { Menu, X, ShoppingCart } from 'lucide-react';


// Você pode renomear "NavbarCompleta" para o nome do seu componente (ex: Header)
const NavbarCompleta = () => {
  // Estado para controlar se o menu está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Exemplo de estado para a contagem de itens no carrinho
  const [cartItemsCount, setCartItemsCount] = useState(3);

  // Função para fechar o menu (usada nos links e no botão 'X')
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // React Fragment (<>) para agrupar o header e o menu
    <>
      {/* ============================================================ */}
      {/* PARTE 1: HEADER (A BARRA DE NAVEGAÇÃO FIXA NO TOPO)      */}
      {/* ============================================================ */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-40">
        
        {/* Sua Logo */}
        <Link to="/" className="text-text-dark text-3xl md:text-4xl font-bold">
          Alice <span className="text-floral-green-text">Zinsly</span>
        </Link>

        {/* Links de Navegação para DESKTOP (escondidos em telas pequenas) */}
        <nav className="hidden md:flex items-center gap-6 text-green-600">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/acessorios" className="hover:text-blue-500">Acessórios</Link>
          <Link to="/contato" className="hover:text-blue-500">Contato</Link>
        </nav>

        {/* Ícones da Direita (Carrinho e Botão de Menu) */}
        <div className="flex items-center gap-4">
          <Link to="/carrinho" className="relative text-gray-600">
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
          
          {/* Botão Hambúrguer que ABRE o menu (só aparece em mobile) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-600 p-1"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* PARTE 2: MENU MOBILE (A TELA CHEIA QUE DESLIZA)         */}
      {/* ============================================================ */}
      
      {/* Este div está FORA do <header>, por isso pode ocupar a tela toda */}
      <div 
        className={`
          fixed top-0 left-0 w-full h-full bg-floral-pink bg-opacity-95 z-50
          flex flex-col items-center justify-center gap-8 text-2xl
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden
        `}
      >
        {/* Botão 'X' para FECHAR o menu */}
        <button
          onClick={handleCloseMenu}
          className="absolute top-5 right-5 text-text-dark p-2"
          aria-label="Fechar menu"
        >
          <X size={32} />
        </button>

        {/* Links do Menu Mobile */}
        <Link to="/" className="text-text-dark hover:text-floral-green-text" onClick={handleCloseMenu}>Home</Link>
        <Link to="/acessorios" className="text-text-dark hover:text-floral-green-text" onClick={handleCloseMenu}>Acessórios</Link>
        <Link to="/contato" className="text-text-dark hover:text-floral-green-text" onClick={handleCloseMenu}>Contato</Link>
        <Link to="/metricas" className="text-text-dark hover:text-floral-green-text" onClick={handleCloseMenu}>Métricas</Link>
        <Link to="/jogos" className="text-text-dark hover:text-floral-green-text" onClick={handleCloseMenu}>Jogos</Link>
      </div>
    </>
  );
};

export default NavbarCompleta;