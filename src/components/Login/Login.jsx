// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username && password) {
//       localStorage.setItem('isLoggedIn', 'true');  
//       navigate('/dashboard');  
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin} className="form">
//         <div className="label">
//           <label htmlFor="username" className="field">Username:</label><br />
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="label">
//           <label htmlFor="password" className="field">Password:</label><br />
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Check if the user is logged in from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // If the user is logged in, redirect to dashboard
  useEffect(() => {
    if (isLoggedIn === 'true') {
      navigate('/dashboard', { replace: true }); // Prevent going back to login by using replace: true
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      // Simulate successful login
      localStorage.setItem('isLoggedIn', 'true');
      
      // Navigate to dashboard and replace current history entry
      navigate('/dashboard', { replace: true }); // This prevents user from going back to login
    }
  };

  return (
    <div className="login-page-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form">
        <div className="label">
          <label htmlFor="username" className="field">Username:</label><br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="label">
          <label htmlFor="password" className="field">Password:</label><br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
