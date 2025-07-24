import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          🌌 Login Orbitrum
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-cyan-400 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 bg-slate-700 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-cyan-400 mb-2">Senha</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 bg-slate-700 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          
          <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 rounded-lg font-bold hover:from-cyan-500 hover:to-blue-600 transition-all">
            Entrar na Rede Neural
          </button>
        </div>
      </div>
    </div>
  );
}