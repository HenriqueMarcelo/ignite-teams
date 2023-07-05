import AsyncStorage from '@react-native-async-storage/async-storage'
import { groupsGetAll } from './groupsGetAll'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'

export async function groupRemoveByName(groupDeletedName: string) {
  const storageGroups = await groupsGetAll()
  const groups = storageGroups.filter((group) => group !== groupDeletedName)

  await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
  await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeletedName}`)
}
