import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Promotion from './pages/Promotion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContactButtons from './components/ContactButtons';

function App() {
  return (
    <div className="app-root">
      <Router>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/promotion" element={<Promotion />} />
          </Routes>
        </div>
        <Footer /> 
        <ContactButtons />
      </Router>
    </div>
  );
}

export default App;
