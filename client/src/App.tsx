import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Register from './pages/Register/Register';
import Cabinet from './pages/Cabinet/Cabinet';
import Login from './pages/Login/Login';

function App() {
  const handleLoginSuccess = (token: string) => {
    console.log('Login successful, token:', token);
  };

  return (
    <Router>
      <div className="global-container">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cabinet" element={<Cabinet />} />
            <Route
              path="/login"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
