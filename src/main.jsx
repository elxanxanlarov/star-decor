import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
