import { Meta, StoryObj } from '@storybook/react';
import Activities from './Activities.tsx';

const meta: Meta<typeof Activities> = {
    title: 'Views/ActivitiesView',
    component: Activities,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Activities>;

export const Default: Story = {};