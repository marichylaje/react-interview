import { configureStore } from '@reduxjs/toolkit';
import contentfulReducer from './reducers';
import questionaireReducer from './questionaireReducer';


const store = configureStore({
  reducer: {
    contentful: contentfulReducer,
    questionaire: questionaireReducer,
  },
});

export default store;
