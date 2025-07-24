import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router } from 'wouter';

// Imports condicionais - funciona mesmo se componente não existir
const OrbitSystem = lazy(() => 
  import('./components/OrbitSystem').catch(() => ({
    default: () => (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse flex items-center justify-center">
            <span className="text-4xl">🧠</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">🌌 Orbitrum Connect</h1>
          <p className="text-xl text-cyan-400">Sistema Neural - Carregando Componentes...</p>
        </div>
      </div>
    )
  }))
);

const Login = lazy(() => 
  import('./pages/Login').catch(() => ({
    default: () => (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-8 max-w-md w-full mx-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">🌌 Login Orbitrum</h2>
          <p className="text-cyan-400 text-center">Componente de login será carregado em breve...</p>
        </div>
      </div>
    )
  }))
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Router>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-spin"></div>
                <p className="text-white">Carregando Orbitrum...</p>
              </div>
            </div>
          }>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={OrbitSystem} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;