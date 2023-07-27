import { StoryFn, Meta } from '@storybook/react';
import MovingTitle, { MovingTitleProps } from './MovingTitle';

export default {
  title: 'Components/MovingTitle',
  component: MovingTitle,
} as Meta;

const Template: StoryFn<MovingTitleProps> = (args) => <MovingTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  titleProp: 'Title',
};
