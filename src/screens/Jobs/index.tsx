import { RootStackParamList } from "@/@types/navigation";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import NewTask from "@/components/molecules/NewTaskModal";
import TaskCard from "@/components/molecules/TaskCard";
import { jobsAtom } from "@/store";
import { JobsProps } from "@/store/types";
import { theme } from "@/styles/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ButtonContainer,
  Content,
  Header,
  HeaderDescription,
  HeaderText,
  HeaderTitle,
  Hours,
  HoursContainer,
  NewTaskButton,
  NewTaskContainer,
  NewTaskText,
  NoJobText,
  NoJobsContainer,
  TaskContainer
} from "./styles";

const Jobs = (props: JobsProps) => {
  type NavigationType = NavigationProp<RootStackParamList, 'TaskDetails'>;
  const navigation = useNavigation<NavigationType>();
  const JobData = props.route.params;
  const [, setJobs] = useAtom(jobsAtom);
  const [isModalOpen, setIsModalOpen] = useState<boolean>();
  const [data, setData] = useState<JobsProps>({
    id: '',
    name: '',
    description: '',
    estimatedTime: '',
    elapsedTime: '',
    createdAt: '',
    updatedAt: '',
    responsible: '', 
    responsibleContact: '',
    tasks: []
  })

  useEffect(() => {
    if(JobData){
      setData(JobData)
    }
  },[JobData])
  const handleDelete = () => {
    Alert.alert(
      "Confirmar deleção",
      "Você tem certeza que deseja deletar esse orçamento? Essa ação não pode ser desfeita.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setJobs((prevJobs) => prevJobs.filter((job) => job.id !== data.id));
            navigation.goBack();
          }
        }
      ]
    );
  }
  return(
    <Container>
      <Content>
        <Header>
          <HeaderTitle>{data.name}</HeaderTitle>
          <HeaderDescription>{data.description}</HeaderDescription>
          <HoursContainer>
            <HeaderText>Tempo estimado:</HeaderText>
            <Hours>{data.estimatedTime} horas</Hours>
          </HoursContainer>
          <HoursContainer>
            <HeaderText>Tempo utilizado:</HeaderText>
            {data.elapsedTime ? <Hours>{data.elapsedTime} horas</Hours> : <Hours>0 horas</Hours>}
          </HoursContainer>
        </Header>
      </Content>
      <TaskContainer>
        {data.tasks.length === 0 || !data.tasks ? (
          <NoJobsContainer>
            <NoJobText>Você ainda não tem nenhuma tarefa atrelada à este orçamento. {'\n'}</NoJobText>
            <NewTaskButton onPress={() => setIsModalOpen(true)}>
              <NewTaskText>Clique aqui para adicionar uma tarefa</NewTaskText>
              <Icon name="plus" size={30} color="#000" />
            </NewTaskButton>
          </NoJobsContainer>
        ) : 
        <>
          <NewTaskContainer onPress={() => setIsModalOpen(true)}>
              <NewTaskText>Adicionar nova Tarefa</NewTaskText>
          </NewTaskContainer>
          {data.tasks.map((task) => (
          <TaskCard 
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            estimatedTime={task.estimatedTime}
            elapsedTime={task.elapsedTime}
            createdAt={task.createdAt}
            updatedAt={task.updatedAt}
            status={task.status}
            onPress={() => navigation.navigate('TaskDetails', task)}
          />))}
        </>
      }
      </TaskContainer>
       <ButtonContainer>
          <Button onPress={() => handleDelete() } 
          text="Deletar Orçamento"
          backgroundColor={theme.colors.red}
          textColor={theme.colors.white}
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button onPress={() => navigation.goBack() } 
          text="Voltar"
          backgroundColor={theme.colors.white}
          textColor={theme.colors.black}
        />
      </ButtonContainer>
      {isModalOpen && (
        <NewTask handleClose={() => setIsModalOpen(false)} jobId={data.id}/>
      )}
    </Container>
  )
}


export default Jobs