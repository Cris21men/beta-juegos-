import React, { useState } from 'react';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import Footer from './components/Footer.jsx';
import DonationSection from './components/DonationSection';
import { games } from './games';

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    if (game.available) {
      setSelectedGame(game);
    }
  };

  return (
    <div className="min-h-screen bg-studio-teal relative overflow-hidden">
      {/* Badge BETA - Superior IZQUIERDA */}
      <div className="fixed top-6 left-6 z-30">
        <div className="relative">
          {/* Efecto de brillo de fondo */}
          <div className="absolute inset-0 bg-studio-gold/30 rounded-lg blur-md animate-pulse"></div>
          
          {/* Badge principal */}
          <div className="relative bg-gradient-to-br from-studio-gold to-yellow-600 px-6 py-2 rounded-lg border-2 border-yellow-300 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-studio-teal font-black text-2xl tracking-wider drop-shadow-lg">
              BETA
            </span>
          </div>
        </div>
      </div>

      {/* Header con Logo */}
      <div className="relative z-20 pt-4 pb-2">
        <div className="text-center flex justify-center">
          <img 
            src="/logo.png" 
            alt="Game Studio21" 
            className="w-auto h-80 md:h-96 lg:h-[500px] object-contain animate-pulse-glow"
          />
        </div>
      </div>

      {/* Grid de Juegos */}
      <div className="relative z-20 container mx-auto px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onClick={handleGameClick}
              isDragging={false}
              isUnlocking={null}
            />
          ))}
        </div>
      </div>

      {/* Footer con Redes Sociales */}
      <Footer />

      {/* Botón flotante de Donaciones */}
      <DonationSection />

      {/* Modal del Juego */}
      <GameModal 
        game={selectedGame} 
        onClose={() => setSelectedGame(null)} 
      />
    </div>
  );
}