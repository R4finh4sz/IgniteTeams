import { Container, Logo, BackIcon } from "./styles";
import logoImg from '@img/Logo.png';


export function Header(){
    return(
        <Container>
            <BackIcon />
            <Logo source={logoImg}/>
        </Container>
    )
}