import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Carrinho = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const formatPrice = (price) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  if (items.length === 0) {
    return (
      <main className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32">
        <div className="text-center py-16">
          <ShoppingBag size={80} className="mx-auto text-gray-400 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Seu carrinho está vazio
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Que tal dar uma olhada nos meus acessórios feitos com carinho?
          </p>
          <Link 
            to="/acessorios" 
            className="inline-block btn-floral-primary"
          >
            Ver Acessórios
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-text-dark mb-8">
        Meu Carrinho de Compras
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lista de itens do carrinho */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6 border border-floral-pink">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-text-dark">
                Itens no Carrinho ({items.length})
              </h2>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 transition-colors text-sm font-medium"
              >
                Limpar Carrinho
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  {/* Imagem do produto */}
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Informações do produto */}
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-semibold text-lg text-text-dark">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="font-bold text-text-dark mt-1">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* Controles de quantidade */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-white border-2 border-floral-pink flex items-center justify-center hover:bg-floral-pink transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-lg font-semibold min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-white border-2 border-floral-pink flex items-center justify-center hover:bg-floral-pink transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Subtotal e remover */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-bold text-lg text-text-dark">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Remover item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resumo do pedido */}
        <div className="lg:col-span-1">
          <div className="bg-floral-lavender rounded-xl shadow-md p-6 border border-floral-pink sticky top-32">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Resumo do Pedido</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Frete:</span>
                <span className="font-semibold">A calcular</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link 
                to="/checkout" 
                className="w-full inline-block text-center btn-floral-primary"
              >
                Finalizar Compra
              </Link>
              <Link 
                to="/acessorios" 
                className="w-full inline-block text-center btn-floral-secondary"
              >
                Continuar Comprando
              </Link>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-floral-pink">
              <h3 className="font-semibold text-text-dark mb-2">
                <i className="fas fa-heart text-floral-pink mr-2"></i>
                Feito com Amor
              </h3>
              <p className="text-sm text-gray-600">
                Cada acessório é criado com muito carinho pela Alice. 
                Obrigada por apoiar meu cantinho criativo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carrinho;

