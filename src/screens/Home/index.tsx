import { RootStackParamList } from '@/@types/navigation';
import Container from '@/components/atoms/Container';
import JobCard from '@/components/molecules/JobCard';
import NewJob from '@/components/molecules/NewJobModal';
import { jobsAtom, userDataAtom } from '@/store';
import { type JobsProps } from '@/store/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAtom, useAtomValue } from 'jotai';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Avatar,
  AvatarButton,
  Content,
  FooterMenu,
  GreetingContainer,
  GreetingText,
  Header,
  NewAccountButton,
  ProfileText,
  UserNameText
} from './styles';
export const Home = () => {
  type NavigationType = NavigationProp<RootStackParamList, 'Profile'>;
  const navigation = useNavigation<NavigationType>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>();
  const [user] = useAtom(userDataAtom);
  const Jobs = useAtomValue(jobsAtom);
  const ProfileImgURL = user.imageUrl;
 
  return (
    <Container>
      <Header>
        <GreetingContainer>
          <GreetingText>
            Bem-vindo
          </GreetingText>
          <UserNameText>
            {user.name}
          </UserNameText>
        </GreetingContainer>
        {ProfileImgURL
          ? <AvatarButton onPress={() => navigation.navigate('Profile')}>
            <Avatar source={ProfileImgURL} />
          </AvatarButton>
          : <AvatarButton onPress={() => navigation.navigate('Profile')}>
          </AvatarButton>
        }
      </Header>
      <Content>
        {!Jobs || Jobs.length === 0 && (
          <ProfileText>
            Você ainda não tem nenhum orçamento cadastrado. {`\n`}
            Clique em {<Icon name="plus" size={20} color="#000" />} para criar seu primeiro orçamento.
          </ProfileText>
        )}
        {Jobs && Jobs.length > 0 && Jobs.map((job: JobsProps) => (
           <JobCard
            key={job.id}
            name={job.name}
            description={job.description}
            estimatedTime={job.estimatedTime}
            elapsedTime={job.elapsedTime}
            createdAt={job.createdAt}
            updatedAt={job.updatedAt}
            id={job.id}
            tasks={job.tasks} 
            responsible={job.responsible} 
            responsibleContact={job.responsibleContact}          />
        ))}
      </Content>
      <FooterMenu>
        <NewAccountButton onPress={() => setIsModalOpen(true)} >
          <Icon name="plus" size={20} color="#fff" />
        </NewAccountButton>
      </FooterMenu>
      {isModalOpen && (
        <NewJob handleClose={() => setIsModalOpen(false)} />
      )}
    </Container>
  )
}