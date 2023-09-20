import {StyleSheet} from 'react-native';
import {useColors} from '@hooks/use-colors.hook';

const colors = useColors();

export default StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
