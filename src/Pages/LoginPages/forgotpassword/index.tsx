import React from 'react';
import RequiredInputs from '../../../components/Inputs/RequiredInputs';
import { Container, InputArea, LoginArea, ReturnButton, SubmitArea, Warning } from '../styles';
import {IoMdArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';



function Forgotpassword(){
    const navigate = useNavigate();

  return(
      <Container>
          <LoginArea>
              <ReturnButton onClick={() => navigate('/')}><IoMdArrowBack color='#42429c' size='50'/></ReturnButton>
              <Warning>Insira seu email para recuperar sua senha: </Warning>
              <InputArea>
                <RequiredInputs placeholder="Email"/>
                <SubmitArea>
                    <button type='submit'>Enviar</button>
                </SubmitArea>
              </InputArea>
          </LoginArea>
      </Container>
    );
}

export default Forgotpassword;