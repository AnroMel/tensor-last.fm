import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import ArtistsPage from './pages/ArtistsPage';
import TracksPage from './pages/TracksPage';

/**
 * Основной компонент приложения с маршрутизацией.
 */
const App: React.FC = () => (
  <Router
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/tracks" element={<TracksPage />} />
      </Routes>
    </main>
  </Router>
);

export default App;