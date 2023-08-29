import { getEntriesContentful } from "store";
import type { ContentfulStateType } from "store";

const initTContentStore = async (setData: (data: ContentfulStateType) => void) => {
    getEntriesContentful('teoricContent')
            .then((contentfulData) => {
                setData(contentfulData);
            })
            .catch((error) => {
                console.error('Error obtaining entries:', error);
    });

}
const initTQuestionairetStore = async (setData: (data: ContentfulStateType) => void) => {
    getEntriesContentful('teoricQuestionaire')
            .then((contentfulData) => {
                setData(contentfulData);
            })
            .catch((error) => {
                console.error('Error obtaining entries:', error);
    });

}
export { initTContentStore, initTQuestionairetStore };