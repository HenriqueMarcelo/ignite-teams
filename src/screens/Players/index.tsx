import { Header } from '@components/Header'
import { Container, Form } from './styles'
import { Hightlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="adicione a galera e separe o time"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon type="PRIMARY" icon="add" />
      </Form>
      <Filter title="Time A" isActive />
      <Filter title="Time B" />
    </Container>
  )
}
