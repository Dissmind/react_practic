import React from "react";

import './QuizResult.css'

const QuizResult = (props) => {

    let countCorrectAnswer = 0;
    for (let i = 0; i < props.resultTest.length; i++) {
        if (props.resultTest[i].result == true) {
            countCorrectAnswer += 1;
        }
    }

    return (
        <div className='QuizResult'>
            <h1>Результаты тестирования</h1>
            <h1>Правильно {countCorrectAnswer} из {props.resultTest.length}</h1>

            <ul>
                {
                    props.resultTest.map((item, key) => {
                        return (
                            <li key={key}>
                                {key + 1}. {item.question}
                                <i className={(item.result) ? 'fa fa-times' : 'fa fa-check'} ></i>
                            </li>
                        )
                    })
                }
            </ul>

            <h1 className='button' onClick={props.repeatTestHandler}>Повторить тест</h1>
        </div>
    )
}

export default QuizResult;
