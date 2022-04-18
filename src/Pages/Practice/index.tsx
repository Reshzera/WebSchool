import React from 'react';
import { useNavigate } from 'react-router-dom';
import PracticeList from './List';
import { Container, PracticeCard, PracticePainel } from './styles';
import {PracticeMocks} from '../../APImocks'
import {IoMdArrowBack} from 'react-icons/io'

// import { Container } from './styles';

interface itemprops{
  item: {
    name: string,
    date: string,
    questions: string,
    accuracy: string,
    id: number,
    gabarito: string;
  }
}

const PracticeItem = ({item}:itemprops) => {
  const navigate  = useNavigate();
  return(
    <PracticeCard>
        <p>{item.name}</p>
        <p>{item.date}</p>
        <p>{item.questions}</p>
        <p>{item.accuracy}</p>
        <p className='navigate' onClick={() => window.open(item.gabarito, "_blank")}>Gabaritos</p>
        <p className='navigate' onClick={() => navigate(`/simulados/${item.id}`)}> Ver resultado</p>
    </PracticeCard>
  )
}


const Practice: React.FC = () => {
  const navigate = useNavigate()

  return (
      <Container>
          <IoMdArrowBack/>
          <PracticePainel>
            <div className='painelname'>
              <IoMdArrowBack size={40} onClick={() => navigate('/dashboard')}/>
              <h1 className='title'>Painel de Simulados</h1>
            </div>
            <PracticeList>
              {PracticeMocks.map((item, index)=>(<PracticeItem key={index} item={item}/>))}
            </PracticeList>
          </PracticePainel>
      </Container>
  );
}

export default Practice;