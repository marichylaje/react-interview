import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { store } from '../../../store';
import MenuList from '../MenuList';
import { mockedTeorical, mockedQuestionaire } from '../../../mockData';

const mockStore = configureStore([]);

const parentComponent = (getByTextItem: HTMLElement) => {
  return getByTextItem?.parentElement?.parentElement;
}

describe('MenuList', () => {
  it('renders a list item for each object in menuData', () => {
    const { getAllByRole } = render(<Provider store={store}><MenuList menuData={mockedTeorical} /></Provider>);
    const listItems = getAllByRole('listitem');

    expect(listItems.length).toBe(mockedTeorical.length);
  });

  it('disables list items with difficulty greater than level', () => {
    const level = 1; 
    const initialState = {
      questionaire: {
        userExp: {
          level: level,
          expPoints: 0
        },
        questions: mockedQuestionaire
      }
    };
    const mockedStore = mockStore(initialState);

    const { getByText } = render(<Provider store={mockedStore}><MenuList menuData={mockedQuestionaire} /></Provider>);
    console.log({mockedStore})
    expect(parentComponent(getByText('question 1'))).not.toHaveClass('Mui-disabled');
    expect(parentComponent(getByText('question 2'))).not.toHaveClass('Mui-disabled');
    expect(parentComponent(getByText('lvl2 question 3'))).toHaveClass('Mui-disabled');
    expect(parentComponent(getByText('lvl2 question 4'))).toHaveClass('Mui-disabled');
  });
  
  it('renders the correct href for each list item', () => {
    const { getByText } = render(<Provider store={store}><MenuList menuData={mockedTeorical} /></Provider>);
    
    expect(parentComponent(getByText('question 1'))).toHaveAttribute('href', '#question-1');
    expect(parentComponent(getByText('question 2'))).toHaveAttribute('href', '#question-2');
  });
});