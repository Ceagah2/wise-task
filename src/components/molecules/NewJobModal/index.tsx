import Button from "@/components/atoms/Button"
import TextInput from "@/components/atoms/TextInput"
import { jobsAtom, userJobsAtom } from "@/store"
import { type JobsProps } from "@/store/types"
import { theme } from "@/styles/theme"
import { useAtom } from "jotai"
import { useState } from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import {
  CloseButton,
  Container,
  Content,
  InputsContainer,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle
} from "./styles"

const NewJob = ({handleClose}: any) => {
const [, setJobs] = useAtom(jobsAtom);
const [, setUserJobs] = useAtom(userJobsAtom);

  const [data, setData] = useState<JobsProps>({
    id: "",
    name: "",
    description: "",
    estimatedTime: "",
    elapsedTime: "",
    createdAt: '',
    updatedAt: '',
    responsible: '',
    responsibleContact: '',
    tasks: []
  })

  
  const handleSave = () => {
    const createdAt = new Date().toString();
    const id = Math.random().toString(36).substring(2);
    const newData = {
      ...data,
      id,
      createdAt,
    };
 
  setJobs((prevJobs: JobsProps[]) => [...prevJobs, newData]);
  setUserJobs((prevUserJobs) => ({
    jobs: [...prevUserJobs.jobs, newData],
  }));
  handleClose();
  };


  return (
    <Container animationType="slide" transparent>
      <Content>
      <ModalHeader>
        <CloseButton onPress={  handleClose }>
          <Icon name="times" size={30} color={"#000"}/>
        </CloseButton>
      </ModalHeader>
        <ModalTitle>Novo orçamento</ModalTitle>
      <ModalContent>
        <ModalDescription>
          Preencha todos os campos abaixo, para criar um novo orçamento. 
          Após isso, acesse o novo orçamento para adicionar as tarefas.
        </ModalDescription>
      </ModalContent>
      <InputsContainer>
        <TextInput 
          label="Título"
          value={data.name}
          onChangeText={text => setData({...data, name: text})}
        />
        <TextInput 
          label="Descrição"
          value={data.description}
          onChangeText={text => setData({...data, description: text})}
          multiline={true}
          numberOfLines={4}
        />
        <TextInput 
          label="Tempo estimado (em horas)"
          value={data.estimatedTime}
          onChangeText={text => setData({...data, estimatedTime: text})}
          keyboardType="numeric"
        />

      </InputsContainer>
      <ModalFooter>
        <Button 
          onPress={() => handleSave()}
          backgroundColor={theme.colors.secondary}
          textColor={theme.colors.white}
          text="Salvar"
        />
      </ModalFooter>
      </Content>
    </Container>
  )
}


export default NewJob