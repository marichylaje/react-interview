import { StoryFn, Meta } from '@storybook/react';
import ButtonOptions, { ButtonOptionsProps } from '../ButtonOptions';

export default {
  title: 'Components/ButtonOptions',
  component: ButtonOptions,
} as Meta;

const Template: StoryFn<ButtonOptionsProps> = (args) => <ButtonOptions {...args} />;

export const VariantOutlined = Template.bind({});
VariantOutlined.args = {
  btnText: 'Click me',
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const VariantContained = Template.bind({});
VariantContained.args = {
  btnText: 'Click me',
  variant: "contained",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const VariantText = Template.bind({});
VariantText.args = {
  btnText: 'Click me',
  variant: "text",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  btnText: 'Click me',
  color: "primary",
  variant: "contained",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  btnText: 'Click me',
  color: "secondary",
  variant: "contained",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const ColorSuccess = Template.bind({});
ColorSuccess.args = {
  btnText: 'Click me',
  color: "success",
  variant: "contained",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const ColorError = Template.bind({});
ColorError.args = {
  btnText: 'Click me',
  color: "error",
  variant: "contained",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const ColorInfo = Template.bind({});
ColorInfo.args = {
  btnText: 'Click me',
  color: "info",
  variant: "contained",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const ColorWarning = Template.bind({});
ColorWarning.args = {
  btnText: 'Click me',
  color: "warning",
  variant: "contained",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  btnText: 'Click me',
  disabled: true,
  variant: "contained",
  onClickBtn: () => {
    console.log('Button clicked');
  },
};