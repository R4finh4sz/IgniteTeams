import { useState } from 'react';
import { Container } from './styles';
import { Header } from 'src/Components/Header';
import { HighLight } from 'src/Components/HighLight';
import { GroupCard } from 'src/Components/GroupCard';

export function Groups() {
  const [groups, setgroups] = useState();
  return (
    <Container>
      <Header  />
      <HighLight 
      title='Turmas'
      subtitle='Jogue com a sua turma'/>

      <GroupCard title='Galera do Ignite' />
    </Container>
  );
}
