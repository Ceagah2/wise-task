import { Container, Input, Label } from "./styles"
import { type InputProps } from "./types"

const TextInput = (props: InputProps) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Input
        {...props}
      />
    </Container>
  )
}


export default TextInput