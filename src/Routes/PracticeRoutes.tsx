import React from 'react';
import AuthProvider from '../components/AuthProvider';
import Practice from '../Pages/Practice';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
      <AuthProvider student>
          <Practice/>
      </AuthProvider>
  );
}

export default Routes;