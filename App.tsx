import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Secret from './pages/Secret';
import Spotlight from './components/Spotlight';
import FloatingPlayer from './components/FloatingPlayer';

const App: React.FC = () => {
  return (
    <>
      <Spotlight />
      <FloatingPlayer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;