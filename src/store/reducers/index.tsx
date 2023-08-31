import { updateContentfulTeorical } from "./reducers"
import { updateLevel, updateAnsweredQuestion, updateExpPoints, updateContentfulQuestionaire } from "./questionaireReducer"
import type { TeoricalType, ContentfulStateType } from "./reducers"
import type { QuestionaireType, QuestionType, UserExpType } from "./questionaireReducer"

export {
    updateContentfulTeorical,
    updateLevel,
    updateAnsweredQuestion,
    updateExpPoints,
    updateContentfulQuestionaire,
}

export type {
    TeoricalType,
    ContentfulStateType,
    QuestionaireType,
    QuestionType,
    UserExpType,
}