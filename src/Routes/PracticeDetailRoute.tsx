import React from 'react';
import AuthProvider from '../components/AuthProvider';
import PracticeDetails from '../Pages/Practice/PracticeDetails';

// import { Container } from './styles';

const PractoceDetailRoute: React.FC = () => {
  return (
      <AuthProvider student>
          <PracticeDetails/>
      </AuthProvider>
  );
}

export default PractoceDetailRoute;