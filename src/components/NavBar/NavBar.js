import React from "react";

import './NavBar.css'
import Drawer from "./Drawer/Drawer";
import ToggleButton from "./ToggleButton/ToggleButton"
import ShadowBackground from "./ShadowBackground/ShadowBackground"

class NavBar extends React.Component {

    state = {
        isOpen: true,
        links: [
            {id: 1, name: 'first link'},
            {id: 1, name: 'second link'},
            {id: 1, name: 'third link'},
        ]
    }

    toggleButton = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const cls = [
            'NavBar',
            (this.state.isOpen)? '' : 'close'
        ]

        return (
            <React.Fragment>
                <ToggleButton
                    isOpen={this.state.isOpen}
                    toggleButton={this.toggleButton}
                />

                {(this.state.isOpen) ? <ShadowBackground click={this.toggleButton}/> : null}

                <div className={cls.join(' ')}>
                    <Drawer links={this.state.links}/>
                </div>
            </React.Fragment>
        )
    }
}

export default NavBar
