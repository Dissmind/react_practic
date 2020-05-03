import React from "react"
import './ActualQuiz.css'

import AnswersList from "./AnswersList/AnswersList";


const ActualQuiz = props => (
    <div className='ActiveQuiz'>
        <p className='Question'>
            <span>
                {props.title}
            </span>

            <small>{props.numberActualQuestion + 1} из {props.quizLength}</small>
        </p>
        
        <ul>
            <AnswersList
                answers={props.answers}
                onAnswerHandler={props.onAnswerHandler}

                numberActualQuestion={props.numberActualQuestion}
                answerIsRight={props.answerIsRight}
                actualClickedAnswer={props.actualClickedAnswer}
            />
        </ul>
    </div>
)

export default ActualQuiz
