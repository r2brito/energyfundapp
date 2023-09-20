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
  accountIcon: {
    backgroundColor: colors.gray6,
    padding: 5,
    borderRadius: 50,
  },
  padding: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray6,
    position: 'absolute',
    bottom: 1,
  },
});
