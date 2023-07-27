import { StoryFn, Meta } from '@storybook/react';
import ButtonOptions, { ButtonOptionsProps } from './ButtonOptions';

export default {
  title: 'Components/ButtonOptions',
  component: ButtonOptions,
} as Meta;

const Template: StoryFn<ButtonOptionsProps> = (args) => <ButtonOptions {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnText: 'Click me',
  onClickBtn: () => {
    // Lógica de clic aquí
    console.log('Button clicked');
  },
};
