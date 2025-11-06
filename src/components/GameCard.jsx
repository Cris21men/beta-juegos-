import React from 'react';
import { Gamepad2, Lock } from 'lucide-react';

export default function GameCard({ game, onClick, isDragging, isUnlocking }) {
  return (
    <div
      className={`game-card relative group cursor-pointer transition-all duration-300 ${
        isDragging ? 'opacity-30' : 'opacity-100'
      }`}
      onClick={() => onClick(game)}
    >
      {/* Efecto de desbloqueo */}
      {isUnlocking === game.id && (
        <div className="absolute inset-0 z-30 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 animate-pulse rounded-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-bounce">🔓</div>
          </div>
        </div>
      )}

      <div className={`relative bg-gradient-to-br ${game.color} rounded-2xl p-6 h-80 overflow-hidden shadow-2xl transform transition-all duration-300 ${
        game.available ? 'hover:scale-105 hover:shadow-yellow-500/50' : ''
      }`}>
        {/* Contenido del juego */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            {!game.available ? (
              <div className="text-center">
                <Lock className="w-20 h-20 mx-auto mb-4 text-gray-400" />
                <div className="text-4xl mb-2">🔒</div>
              </div>
            ) : game.image ? (
              // Mostrar imagen de portada si existe
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            ) : (
              // Mostrar ícono de gamepad si no hay imagen
              <div className="text-center">
                <Gamepad2 className="w-24 h-24 mx-auto mb-4 text-white animate-pulse" />
              </div>
            )}
          </div>
          
          <div className="text-center text-white mt-4">
            <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
            <p className="text-sm opacity-90">{game.description}</p>
          </div>
        </div>

        {/* Brillo hover */}
        {game.available && (
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/0 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
    </div>
  );
}