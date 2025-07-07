import { Header } from "src/Components/Header";
import { HighLight } from "src/Components/HighLight";
import { Container, Content, Icon } from "./styles";
import { Button } from "src/Components/Button";
import { Input } from "src/Components/Input";

export function NewGroup(){
    return (
        <Container>
            <Header showBackButton />
        <Content>
            <Icon/>
            <HighLight
            title='Nova turma'
            subtitle='Crie a turma para adicionar as pessoas'
            />
            <Input/>
            <Button
            title='Criar'
            style={{ marginTop: 20}}
            />
        </Content>
        </Container>
    )
}