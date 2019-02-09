



const Test = {
    questions: [
        {
            "name": "var a = 2; <br>var b = ++a + a++; <br>Значение b равно",
            "number": 1,
            "answers": [
                {
                    "variantAnswer": "5",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "6",
                    "choiceUser": false
                },
                {
                    "variantAnswer": "7",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "error",
                    "choiceUser": false

                }
            ],
            "userAnswer": "",
            "correctAnswer": "6",
            "correct": false
        },
        {
            "name": "var b = 11 + '15'; <br>Значение b равно",
            "number": 2,
            "answers": [
                {
                    "variantAnswer": "NaN",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "26",
                    "choiceUser": false
                },
                {
                    "variantAnswer": "1115",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "Infinity",
                    "choiceUser": false

                }],
            "userAnswer": "",
            "correctAnswer": "1115",
            "correct": false,
        },
        {
            "name": "var b = 11, c = 10; <br> function plus(){<br>b = 1;<br>c = 1;<br>return b + c;<br>}<br>var a = plus();<br>Значение a равно",
            "number": 3,
            "answers": [
                {
                    "variantAnswer": "21",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "undifined",
                    "choiceUser": false
                },
                {
                    "variantAnswer": "Infinity",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "2",
                    "choiceUser": false

                }],
            "userAnswer": "",
            "correctAnswer": "2",
            "correct": false,
        },
        {
            "name": "var a = {a:1}? (-0)?-1:2:1<br>Значение a равно",
            "number": 3,
            "answers": [
                {
                    "variantAnswer": "1",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "undifined",
                    "choiceUser": false
                },
                {
                    "variantAnswer": "2",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "-1",
                    "choiceUser": false

                }],
            "userAnswer": "",
            "correctAnswer": "2",
            "correct": false,
        },
        {
            "name": "var b = [1, ,2,3, ,4, ,5]<br>var a = b.filter(function() {return true})<br>Значение a равно",
            "number": 3,
            "answers": [
                {
                    "variantAnswer": "8",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "[1,undefined,2,3,undefined,4,undefined,5]",
                    "choiceUser": false
                },
                {
                    "variantAnswer": "[1,2,3,4,5]",
                    "choiceUser": false

                },
                {
                    "variantAnswer": "[true,true,true,true,true,true,true,true]",
                    "choiceUser": false

                }],
            "userAnswer": "",
            "correctAnswer": "[1,2,3,4,5]",
            "correct": false,
        }
    ],
    startTest: false,
    counter: 0,
    counterCorrectAnswer: 0,
    buttonCorrectBackward: true,
    buttonCorrectForward: false,
    counterWrongAnswer: 0,
    buttonWrongBackward: true,
    buttonWrongForward: false,

}


const Immutable = require('immutable');

const TestObject = Immutable.Map({
    questions: {
        "1": {
            "name": "var a = 2; <br>var b = ++a + a++; <br>Значение b равно",
            "number": 1,
            "answers": {
                "1a": {
                    "variantAnswer": "5",
                    "choiceUser": false
                },
                "1b": {
                    "variantAnswer": "6",
                    "choiceUser": false
                },
                "1c": {
                    "variantAnswer": "7",
                    "choiceUser": false
                },
                "1d": {
                    "variantAnswer": "error",
                    "choiceUser": false
                }
            },
            "userAnswer": "",
            "correctAnswer": "6",
            "correct": false
        },

        "2": {
            "name": "var b = 11 + '15'; <br>Значение b равно",
            "number": 2,
            "answers": {
                "2a": {
                    "variantAnswer": "NaN",
                    "choiceUser": false
                },
                "2b": {
                    "variantAnswer": "26",
                    "choiceUser": false
                },
                "2c": {
                    "variantAnswer": "1115",
                    "choiceUser": false
                },
                "2d": {
                    "variantAnswer": "infinity",
                    "choiceUser": false
                }
            },
            "userAnswer": "",
            "correctAnswer": "1115",
            "correct": false
        }
    },
        correctAnswerObject: {
            "counterCorrectAnswer": 0,
            "buttonCorrectBackward": true,
            "buttonCorrectForward": false
        },
        wrongAnswerObject: {
            "counterWrongAnswer": 0,
            "buttonWrongBackward": true,
            "buttonWrongForward": false
        },
        startTest: false,
        counter: 0
    }
)

export default Test;

// test




