import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useColors} from '@hooks/use-colors.hook';

interface HomeIconProps {
  fillColor?: string;
}

export const HomeIcon = ({fillColor}: HomeIconProps) => {
  const colors = useColors();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.5 19.7327C21.5 19.9979 21.3946 20.2523 21.2071 20.4398C21.0196 20.6273 20.7652 20.7327 20.5 20.7327H4.5C4.23478 20.7327 3.98043 20.6273 3.79289 20.4398C3.60536 20.2523 3.5 19.9979 3.5 19.7327V9.22269C3.49989 9.07031 3.53462 8.91991 3.60152 8.78299C3.66841 8.64608 3.76572 8.52626 3.886 8.43269L11.886 2.21069C12.0615 2.07414 12.2776 2 12.5 2C12.7224 2 12.9385 2.07414 13.114 2.21069L21.114 8.43269C21.2343 8.52626 21.3316 8.64608 21.3985 8.78299C21.4654 8.91991 21.5001 9.07031 21.5 9.22269V19.7327ZM11.5 12.7327V18.7327H13.5V12.7327H11.5Z"
        fill={fillColor || colors.white}
      />
    </Svg>
  );
};
