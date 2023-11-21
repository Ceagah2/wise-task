import { theme } from '@/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border-radius: 20px;
  background: ${theme.colors.white};
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 20px;
`;
export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;  
  padding: 20px;

`;
export const JobTitle = styled.Text`
  font-size: ${theme.sizes.subHeading};
  font-family: ${theme.fonts.subHeading};
  color: ${theme.colors.darkGray};
`;
export const Content = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;
export const JobDescriptionLine = styled.View`
    flex-direction: row;
    margin: 10px 0;
`;
export const ContainerText=  styled.Text`
  font-size: ${theme.sizes.description};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const JobDescription = styled.Text`
  font-size: ${theme.sizes.description};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const TimeContainer = styled.View``;
export const JobTime = styled.Text`
  font-size: ${theme.sizes.description};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const NavButton = styled.TouchableOpacity`
  padding-top: 50px;
`;
