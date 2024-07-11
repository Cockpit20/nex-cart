import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path='/checkout'
            element={<Checkout />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/'
            element={<HomePage />}
          />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
