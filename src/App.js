import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Promotion from './pages/Promotion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContactButtons from './components/ContactButtons';

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
            <Route path="/contact" element={<ContactUs />} />
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
