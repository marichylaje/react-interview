import { StoryFn, Meta } from '@storybook/react';
import MovingSubtitle, { MovingSubtitleProps } from './MovingSubtitle';

export default {
  title: 'Components/MovingSubtitle',
  component: MovingSubtitle,
} as Meta;

const Template: StoryFn<MovingSubtitleProps> = (args) => <MovingSubtitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  titleProp: 'Title',
};
