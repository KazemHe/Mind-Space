import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './cmp/Footer';
import AppHeader from './cmp/AppHeader';
import Welcomepage from './pages/Welcomepage';
import Building from './pages/Building';
import Thesis from './pages/Thesis';
import Model from './pages/Model';
import ThesisPage from './pages/ThesisPage';
import ThesisContent from './pages/ThesisContent';

function Header() {
  const location = useLocation();
  const showHeader = location.pathname !== '/Mind-Space' && location.pathname !== '/';

  return showHeader ? <AppHeader /> : null;
}


function FooterRoute() {
  const location = useLocation();
  const showFooter = !(location.pathname.includes('/Building') || location.pathname.includes('/model') ||location.pathname.includes('/thesis/page')) ; // Fixed condition

  return showFooter ? <Footer /> : null;
}


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>

        <Routes>
          <Route path="/welcome" element={<Welcomepage />} />
          <Route path="/Building/:source" element={<Building />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/Mind-Space" element={<Homepage />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path='/thesis/page/:pageNumber' element={<ThesisPage />} />
          <Route path="/thesis/content" element={<ThesisContent />} />

          <Route path="/model/:source" element={<Model />} />
        </Routes>

     <FooterRoute />
      </div>
    </Router>
  );
}

export default App;
