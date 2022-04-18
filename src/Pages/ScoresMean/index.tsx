import React, { useEffect, useState } from 'react';
import { Container } from '../Practice/styles';
import { GradeCard, Painel, SearchOptions, ShowMean } from './styles';
import {IoMdArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { SubjectsNames, Semsters } from './options';
import { PhysicsGradesMock } from '../../APImocks';

const MeanItem = ({item}:any, {key}:any) => (
    <GradeCard key={key} grade={item.grade}>
        <h1>{item.practiceName}</h1>
        <h1>{item.grade}</h1>
    </GradeCard>
)


const ScoresMean: React.FC = () => {
    const navigate = useNavigate();

    const [subject, setSubject] = useState<any>(null)
    const [semester, setSemester] = useState<any>(null)
    const [finalMean, setFinalMean] = useState<any>()


    useEffect(() => {
        let sum = 0;
        PhysicsGradesMock.map((item) => sum += item.grade)
        setFinalMean((sum/PhysicsGradesMock.length).toFixed(2))
    },[])

  return (
      <Container>
          <Painel>
                <div className='painelname'>
                    <IoMdArrowBack size={40} onClick={() => navigate('/dashboard')}/>
                    <h1 className='title'>Painel de Notas</h1>
                </div>
                <SearchOptions>
                    <div className="semester">
                        <Select
                            value={semester}
                            onChange={(e) => setSemester(e)}
                            options={Semsters}
                        />
                    </div>
                    <div className="subject">
                        <Select
                            value={subject}
                            onChange={(e) => setSubject(e)}
                            options={SubjectsNames}
                        />
                    </div>
                </SearchOptions>
                {
                subject && semester ?
                (<ShowMean>
                    <section className='header'>
                        <h1>Simulado</h1>
                        <h1>Nota</h1>
                    </section>
                    {PhysicsGradesMock.map((grade, index) =>  <MeanItem item={grade} key={index}/>)}
                    <GradeCard grade={finalMean} finalmean>
                        <h1>Media Final de {subject.label}: </h1>
                        <h1>{finalMean}</h1>
                    </GradeCard>
                </ShowMean>)
                :
                (<ShowMean><h1 className='fill'>Preencha os campos para ver sua nota</h1></ShowMean>)
                }
          </Painel>
      </Container>
  );
}

export default ScoresMean;