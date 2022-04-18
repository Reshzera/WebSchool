import styled from 'styled-components';

export const ListContainer = styled.div`
    background-color: #e1e1e1;
    width: 90%;
    border-radius: 20px;
    height: 80%;
    margin: 0px 60px 60px 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    padding: 5px;
    padding-bottom: 30px;
`;

export const ListColumns = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    font-size: 10px;
    padding: 10px;
    margin-top: 20px;
    gap: 4px;
    margin-bottom: 20px;
    h1{
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
    }
    @media (max-width: 1000px){
        font-size: 5px;
    }
`;