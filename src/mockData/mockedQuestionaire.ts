import { QuestionType } from "store"

const mockedQuestionaire: QuestionType[] = [{
    title: "question 1",
    question: "question",
    correctResponse: "correct answer",
    difficulty: 1, 
    expCost: 0,
    falseResponse1: "false resp 1",
    falseResponse2: "false resp 2",
    falseResponse3: "false resp 3",
    hasAnsweredRight: false,
}, {
    title: "question 2",
    question: "question 2",
    correctResponse: "correct answer 2",
    difficulty: 1, 
    expCost: 0,
    falseResponse1: "false resp 2 1",
    falseResponse2: "false resp 2 2",
    falseResponse3: "false resp 2 3",
    hasAnsweredRight: false,
}, {
    title: "lvl2 question 3",
    question: "question 3",
    correctResponse: "correct answer 3",
    difficulty: 3, 
    expCost: 4,
    falseResponse1: "false resp 3 1",
    falseResponse2: "false resp 3 2",
    falseResponse3: "false resp 3 3",
    hasAnsweredRight: false,
}, {
    title: "lvl2 question 4",
    question: "question 4",
    correctResponse: "correct answer 4",
    difficulty: 3, 
    expCost: 4,
    falseResponse1: "false resp 4 1",
    falseResponse2: "false resp 4 2",
    falseResponse3: "false resp 4 3",
    hasAnsweredRight: false,
}];

export default mockedQuestionaire;

/*const mockedQuestionaire2: QuestionType = {
    title: "title question 1",
    question: {
        content: [{
          content: [],
          data: {},
          nodeType: "paragraph",
        }],
        data: {},
        nodeType: "document",
      },
    correctResponse: "correct answer",
    difficulty: 1, 
    expCost: 0,
    falseResponse1: "false resp 1",
    falseResponse2: "false resp 2",
    falseResponse3: "false resp 3",
    hasAnsweredRight: false
};*/