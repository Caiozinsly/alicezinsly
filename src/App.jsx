import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Acessorios from './pages/Acessorios';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acessorios" element={<Acessorios />} />
            <Route path="/contato" element={<div className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32"><h1 className="text-4xl font-bold text-center">Página em construção</h1></div>} />
            <Route path="/metricas" element={<div className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32"><h1 className="text-4xl font-bold text-center">Página em construção</h1></div>} />
            <Route path="/jogos" element={<div className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32"><h1 className="text-4xl font-bold text-center">Página em construção</h1></div>} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

