import { theme } from '@/styles/theme';
import styled from 'styled-components/native';

export const Content = styled.View`
  width: 90%;
  border-radius: 20px;
  margin-top: 30px;
`;
export const Header = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.white};
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  margin: 30px 0;
`;
export const HeaderTitle = styled.Text`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.darkGray};
`;
export const HeaderDescription = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
  padding: 10px;
`;
export const HoursContainer = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  flex-direction:row;
  padding-left: 30px
`;
export const HeaderText = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const Hours = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
  font-weight: bold;
  padding-left: 25px
`;
export const TaskContainer = styled.ScrollView`
  background-color: ${theme.colors.secondary};
  width: 90%;
  height: 50%;
  border-radius: 20px;
`;

export const ButtonContainer = styled.View`
  width: 90%;
  height: 30px;
  margin: 5px 0;
`;

export const NoJobsContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const NoJobText = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.black};
`;
export const NewTaskButton = styled.TouchableOpacity`
  width: 90%;
  justify-content: center;
  align-items: center;  
  border-radius: 50px;
  background-color: ${theme.colors.primary};
`;
export const NewTaskText = styled.Text`
  font-size: ${theme.sizes.subHeading};
  font-family: ${theme.fonts.subHeading};
  color: ${theme.colors.black};
  padding-bottom: 10px;
`;

export const ModalContainer = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const NewTaskContainer = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;