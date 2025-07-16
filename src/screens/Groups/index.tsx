import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import { Header } from 'src/Components/Header';
import { HighLight } from 'src/Components/HighLight';
import { GroupCard } from 'src/Components/GroupCard';
import { ListEmpty } from 'src/Components/ListEmpty';
import { Button } from 'src/Components/Button';
import { useNavigation } from '@react-navigation/native';

export function Groups(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  const [groups, setgroups] = useState<string[]>(['Teste de turma']);

const navigation = useNavigation()

  function handleNewGroup(){
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header  />
      <HighLight 
      title='Turmas'
      subtitle='Jogue com a sua turma'/>
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <GroupCard
          title={item}
        />
      )}
      contentContainerStyle={groups.length === 0&& { flex: 1 }}
      ListEmptyComponent={() => (
      <ListEmpty 
      message='Que tal cadastrar a primeira turma?'
      />
    )}
      />
      <Button 
      title='Criar nova turma' 
      onPress={handleNewGroup}
      />
    </Container>
  );
}
