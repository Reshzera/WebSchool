import React from 'react';
import Practice from '..';
import { ListColumns, ListContainer } from './styles';

// import { Container } from './styles';

const PracticeList: React.FC = ({children}) => {
  return (
      <ListContainer>
          <ListColumns>
              <h1>Simulado</h1>
              <h1>Data</h1>
              <h1>Qntd. Questoes</h1>
              <h1>Acertos</h1>
              <h1>Gabaritos</h1>
              <h1>Resultado Completo</h1>
          </ListColumns>
          {children}
      </ListContainer>
  );
}

export default PracticeList;