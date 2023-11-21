import { theme } from "@/styles/theme";
import styled from "styled-components/native";

export const Content = styled.View`
  width: 90%;
  height: 80%;
  border: 1px solid #000;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
`;
export const BackButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 100px;
  margin-bottom: 10px;
  margin-left: -80%;
`;
export const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ContainerHeader = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.Text`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.darkGray};
`;
export const ContainerDescription = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;

export const ImageContainer = styled.View`
  width: 40%;
  height: 125px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 20px
`;
export const ProfileImage = styled.Image`
  width: 75px;
  height: 75px;
`;

export const ButtonContainer = styled.View`
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding-top: 10px
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  height: 100%;
  width: 100%;
  z-index: 999;
`;

