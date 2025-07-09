import { Header } from "src/Components/Header";
import { HighLight } from "src/Components/HighLight";
import { Container } from "./styles";
import {ButtonIcon} from 'src/Components/ButtonIcon'

export function Players(){
    return(
        <Container>
            <Header showBackButton />

            <HighLight
            title="Nome da turma"
            subtitle="Adicione a galera e separe os times"
            />
            <ButtonIcon icon="home"/>
        </Container>
    );
}