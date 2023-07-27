import { initTContentStore, initTQuestionairetStore } from "./initStore"
import getEntriesContentful from "./getEntriesContentful"
import { updateContentfulTeorical } from "./reducers"
import { updateLevel, updateAnsweredQuestion, updateExpPoints, updateContentfulQuestionaire } from "./questionaireReducer"
import type { TeoricalType, ContentfulStateType } from "./reducers"
import type { QuestionaireType, QuestionType, ExperienceType } from "./questionaireReducer"
import store from "./store"
export {
    store,
    updateContentfulTeorical,
    updateContentfulQuestionaire,
    initTContentStore,
    initTQuestionairetStore,
    getEntriesContentful,
    updateAnsweredQuestion,
    updateLevel,
    updateExpPoints,
}

export type {
    TeoricalType,
    ContentfulStateType,
    QuestionaireType,
    QuestionType,
    ExperienceType,
}