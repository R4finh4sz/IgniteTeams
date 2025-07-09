import {TouchableOpacityProps} from 'react-native'
import { Container, Icon, ButtonIconTypeStyleProps } from './styles'

type Props = TouchableOpacityProps & {
    icon: string;
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props){
    return(
        <Container>
            <Icon 
            name={icon}
            type={type}/>

        </Container>
    )
}