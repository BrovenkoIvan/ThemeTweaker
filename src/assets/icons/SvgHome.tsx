import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

interface SvgHomeProps {
  fill?: string;
  size: number;
}

export const SvgHome = memo<SvgHomeProps>(({ fill = '#555', size = 24 }) => (
  <Svg height={size} viewBox="0 -960 960 960" width={size}>
    <Path
      d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
      fill={fill}
    />
  </Svg>
));
