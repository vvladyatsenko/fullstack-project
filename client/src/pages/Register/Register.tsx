import React, { useState } from 'react';
import axios from 'axios';
import style from './Register.module.scss';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()_+=-]+$/;
    if (!usernameRegex.test(username)) {
      setError(
        'Username can only contain letters, numbers, and special characters.'
      );
      return;
    }

    try {
      const response = await axios.post('/api/auth/register', {
        username,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      setError('Error registering user');
    }
  };

  return (
    <div className={style.register}>
      <h2>Register</h2>
      {error && <div className={style.error}>{error}</div>}
      <form onSubmit={handleRegister}>
        <div className={style.formGroup}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={style.formGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.formGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
