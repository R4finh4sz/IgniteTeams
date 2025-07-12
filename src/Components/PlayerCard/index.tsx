import { Container, Icon, Name } from './styles'
import { ButtonIcon } from '../ButtonIcon';

type Props ={
    name: string,
    OnRemove () => void;
}

export function PlayerCard({name}: Props) {
    return(
        <Container>
            <Icon name="person" />
            <Name>
                {name}
            </Name>
            <ButtonIcon 
            icon="close"
            type='SECONDARY'
            />
        </Container>
    );
}