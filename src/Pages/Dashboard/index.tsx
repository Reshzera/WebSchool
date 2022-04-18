import React, { useEffect, useState } from 'react';
import Avatar from '../../assets/avatar.png'
import { AnualMean, Container, Status, Progress, Scores, StudentBio, StudentInfo, SchoolInfo, PracticeAgenda } from './styles';
import {AiOutlineLineChart} from 'react-icons/ai'
import {CgNotes} from 'react-icons/cg'
import {MdLibraryBooks, MdVideoLibrary} from 'react-icons/md'
import {IoMdCalendar} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { PracticeMocks } from '../../APImocks';

function Dashboard(){

  const navigate = useNavigate();
  const [lastPractice, setLastPractice] = useState<any>({})

  useEffect(() => {
    setLastPractice(PracticeMocks[1]);
  },[])

  return (
      <Container>
          <StudentInfo>
            <StudentBio>
              <section className="profile">
                <img src={Avatar}/>
              </section>
              <section className="personalinfo">
                <div>
                  <label>Nome</label>
                  <p>Rafael Oshiro</p>
                </div>                 
                <div>
                  <label>Email</label>
                  <p>reoshiro13@email.com</p>
                </div>
              </section>
            </StudentBio>
            <Scores>
              <div className="grid">
                <Status>
                  <h1>Ultimo simulado</h1>
                  <div>
                    <section>
                      <label><span>Realizado: </span>{lastPractice.date}</label>
                      <p>{lastPractice.name}</p>
                      <button onClick={() => navigate(`/simulados/${lastPractice.id}`)}>Resultado do Simulado</button>
                    </section>
                  </div>
                </Status>
                <AnualMean>
                  <h1>Media Semestral</h1>
                  <div>
                      <section>
                        <label><span>Media do: <br/> 2 Semestre 2022</span></label>
                        <CgNotes size='60px' color='#e1563c'/>
                        <button onClick={() => navigate(`/notas`)}>Media de Todas Materias</button>
                      </section>
                  </div>
                </AnualMean>
                <Progress>
                  <h1>Progresso</h1>
                  <div>
                      <section>
                        <label><span>Acompanhe seu progresso: </span></label>
                        <AiOutlineLineChart size='60px' color='#eba205'/>
                        <button onClick={() => navigate('/simulados')}>Historico dos Simulados</button>
                      </section>
                  </div>
                </Progress>
              </div>
            </Scores>
          </StudentInfo>
          <SchoolInfo>
            <div className='container'>
              <PracticeAgenda>
                <h1>Proximos Simualdos</h1>
                <div>
                  <section>
                    <label><span>Data dos proximos Simulados</span></label>
                    <IoMdCalendar size={60} color="#5252c2"/>
                    <button onClick={() => navigate('/agenda')}>Veja seus proximos simulados</button>
                  </section>
                </div>
              </PracticeAgenda>
              {/* <PracticeAgenda>
                <h1>Video Aulas</h1>
                <div>
                  <section>
                    <label><span>Videos aulas gravadas para fixação</span></label>
                    <MdVideoLibrary size={60} color="#5252c2"/>
                    <button>Veja as Aulas</button>
                  </section>
                </div>
              </PracticeAgenda> */}
              <PracticeAgenda>
                <h1>Gabaritos</h1>
                <div>
                  <section>
                    <label><span>Gabaritos de todos os simulados</span></label>
                    <MdLibraryBooks size={60} color="#5252c2"/>
                    <button onClick={() => navigate('/simulados')}>Gabaritos dos simulado</button>
                  </section>
                </div>
              </PracticeAgenda>
            </div>
          </SchoolInfo>
      </Container>
  );
}

export default Dashboard;