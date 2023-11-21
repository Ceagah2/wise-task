import { RootStackParamList } from "@/@types/navigation";
import { type JobsProps } from "@/store/types";
import { theme } from "@/styles/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
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

const JobCard = (props: JobsProps) => {
  type NavigationType = NavigationProp<RootStackParamList, 'Jobs'>;
  const navigation = useNavigation<NavigationType>();
    
const handleNavigation = (props: JobsProps) => {
  navigation.navigate('Jobs', { ...props });
}
  return (
    <Container>
      <Header>
        <JobTitle>{props.name}</JobTitle>
      </Header>
      <Content>
        <TimeContainer>
        <JobDescription>{props.description}</JobDescription>
        <JobDescriptionLine>
          <ContainerText>Tempo Estimado:</ContainerText>
          <JobTime> {props.estimatedTime} horas</JobTime>
        </JobDescriptionLine>
        <JobDescriptionLine>
          <ContainerText>Tempo utilizado:</ContainerText>
          {!props.elapsedTime ? <JobTime> 0 horas</JobTime> : <JobTime> {props.elapsed} horas</JobTime>}
        </JobDescriptionLine>
        </TimeContainer>
        <NavButton onPress={() => handleNavigation(props)}>
          <Icon name="plus" size={36} color={theme.colors.secondary} />
        </NavButton>
      </Content>
    </Container>
  )
}


export default JobCard