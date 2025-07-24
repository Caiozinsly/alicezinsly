import React from 'react';
import { Link } from 'react-router-dom';

const Metricas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-floral-pink shadow-lg p-4 md:p-6 rounded-b-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link to="/" className="text-text-dark text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            Alice <span className="text-floral-green">Zinsly</span>
          </Link>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-lg font-medium">
            <Link to="/" className="text-text-dark hover:text-floral-green transition duration-300">Home</Link>
            <Link to="/acessorios" className="text-text-dark hover:text-floral-green transition duration-300">Acessórios</Link>
            <Link to="/contato" className="text-text-dark hover:text-floral-green transition duration-300">Contato</Link>
            <Link to="/metricas" className="text-text-dark hover:text-floral-green transition duration-300">Métricas</Link>
            <Link to="/jogos" className="text-text-dark hover:text-floral-green transition duration-300">Jogos</Link>
          </nav>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.youtube.com/@alicezinsly" target="_blank" aria-label="YouTube da Alice" className="text-text-dark hover:text-red-600 transition duration-300 text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@alicezinsly" target="_blank" aria-label="TikTok da Alice" className="text-text-dark hover:text-black transition duration-300 text-2xl">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/alicezinsly/" target="_blank" aria-label="Instagram da Alice" className="text-text-dark hover:text-pink-500 transition duration-300 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-text-dark mb-8">Parcerias e Mídia Kit da Alice</h1>

        <section className="bg-floral-lavender p-6 md:p-10 rounded-xl shadow-md mb-8 text-center">
          <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
            Olá, marcas e empresas! A Alice adora criar conteúdo divertido e engajador para crianças e famílias. Se você busca uma parceria autêntica e com alto impacto, confira nossos dados e entre em contato!
          </p>
          <a href="#" className="inline-block bg-floral-green text-text-light font-bold py-3 px-8 rounded-full shadow-lg hover:bg-floral-pink transition duration-300 transform hover:scale-105">
            Download Mídia Kit (PDF)
          </a>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Dados Demográficos da Audiência */}
          <div className="bg-floral-peach p-6 rounded-xl shadow-md border border-floral-pink">
            <h2 className="text-3xl font-bold text-text-dark mb-4 text-center">Audiência</h2>
            <ul className="list-disc list-inside text-lg text-text-dark space-y-2">
              <li>**Idade Principal:** 6-12 anos (70%), 13-17 anos (20%), Adultos (10%)</li>
              <li>**Gênero:** Feminino (65%), Masculino (35%)</li>
              <li>**Localização:** Brasil (85% - São Paulo, Rio de Janeiro, Minas Gerais), Outros países (15%)</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 text-center">
              (Dados baseados em insights das plataformas sociais, atualizados mensalmente)
            </p>
          </div>

          {/* Engajamento e Alcance */}
          <div className="bg-floral-yellow p-6 rounded-xl shadow-md border border-floral-pink">
            <h2 className="text-3xl font-bold text-text-dark mb-4 text-center">Engajamento e Alcance</h2>
            <ul className="list-disc list-inside text-lg text-text-dark space-y-2">
              <li>**Seguidores no Instagram:** 484 (e crescendo!)</li>
              <li>**Inscritos no YouTube:** 1.2K+</li>
              <li>**Seguidores no TikTok:** 3.5K+</li>
              <li>**Média de Visualizações (YouTube/TikTok):** 500-1.500 por vídeo</li>
              <li>**Taxa de Engajamento (Instagram):** 8-12% (likes, comentários, salvamentos)</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 text-center">
              (Números aproximados e em constante atualização)
            </p>
          </div>
        </section>

        {/* Tipos de Parcerias */}
        <section className="bg-floral-mint p-6 md:p-10 rounded-xl shadow-md text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Tipos de Colaboração</h2>
          <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
            A Alice está aberta a diversas formas de parceria para criar conteúdo divertido e relevante para sua audiência:
          </p>
          <ul className="list-disc list-inside text-lg text-text-dark space-y-2 max-w-2xl mx-auto text-left">
            <li>Reviews e unboxings de produtos infantis (brinquedos, livros, jogos, roupas).</li>
            <li>Vídeos ou posts patrocinados com temas criativos e educativos.</li>
            <li>Participação em eventos e campanhas.</li>
            <li>Criação de conteúdo exclusivo para suas plataformas.</li>
            <li>Colaborações com outras mini-blogueiras.</li>
          </ul>
        </section>

        {/* Contato para Parcerias */}
        <section className="bg-floral-lavender p-6 md:p-10 rounded-xl shadow-md text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Entre em Contato para Parcerias</h2>
          <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
            Para propostas de parceria, entre em contato com a equipe da Alice:
          </p>
          <div className="max-w-xl mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="partner_name" className="block text-text-dark text-lg font-medium mb-2">Seu Nome/Nome da Empresa:</label>
                <input type="text" id="partner_name" name="partner_name" className="w-full p-3 rounded-lg border border-floral-pink focus:outline-none focus:ring-2 focus:ring-floral-green" placeholder="Nome ou Empresa" required />
              </div>
              <div>
                <label htmlFor="partner_email" className="block text-text-dark text-lg font-medium mb-2">E-mail para Contato:</label>
                <input type="email" id="partner_email" name="partner_email" className="w-full p-3 rounded-lg border border-floral-pink focus:outline-none focus:ring-2 focus:ring-floral-green" placeholder="parceria@suaempresa.com" required />
              </div>
              <div>
                <label htmlFor="partner_subject" className="block text-text-dark text-lg font-medium mb-2">Assunto da Proposta:</label>
                <input type="text" id="partner_subject" name="partner_subject" className="w-full p-3 rounded-lg border border-floral-pink focus:outline-none focus:ring-2 focus:ring-floral-green" placeholder="Proposta de Colaboração" required />
              </div>
              <div>
                <label htmlFor="partner_message" className="block text-text-dark text-lg font-medium mb-2">Detalhes da Proposta:</label>
                <textarea id="partner_message" name="partner_message" rows="5" className="w-full p-3 rounded-lg border border-floral-pink focus:outline-none focus:ring-2 focus:ring-floral-green" placeholder="Descreva sua ideia de parceria..." required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="inline-block bg-floral-green text-text-light font-bold py-3 px-8 rounded-full shadow-lg hover:bg-floral-pink transition duration-300 transform hover:scale-105">
                  Enviar Proposta
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-floral-pink p-6 md:p-8 text-center text-text-dark rounded-t-xl mt-8">
        <div className="container mx-auto">
          <p className="mb-4">© 2025 Alice Zinsly - Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-text-dark hover:text-floral-green transition duration-300">Política de Privacidade</a>
            <a href="#" className="text-text-dark hover:text-floral-green transition duration-300">Termos de Uso</a>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://www.youtube.com/@alicezinsly" target="_blank" aria-label="YouTube da Alice" className="text-text-dark hover:text-red-600 transition duration-300 text-xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@alicezinsly" target="_blank" aria-label="TikTok da Alice" className="text-text-dark hover:text-black transition duration-300 text-xl">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/alicezinsly/" target="_blank" aria-label="Instagram da Alice" className="text-text-dark hover:text-pink-500 transition duration-300 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Metricas;