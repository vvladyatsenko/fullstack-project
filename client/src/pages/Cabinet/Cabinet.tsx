import { useState } from 'react';
import styles from './Cabinet.module.scss';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Header } from '../../shared/Header/Header';

const Cabinet = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSuccess = (token: string) => {
    console.log('Login successful, token:', token);
  };

  return (
    <>
      <Header
        onCityChange={function (city: string): void {
          throw new Error('Function not implemented.');
        }}
        isCitySelectorDisabled={true}
      ></Header>
      <div className={styles.cabinet}>
        <Register></Register>
        <Login onLoginSuccess={handleLoginSuccess}></Login>
      </div>
    </>
  );
};

export default Cabinet;
