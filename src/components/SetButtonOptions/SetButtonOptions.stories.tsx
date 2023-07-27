import { StoryFn, Meta } from '@storybook/react';
import SetButtonOptions, { SetButtonOptionsProps } from './SetButtonOptions';

export default {
  title: 'Components/SetButtonOptions',
  component: SetButtonOptions,
} as Meta;

const Template: StoryFn<SetButtonOptionsProps> = (args) => <SetButtonOptions {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  setClickedBtnArrayPos: (i) => {},
};
