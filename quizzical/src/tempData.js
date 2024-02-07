import { nanoid } from "nanoid";

export default function tempData() {
    return (
        [
            {
                question: 'This is the first question',
                correct_answer: 'This one',
                incorrect_answers: ['one', 'two', 'three'],
                id: nanoid(),
                answered: false,
                correct: null
            },

            {
                question: 'This is the second question',
                correct_answer: 'This one',
                incorrect_answers: ['one', 'two', 'three'],
                id: nanoid(),
                answered: false,
                correct: null
            },

            {
                question: 'This is the third question',
                correct_answer: 'This one',
                incorrect_answers: ['one', 'two', 'three'],
                id: nanoid(),
                answered: false,
                correct: null
            }
        ]
    )
}