import React from 'react';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/products';

const Home = () => {
  return (
    <main className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32">
      {/* Seção Sobre a Alice */}
      <section className="about-section bg-floral-lavender p-6 md:p-10 rounded-xl shadow-md mb-8 flex flex-col lg:flex-row items-center gap-6 fade-in-element">
        <ul className="background-animation">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="lg:w-1/3 flex justify-center content-layer">
          <img 
            src="https://placehold.co/300x300/E6E6FA/333333?text=Alice" 
            alt="Foto da Alice" 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-floral-pink shadow-lg"
          />
        </div>
        <div className="lg:w-2/3 text-center lg:text-left content-layer">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Olá! Eu sou a Alice!</h1>
          <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
            Bem-vindos ao meu cantinho criativo! Tenho 9 aninhos e adoro compartilhar minhas aventuras, brincadeiras e, claro, minhas criações especiais. Aqui você vai encontrar um pedacinho do meu mundo, cheio de cores, diversão e acessórios feitos com muito carinho.
          </p>
          <Link 
            to="/acessorios" 
            className="inline-block btn-floral-primary"
          >
            Descubra minhas criações!
          </Link>
        </div>
      </section>

      {/* Meus Acessórios Favoritos */}
      <section className="mb-8 fade-in-element">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-dark mb-6">Meus Acessórios Favoritos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-2">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className={`product-card ${product.backgroundColor} p-4 rounded-xl shadow-md text-center border border-floral-pink`}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
              />
              <h3 className="text-xl font-semibold text-text-dark mb-2">{product.name}</h3>
              <p className="text-text-dark text-sm mb-4">{product.description}</p>
              <p className="text-lg font-bold text-text-dark mb-4">R$ {product.price.toFixed(2).replace('.', ',')}</p>
              <Link 
                to="/acessorios" 
                className="inline-block btn-floral-secondary"
              >
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Meus Últimos Vídeos */}
      <section className="mb-8 fade-in-element">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-dark mb-6">Meus Últimos Vídeos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-floral-pink">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/4fwUoFdkdi4" 
                title="Momento pintura #desenho #materialescolar" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-text-dark">Momento de pintura!</h3>
              <p className="text-sm text-gray-600">Um dia de estudos.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-floral-pink">
            <div className="video-embed">
              <iframe 
                src="https://www.tiktok.com/@amandadorno/video/7527480137970044216" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-text-dark">Desafio de Miçangas!</h3>
              <p className="text-sm text-gray-600">Criando acessórios super rápidos e divertidos.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-floral-pink">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Vkm1yv_U1Ps" 
                title="Meu momento de pintura" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-text-dark">Tour pelo Meu Quarto!</h3>
              <p className="text-sm text-gray-600">Mostrando meus brinquedos e cantinho de criação.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

