import React from "react";

import './AnswerItem.css'

const AnswerItem = props => {

    const style = () => {

        if (props.answerIsRight !== null && props.answer.id === props.actualClickedAnswer.numberAnswer) {

            return (props.answerIsRight)
                ? {

                    color: 'green',
                    borderColor: 'green'
                }
                : {
                    color: 'red',
                    borderColor: 'red'
                }
        }

        return {};
    }



    return (
        <li
            className='AnswerItem'
            style={style()}
            onClick={() => props.onAnswerHandler(props.answer.id, props.numberActualQuestion)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem
