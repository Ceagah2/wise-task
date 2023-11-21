import Button from "@/components/atoms/Button"
import TextInput from "@/components/atoms/TextInput"
import { jobsAtom, tasksAtom } from "@/store"
import { type TaskProps } from "@/store/types"
import { theme } from "@/styles/theme"
import { useAtom } from "jotai"
import { useState } from "react"
import { Alert } from "react-native"
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

const NewTask = ({handleClose, jobId}: any) => {
  const [, setTasks] = useAtom(tasksAtom);
  const [jobs, setJobs] = useAtom(jobsAtom);
  const [data, setData] = useState<TaskProps>({
    id: "",
    title: "",
    description: "",
    estimatedTime: "",
    elapsedTime: "",
    createdAt: '',
    updatedAt: '',
    status: false,
  })
  
  const handleSubmit = () => {
    const createdAt = new Date().toString();
    const id = Math.random().toString(36).substring(2);
    const sendData = [data.title, data.description, data.estimatedTime]
    const isAnyFieldEmpty = Object.values(sendData).some(value => value === '');
    const newTask = {
      ...data,
      id,
      createdAt,
    };
    if(isAnyFieldEmpty){
      Alert.alert("Atenção", "Todos os campos são obrigatórios para um cálculo mais preciso");
      return false
    }
    
    setTasks((prevTasks): TaskProps[] => [...prevTasks, newTask]);

     const updatedJobs = jobs.map((job) => {
      if (job.id === jobId) {
        return {
          ...job,
          tasks: [...job.tasks, newTask],
        };
      }
      return job;
    });
    setJobs(updatedJobs);
    handleClose();
  };

  return (
    <Container animationType="slide" transparent>
      <Content> 
        <ModalHeader>
          <CloseButton onPress={handleClose}>
            <Icon name="times" size={30} color={"#000"}/>
          </CloseButton>
        </ModalHeader>
          <ModalTitle>Nova Tarefa</ModalTitle>
        <ModalContent>
          <ModalDescription>
            Preencha todos os campos abaixo, para criar uma nova tarefa.
          </ModalDescription>
        </ModalContent>
        <InputsContainer>
          <TextInput 
            label="Título"
            value={data.title}
            onChangeText={text => setData({...data, title: text})}
          />
          <TextInput 
            label="Descrição"
            value={data.description}
            multiline
            numberOfLines={4}
            onChangeText={text => setData({...data, description: text})}
          />
          <TextInput 
            label="Tempo estimado (em horas)"
            value={data.estimatedTime}
            keyboardType="numeric"
            onChangeText={text => setData({...data, estimatedTime: text})}
          />
        <ModalFooter>
          <Button 
            onPress={() => handleSubmit()}
            backgroundColor={theme.colors.secondary}
            textColor={theme.colors.white}
            text="Salvar"
          />
        </ModalFooter>
        </InputsContainer>
      </Content>
    </Container>
  )
}


export default NewTask