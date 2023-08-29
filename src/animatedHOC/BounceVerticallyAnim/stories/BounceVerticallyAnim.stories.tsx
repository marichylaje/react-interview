import { StoryFn, Meta } from '@storybook/react';
import BounceVerticallyAnim, { BounceVerticallyAnimProps } from '../BounceVerticallyAnim';
import { ButtonOptions } from '../../../components/index';

export default {
  title: 'Components/BounceVerticallyAnim',
  component: BounceVerticallyAnim,
} as Meta;
const menuListMocked = [{
  title: "Menu 1",
  difficulty: 2
}, {
  title: "Menu 2",
  difficulty: 2
}];

const Template: StoryFn<BounceVerticallyAnimProps> = (args) => <BounceVerticallyAnim {...args} />;

export const ButtonBounce = Template.bind({});
ButtonBounce.args = {
  children: 
    <ButtonOptions 
      btnText="Click me" 
      variant="contained" 
      onClickBtn={() => {console.log("button clicked")}}
    />,
};
