import React from 'react'
import { NavLink } from 'react-router-dom'

export default class FormSuccess extends React.Component {
    render() {
        return (
            <div className="[ row ][ text-center ][ justify-content-center ]">
                <div className="[ col-sm-12 ][ mt-5 ]">
                    <div class="[ card card-notFound ]">
                    <div class="[ card-body ]">
                        <h1 class="[ card-title ]">Thank you!</h1>
                        <h2 class="[ card-subtitle ][ mb-2 ][ text-muted ]">Your request was sent.</h2>
                            <p class="[ card-text ]">
                                Thank you for contacting us.
                            </p>
                        <NavLink className="[ btn btn-color1 btn-lg ][ m-3 ]" exact={true} to="/"> <i className="fas fa-home"></i> Home </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

