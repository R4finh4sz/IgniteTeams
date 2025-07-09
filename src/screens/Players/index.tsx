import { Header } from "src/Components/Header";
import { HighLight } from "src/Components/HighLight";
import { Filter } from "src/Components/Filter";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import {ButtonIcon} from 'src/Components/ButtonIcon'
import { Input } from "src/Components/Input";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players(){
    const [team, setTeam] = useState('Time a');
    const [players, setPlayers] = useState([]);
    return(
        <Container>
            <Header showBackButton />

            <HighLight
            title="Nome da turma"
            subtitle="Adicione a galera e separe os times"
            />
        <Form>
            <Input 
            placeholder="Nome da pessoa"
            autoCorrect={false}
            />
            <ButtonIcon icon="add"/>
        </Form>
        <HeaderList>
        <FlatList
        data={['Time a', 'Time B']}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <Filter title={item} 
        isActive={item === team}
        onPress={() => setTeam(item)}
        />
        )}
        horizontal
        />
        <NumberOfPlayers>
        {players.length}
        </NumberOfPlayers>
        </HeaderList>
                </Container>
    );
}