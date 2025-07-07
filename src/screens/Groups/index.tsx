import { Container } from 'src/Components/Loading/styles';
import { Header } from 'src/Components/Header';
import { HighLight } from 'src/Components/HighLight';

export function Groups() {
  return (
    <Container>
      <Header  />

      <HighLight 
      title='Turmas'
      subtitle='Jogue com a sua turma'/>

    </Container>
  );
}
