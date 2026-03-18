import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Neveras from './pages/Neveras';
import Lavadoras from './pages/Lavadoras';
import Secadoras from './pages/Secadoras';
import AiresAcondicionados from './pages/AiresAcondicionados';
import Contacto from './pages/Contacto';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/neveras" element={<Neveras />} />
            <Route path="/servicios/lavadoras" element={<Lavadoras />} />
            <Route path="/servicios/secadoras" element={<Secadoras />} />
            <Route path="/servicios/aires-acondicionados" element={<AiresAcondicionados />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
