/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultValues} = require('metro-config/src/defaults');
const {
  resolver: {sourceExts, assetExts},
} = getDefaultValues();

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'svg'],
  },
  assets: ['./src/assets/fonts/'],
};
