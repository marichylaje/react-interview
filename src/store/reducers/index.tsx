import { updateContentfulTeorical } from "./reducers"
import { updateLevel, updateAnsweredQuestion, updateExpPoints, updateContentfulQuestionaire } from "./questionaireReducer"
import type { TeoricalType, ContentfulStateType } from "./reducers"
import type { QuestionaireType, QuestionType, ExperienceType } from "./questionaireReducer"

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
    ExperienceType,
}