import React from 'react';
import AuthProvider from '../components/AuthProvider';
import Header from '../components/Header';
import Dashboard from '../Pages/Dashboard';

// import { Container } from './styles';

function DashboardRoute(){
  return (
      <AuthProvider>
        <Dashboard/>
      </AuthProvider>
  );
}

export default DashboardRoute;