import { text } from "stream/consumers";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { queries } from "@testing-library/react";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const fil = questions.filter(
        (questions: Question): boolean => questions.published
    );
    return fil;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are considered "non-empty".
 * An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    //--------------------------------------
    const nonEmpty = questions.filter(
        (questions: Question): boolean =>
            questions.body !== "" ||
            questions.expected !== "" ||
            questions.options.length > 0
    );
    return nonEmpty;
    //return questions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`.
 * If the question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    return (
        questions.find((questions: Question): boolean => questions.id === id) ||
        null
    );
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noId = questions.filter(
        (questions: Question): boolean => questions.id !== id
    );
    return noId;
    //return [];
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const justNames = questions.map(
        (questions: Question): string => questions.name
    );
    return justNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoint = questions.reduce(
        (currentSum: number, question: Question) =>
            currentSum + question.points,
        0
    );
    return totalPoint;
    //return 0;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const totalPublish = getPublishedQuestions(questions);
    const num = sumPoints(totalPublish);

    return num;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. 
 * 
 * The first line of the file is the headers "id", "name", "options", "points", and "published". 
 * The following line contains the value for each question, separated by commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const questionCVS = questions
        .map(
            (questions: Question): string =>
                `${questions.id},${questions.name},${questions.options.length},${questions.points},${questions.published}`
        )
        .join("\n");
    const front = "id,name,options,points,published" + "\n";
    return front + questionCVS;
    //return "";
}

/**
 * Consumes an array of Questions and produces a corresponding array of Answers.
 * Each Question gets its own Answer,
 * copying over the `id` as the `questionId`,
 * making the `text` an empty string,
 * and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const createAnswer: Answer[] = questions.map(
        (questions: Question): Answer => ({
            questionId: questions.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return createAnswer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    //deep copy of array
    const deepCopy = questions.map(
        (questions: Question): Question => ({
            ...questions,
            published: true
        })
    );
    return deepCopy;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    //make my own copy, one that i can grab on to [0], and compare to other array
    //my first question type that i will be compare to other
    const first: Question[] = questions.map(
        (questions: Question): Question => ({ ...questions })
    );
    //this will compare all the question to the first one
    //every will check if evrrything is the same, bool
    const compare = questions.every(
        (questions: Question) => questions.type === first[0].type
    );

    return compare;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 *
 * except that a blank question has been added onto the end.
 * Reuse the `makeBlankQuestion` you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const addBlank = makeBlankQuestion(id, name, type);
    return [...questions, addBlank];
}

/***
 * Consumes an array of Questions and produces a new array of Questions,
 *
 * where all the Questions are the same EXCEPT for the one with the given `targetId`.
 * That Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const rename = questions.map((questions) => {
        if (questions.id === targetId) {
            //copy over the question feilds, and rename it
            return { ...questions, name: newName };
        } else {
            return questions;
        }
    });

    return rename;
}

/***
 * Consumes an array of Questions and produces a new array of Questions,
 * where all the Questions are the same EXCEPT for the one with the given `targetId`.
 * That Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 *
 * AND if the `newQuestionType` is no longer "multiple_choice_question"
 * than the `options` must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newArry = questions.map((questions) => {
        if (questions.id === targetId) {
            const newCopy = { ...questions, type: newQuestionType };
            if (newQuestionType !== "multiple_choice_question") {
                newCopy.options = [];
            }
            return newCopy;
        } else {
            return questions;
        }
    });
    return newArry;
}

/**
 * Consumes an array of Questions and produces a new array of Questions,
 * where all the Questions are the same EXCEPT for the one with the given `targetId`.
 *
 * That Question should be the same EXCEPT that its `option` array should have a new element.
 
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 * 
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const optionChange = questions.map((questions) => {
        if (questions.id === targetId) {
            const newCopy = { ...questions };
            //keep these seperate, focus on the option array alone
            const changeHere = [...newCopy.options];
            if (targetOptionIndex === -1) {
                changeHere.push(newOption);
            } else {
                changeHere.splice(targetOptionIndex, 1, newOption);
            }
            //add the change from the seperate option into my copy's options
            newCopy.options = [...changeHere];
            //now the newCopy array should have the change from the new "changeHere" option
            return newCopy;
        } else {
            return questions;
        }
    });
    return optionChange;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 *
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question.
 *
 * Use the `duplicateQuestion` function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const doubleHere = questions
        .map((questions) => {
            if (questions.id === targetId) {
                const newCopy = { ...questions };
                const doubleHer = duplicateQuestion(newId, newCopy);
                return [questions, doubleHer];
            } else {
                return questions;
            }
        })
        .flat();
    return doubleHere;
}
