// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import './assets/css/NavBar.css';
import './assets/css/MainSection.css';
import './assets/css/Card.css';
import * as bootstrap from 'bootstrap';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>
)
