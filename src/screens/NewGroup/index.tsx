import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Hightlight } from '@components/Highlight'
import { Button } from '@components/Button'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Hightlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  )
}