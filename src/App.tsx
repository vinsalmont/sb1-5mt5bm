import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import ServiceIOS from './pages/services/ServiceIOS';
import ServiceAndroid from './pages/services/ServiceAndroid';
import ServiceFlutter from './pages/services/ServiceFlutter';
import ServiceWeb from './pages/services/ServiceWeb';
import ServiceDesign from './pages/services/ServiceDesign';
import ServiceCloud from './pages/services/ServiceCloud';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ios" element={<ServiceIOS />} />
          <Route path="/services/android" element={<ServiceAndroid />} />
          <Route path="/services/flutter" element={<ServiceFlutter />} />
          <Route path="/services/web" element={<ServiceWeb />} />
          <Route path="/services/design" element={<ServiceDesign />} />
          <Route path="/services/cloud" element={<ServiceCloud />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;