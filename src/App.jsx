import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutMe } from './components/AboutMe';
import { Contact } from './pages/Contact'
import './styles/app.css';

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
