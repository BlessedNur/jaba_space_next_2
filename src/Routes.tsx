import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './app/(pages)/Home';
import ContactPage from './app/(pages)/contact/page';
import ServicesPage from './app/(pages)/services/page';
import AboutPage from './app/(pages)/about/page';
import BlogPage from './app/(pages)/blog/page';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;