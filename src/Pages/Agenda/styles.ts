import styled from 'styled-components';

export const AgendaCard = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
            font-size: 9px;
        }
    }
    p.navigate{
        cursor: pointer;
        color: #5252c2;
    }
    
`
