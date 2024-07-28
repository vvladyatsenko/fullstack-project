import { useState } from 'react';
import styles from './Cabinet.module.scss';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Header } from '../../shared/Header/Header';

const Cabinet = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ token: string; username: string } | null>(
    null
  );

  const handleLoginSuccess = (token: string, username: string) => {
    setIsAuthenticated(true);
    setUser({ token, username });
    console.log('Login successful, token:', token, 'username:', username);
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
            <Register />
            <Login onLoginSuccess={handleLoginSuccess} />
          </>
        ) : (
          <div>
            <h2>Welcome to your Cabinet, {user?.username}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Cabinet;
