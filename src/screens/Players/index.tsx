import { Header } from "src/Components/Header";
import { HighLight } from "src/Components/HighLight";
import { Filter } from "src/Components/Filter";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import {ButtonIcon} from 'src/Components/ButtonIcon'
import { Input } from "src/Components/Input";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "src/Components/PlayerCard";
import { ListEmpty } from "src/Components/ListEmpty";
import { Button } from "src/Components/Button";

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

        <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) =>(
            <PlayerCard 
            name={item}
            OnRemove={() => { }}
            />
        )}
        ListEmptyComponent={() => (
      <ListEmpty 
      message='Não há pessoas neste time'
      />
    )}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[
        {paddingBottom: 100},
        players.length === 0 && {flex: 1}
    
    ]}
        />
    <Button
    title="Remover Turma"
    type="SECUNDARY"
    />
                </Container>
    );
}