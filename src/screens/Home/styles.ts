import { theme } from "@/styles/theme";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text``;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  height: 125px;
  background-color: ${theme.colors.white};
  padding-right: 10px;
  padding-left: 10px;
`;
export const GreetingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const GreetingText = styled.Text`
  margin-right: 3px;
  font-size: ${theme.sizes.subHeading};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
 `;
export const UserNameText = styled.Text`
  font-size: ${theme.sizes.subHeading};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.primary};
  font-weight: bold;
`;
export const AvatarButton = styled.TouchableOpacity`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 3px solid ${theme.colors.darkGray};
`;
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
`;
export const NewAccountButton = styled.TouchableOpacity`
  border-radius: 50px;
  border: 1px solid ${theme.colors.darkGray};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.lightBlue};
`;
export const ProfileText = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
`;
export const Content = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding-left: 20px
`;

export const FooterMenu = styled.View`
  width: 100%;
  height: 75px;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary};
`;
