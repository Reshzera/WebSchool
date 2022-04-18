import { Container } from '../styles';

function RequiredInputs({placeholder, type}:any){
    return(
        <Container>
            <input placeholder=' ' required type={type}/>
            <label>{placeholder}</label>
        </Container>
    )
}

export default RequiredInputs;