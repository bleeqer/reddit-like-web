import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import LNB from './components/LNB/LNB';
import './App.css'; // Import the updated App.css

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <LNB />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
