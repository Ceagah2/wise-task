import { ButtonText, Container } from "./styles"
import { type ButtonProps } from "./types"

const Button = (props: ButtonProps) => {
  return (
    <Container onPress={props.onPress} backgroundColor={props.backgroundColor}>
      <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </Container>
  )
}

export default Button