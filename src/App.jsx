// @ts-check
/* eslint-disable */

import React from 'react';
import './app.css'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';


const App = () => {
  return (
<Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
);};

export default App;
