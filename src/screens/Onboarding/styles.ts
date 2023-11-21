import { theme } from '@/styles/theme';
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;

export const CircleButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, .2);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const SlideTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.sizes.heading};
  font-weight: bold;
  text-align: center;
  font-family: ${theme.fonts.heading};
`;
export const SlideText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.sizes.subHeading};
  font-weight: bold;
  text-align: center;
  font-family: ${theme.fonts.body};
`;
export const SlideImage = styled.Image`
  width: 60%;
  height: 40%;
  object-fit: contain;
`;
