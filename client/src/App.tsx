import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Register from './pages/Register/Register';
import Cabinet from './pages/Cabinet/Cabinet';
import Login from './pages/Login/Login';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const handleLoginSuccess = (token: string, username: string) => {
    console.log('Login successful, token:', token, 'username:', username);
  };

  return (
    <Router>
      <div className="global-container">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={<Register onRegisterSuccess={() => {}} />}
            />
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
