import { RootStackParamList } from '@/@types/navigation';
import BookImg from '@/assets/book.png';
import ClockImg from '@/assets/clock.png';
import PhoneImg from '@/assets/phone_app.png';
import SheetImg from '@/assets/sheet.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Container, SlideImage, SlideText, SlideTitle } from './styles';

type NavigationType = NavigationProp<RootStackParamList, 'Profile'>;

const Onboarding = () => {
  const navigation = useNavigation<NavigationType>();
  const slides = [
    {
      key: 1,
      title: 'Economize Tempo',
      text: 'Pare de perder tempo ao fazer \n seus orçamentos.',
      image: ClockImg,
    },
    {
      key: 2,
      title: 'Chega de cálculos',
      text: 'Chega de cálculos complexos, anotações em papel ou dúvidas.',
      image: BookImg,
    },
    {
      key: 3,
      title: 'Fácil e prático',
      text: 'Tenha tudo na mão, de forma \n rápida e profissional',
      image: PhoneImg,
    },
    {
      key: 4,
      title: 'Papel ?',
      text: 'Deixe o papel apenas para o contrato. Faça o orçamento\n direto no aplicativo',
      image: SheetImg,
    }
  ];

  const onDone = () => {
    AsyncStorage.setItem('@userOnboarded', 'true');
    navigation.navigate('Profile');
  };

  const Items = ({ item }: any) => {
    return (
      <Container>
        <SlideTitle>{item.title}</SlideTitle>
        <SlideImage source={item.image} />
        <SlideText>{item.text}</SlideText>
      </Container>
    )
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={Items}
      onDone={onDone}
      nextLabel='Próximo'
      doneLabel="Pronto"
    />
  )
}

export default Onboarding;