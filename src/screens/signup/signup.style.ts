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
    paddingVertical: 32,
    backgroundColor: colors.white,
  },
  padding: {
    paddingHorizontal: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray6,
    position: 'absolute',
    bottom: 1,
  },
  textInput: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    marginTop: 20,
    color: colors.white,
    paddingVertical: 3,
    paddingBottom: 6,
  },
  buttonLogin: {
    backgroundColor: colors.accent1,
    borderRadius: 4,
    height: 58,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
