import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';


import { Register, Login } from './Pages/PageExports';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>

  );
}

export default App;
