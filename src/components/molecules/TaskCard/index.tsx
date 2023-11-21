import { TaskProps } from "@/store/types";
import { theme } from "@/styles/theme";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  ContainerText,
  Content,
  Header,
  JobDescription,
  JobDescriptionLine,
  JobTime,
  JobTitle,
  NavButton,
  TimeContainer
} from "./styles";

interface TaskCardProps extends TaskProps {
  onPress: any;
}
const TaskCard = (props: TaskCardProps) => {

  return (
    <Container>
      <Header>
        <JobTitle>{props.title}</JobTitle>
      </Header>
      <Content>
        <TimeContainer>
        <JobDescription>{props.description}</JobDescription>
        <JobDescriptionLine>
          <ContainerText>Tempo Estimado:</ContainerText>
          <JobTime> {props.estimatedTime} Horas</JobTime>
        </JobDescriptionLine>
        <JobDescriptionLine>
          <ContainerText>Tempo utilizado:</ContainerText>
          {!props.elapsedTime ? <JobTime> 0 Horas</JobTime> : <JobTime> {props.elapsedTime} Horas</JobTime>}
        </JobDescriptionLine>
        </TimeContainer>
        <NavButton onPress={props.onPress}>
          <Icon name="plus" size={36} color={theme.colors.secondary} />
        </NavButton>
      </Content>
    </Container>
  )
}


export default TaskCard