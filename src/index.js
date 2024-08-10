import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';  // Update this path to point to your global CSS
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export { default as ChartDisplay } from './ChartDisplay';
export { default as Summary } from './Summary';

