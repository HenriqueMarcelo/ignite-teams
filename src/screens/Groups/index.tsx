import { Header } from '@components/Header'
import { Container, MainText } from './styles'
import { Hightlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'

export function Groups() {
  return (
    <Container>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
      <MainText>Groups!</MainText>
    </Container>
  )
}
