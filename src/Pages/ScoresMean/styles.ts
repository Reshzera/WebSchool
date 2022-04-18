import styled from 'styled-components';

export const Painel = styled.div`
    width: 90%;
    margin-top: 160px;
    background-color: #fafafa;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    div.painelname{
        display: flex;
        width: 100%;
        align-items: center;
        gap: 10px;
        h1.title{
            margin: 30px 0px;
            flex: 9;
            @media (max-width: 1000px){
                    font-size: 20px;
                }
            }
        svg{
            flex: 1;
            margin-left: 10px;
            cursor: pointer;
        }
    }
`;

export const SearchOptions = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 25px;
`;


export const ShowMean = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    width: 80%;
    margin-top: 30px;
    gap: 20px;
    h1.fill{
        text-align: center;
        @media (max-width: 1000px){
            font-size: 15px;
        }
    }
    section.header{
        grid-template-columns: 1fr 1fr;
        display: grid;
        width: 100%;
        gap: 20px;
        text-align: center;
        @media (max-width: 1000px){
            font-size: 10px;
        }
    }
`;

interface props{
    grade: number;
    finalmean?: boolean
}

export const GradeCard = styled.div<props>`
    background-color: ${({grade, finalmean}) => finalmean ? "white" : grade > 7 ? "#91db92" : "#ffc3c3"};
    box-shadow: ${({finalmean}) => finalmean ? "0 2px 3px black" : "none"};
    grid-template-columns: 1fr 1fr;
    display: grid;
    padding: 20px 10px;
    gap: 10px;
    width: 100%;
    border-radius: 20px;
    align-items: center;
    h1{
        font-size: 25px;
        color: ${({grade, finalmean}) => finalmean ? "black" : grade > 7 ? "white" : "red"};
        text-align: center;
        @media (max-width: 1000px){
            font-size: 15px;
        }
    }
`
