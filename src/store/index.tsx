import getEntriesContentful from "./getEntriesContentful"
import { initTContentStore, initTQuestionairetStore } from "./initStore"
import { updateContentfulTeorical } from "./reducers"
import { updateLevel, updateAnsweredQuestion, updateExpPoints, updateContentfulQuestionaire } from "./reducers"
import contentfulReducer from './reducers/reducers';
import questionaireReducer from './reducers/questionaireReducer';
import store from "./store"
import type { TeoricalType, ContentfulStateType } from "./reducers"
import type { QuestionaireType, QuestionType, ExperienceType } from "./reducers"

export {
    store,
    updateContentfulTeorical,
    updateContentfulQuestionaire,
    updateAnsweredQuestion,
    updateLevel,
    updateExpPoints,
    contentfulReducer,
    questionaireReducer,
    initTContentStore,
    initTQuestionairetStore,
    getEntriesContentful,
}

export type {
    TeoricalType,
    ContentfulStateType,
    QuestionaireType,
    QuestionType,
    ExperienceType,
}