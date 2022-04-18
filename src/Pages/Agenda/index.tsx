import React from 'react';
import { Container } from '../Dashboard/styles';
import { Painel } from '../ScoresMean/styles';
import {IoMdArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import AgendaList from './List';
import { AgendaCard } from './styles';
import { PracticeMocks } from '../../APImocks';

// import { Container } from './styles';


const AgendaItem = ({item, key}:any) => (
    <AgendaCard key={key}>
        <p>{item.name}</p>
        <p>{item.tipo}</p>
        <p>{item.peso}</p>
        <p>{item.date}</p>
    </AgendaCard>
)


const Agenda: React.FC = () => {
    const navigate = useNavigate()

  return (
      <Container>
          <Painel>
                <div className='painelname'>
                    <IoMdArrowBack size={40} onClick={() => navigate('/dashboard')}/>
                    <h1 className='title'>Proximos Simulados</h1>
                </div>
                <AgendaList>
                    {PracticeMocks.map((item, index) => <AgendaItem item={item} key={index}/>)}
                </AgendaList>
          </Painel>
      </Container>
  );
}

export default Agenda;