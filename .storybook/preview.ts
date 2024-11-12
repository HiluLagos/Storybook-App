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
          value: '#ffe6a4',
        },
      ],
    },
  },
};

export default preview;
