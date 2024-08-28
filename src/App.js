import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Promotion from './pages/Promotion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContactButtons from './components/ContactButtons';
import HealthInsurance from './pages/health/health-insurance'


function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    
  };

  const contentStyle = {
    flex: '1', 
  };

  return (
    <div style={appStyle}>
      <Router>
        <Navbar />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/products/health-insurance" element={<HealthInsurance />} />
          </Routes>
        </div>
        <Footer /> 
        <ContactButtons />
      </Router>
    </div>
  );
}

export default App;