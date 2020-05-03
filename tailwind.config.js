module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './components/**/*.svelte',
    './src/**/*.svelte',
    './**/*.svelte',
  ],
  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' }
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    fontFamily: false,
  }
}
