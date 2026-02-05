
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import SchoolTrips from './pages/SchoolTrips';
import Parents from './pages/Parents';
import TourInfo from './pages/TourInfo';
import FAQs from './pages/FAQs';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/school-trips" element={<SchoolTrips />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/tour-info" element={<TourInfo />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
