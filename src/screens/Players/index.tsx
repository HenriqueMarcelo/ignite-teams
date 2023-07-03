import { Header } from '@components/Header'
import { Container } from './styles'
import { Hightlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="adicione a galera e separe o time"
      />

      <ButtonIcon type="PRIMARY" icon="add-chart" />
    </Container>
  )
}
