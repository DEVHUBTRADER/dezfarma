import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPlaceholder />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

function AdminPlaceholder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Área Administrativa</h2>
        <p className="text-gray-600 mb-6">
          Para acessar o painel administrativo, é necessário configurar o Supabase primeiro.
        </p>
        <a 
          href="/"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Voltar ao Site
        </a>
      </div>
    </div>
  );
}

export default App;