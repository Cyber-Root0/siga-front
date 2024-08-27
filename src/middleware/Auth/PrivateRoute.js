/**
 * @fileoverview Integração de um Front-End em React com a API do Siga (PHP)
 * @author Bruno Venancio Alves
 * @contact boteistem@gmail.com
 *
 * Copyright (c) 2024 Bruno Venancio Alves
 * 
 * Permission is granted to use, copy, modify, and distribute this software,
 * provided that this notice remains in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import GlobalContainer from '../../services/DI/Container';
import SplashScreen from '../../components/SplashScreen/Splash';
const PrivateRoute = (props) => {
  const { Component } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const Auth = GlobalContainer.resolve('Logins');
      const loggedIn = await Auth.isLoggedIn();
      setIsAuthenticated(loggedIn);
    };
    const timer = setTimeout(() => {
      checkAuthentication(); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isAuthenticated === null) {
    return <SplashScreen />;
  }
  return isAuthenticated ? <> <Component {...props} /> </> : <> <Navigate to="/" /></>;
};
export default PrivateRoute;
