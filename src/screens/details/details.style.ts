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
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray6,
    bottom: 1,
    marginTop: 10,
  },
  padding: {
    paddingHorizontal: 16,
  },
  row: {
    marginTop: 20,
    borderBottomColor: colors.gray3,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  labelTitles: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: colors.accent1,
  },
  labelEmptyContent: {
    fontSize: 12,
    lineHeight: 24,
    color: colors.white,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    flex: 1,
    margin: 5,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    height: 47,
    borderRadius: 4,
  },
});
