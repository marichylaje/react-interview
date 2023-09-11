import { getEntriesContentful } from "store";
import type { TeoricalType, QuestionType } from "store";

const initTContentStore = async (setData: (data: TeoricalType[]) => void) => {
    getEntriesContentful('teoricContent')
            .then((contentfulData) => {
                setData(contentfulData);
            })
            .catch((error) => {
                console.error('Error obtaining entries:', error);
    });

}
const initTQuestionairetStore = async (setData: (data: QuestionType[]) => void) => {
    getEntriesContentful('teoricQuestionaire')
            .then((contentfulData) => {
                setData(contentfulData);
            })
            .catch((error) => {
                console.error('Error obtaining entries:', error);
    });

}
export { initTContentStore, initTQuestionairetStore };