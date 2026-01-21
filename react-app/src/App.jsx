import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
