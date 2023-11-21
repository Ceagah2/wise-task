import { theme } from "@/styles/theme";
import styled from "styled-components/native";

export const Container = styled.Modal`
  flex:1 ;
  justify-content: center;
  align-items: center;  
`;
export const Content = styled.View`
  width: 90%;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  background: ${theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${theme.colors.darkGray};
  padding: 20px;
`;
export const CloseButton = styled.TouchableOpacity``;
export const ModalHeader = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  padding-right: 20px;
`;
export const ModalTitle = styled.Text`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const ModalContent = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const ModalDescription = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.darkGray};
`;
export const InputsContainer = styled.ScrollView`
  width: 100%;
  padding-left: 30px;
`;
export const ModalFooter = styled.View`
  width: 90%;
  height: 50px;
  margin-bottom: 20px;
`;