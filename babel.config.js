module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
