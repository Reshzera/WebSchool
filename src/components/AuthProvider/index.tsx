import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../Header';

// import { Container } from './styles';

function AuthProvider({children}:any){
    const autenticated = true 
  return (autenticated ?
  (
    <>
      <Header/>
      {children}
    </>
  ) :
  <Navigate to='/'/>) ;
}

export default AuthProvider;