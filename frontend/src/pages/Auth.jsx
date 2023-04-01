import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Layout from '../components/Layout';
import useAuth from '../hooks/useAuth';
import classes from './Auth.module.scss';

function Auth() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  // State to keep track of which form to show
  const [showLoginForm, setShowLoginForm] = useState(true);

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <Layout>
      <div className={classes.form_container}>
        {/* Conditionally render text based on which form is being shown */}

        {/* Toggle between showing login and register form */}
        {showLoginForm ? <Login /> : <Register />}

        {/* Conditionally render the button text based on which form is being shown */}
        <h2>{showLoginForm ? 'Not registered yet?' : 'Already registered?'}</h2>

        <button className={classes.sign} onClick={handleToggleForm}>
          {showLoginForm ? 'Register' : 'Login'}
        </button>
      </div>
    </Layout>
  );
}

export default Auth;
