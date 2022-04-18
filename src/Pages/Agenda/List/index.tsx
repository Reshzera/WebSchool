import React from 'react';
import Practice from '..';
import { ListColumns, ListContainer } from './styles';

// import { Container } from './styles';

const AgendaList: React.FC = ({children}) => {
  return (
      <ListContainer>
          <ListColumns>
              <h1>Simulado</h1>
              <h1>Tipo</h1>
              <h1>Peso</h1>
              <h1>Data</h1>
          </ListColumns>
          {children}
      </ListContainer>
  );
}

export default AgendaList;