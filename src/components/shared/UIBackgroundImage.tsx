import React, { memo } from 'react';
import styled from 'styled-components/native';

interface UIBackGroundImageProps {
  backgroundImageUri: string | null;
}

export const UIBackGroundImage = memo<UIBackGroundImageProps>(
  ({ backgroundImageUri }) => backgroundImageUri && <Image source={{ uri: backgroundImageUri }} />,
);

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
