import React from "react";
import './AnswerList.css'

import AnswerItem from "./AnswerItem/AnswerItem";


const AnswersList = props => (
    <ul className='AnswersList'>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerHandler={props.onAnswerHandler}
                    numberActualQuestion={props.numberActualQuestion}
                    answerIsRight={props.answerIsRight}
                    actualClickedAnswer={props.actualClickedAnswer}
                />
            )
        })}
    </ul>
)

export default AnswersList
