import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../Header';

// import { Container } from './styles';

interface authProps{
  student?: boolean,
  teacher?: boolean
}

const AuthProvider: React.FC<authProps> = ({children, student, teacher}) => {
    const autenticated = true 
  return ((autenticated && student) || (autenticated && teacher) ?
  (
    <>
      <Header/>
      {children}
    </>
  ) :
  <Navigate to='/'/>) ;
}

export default AuthProvider;