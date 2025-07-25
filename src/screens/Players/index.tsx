import { Header } from "src/Components/Header";
import { HighLight } from "src/Components/HighLight";
import { Filter } from "src/Components/Filter";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import {ButtonIcon} from 'src/Components/ButtonIcon'
import { Input } from "src/Components/Input";
import { Alert, FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "src/Components/PlayerCard";
import { ListEmpty } from "src/Components/ListEmpty";
import { Button } from "src/Components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "src/Utils/AppError";
import { playerAddByGroup } from "src/Storage/player/playerAddByGroup";
import { playerGetByGroup } from "src/Storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "src/Storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "src/Storage/player/PlayerStorageDTO";

type RouteParams = {
    group: string;
}

export function Players(){
    const [newPlayerName, setnewPlayerName ] = useState('');
    const [team, setTeam] = useState('Time a');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const route = useRoute();
    const {group} = route.params as RouteParams;

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0){
           return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa para adicionar')
        }
        
        const newPlayer = {
            name: newPlayerName,
            team,
        }
        try{
            await playerAddByGroup(newPlayer, group);
        }catch(error){
            if(error instanceof AppError){
                Alert.alert('Nova pessoa', error.message)
            }else{
                console.log(error)
                Alert.alert('Nova pessoa', 'Não foi possivel adicionar');
            }
        }
    }

    async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
    }
  }

    return (
    <Container>
      <Header showBackButton />


      <HighLight title={group} subtitle={"adicione a galera e separe os times"}/>

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
        />

        <ButtonIcon 
          icon="add"
          onPress={handleAddPlayer} 
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
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
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button 
        title="Remover Turma" type="SECUNDARY"
      />
    </Container>
  )
}