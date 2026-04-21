import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Failed to find the root element. Check your index.html!");
} else {
  ReactDOM.createRoot(rootElement).render(<App />);
}