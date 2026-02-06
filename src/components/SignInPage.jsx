import React, { useState, useEffect } from 'react';
import backgroundImgUrl from '../assets/british-council.png';

const SignInPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  // Track screen width for responsiveness
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const DEMO_PASSWORD = "mithun466";

  const handleSignIn = (e) => {
    e.preventDefault();
    if (password === DEMO_PASSWORD) {
      setError('');
      onLoginSuccess();
    } else {
      setError('Incorrect email address or password. Please try again.');
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#5e2d91',
      backgroundImage: `url(${backgroundImgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: isMobile ? 'flex-start' : 'center', // Align to top on small phones
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: isMobile ? '10px' : '20px',
      boxSizing: 'border-box',
    },
    card: {
      backgroundColor: '#ffffff',
      width: '100%',
      // Responsive width: nearly full width on mobile, max 480px on desktop
      maxWidth: '480px',
      padding: isMobile ? '25px 20px' : '40px', 
      borderRadius: isMobile ? '0px' : '8px', // Full width look on tiny screens
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      textAlign: 'left',
      color: '#1e1e1e',
      marginTop: isMobile ? '20px' : '0',
    },
    logoSvg: {
      height: isMobile ? '40px' : '50px',
      marginBottom: '20px',
      display: 'block',
    },
    header: {
      fontSize: isMobile ? '26px' : '32px',
      fontWeight: '700',
      color: '#23085a',
      margin: '0 0 20px 0',
    },
    subText: {
      fontSize: '14px',
      lineHeight: '1.5',
      color: '#555555',
      marginBottom: '25px',
    },
    errorNotification: {
      backgroundColor: '#fdf2f2',
      color: '#d32f2f',
      padding: '12px 15px',
      borderRadius: '4px',
      borderLeft: '4px solid #d32f2f',
      marginBottom: '20px',
      fontSize: '13px',
      fontWeight: '500',
    },
    formGroup: { marginBottom: '20px' },
    label: {
      display: 'block',
      fontWeight: '700',
      fontSize: '14px',
      marginBottom: '8px',
      color: '#23085a',
    },
    inputWrapper: { position: 'relative', width: '100%' },
    input: {
      width: '100%',
      padding: '12px 15px',
      fontSize: '16px', // 16px prevents iOS zoom on focus
      border: error ? '1px solid #d32f2f' : '1px solid #cccccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      outline: 'none',
    },
    showBtn: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#0062cc',
      fontWeight: '600',
      cursor: 'pointer',
    },
    signInBtn: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#005596',
      color: 'white',
      border: 'none',
      borderRadius: '30px',
      fontSize: '18px',
      fontWeight: '700',
      cursor: 'pointer',
      marginTop: '10px',
      marginBottom: '20px',
    },
    link: { color: '#0062cc', textDecoration: 'none', fontWeight: '600' },
    forgotPass: { fontSize: '14px', color: '#555555', marginBottom: '20px' },
    goBack: { fontSize: '14px', color: '#555555', textAlign: 'center' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" style={styles.logoSvg}>
          <g fill="#23085a">
            <circle cx="12" cy="12" r="10"/><circle cx="38" cy="12" r="10"/>
            <circle cx="12" cy="38" r="10"/><circle cx="38" cy="38" r="10"/>
            <text x="60" y="28" fontFamily="Arial" fontWeight="bold" fontSize="24">BRITISH</text>
            <text x="60" y="52" fontFamily="Arial" fontSize="24">COUNCIL</text>
          </g>
        </svg>

        <h1 style={styles.header}>Sign in</h1>
        
        {error && <div style={styles.errorNotification}>{error}</div>}

        <p style={styles.subText}>
          If you don't have a British Council account you can <a href="#register" style={styles.link}>register now</a>.
        </p>

        <form onSubmit={handleSignIn}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email address</label>
            <input
              type="email"
              placeholder="enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={styles.showBtn}>
                Hide
              </button>
            </div>
          </div>

          <p style={styles.forgotPass}>
             Forgotten your password? <a href="#reset" style={styles.link}>reset it</a>.
          </p>

          <button type="submit" style={styles.signInBtn}>
            Sign in
          </button>
        </form>

        <p style={styles.goBack}>
          Not ready? <a href="#back" style={styles.link}>go back</a>.
        </p>
      </div>
    </div>
  );
};

export default SignInPage;