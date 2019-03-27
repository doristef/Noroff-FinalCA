import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }
    render() {
        return (

            <nav className="[ navbar navbar-dark navbar-expand-lg ]">
                <a className="[ navbar-brand ] [ mr-3 ]" href="#">
                <FontAwesomeIcon icon={faHatWizard} size="lg" />
                     Wizard Card Game
                </a>
                
                <button className="[ navbar-toggler ]" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="[ navbar-toggler-icon ]"></span>
                </button>

                <div className="[ collapse navbar-collapse ]" id="navbarNav">
                    <ul className="[ navbar-nav ][ mr-auto ]">
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link-color ]" exact={true} to="/">Home</NavLink>
                    </li>
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link-color ]" to="/about">About</NavLink>
                    </li>
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link-color ]" to="/contact">Contact</NavLink>
                    </li>
                    </ul>
                    <span className="[ navbar-text ]">
                        <small className="[ text-muted ]">Logged in as ______</small>
                    </span>
                </div>

            </nav>

        )
    }
}