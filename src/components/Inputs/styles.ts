import styled from 'styled-components';


export const Container = styled.div`
    position: relative;
    width: 70%;
    margin: 10px 0px;
    input{
        width: 100%;
        border-radius: 5px;
        border: solid 2px black;
        text-align: justify;
        transition: .2s ease-in;
        padding: 20px;
        margin: 0px -20px;
        font-size: 15px;
        &:focus{
            border: solid 2px #4e5cbe;
            outline: none;
            border-radius: 20px;
        }
    }
    label{
        position: absolute;
        top: 20px;
        left: 5px;
        color: gray;
        opacity: 1;
        transition: .2s ease-in;
        pointer-events: none;
        font-size: 20px;
    }
    input:not(:focus):not(:placeholder-shown) + label{
        top: -10px;
        opacity: 1;
        font-size: 15px;
        padding: 0px 5px;
        background-color: white;
        font-weight: bold;
        color: #4e5cbe;
    }
    input:focus + label{
        top: -10px;
        opacity: 1;
        font-size: 15px;
        padding: 0px 5px;
        background-color: white;
        font-weight: bold;
        color: #4e5cbe;
    }
    button{
        position: absolute;
        top: 15px;
        right: 0px;
    }
`
