import { type ContainerProps } from './types'
import { DefaultContainer } from './styles'

const Container = ({ children }: ContainerProps) => {
  return (
    <DefaultContainer>
      {children}
    </DefaultContainer>
  )
}

export default Container