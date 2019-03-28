import React from 'react';
import LoginAuth from '../components/login/loginAuth';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false
        }
    }
    render() {

        return (
                <div className="[ card card-shadow card-login ]">
                    <div className="[ row ][ no-gutters ]">
                        <div className="[ col ]">
                            <div className="[ card-block ][ px-2 ml-xs-0 ml-md-3 my-3 ]">
                                <h3 className="[ card-title ]">Please Login</h3>
                                    <LoginAuth></LoginAuth>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}