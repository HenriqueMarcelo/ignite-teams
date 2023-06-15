import { Header } from '@components/Header'
import { Container, MainText } from './styles'
import { Hightlight } from '@components/Highlight'

export function Groups() {
  return (
    <Container>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />
      <MainText>Groups!</MainText>
    </Container>
  )
}
