import { Header } from "src/Components/Header";
import { HighLight } from "src/Components/HighLight";
import { Container, Content, Icon } from "./styles";
import { Button } from "src/Components/Button";
import { Input } from "src/Components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {


    const [group, setgroup] = useState('');
    const navigation = useNavigation();

    function handleNew() {
    navigation.navigate('players', { group })    
    }

    return (
        <Container>
            <Header showBackButton />
        <Content>
            <Icon/>
            <HighLight
            title='Nova turma'
            subtitle='Crie a turma para adicionar as pessoas'
            />
            <Input
                placeholder="teste"
                onChangeText={setgroup}
            />
            <Button
            title='Criar'
            style={{ marginTop: 20}}
            onPress={handleNew}
            />
        </Content>
        </Container>
    )
}