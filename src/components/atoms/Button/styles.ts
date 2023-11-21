import { theme } from '@/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: ${(props: any) => props.backgroundColor};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const ButtonText = styled.Text`
  color: ${(props: any) => props.textColor};
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  letter-spacing: 2px;  
`;
