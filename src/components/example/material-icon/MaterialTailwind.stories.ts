import {Meta, StoryObj} from "@storybook/react";
import MaterialTailwind from "./MaterialTailwind.tsx";

const meta = {
  title: 'Example/Material Tailwind',
  component: MaterialTailwind,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof MaterialTailwind>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleText: Story = {

};

export const PulsaDosVecesParaEditar: Story = {

};
