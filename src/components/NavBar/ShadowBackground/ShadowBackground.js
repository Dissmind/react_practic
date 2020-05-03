import React from "react";

import './ShadowBackground.css'

const ShadowBackground = (props) => {
    return (
        <div
            className={'ShadowBackground'}
            onClick={props.click}
        ></div>
    )
}

export default ShadowBackground
