import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import "./App.css";
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer/>
     
      </>
  );
};

export default App;
