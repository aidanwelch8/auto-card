import './App.css';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Signup from './pages/auth/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Signup onLogIn={handleLogIn} onLogOut={handleLogOut} isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
