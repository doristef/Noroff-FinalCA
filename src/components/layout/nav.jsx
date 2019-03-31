import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            msg: '',
            collapsed: true,
        };
      }
      toggleNav() {
        this.setState({
            collapsed: !this.state.collapsed
        });
      }

      logout() {
          localStorage.removeItem('AuthToken');
          return this.props.history.push('/login');
      }

    render() {
        const collapsed = this.state.collapsed;
        const navCollapse = !collapsed && '[ show ]';
        const navToggler = collapsed && '[ collapsed ]';
        const username = localStorage.getItem('Username') && localStorage.getItem('Username').charAt(0).toUpperCase() + localStorage.getItem('Username').slice(1);

        return (

            <nav className="[ navbar navbar-dark navbar-expand-lg ]">
                <NavLink className="[ navbar-brand ] [ mr-4 ]" exact={true} to="/">
                    <FontAwesomeIcon icon={faHatWizard} size="lg" className="[ mr-2 ]" />
                        Magic: Card Game
                </NavLink>
                
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
                        
                            { ( localStorage.getItem('AuthToken') ) &&
                                   <small className="[ text-muted ]">Logged in as  {username} | <a className="[ nav-link-color ][ cursor-pointer ]" onClick={() => {this.logout(); this.toggleNav();} }>Logout?</a></small>
                            }
                             
                    </span>
                </div>

            </nav>

        )
    }
}

export default withRouter(Nav);