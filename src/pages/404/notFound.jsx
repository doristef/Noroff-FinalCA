import React from 'react'
import { NavLink } from 'react-router-dom'
import NotFound404 from './../../assets/404.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="[ row ][ text-center ][ justify-content-center ]">
                <div className="[ col-sm-12 ][ mt-5 ]">
                    <div className="[ card card-notFound ]">
                    <div className="[ card-body ]">
                    
                    <img src={NotFound404} className="[ img-fluid ][ card-title ][ m-0 p-0 ]" />
                        
                        <h2 className="[ card-subtitle ][ mb-2 ][ text-muted ]">Oooooops...</h2>
                            <p className="[ card-text ]">
                                Sorry, something has gone wrong. <br />
                                The requested page is nowhere to be found.
                            </p>
                        <NavLink className="[ btn btn-color1 btn-lg ][ m-3 ]" exact={true} to="/"> 
                            <FontAwesomeIcon icon={faHome} size="lg" /> 
                            Home 
                        </NavLink>
                        <NavLink className="[ btn btn-color1 btn-lg ][ m-3 ]" exact={true} to="/contact"> 
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />  
                            Contact Us 
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

