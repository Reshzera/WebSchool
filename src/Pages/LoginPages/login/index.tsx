import React, { useContext } from 'react';
import RequiredInputs from '../../../components/Inputs/RequiredInputs';
import { Container, InputArea, LoginArea, Logo, SubmitArea } from '../styles';
import logo from '../../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';

function Login({isAuth}:any){
    const navigate = useNavigate();

    function HandleSubmit(){
        console.log("realizando a verificacao")
        navigate('/dashboard')
        isAuth(true)
    }    
    return(
        <Container>
            <LoginArea>
                <Logo>
                    <img src={logo}/>
                </Logo>
                <InputArea onSubmit={() => HandleSubmit()}>
                    <section>
                        <RequiredInputs placeholder="Email"/>
                        <RequiredInputs placeholder="Password" type="password"/>
                        <Link to='/forgotpassword'>Esqueceu a senha?</Link>
                    </section>
                    <SubmitArea>
                        <button type='submit'>Entrar</button>
                    </SubmitArea>
                </InputArea>
            </LoginArea>
        </Container>
    )
}

export default Login;