import React from 'react';
import AuthProvider from '../components/AuthProvider';
import ScoresMean from '../Pages/ScoresMean';

// import { Container } from './styles';

const ScoresMeanRoutes: React.FC = () => {
  return (
      <AuthProvider student>
          <ScoresMean/>
      </AuthProvider>
  );
}

export default ScoresMeanRoutes;