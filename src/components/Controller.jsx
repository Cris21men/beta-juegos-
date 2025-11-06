import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function Controller({ position, isDragging, onMouseDown }) {
  return (
    <div
      className={`absolute z-30 transition-all duration-200 ${
        isDragging ? 'scale-110' : 'scale-100'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={onMouseDown}
    >
      <div className={`relative ${isDragging ? 'animate-pulse' : ''}`}>
        {/* Glow effect */}
        {isDragging && (
          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse" />
        )}
        
        {/* Control */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl border-4 border-gray-700">
          <Gamepad2 className={`w-12 h-12 ${isDragging ? 'text-yellow-400' : 'text-white'} transition-colors duration-300`} />
        </div>
      </div>
    </div>
  );
}