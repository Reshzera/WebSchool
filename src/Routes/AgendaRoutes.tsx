import React from 'react';
import AuthProvider from '../components/AuthProvider';
import Agenda from '../Pages/Agenda';

// import { Container } from './styles';

const AgendaRoutes: React.FC = () => {
  return (
      <AuthProvider student>
          <Agenda/>
      </AuthProvider>
  );
}

export default AgendaRoutes;