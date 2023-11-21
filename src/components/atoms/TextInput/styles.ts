import { theme } from '@/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  width: 90%;
  height: 75px;
  border-radius: 10px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 5px;
`;
export const Input = styled.TextInput`
  width: 90%;
  border: 1px solid ${theme.colors.darkGray};
  border-radius: 10px;
  margin-top: 5px;
  padding-left: 10px
`;
export const Label = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;