import { configureStore } from '@reduxjs/toolkit';
import { contentfulReducer } from 'store';
import { questionaireReducer } from 'store';


const store = configureStore({
  reducer: {
    contentful: contentfulReducer,
    questionaire: questionaireReducer,
  },
});

export default store;
