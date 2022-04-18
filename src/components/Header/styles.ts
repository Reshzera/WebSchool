import { Link } from 'react-router-dom';
import styled  from 'styled-components';

interface props {
    isShow?: boolean,
}

export const HeaderContainer = styled.div`
    width: 100%;
    height: 120px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom: 3px solid white;
    position: fixed;
    z-index: 100000;
    background-color: #0c4a8e;
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-left: 20px;
    img{
        width: 150px;
        background-color: whitesmoke;
        border-radius: 10px;
        object-fit: contain;
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    }
    @media(max-width: 1030px){
        display: inline;
    }
`;

export const RoutesSection= styled.div<props>`
    flex: 5;
    div{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-evenly;
    }
    section{
        display: none;
    }
    @media(max-width: 1030px){
        div{
            display: none
        }
        section{
            display: flex;
            position: absolute; 
            right: 20px;
            top: 40px;
            z-index: 1000000;
            transition: .3s ease-in;
            transform: ${({isShow}) => isShow ? "rotate(0deg)" : "rotate(180deg)"};
        }
    }
`;

export const RoutesButton = styled(Link)`
    text-decoration: none;
    color: #fafafa;
    font-size: 25px;
    display: flex;
    align-items: center;
    color: white;
`;


export const MobileHeader = styled.div<props>`
    display: none;
    background-color: #4e4eb9;
    position: absolute;
    top: 0px;
    right: ${({isShow}) => isShow ? "0px" : "-600px"};
    width: 50vw;
    height: 110vh;
    align-items: center;
    transition: .2s ease-in-out;
    flex-direction: column;
    justify-content: center;
    z-index: 100000;
    gap: 70px;
    ${RoutesButton}{
        font-size: 15px;  
    }
    @media(max-width: 1030px){
        display: flex
    }
`
