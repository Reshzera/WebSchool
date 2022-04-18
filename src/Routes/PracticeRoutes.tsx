import React from 'react';
import AuthProvider from '../components/AuthProvider';
import Practice from '../Pages/Practice';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
      <AuthProvider>
          <Practice/>
      </AuthProvider>
  );
}

export default Routes;