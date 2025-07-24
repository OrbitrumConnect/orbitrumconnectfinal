import React, { useState, useEffect } from 'react';

interface Professional {
  id: number;
  name: string;
  title: string;
  rating: number;
}

export default function OrbitSystem() {
  const [professionals] = useState<Professional[]>([
    { id: 1, name: "Carlos Silva", title: "Eletricista", rating: 4.8 },
    { id: 2, name: "Ana Santos", title: "Designer", rating: 4.9 },
    { id: 3, name: "João Pereira", title: "Desenvolvedor", rating: 4.7 },
  ]);

  const [neuralActive, setNeuralActive] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Neural Brain */}
        <div 
          className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer transition-all duration-500 ${
            neuralActive ? 'scale-110 shadow-cyan-400/50 shadow-2xl' : 'animate-pulse'
          }`}
          onClick={() => setNeuralActive(!neuralActive)}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl">🧠</span>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white mb-4">
          🌌 Orbitrum Connect
        </h1>
        <p className="text-xl text-cyan-400 mb-8">
          Rede Neural Profissional
        </p>

        {neuralActive && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {professionals.map((prof) => (
              <div 
                key={prof.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:bg-slate-700/50 transition-all cursor-pointer"
              >
                <h3 className="text-white font-bold text-lg">{prof.name}</h3>
                <p className="text-cyan-400">{prof.title}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white ml-1">{prof.rating}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-white text-lg mt-8">
          {neuralActive ? 'Profissionais Detectados ✅' : 'Clique no Cérebro Neural'}
        </p>
      </div>
    </div>
  );
}