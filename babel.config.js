module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
        polyfills: [
          'es6.promise',
          'es6.symbol',
        ],
      },
    ],
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true,
    }, 'vant'],
  ],
};
