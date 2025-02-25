import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/contactMe/Contact'
import './styles/home.css';

function App() {

  return (
    <>
      <div className='mainApp'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/skills" element={<AboutMe />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </>
  );
};

export default App
