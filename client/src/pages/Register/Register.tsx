import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import style from './Register.module.scss';

interface RegisterProps {
  onRegisterSuccess: () => void;
}

Modal.setAppElement('#root');

const Register: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      setError('Error registering user');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onRegisterSuccess();
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            background: '#f0f0f0',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            inset: 'unset',
          },
        }}
      >
        <h2>Registration Successful</h2>
        <p>Please log in with your new account.</p>
        <button
          onClick={closeModal}
          style={{
            backgroundColor: '#4793ff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Register;
