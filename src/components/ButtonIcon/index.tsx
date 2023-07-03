import { TouchableOpacityProps } from 'react-native'
import { ButtonIconTypeStyleProps, Container, Icon } from './styles'

type Props = TouchableOpacityProps & {
  type: ButtonIconTypeStyleProps
}

export function ButtonIcon({ type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name="home" type="SECONDARY" />
    </Container>
  )
}
