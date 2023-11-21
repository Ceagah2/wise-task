import { theme } from '@/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 200px;
  border-radius: 20px;
  background: ${theme.colors.white};
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 20px;
`;
export const Header = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;  
  padding-top: 20px;
`;
export const JobTitle = styled.Text`
  font-size: ${theme.sizes.subHeading};
  font-family: ${theme.fonts.subHeading};
  color: ${theme.colors.darkGray};
`;
export const Content = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;
export const JobDescriptionLine = styled.View`
    flex-direction: row;
`;
export const ContainerText=  styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const JobDescription = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const TimeContainer = styled.View``;
export const JobTime = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const NavButton = styled.TouchableOpacity`
  padding-top: 50px;
`;
