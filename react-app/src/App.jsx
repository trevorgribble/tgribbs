import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file for global styling

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Home Component
function Home() {
  return (
    <div>
      <h2>Welcome to Trevor's Sandbox</h2>
      <p>This is the home page of your React SPA.</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This page gives you more information about the app.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
