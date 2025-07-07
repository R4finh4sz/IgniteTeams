import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import { Header } from 'src/Components/Header';
import { HighLight } from 'src/Components/HighLight';
import { GroupCard } from 'src/Components/GroupCard';
import { ListEmpty } from 'src/Components/ListEmpty';

export function Groups() {
  const [groups, setgroups] = useState<string[]>([]);
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
    </Container>
  );
}
