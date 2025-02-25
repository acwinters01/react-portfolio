import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css'
import App from './App.jsx'


const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>,
)
