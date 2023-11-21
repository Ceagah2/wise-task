import { theme } from '@/styles/theme';
import styled from 'styled-components/native';

export const Content = styled.View`
  width: 90%;
  height: 75%;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.white};
`;
export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.darkGray};
`;
export const CheckboxText = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
  margin-left: 10px;
`;
export const CheckContainer = styled.View`
  width: 100%;
  flex-direction: row;
`
export const InputsContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const InputContent = styled.ScrollView`
  width: 90%;
`;
export const Footer = styled.View`
  height: 100px;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
export const ButtonContainer = styled.View`
    height: 50px;
    width: 100%;
    margin-bottom: 10px;
`;