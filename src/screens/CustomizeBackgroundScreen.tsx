import React, { memo, useCallback } from 'react';
import styled from 'styled-components/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useAppearance } from '../context';
import { UIText } from '../components/shared';
import { UIBackGroundImage } from '../components/shared/UIBackgroundImage';

export const CustomizeBackgroundScreen = memo(() => {
  const { saveBackgroundImageUri, backgroundImageUri, removeBackgroundImageUri } = useAppearance();

  const handleChooseBackgroundImage = useCallback(() => {
    launchImageLibrary({ selectionLimit: 1, mediaType: 'photo', includeBase64: true }, res => {
      if (res.didCancel) {
        console.log('User cancelled');
      } else if (res.errorCode) {
        console.log('ImagePickerError: ', res.errorMessage);
      } else {
        saveBackgroundImageUri(res.assets[0].uri);
      }
    });
  }, [saveBackgroundImageUri]);

  return (
    <Container>
      <UIBackGroundImage backgroundImageUri={backgroundImageUri} />
      <Section>
        <Button onPress={handleChooseBackgroundImage}>
          <Text>Select background image</Text>
        </Button>
      </Section>
      <Section>
        <Button onPress={removeBackgroundImageUri}>
          <Text style={{ color: '#FF453A' }}>Remove background image</Text>
        </Button>
      </Section>
    </Container>
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
