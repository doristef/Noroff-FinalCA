import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="[ row ][ text-center ][ justify-content-center ]">
                <div className="[ col-sm-12 ][ mt-5 ]">
                    <div class="[ card card-notFound ]">
                    <div class="[ card-body ]">
                        <h1 class="[ card-title ]">Oooops!</h1>
                        <h2 class="[ card-subtitle ][ mb-2 ][ text-muted ]">404 Not Found</h2>
                            <p class="[ card-text ]">
                                Sorry, something has gone wrong. <br />
                                The requested page is nowhere to be found.
                            </p>
                        <NavLink className="[ btn btn-orange btn-lg ][ m-3 ]" exact={true} to="/"> <i className="fas fa-home"></i> Home </NavLink>
                        <NavLink className="[ btn btn-orange btn-lg ][ m-3 ]" exact={true} to="/contact"> <i className="fas fa-envelope"></i> Contact Us </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

