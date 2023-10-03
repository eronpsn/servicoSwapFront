/* eslint-disable prettier/prettier */
import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem("token");
  return (
    !user ? <Navigate to={"/"} /> : children
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
