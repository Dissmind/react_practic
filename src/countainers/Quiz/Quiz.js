import React from "react";

import './Quiz.css'
import ActualQuiz from "../../components/ActualQuiz/ActualQuiz";
import QuizResult from "../../components/QuizResult/QuizResult";

class Quiz extends React.Component {
    state = {
        isFinished: false,
        numberActualQuestion: 0,
        actualClickedAnswer: {numberAnswer: null, numberQuestion: null},
        answerIsRight: null,

        quiz: [
            {
                title: 'Какой цвет?',
                rightAnswerId: 2,
                answers: [
                    {id: 1, text: 'Зеленый'},
                    {id: 2, text: 'Красный'},
                    {id: 3, text: 'Белый'},
                    {id: 4, text: 'Черный'},
                ]
            },
            {
                title: 'Язык программирования',
                rightAnswerId: 3,
                answers: [
                    {id: 1, text: 'Java'},
                    {id: 2, text: 'Js'},
                    {id: 3, text: 'C++'},
                    {id: 4, text: 'C#'},
                ]
            }
        ],

        resultTest: []
    }


    onAnswerHandler = (answerId, questionId) => {
        if (this.state.answerIsRight !== null) return

        this.setState({actualClickedAnswer: {numberQuestion: questionId, numberAnswer: answerId}})

        let isRight = answerId === this.state.quiz[questionId].rightAnswerId
        this.setState({answerIsRight: isRight})

        // save result
        let data = this.state.resultTest
        data.push({question: this.state.quiz[questionId].title, result: isRight})

        console.log(data)

        this.setState({
            resultTest: data
            })

        const timeout = window.setTimeout(() => {

            let isCorrectAnswer;

            if (this.state.numberActualQuestion + 1 === this.state.quiz.length) {
                this.setState({isFinished: true})
            } else {
                this.setState({numberActualQuestion: this.state.numberActualQuestion + 1})
            }

            this.setState( { answerIsRight: null})
        }, 1000)

    }

    repeatTestHandler = () => {
        this.setState({
            isFinished: false,
            numberActualQuestion: 0,
            actualClickedAnswer: {numberAnswer: null, numberQuestion: null},
            answerIsRight: null,
            resultTest: []
        })
    }

    render() {
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Quiz</h1>

                    {
                        (this.state.isFinished)
                            ?
                            <QuizResult
                                resultTest={this.state.resultTest}
                                repeatTestHandler={this.repeatTestHandler}
                            />
                            :
                            <ActualQuiz
                                title={this.state.quiz[this.state.numberActualQuestion].title}
                                answers={this.state.quiz[this.state.numberActualQuestion].answers}
                                onAnswerHandler={this.onAnswerHandler}
                                quizLength={this.state.quiz.length}
                                numberActualQuestion={this.state.numberActualQuestion}
                                actualClickedAnswer={this.state.actualClickedAnswer}
                                answerIsRight={this.state.answerIsRight}
                            />
                    }


                </div>
            </div>
        );
    }
}


export default Quiz
