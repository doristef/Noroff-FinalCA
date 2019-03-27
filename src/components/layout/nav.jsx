import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            msg: '',
            collapsed: true
        };
      }
      toggleNav() {
        this.setState({
            collapsed: !this.state.collapsed
        });
      }

    render() {
        const collapsed = this.state.collapsed;
        const navCollapse = collapsed ? '' : '[ show ]';
        const navToggler = collapsed ? '[ collapsed ]' : '';

        return (

            <nav className="[ navbar navbar-dark navbar-expand-lg ]">
                <span className="[ navbar-brand ] [ mr-4 ]" href="#">
                <FontAwesomeIcon icon={faHatWizard} size="lg" />
                     Wizard Card Game
                </span>
                
                <button onClick={this.toggleNav} className={`[ navbar-toggler navbar-toggler-right ]${navToggler}`} type="button">
                    <span className="[ navbar-toggler-icon ]"></span>
                </button>

                <div className={`[ collapse ][ navbar-collapse ]${navCollapse}`}>
                    <ul className="[ navbar-nav ][ mr-auto ]">
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link-color ]" exact={true} to="/" onClick={this.toggleNav}>Home</NavLink>
                    </li>
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link-color ]" to="/about" onClick={this.toggleNav}>About</NavLink>
                    </li>
                    <li className="[ nav-item ]">
                        <NavLink activeClassName="[ active ]" className="[ nav-link nav-link-color ]" to="/contact" onClick={this.toggleNav}>Contact</NavLink>
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