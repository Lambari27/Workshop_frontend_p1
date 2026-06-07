import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            NEXUS CON
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation (Flexbox for 1D layout) */}
          <nav className="hidden md:flex flex-row gap-8 items-center">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#schedule" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Programação</a>
            <a href="#tickets" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Ingressos</a>
            <a href="#tickets" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Garantir Vaga
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-slate-800 border-b border-slate-700 transition-all origin-top duration-300 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
          <nav className="flex flex-col p-4 gap-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-cyan-400">Sobre</a>
            <a href="#schedule" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-cyan-400">Programação</a>
            <a href="#tickets" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-cyan-400">Ingressos</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative w-full min-h-[90vh] flex items-center pt-16 pb-20 overflow-hidden">
          {/* Background Image using picture tag for responsive delivery */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source media="(min-width: 1024px)" srcSet="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" />
              <source media="(min-width: 768px)" srcSet="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop" />
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" 
                alt="Multidão em evento de games" 
                className="w-full h-full object-cover opacity-30"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center gap-6">
            <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold tracking-wider">
              15 A 17 DE NOVEMBRO DE 2026
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              O FUTURO DOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">GAMES</span> COMEÇA AQUI.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mt-4">
              Junte-se a milhares de jogadores, desenvolvedores e entusiastas na maior convenção de jogos e tecnologia do hemisfério sul. 
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#tickets" className="w-full sm:w-auto text-center bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Comprar Ingresso
              </a>
              <a href="#schedule" className="w-full sm:w-auto text-center border-2 border-slate-600 hover:border-slate-400 bg-slate-800/50 backdrop-blur px-8 py-4 rounded-lg font-bold text-lg text-white transition-all">
                Ver Programação
              </a>
            </div>
          </div>
        </section>

        {/* Features / Highlights using CSS Grid for 2D layout */}
        <section id="about" className="py-24 bg-slate-900 relative">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que participar da <span className="text-purple-400">NEXUS CON</span>?</h2>
              <p className="text-slate-400 max-w-2xl">Três dias intensos de novidades, campeonatos, palestras e a chance de testar os maiores lançamentos antes de todo mundo.</p>
            </div>
            
            {/* Grid 2D Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl flex flex-col gap-4 hover:border-purple-500/50 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Anúncios Exclusivos</h3>
                <p className="text-slate-400">Assista às conferências das maiores publishers do mundo, com trailers e gameplays inéditos.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl flex flex-col gap-4 hover:border-cyan-500/50 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Área Free-to-Play</h3>
                <p className="text-slate-400">Mais de 500 estações montadas com PCs de última geração e consoles de nova geração para você jogar à vontade.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl flex flex-col gap-4 hover:border-pink-500/50 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Meet & Greet</h3>
                <p className="text-slate-400">Encontre seus criadores de conteúdo, pro-players e desenvolvedores favoritos em sessões exclusivas.</p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-black tracking-tighter text-slate-300">
            NEXUS<span className="text-cyan-500">CON</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; 2026 Nexus Convention. Todos os direitos reservados. Evento Fictício.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.7-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
