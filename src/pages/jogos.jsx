import React from 'react';
import { Link } from 'react-router-dom';

const Jogos = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold text-center text-text-dark mb-8">O Cantinho da Diversão da Alice!</h1>

        <section className="bg-floral-lavender p-6 md:p-10 rounded-xl shadow-md mb-8 text-center">
          <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
            Aqui é onde a diversão nunca para! Adoro jogar e me conectar com meus amigos e fãs. Venha descobrir meus jogos favoritos e participar dos grupos de jogos!
          </p>
        </section>

        {/* Meus Jogos Favoritos */}
        <section className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-dark mb-6">Meus Jogos Favoritos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Jogo 1: Roblox */}
            <div className="bg-floral-peach p-6 rounded-xl shadow-md text-center border border-floral-pink">
              <img src="https://placehold.co/400x250/FFDAB9/333333?text=Roblox" alt="Roblox" className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm" />
              <h3 className="text-2xl font-semibold text-text-dark mb-2">Roblox</h3>
              <p className="text-text-dark text-base mb-4">
                Adoro criar e explorar mundos incríveis no Roblox! Meus jogos favoritos são Adopt Me! e Bloxburg.
              </p>
              <a href="https://www.roblox.com/users/SEU_ID_ROBLOX/profile" target="_blank" className="inline-block bg-floral-green text-text-light font-bold py-2 px-4 rounded-full shadow-md hover:bg-floral-pink transition duration-300">
                Meu Perfil no Roblox
              </a>
            </div>
            {/* Card Jogo 2: Minecraft */}
            <div className="bg-floral-yellow p-6 rounded-xl shadow-md text-center border border-floral-pink">
              <img src="https://placehold.co/400x250/FFFACD/333333?text=Minecraft" alt="Minecraft" className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm" />
              <h3 className="text-2xl font-semibold text-text-dark mb-2">Minecraft</h3>
              <p className="text-text-dark text-base mb-4">
                Construir coisas e aventuras no Minecraft é super legal! Adoro explorar cavernas e criar casas gigantes.
              </p>
              <a href="#" className="inline-block bg-floral-green text-text-light font-bold py-2 px-4 rounded-full shadow-md hover:bg-floral-pink transition duration-300">
                Ver Meus Mundos
              </a>
            </div>
            {/* Card Jogo 3: Outro Jogo (Ex: Stumble Guys) */}
            <div className="bg-floral-mint p-6 rounded-xl shadow-md text-center border border-floral-pink">
              <img src="https://placehold.co/400x250/E0FFFF/333333?text=Stumble+Guys" alt="Stumble Guys" className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm" />
              <h3 className="text-2xl font-semibold text-text-dark mb-2">Stumble Guys</h3>
              <p className="text-text-dark text-base mb-4">
                Muita risada e diversão com meus amigos nesse jogo de corrida maluca!
              </p>
              <a href="#" className="inline-block bg-floral-green text-text-light font-bold py-2 px-4 rounded-full shadow-md hover:bg-floral-pink transition duration-300">
                Jogue Comigo!
              </a>
            </div>
          </div>
        </section>

        {/* Jogue Comigo! (Grupos de Jogos) */}
        <section className="bg-floral-lavender p-6 md:p-10 rounded-xl shadow-md mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Quer Jogar Comigo?</h2>
          <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
            Participe dos meus grupos de jogos e venha se divertir nas minhas sessões!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://www.roblox.com/groups/SEU_ID_GRUPO_ROBLOX/Meu-Grupo-da-Alice" target="_blank" className="inline-block bg-floral-green text-text-light font-bold py-3 px-6 rounded-full shadow-lg hover:bg-floral-pink transition duration-300 transform hover:scale-105">
              <i className="fas fa-users mr-2"></i> Grupo no Roblox
            </a>
            <a href="https://discord.gg/SEU_CONVITE_DISCORD" target="_blank" className="inline-block bg-floral-green text-text-light font-bold py-3 px-6 rounded-full shadow-lg hover:bg-floral-pink transition duration-300 transform hover:scale-105">
              <i className="fab fa-discord mr-2"></i> Servidor no Discord
            </a>
          </div>
          <p className="text-base text-gray-700 mt-6">
            **Próximas Sessões de Jogos:**
          </p>
          <ul className="list-disc list-inside text-lg text-text-dark space-y-1 mt-2 max-w-md mx-auto text-left">
            <li>Roblox Adopt Me!: Sábado, 27 de Julho, 15h (Horário de Brasília)</li>
            <li>Minecraft Construção Criativa: Domingo, 28 de Julho, 10h (Horário de Brasília)</li>
          </ul>
        </section>

        {/* Desafios e Quizzes */}
        <section className="bg-floral-peach p-6 md:p-10 rounded-xl shadow-md mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Desafios e Quizzes Divertidos!</h2>
          <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
            Participe dos meus desafios e teste seus conhecimentos nos quizzes! Os melhores serão destacados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#" className="inline-block bg-floral-green text-text-light font-bold py-3 px-6 rounded-full shadow-lg hover:bg-floral-pink transition duration-300 transform hover:scale-105">
              <i className="fas fa-trophy mr-2"></i> Ver Desafios
            </a>
            <a href="#" className="inline-block bg-floral-green text-text-light font-bold py-3 px-6 rounded-full shadow-lg hover:bg-floral-pink transition duration-300 transform hover:scale-105">
              <i className="fas fa-question-circle mr-2"></i> Fazer um Quiz
            </a>
          </div>
        </section>

        {/* Compartilhe Sua Criação! */}
        <section className="bg-floral-yellow p-6 md:p-10 rounded-xl shadow-md text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Compartilhe Sua Criação!</h2>
          <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6">
            Você criou algo inspirado em mim, nos meus jogos ou nos meus acessórios? Me envie uma foto! Adoraria ver e talvez até destacar aqui no site!
          </p>
          <Link to="/contato" className="inline-block bg-floral-green text-text-light font-bold py-3 px-6 rounded-full shadow-lg hover:bg-floral-pink transition duration-300 transform hover:scale-105">
            <i className="fas fa-upload mr-2"></i> Enviar Minha Criação
          </Link>
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
        <span className="developer-credit">Desenvolvido por
          <a href="https://www.instagram.com/caiozinsly/" target="_blank" className="instagram-dev-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="instagram-icon">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            Dev-Caiozinsly
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Jogos;