import styled, { keyframes } from 'styled-components';


const BackgroundAnimation = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(-45deg, #222250, #323276, #42429c, #5252c2, #876bff);
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: ${BackgroundAnimation} 10s infinite;
    gap: 40px;
`;

export const StudentInfo = styled.div`
    background-color: #f1f3f4 ;
    border-radius: 20px;
    margin-top: 160px;
    width: 70%;
    display:flex;
    padding: 20px;
    gap: 80px;
    flex-wrap: wrap;
    align-items: center;
`;

export const StudentBio = styled.section`
    position: relative;
    display: flex;
    flex: 1;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    border-radius: 20px;
    border: .5px solid gray;
    section.profile{
        align-items: center;
        display: flex;
        width: 90%;
        justify-content: center;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
        img{
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
    }
    section.personalinfo{
        flex: 2;
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        word-break:break-all;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            label{
                font-size: 12px;
                text-align: center;
                color: gray;
                font-weight: bolder;
            }
            p{
                font-size: 17px;
                font-weight: bold;
                text-align: center;
            }
        }
    }   
`
export const Scores = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 5;
    div.grid{
        display: flex;
        flex-wrap: nowrap;
        gap: 20px;
        @media(max-width: 915px){
            flex-wrap: wrap;
            min-width: 400px;
        }
        @media(max-width: 590px){
            flex-wrap: wrap;
            min-width: 0px;
        }
    }
`;

export const Status = styled.div`
    flex: 1;
    text-align: center;
    h1{
        font-size: 20px;
    }
    div{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        section{
            width: 200px;
            height: 200px;
            background-color:white;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            label{
                color: #e1563c;
                font-weight: bold;
                position: absolute;
                top: 30px;
                span{
                    color: black;
                    font-weight: bold;
                }
            }
            p{
                color: black;
                font-size: 20px;
                text-align: center;
                width: 150px;
                font-weight: bold;
            }
            button{
                position: absolute;
                bottom: 20px;
                align-items: center;
                width: 150px;
                border: none;
                border-radius: 20px;
                padding: 5px;
                background-color: lightgreen;
                color: black;
                cursor: pointer;
            }
        }
    }
`;

export const AnualMean = styled.div`
    flex: 1;
    text-align: center;
    h1{
        font-size: 20px;
    }
    div{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        section{
            width: 200px;
            height: 200px;
            background-color:white;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            label{
                color: #e1563c;
                font-weight: bold;
                position: absolute;
                top: 20px;
                span{
                    color: black;
                    font-weight: bold;
                }
            }
            button{
                position: absolute;
                bottom: 20px;
                align-items: center;
                width: 150px;
                border: none;
                border-radius: 20px;
                padding: 5px;
                background-color: #e1563c;
                color: white;
                cursor: pointer;
            }
        }
    }
`;

export const Progress = styled.div`
    flex: 1;
    text-align: center;
    h1{
        font-size: 20px;
    }
    div{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        section{
            width: 200px;
            height: 200px;
            background-color:white;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            label{
                color: #e1563c;
                font-weight: bold;
                position: absolute;
                top: 20px;
                span{
                    color: black;
                    font-weight: bold;
                }
            }
            button{
                position: absolute;
                bottom: 20px;
                align-items: center;
                width: 150px;
                border: none;
                border-radius: 20px;
                padding: 5px;
                background-color: #eba205;
                color: white;
                cursor: pointer;
            }
        }
    }
`;

export const SchoolInfo = styled.div`
    background-color: #f1f3f4;
    border-radius: 20px;
    margin-top: 40px;
    margin-bottom: 80px;
    width: 70%;
    padding: 20px;
    flex-wrap: wrap;
    align-items: center;
    div.container{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
`;


export const PracticeAgenda = styled.div`
    flex: 1;
    text-align: center;
    h1{
        font-size: 20px;
    }
    div{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        section{
            width: 200px;
            height: 200px;
            background-color: white;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            label{
                color: #e1563c;
                font-weight: bold;
                position: absolute;
                top: 20px;
                margin: 0 5px;
                span{
                    color: black;
                    font-weight: bold;
                    font-size: 15px;
                }
            }
            button{
                position: absolute;
                bottom: 20px;
                align-items: center;
                width: 150px;
                border: none;
                border-radius: 20px;
                padding: 5px;
                background-color: #5252c2;
                color: white;
                cursor: pointer;
            }
        }
    }
`