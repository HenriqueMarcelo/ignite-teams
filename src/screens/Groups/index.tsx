import { Header } from '@components/Header'
import { Container } from './styles'
import { Hightlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty'

export function Groups() {
  const [groups, setGroups] = useState([
    // 'Galera da Rocket',
    // 'Galera da Pelada',
  ])

  return (
    <Container>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={!groups.length && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </Container>
  )
}
