import React from "react";

import './ToggleButton.css'

const ToggleButton = (props) => {
    const cls = [
        'ToggleButton',
        'fa'
    ]

    if (!props.isOpen) {
        cls.push('fa-bars')
    }
    else {
        cls.push('fa-times')
        cls.push('open')
    }

    return (
        <i
            onClick={props.toggleButton}
            className={cls.join(' ')}
        />
    )
}

export default ToggleButton
