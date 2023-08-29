import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ExperienceType = {
    level: number;
    expPoints: number;
}

export type QuestionType = {
    title: string;
    question: string;
    correctResponse: string;
    falseResponse1: string;
    falseResponse2: string;
    falseResponse3: string;
    difficulty: 1 | 2 | 3 | 4 | 5;
    expCost?: number;
    hasAnsweredRight?: boolean;
};


export type QuestionaireType = {
    experience: ExperienceType;
    questions: QuestionType[];
};

const initialState: QuestionaireType = {
    experience: {
        level: 1,
        expPoints: 0
    },
    questions: [],
};

const questionaireSlice = createSlice({
  name: 'contentful',
  initialState,
  reducers: {
    updateAnsweredQuestion: (state, action: PayloadAction<QuestionType>) => {
        state.questions = state.questions.map((question) => {
            if (question.title === action.payload.title) {
              return action.payload;
            } else {
              return question;
            }
        });
    },
    updateLevel: (state) => {
        state.experience.level = state.experience.level + 1;
    },
    updateExpPoints: (state, action: PayloadAction<number>) => {
        state.experience.expPoints = action.payload;
    },
    
    updateContentfulQuestionaire: (state, action: PayloadAction<QuestionType[]>) => {
        state.questions = action.payload;
    },
  }
});

export const { updateAnsweredQuestion, updateLevel, updateExpPoints, updateContentfulQuestionaire } = questionaireSlice.actions;

export default questionaireSlice.reducer;
