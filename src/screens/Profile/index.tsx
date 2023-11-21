import { RootStackParamList } from "@/@types/navigation";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import TextInput from "@/components/atoms/TextInput";
import GalleryPicker from "@/components/molecules/ImagePicker";
import { userDataAtom } from "@/store";
import { theme } from '@/styles/theme';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BackButton,
  ButtonContainer,
  ContainerDescription,
  ContainerHeader,
  ContainerTitle,
  Content,
  ImageContainer,
  InputContainer,
  LoadingContainer,
  ProfileImage,
  ScrollContainer
} from "./styles";

const Profile = () => {
  type NavigationType = NavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<NavigationType>();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useAtom(userDataAtom);

  useEffect(() => {
    if (userData) {
      setUserData(userData);
    }
  }, [userData, setUserData]);

  const handleSave = () => {
    const isAnyFieldEmpty = Object.values(userData).some(value => value === '');
    if (isAnyFieldEmpty) {
      Alert.alert("Atenção", "Todos os campos são obrigatórios para um cálculo mais preciso");
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <Container>
      {isLoading && <LoadingContainer><ActivityIndicator color={theme.colors.black} size="large" /></LoadingContainer>}
      <BackButton>
        <Icon 
          name={"chevron-left"}
          size={20}
          color={theme.colors.black}
          onPress={() => navigation.navigate('Home')} 
        />
      </BackButton>
      <Content>
        <ImageContainer>
          {userData.imageUrl && <ProfileImage source={userData.imageUrl} />}
          <GalleryPicker />
        </ImageContainer>
        <ContainerHeader>
          <ContainerTitle>Perfil</ContainerTitle>
          <ContainerDescription>Preencha ou altere seus dados</ContainerDescription>
        </ContainerHeader>
        <ScrollContainer>
        <InputContainer>
          <TextInput
            label="Nome"
            value={userData.name}
            onChangeText={(value: string) => setUserData({ ...userData, name: value })}
          />
          <TextInput
            label="E-mail"
            value={userData.email}
            onChangeText={(value: string) => setUserData({ ...userData, email: value })}
          />
          <TextInput
            label="Profissão"
            value={userData.role}
            onChangeText={(value: string) => setUserData({ ...userData, role: value })}
          />
          <TextInput
            label="Valor da hora trabalhada (R$)"
            value={userData.costPerHour}
            onChangeText={(value: string) => setUserData({ ...userData, costPerHour: value })}
          />
          <TextInput
            label="Alíquota de imposto (%)"
            value={userData.taxPrice}
            onChangeText={(value: string) => setUserData({ ...userData, taxPrice: value })}
            type="numeric"
            keyboardType="numeric"
          />
           <TextInput
            label="Custos mensais (R$)"
            value={userData.personalCost}
            onChangeText={(value: string) => setUserData({ ...userData, personalCost: value })}
          />
          <ButtonContainer>
            <Button
              backgroundColor={theme.colors.secondary}
              onPress={() => handleSave()}
              text='Salvar'
              textColor={theme.colors.white}
            />
          </ButtonContainer>
        </InputContainer>
      </ScrollContainer>
    </Content>
  </Container>
  )
}

export default Profile