import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from '../styles';
import {PracticeMocks, GradesMocks} from '../../../APImocks'
import { AccuracySection, Info, PracticeScores, SocreCard } from './styles';
import {IoMdArrowBack} from 'react-icons/io'



interface props{
  item: {
    subject: string,
    Score: string,
  },
}


const ScoreItem = ({item}:props) => (
    <SocreCard grade={Number(item.Score)}>
        <h1>{item.subject}</h1>
        <h1>{item.Score}</h1>
    </SocreCard>
)

const PracticeDetails: React.FC = () => {
  const { id } = useParams();
  const [practice, setPractoice] = useState<any>([]);
  const navigate = useNavigate();


  useEffect(()=>{
      let info = PracticeMocks.filter((item) => item.id === Number(id))
      setPractoice(info[0])
  },[])

  return (
    <Container>
        <Info>
            <div className='painelname'>
              <IoMdArrowBack size={40} onClick={() => navigate('/simulados')}/>
              <h1 className='title'>{practice.name}</h1>
            </div>
            <AccuracySection>
              <div>
                <h1>Qnt. Questoes</h1>
                <section><p>{practice.questions}</p></section>
              </div>
              <div>
                <h1>Acertos</h1>
                <section><p className='acertos'>{practice.accuracy}</p></section>
              </div>
              <div>
                <h1>Media Geral</h1>
                <section><p className='geral'>{((Number(practice.accuracy)/Number(practice.questions))*10).toFixed(2)}</p></section>
              </div>
            </AccuracySection>
            <PracticeScores>
              <h1>Notas: </h1>
              {GradesMocks.map((item) => <ScoreItem item={item}/>)}
            </PracticeScores>
        </Info>
    </Container>
  );
}

export default PracticeDetails;