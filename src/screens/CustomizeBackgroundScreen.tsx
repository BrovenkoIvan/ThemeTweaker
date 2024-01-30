import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useAppearance } from '../context';
import { Footer, UIText } from '../components/shared';
import { UIBackGroundImage } from '../components/shared/UIBackgroundImage';
import { useNavigation } from '@react-navigation/native';

export const CustomizeBackgroundScreen = memo(() => {
  const navigation = useNavigation();
  const { saveBackgroundImageUri, backgroundImageUri, removeBackgroundImageUri } = useAppearance();
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState<string | undefined>('');

  const handleSave = useCallback(() => {
    if (selectedBackgroundImage) {
      saveBackgroundImageUri(selectedBackgroundImage);
    }
  }, [saveBackgroundImageUri, selectedBackgroundImage]);

  const handleCancel = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
  }, [navigation]);

  const handleChooseBackgroundImage = useCallback(() => {
    launchImageLibrary({ selectionLimit: 1, mediaType: 'photo', includeBase64: true }, res => {
      if (res.didCancel) {
        console.log('User cancelled');
      } else if (res.errorCode) {
        console.log('ImagePickerError: ', res.errorMessage);
      } else {
        if (res.assets && res.assets.length > 0) {
          setSelectedBackgroundImage(res.assets[0].uri);
        }
      }
    });
  }, []);

  return (
    <>
      <Container>
        <UIBackGroundImage
          backgroundImageUri={
            selectedBackgroundImage ? selectedBackgroundImage : backgroundImageUri
          }
        />
        <Section>
          <Button onPress={handleChooseBackgroundImage}>
            <Text>Select background image</Text>
          </Button>
        </Section>
        {backgroundImageUri && (
          <Section>
            <Button onPress={removeBackgroundImageUri}>
              <Text style={{ color: '#FF453A' }}>Remove background image</Text>
            </Button>
          </Section>
        )}
      </Container>
      <Footer handleCancel={handleCancel} handleSave={handleSave} />
    </>
  );
});

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
`;

const Section = styled.View`
  margin: 12px 8px 0px 8px;
  border-radius: 8px;
  padding: 10px 4px 10px 10px;
  background-color: ${props => props.theme.secondary};
  gap: 10px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled(UIText)``;
