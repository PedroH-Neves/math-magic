import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Quote" element={<Quote />} />
      <Route path="/Calculator" element={<Calculator />} />
    </Routes>
  </Router>
);

export default App;
