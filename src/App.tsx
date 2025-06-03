import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ArtistsPage from './pages/ArtistsPage';
import TracksPage from './pages/TrackPage';
import TemplateStatic from './components/Template_static';  // Главная страница


/**
 * Основной компонент приложения с маршрутизацией.
 */
const App: React.FC = () => (
  <Router>
    <Header />
    <main style={{ marginTop: '6rem' }}>
      <Routes>
        <Route path="/" element={<TemplateStatic />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/tracks" element={<TracksPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;