import React from 'react';
import ReactDOM from 'react-dom/client';
import Route  from './routes/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>
);

