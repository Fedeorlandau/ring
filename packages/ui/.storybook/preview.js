// import '../src/styles/globals.css';
// import * as NextImage from 'next/image';

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });
// import '!style-loader!css-loader!postcss-loader!./tailwind-imports.css';
import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
};
