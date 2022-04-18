import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';

const PopIn = keyframes`
    0%{
        transform: translateY(200%)
    }
    50%{
        transform: translateY(-10%)
    }
    90%{
        transform: translateY(2%)
    }
    100%{
        transform: translateY(0%)
    }
`;

const FadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-5%);
    }
    100%{
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const Logo =  styled.div`
    display: flex;
    flex: .5;
    justify-content: center;
    align-items: center;
    animation: ${FadeIn} 1s ease-in-out;
    img{
        width: 100%;
        height: 100%;
    }
    
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #222250;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const LoginArea =  styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 50px;
    width: 800px;
    height: 500px;
    display: flex;
    margin: 40px;
    padding: 0px 20px;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    animation: ${PopIn} 1s ease-in-out;
`;

export const InputArea = styled.form`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    
    section{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        div{
            animation: ${FadeIn} 1s ease-in-out;
            :nth-child(1){
                animation-delay: .1s;
            }
            :nth-child(2){
                animation-delay: .2s;
            }
        } 
    }
    
    a{
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        margin-top: 10px;
        color: #42429c;
        :active{
            color: #42429c;
        }
    }
`;

export const SubmitArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button{
        padding: 20px 100px;
        border: none;
        border-radius: 50px;
        background-color: #42429c;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 20px;
        transition: .1s linear;
        :active{
            background-color: lightblue;
        }
    }
`;
export const ReturnButton = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
    cursor: pointer;
`;

export const Warning = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin-top: 50px;
    margin-bottom: -60px;
`;


