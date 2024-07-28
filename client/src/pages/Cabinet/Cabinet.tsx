import { useState } from 'react';
import styles from './Cabinet.module.scss';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Header } from '../../shared/Header/Header';

const Cabinet = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ token: string; username: string } | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginSuccess = (token: string, username: string) => {
    setIsAuthenticated(true);
    setUser({ token, username });
    console.log('Login successful, token:', token, 'username:', username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <>
      <Header
        onCityChange={function (city: string): void {
          throw new Error('Function not implemented.');
        }}
        isCitySelectorDisabled={true}
        hideCabinetLink={true}
      ></Header>
      <div className={styles.cabinet}>
        {!isAuthenticated ? (
          <>
            {isRegistering ? (
              <Register />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )}
            <button onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
            </button>
          </>
        ) : (
          <div>
            <h2>Welcome to your Cabinet, {user?.username}</h2>
            <div className={styles.logoutContainer}>
              <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cabinet;
