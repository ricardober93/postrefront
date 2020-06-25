import React from 'react';
import './App.css';
import './Tailwind.css';
import Nabvar from './components/Nabvar';
import CrearPostre from './crearPostre/CrearPostre';


function App() {
  return (
    <div className="bg-blue-100 h-full h-screen">
    <Nabvar />
    <CrearPostre />
    </div>
  );
}

export default App;
