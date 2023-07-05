import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Hightlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  async function handleNew() {
    const groupName = group.trim()
    try {
      if (groupName.length === 0) {
        return Alert.alert('Nova Turma', 'Informe o nome da turma.')
      }

      await groupCreate(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Turma', error.message)
      } else {
        Alert.alert('Nova Turma', 'Não foi possível criar uma nova turma.')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Hightlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 30 }} onPress={handleNew} />
      </Content>
    </Container>
  )
}
