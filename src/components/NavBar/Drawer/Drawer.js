import React from "react";

import './Drawer.css'

const Drawer = (props) => {
    return (
        <ul className={'Drawer'}>
            {
                props.links.map((i, key) => {
                    return (
                        <li key={key}>{i.name}</li>
                    )
                })
            }
        </ul>
    )
}

export default Drawer
