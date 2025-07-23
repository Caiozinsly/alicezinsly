import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

const Acessorios = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [addedToCart, setAddedToCart] = useState({});

  const handleQuantityChange = (productId, change) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    // Mostrar feedback visual
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
    
    // Resetar quantidade
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  return (
    <main className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-text-dark mb-8">
        Meus Acessórios Feitos com Amor
      </h1>

      {/* Seção de Produtos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <div 
            key={product.id}
            className={`product-card ${product.backgroundColor} p-6 rounded-xl shadow-md text-center border border-floral-pink`}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-56 object-cover rounded-lg mb-4 shadow-sm"
            />
            <h3 className="text-2xl font-semibold text-text-dark mb-2">{product.name}</h3>
            <p className="text-text-dark text-base mb-4">{product.description}</p>
            <p className="text-lg font-bold text-text-dark mb-4">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
            
            {/* Controles de quantidade */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="w-8 h-8 rounded-full bg-white border-2 border-floral-pink flex items-center justify-center hover:bg-floral-pink transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="text-lg font-semibold min-w-[2rem] text-center">
                {quantities[product.id] || 1}
              </span>
              <button
                onClick={() => handleQuantityChange(product.id, 1)}
                className="w-8 h-8 rounded-full bg-white border-2 border-floral-pink flex items-center justify-center hover:bg-floral-pink transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
            
            {/* Botão adicionar ao carrinho */}
            <button
              onClick={() => handleAddToCart(product)}
              className={`inline-flex items-center gap-2 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
                addedToCart[product.id]
                  ? 'bg-green-500 text-white'
                  : 'btn-floral-primary'
              }`}
              disabled={addedToCart[product.id]}
            >
              <ShoppingCart size={20} />
              {addedToCart[product.id] ? 'Adicionado!' : 'Adicionar ao Carrinho'}
            </button>
          </div>
        ))}
      </section>

      {/* Seção "Pedidos Personalizados" */}
      <section className="bg-floral-lavender p-6 md:p-10 rounded-xl shadow-md text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
          Quer um Acessório Exclusivo?
        </h2>
        <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
          Se você tem uma ideia especial ou quer um acessório feito só para você, entre em contato! 
          Adoro criar peças únicas e personalizadas.
        </p>
        <a 
          href="/contato" 
          className="inline-block btn-floral-primary"
        >
          Fazer um Pedido Personalizado
        </a>
      </section>
    </main>
  );
};

export default Acessorios;

