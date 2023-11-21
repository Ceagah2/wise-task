import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, ButtonText, Container, Image } from './styles';

const GalleryPicker = () => {
  const [image, setImage] = useState<string>('');
  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }
  return (
    <Container>
      <Button onPress={pickFromGallery}>
        <ButtonText>
          Adicionar Imagem
        </ButtonText>
      </Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </Container>
  )
}


export default GalleryPicker