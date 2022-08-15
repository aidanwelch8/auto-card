import './App.css';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';

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
      <Navbar onLogIn={handleLogIn} onLogOut={handleLogOut} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogIn={handleLogIn} onLogOut={handleLogOut} isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Signup onLogIn={handleLogIn} onLogOut={handleLogOut} isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
