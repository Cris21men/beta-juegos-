import React from 'react';
import { X, Gamepad2 } from 'lucide-react';

export default function GameModal({ game, onClose }) {
  if (!game) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl border-4 border-yellow-500 flex flex-col">
        {/* Header del Modal */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4 flex items-center justify-between flex-shrink-0">
          <h2 className="text-2xl font-bold text-white">{game.name}</h2>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Contenido del Juego CON SCROLL */}
        <div className="flex-1 overflow-y-auto p-4">
          {game.path ? (
            <div className="w-full h-[80vh]">
              <iframe
                src={game.path}
                className="w-full h-full border-0 rounded-lg"
                title={game.name}
                allow="autoplay; fullscreen"
              />
            </div>
          ) : (
            <div className="text-center text-white flex items-center justify-center min-h-[60vh]">
              <div>
                <Gamepad2 className="w-32 h-32 mx-auto mb-6 text-yellow-400 animate-bounce" />
                <h3 className="text-3xl font-bold mb-4">Aquí se cargará tu juego de Godot</h3>
                <p className="text-gray-400 mb-4">
                  Exporta tu juego de Godot a HTML5 y reemplaza este contenido
                </p>
                <div className="bg-gray-800 rounded-lg p-4 text-left text-sm max-w-2xl mx-auto">
                  <p className="text-yellow-400 mb-2">📝 Instrucciones:</p>
                  <p className="text-gray-300">1. Exporta tu juego desde Godot (Project → Export → HTML5)</p>
                  <p className="text-gray-300">2. Coloca los archivos en /public/games/game1/</p>
                  <p className="text-gray-300">3. El iframe cargará automáticamente el juego</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}