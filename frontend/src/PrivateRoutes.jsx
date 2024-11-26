// src/components/PrivateRoute.js
import axios from 'axios';
import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {

  return localStorage.getItem("AccessToken") ? children : <Navigate to="/" />;
};

export default PrivateRoute;
