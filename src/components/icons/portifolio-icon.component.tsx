import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useColors} from '@hooks/use-colors.hook';

interface PortifolioIconProps {
  fillColor?: string;
}

export const PortifolioIcon = ({fillColor}: PortifolioIconProps) => {
  const colors = useColors();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 7.522 5.443 3.732 9.5 2.458V4.582C7.78092 5.28005 6.3578 6.55371 5.47406 8.18512C4.59032 9.81652 4.30088 11.7043 4.65525 13.5255C5.00963 15.3468 5.98579 16.9883 7.41676 18.1693C8.84774 19.3503 10.6446 19.9975 12.5 20C14.0938 20 15.6513 19.524 16.9728 18.6332C18.2944 17.7424 19.32 16.4773 19.918 15H22.042C20.768 19.057 16.978 22 12.5 22ZM22.45 13H11.5V2.05C11.829 2.017 12.163 2 12.5 2C18.023 2 22.5 6.477 22.5 12C22.5 12.337 22.483 12.671 22.45 13ZM13.5 4.062V11H20.438C20.2154 9.23761 19.4129 7.59934 18.1568 6.34324C16.9007 5.08713 15.2624 4.28459 13.5 4.062Z"
        fill={fillColor || colors.white}
      />
    </Svg>
  );
};
