import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import LNB from './components/LNB/LNB';
import PopularCommunities from './components/PopularCommunities/PopularCommunities';
import './App.css'; // Import the updated App.css

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <LNB />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <PopularCommunities />
      </div>
    </Router>
  );
}

export default App;
