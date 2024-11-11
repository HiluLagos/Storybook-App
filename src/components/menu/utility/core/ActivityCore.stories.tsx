import {Meta, StoryObj} from "@storybook/react";
import ActivityCore from "./ActivityCore.tsx";
import Medicine from "../../../cards/medicine/Medicine.tsx";
import React from "react";

const meta = {
  title: 'Menu/Utility/Core',
  component: ActivityCore,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    activity: {
      control: 'select',
      options: ['water', 'steps', 'pills'],
      description: 'The activity it displays'
    },
    count: {
      control: 'number',
      description: 'The count to display'
    },
    max: {
      control: 'number',
      description: 'The maximum count',
    },
    isCounter: {
      control: 'boolean',
      description: 'Whether to display the count or not'
    },
    subOperation: {
      description: 'The operation to perform on the count'
    },
    sumOperation: {
      description: 'The operation to perform on the count'
    },
  },
} satisfies Meta<typeof ActivityCore>;

export default meta;
type Story = StoryObj<typeof meta>;

const WaterComponent: React.FC = () => {
  const [count, setCount] = React.useState(10);

  const manageSubtraction = () => {
    const newValue = count - 1;
    setCount(newValue < 0 ? 0 : newValue);
  };

  return (
    <div className={"flex flex-col justify-items-center"}>
      <ActivityCore activity={"water"} count={count} max={20} isCounter={true} subOperation={manageSubtraction} sumOperation={() => setCount(count + 1)} />
    </div>
  );
}

export const Water: StoryObj<typeof ActivityCore> = {
  render: () => (
    <WaterComponent/>
  )
}

export const Steps: Story = {
  args: {
    activity: 'steps',
    count: 241,
    max: 68,
    isCounter: false
  },
}

const MedicineComponent: React.FC = () => {
  const [count, setCount] = React.useState(6);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);
  return (
    <ActivityCore activity="pills" count={6 - count} max={6} isCounter={false}>
      <Medicine name="Paracetamol" description={""} schedule={""} completeTime={""} onCompletion={decrementCount} onDecompletion={incrementCount}/>
      <Medicine name="Paracetamol" description={""} schedule={""} completeTime={""} onCompletion={decrementCount} onDecompletion={incrementCount}/>
      <Medicine name="Paracetamol" description={""} schedule={""} completeTime={""} onCompletion={decrementCount} onDecompletion={incrementCount}/>
      <Medicine name="Paracetamol" description={""} schedule={""} completeTime={""} onCompletion={decrementCount} onDecompletion={incrementCount}/>
      <Medicine name="Paracetamol" description={""} schedule={""} completeTime={""} onCompletion={decrementCount} onDecompletion={incrementCount}/>
      <Medicine name="Paracetamol" description={""} schedule={""} completeTime={""} onCompletion={decrementCount} onDecompletion={incrementCount}/>
    </ActivityCore>
  )
};

export const Pills: StoryObj<typeof ActivityCore> = {
  render: () => (
    <MedicineComponent/>
  )
}
