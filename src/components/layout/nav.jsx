import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }
    render() {
        return (

            <nav className="[ navbar navbar-dark navbar-expand-lg ][ bg-dark ]">
                <a className="[ navbar-brand ] [ mr-3 ]" href="#">
                <i className="[ fas fa-chess-knight ] [ mr-2 ]"></i>
                     Card Game
                </a>
                
                <button className="[ navbar-toggler ]" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="[ navbar-toggler-icon ]"></span>
                </button>

                <div className="[ collapse navbar-collapse ]" id="navbarNav">
                    <ul className="[ navbar-nav ][ mr-auto ]">
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link__orange ]" exact={false} to="/">Home</NavLink>
                    </li>
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link__orange ]" to="/about">About</NavLink>
                    </li>
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link__orange ]" to="/contact">Contact</NavLink>
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