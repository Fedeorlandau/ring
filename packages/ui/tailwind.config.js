const { join } = require('path');
const { globalPreset } = require('@ring/tailwind-preset');

module.exports = {
  content: [join(__dirname, 'src/**/*.{ts,tsx}')],
  presets: [globalPreset],
  theme: {
    extend: {},
  },
};
