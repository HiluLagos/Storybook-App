import type { Preview } from "@storybook/react";

import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'celeste',
      values: [
        {
          name: 'celeste',
          value: '#66ff00', // Color celeste
        },
      ],
    },
  },
};

export default preview;
