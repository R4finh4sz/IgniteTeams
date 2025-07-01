import { Container, Logo } from "./styles";
import logoImg from '@img/Logo.png';

export function Header(){
    return(
        <Container>
            <Logo source={logoImg}/>
        </Container>
    )
}