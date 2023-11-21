import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import TextInput from "@/components/atoms/TextInput";
import { type TaskProps } from "@/store/types";
import { theme } from "@/styles/theme";
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import {
  ButtonContainer,
  CheckContainer,
  CheckboxText,
  Content,
  Footer,
  Header,
  HeaderTitle,
  InputContent,
  InputsContainer
} from "./styles";

const TaskDetails = (props: TaskProps) => {
  const data = props.route.params
  const [newData, setNewData] = useState<TaskProps>({
    ...data
  })

  const handleCheck = () => {
    newData.status === true 
      ? setNewData({...newData, status: false}) 
      : setNewData({...newData, status: true})
  }

  return(
    <Container>
      <Content>
        <Header>
          <HeaderTitle>{data.title}</HeaderTitle>
        </Header>
        <InputsContainer>
          <InputContent>
            <TextInput 
              label="Nome"
              onChangeText={(text) => setNewData({...newData, name: text})}
              value={data.title}
            />
            <TextInput 
              label="Descrição"
              onChangeText={(text) => setNewData({...newData, description: text})}
              value={data.description}
              multiline
              numberOfLines={4}
            />
             <TextInput 
              label="Tempo estimado (horas)"
              onChangeText={(text) => setNewData({...newData, estimatedTime: text})}
              value={data.estimatedTime}
            />
             <TextInput 
              label="Tempo utilizado (horas)"
              onChangeText={(text) => setNewData({...newData, elapsedTime: text})}
              value={data.elapsedTime}
            />
            <CheckContainer>
              <Checkbox
                value={newData.status}
                onValueChange={handleCheck}
                color={newData.status === true ? '#4630EB' : undefined}
                />
              <CheckboxText>Concluído</CheckboxText>
            </CheckContainer>
          </InputContent>
        </InputsContainer>
        <Footer>
          <ButtonContainer>
            <Button 
              onPress={() => console.log(data)}
              text="Salvar" 
              backgroundColor={theme.colors.primary} 
              textColor={theme.colors.white}              
            />
          </ButtonContainer>
            <ButtonContainer>
            <Button 
              onPress={() => console.log(data)}
              text="Deletar tarefa" 
              backgroundColor={theme.colors.red} 
              textColor={theme.colors.white}              
            />
          </ButtonContainer>
        </Footer>
      </Content>
    </Container>
  )
}


export default TaskDetails