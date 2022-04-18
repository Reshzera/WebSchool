import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(-45deg, #222250, #323276, #42429c, #5252c2, #876bff);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`;

export const PracticePainel = styled.div`
    width: 90%;
    position: relative;
    background-color: #f1f3f4;
    margin-top: 160px;
    display: flex;
    border-radius: 30px;
    align-items: center;
    flex-direction: column;
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

export const PracticeCard = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    text-align: center;
    padding: 20px;
    background-color: #f1f3f4;
    border-radius: 20px;
    margin-bottom: 10px;
    align-items: center;
    @media (max-width: 1000px){
        padding: 10px;
    }
    p{
        font-size: 20px;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        @media (max-width: 1000px){
            font-size: 8px;
        }
    }
    p.navigate{
        cursor: pointer;
        color: #5252c2;
    }
    
`