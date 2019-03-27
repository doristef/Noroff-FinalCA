import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default class FormSuccess extends React.Component {
    render() {
        return (
            <div className="[ row ][ text-center ][ justify-content-center ]">
                <div className="[ col-sm-12 ][ mt-5 ]">
                    <div className="[ card card-shadow card-notFound ]">
                    <div className="[ card-body ]">
                        <h1 className="[ card-title ]">Thank you!</h1>
                        <h2 className="[ card-subtitle ][ mb-2 ][ text-muted ]">Your request was sent.</h2>
                            <p className="[ card-text ]">
                                Thank you for contacting us.
                            </p>
                        <NavLink className="[ btn btn-color1 btn-lg ][ m-3 ]" exact={true} to="/"> 
                        <FontAwesomeIcon icon={faHome} size="lg" className="[ mr-xs-0 mr-md-3 ]" /> 
                             Go to Home 
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

