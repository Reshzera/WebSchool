import styled from 'styled-components';

export const Info = styled.div`
    background-color: #e1e1e1;
    width: 90%;
    border-radius: 20px;
    height: 80%;
    margin: 160px 60px 60px 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    gap: 20px;
    padding-bottom: 30px;
    div.painelname{
        display: flex;
        width: 100%;
        align-items: center;
        gap: 30px;
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

export const AccuracySection  = styled.section`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 20px;
            font-weight: bold;
            color: #219ebc;
        }
        section{
            width: 100px;
            margin-top: 10px;
            height: 100px;
            border-radius: 30px;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 10px 9px 17px -1px rgba(0,0,0,0.2);
            p{
                font-size: 35px;
            }
        }
    }
`;

export const PracticeScores = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    align-items: center;
    h1{
        margin-bottom: 20px;
    }
`;

interface props{
    grade: number;
}

export const SocreCard = styled.div<props>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    gap: 0px;
    background-color: ${({grade}) => grade > 7 ? "#91db92" : "#ffc3c3"};
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 20px 20px;
    h1{
        overflow: hidden;
        margin: 0px;
        color: ${({grade}) => grade > 7 ? "white" : "red"};
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        text-align: center;
        @media (max-width: 1000px){
            font-size: 15px;
        }
    }
`

