import {Meta, StoryObj} from "@storybook/react";
import QrRecipe from "./QrRecipe.tsx";

const meta = {
  title: 'Cards/Qr recipe',
  component: QrRecipe,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof QrRecipe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

