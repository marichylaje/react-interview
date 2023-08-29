import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TeoricalType = {
    content: string;
    title: string;
};

// TODO: extends from QuestionType? en questionaireReducer.ts
export type QuestionaireType = {
    title: string;
    question: string;
    correctResponse: string;
    falseResponse1: string;
    falseResponse2: string;
    falseResponse3: string;
    difficulty: 1 | 2 | 3 | 4 | 5;
};

export type ContentfulStateType = {
    teorical: TeoricalType[];
    questionaire: QuestionaireType[];
};

const initialState: ContentfulStateType = {
    teorical: [{
        title: "Loading...",
        content: "Loading...."
    }],
    questionaire: []
};

const contentfulSlice = createSlice({
  name: 'contentful',
  initialState,
  reducers: {
    updateContentfulTeorical: (state, action: PayloadAction<TeoricalType[]>) => {
        state.teorical = action.payload;
    },
  }
});

export const { updateContentfulTeorical } = contentfulSlice.actions;

export default contentfulSlice.reducer;
