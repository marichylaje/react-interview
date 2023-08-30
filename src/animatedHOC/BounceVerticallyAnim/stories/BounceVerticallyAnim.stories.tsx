import { StoryFn, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import BounceVerticallyAnim, { BounceVerticallyAnimProps } from '../BounceVerticallyAnim';
import { ButtonOptions, MenuList } from '../../../components/index';
import { mockedQuestionaire } from '../../../mockData';

export default {
  title: 'HOC-Components/BounceVerticallyAnim',
  component: BounceVerticallyAnim,
  argTypes: {
    children: { table: { disable: true } }
  },
} as Meta;

const Template: StoryFn<BounceVerticallyAnimProps> = (args) => (
  <Provider store={store}>
    <BounceVerticallyAnim {...args} />
  </Provider>
);

export const ButtonBounce = Template.bind({});
ButtonBounce.args = {
  children: 
    <ButtonOptions 
      btnText="Click me" 
      variant="contained" 
      onClickBtn={() => {console.log("button clicked")}}
    />,
};

export const MenuListBounce = Template.bind({});
MenuListBounce.args = {
  children: 
    <MenuList 
      menuData={mockedQuestionaire}
    />,
};