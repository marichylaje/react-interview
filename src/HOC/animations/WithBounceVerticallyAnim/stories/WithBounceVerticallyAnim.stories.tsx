import { StoryFn, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import WithBounceVerticallyAnim, { WithBounceVerticallyAnimProps } from '../WithBounceVerticallyAnim';
import { ButtonOptions, MenuList } from '../../../../components';
import { mockedQuestionaire } from '../../../../mockData';

export default {
  title: 'HOC/animations/WithBounceVerticallyAnim',
  component: WithBounceVerticallyAnim,
  argTypes: {
    children: { table: { disable: true } }
  },
} as Meta;

const Template: StoryFn<WithBounceVerticallyAnimProps> = (args) => (
  <Provider store={store}>
    <WithBounceVerticallyAnim {...args} />
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