import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Login successful! (Demo)');
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f3e8ff 100%)'
    }}>
      <div style={{
        background: '#fff',
        padding: '2.5rem 2rem',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(80, 80, 160, 0.10)',
        minWidth: 350,
        maxWidth: 400
      }}>
        <h2 style={{ marginBottom: 24, color: '#3b2560', textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#3b2560', fontWeight: 500 }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                background: '#f3f4f6',
                fontSize: 16
              }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#3b2560', fontWeight: 500 }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                background: '#f3f4f6',
                fontSize: 16
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 0',
              background: 'linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(124, 58, 237, 0.08)'
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: 20, textAlign: 'center', color: '#7c3aed' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#3b2560', textDecoration: 'underline', fontWeight: 500 }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
