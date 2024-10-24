import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/NavBar';
import './tailwind.css';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;