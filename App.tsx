import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spotlight from './components/Spotlight';
import FloatingPlayer from './components/FloatingPlayer';

const Home = lazy(() => import('./pages/Home'));
const Secret = lazy(() => import('./pages/Secret'));

const App: React.FC = () => {
  return (
    <>
      <Spotlight />
      <FloatingPlayer />
      <Router>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background text-primary">Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secret" element={<Secret />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;