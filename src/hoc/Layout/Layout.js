import * as React from "react";

import './Layout.css'
import NavBar from "../../components/NavBar/NavBar";

class Layout extends React.Component {
    render() {
        return (
            <div className='Layout'>
                <NavBar />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout
