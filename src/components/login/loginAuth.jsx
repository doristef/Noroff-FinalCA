import React from 'react'
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

class LoginAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isPassword: true,
        isUsername: true,
        inputUsername: '',
        inputPassword: '',
        submitted: false,
        userObj: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

getLoginDetails() {
  const username = localStorage.getItem('Username');
  const password = localStorage.getItem('Password');

  return {username, password};
}

componentDidMount() {
  localStorage.setItem('Username', 'halldor');
  localStorage.setItem('Password', 'doristef');
  this.userObj = this.getLoginDetails();
}

handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    console.log(this.state);
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { inputUsername, inputPassword } = this.state;
    this.testUserDetails({ inputUsername, inputPassword });

}

testUserDetails(userdetails) {
    if (userdetails.inputUsername !==  this.userObj.username || userdetails.inputPassword !== this.userObj.password) {
      if (userdetails.inputUsername !== this.userObj.username) {
        this.setState({ isUsername: true });
      }
      if (userdetails.inputPassword !== this.userObj.password) {
        this.setState({ isPassword: true });
      }
    } else {
      sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
        this.props.history.push('/'); // If the form is valid and submitted, redirect to website
        this.setState({ isUsername: false, isPassword: false });
    }
}




  render() {
    const app = this.state;
    const { loggingIn } = this.props;
    const { inputUsername, inputPassword, submitted } = this.state;

    return (
        <form className="[ form-contact ]" onSubmit={this.handleSubmit.bind(this)} noValidate> 
        <div className="[ form-row ][ align-items-center ][ mt-2 ]">

            <div className="[ col-sm-12 ][ my-1 ]">

                <div className="[ input-group ]">
                  <div className="[ input-group-prepend ]">
                      <div className="[ input-group-text ]"><FontAwesomeIcon icon={faUser} size="lg" /> </div>
                  </div>
              
                  <label className="[ sr-only ]" htmlFor="inputUsername">First Name</label>
                    <input type="text"
                          className="[ form-control ] "
                          id="inputUsername"
                          placeholder="Type Username"
                          onChange={this.handleChange} 
                          noValidate // Disable HTML5 Validation
                    />
                    { (() => { if ( this.state.isUsername && this.state.submitted ) {
                              return <span className="[ text-muted form-invalid ]"></span>
                            }})()
                     }
                </div>

            </div>


            <div className="[ col-sm-12 ][ my-1 ]">

                <div className="[ input-group ]">
                  <div className="[ input-group-prepend ]">
                      <div className="[ input-group-text ]"><FontAwesomeIcon icon={faKey} size="lg" /> </div>
                  </div>
              
                  <label className="[ sr-only ]" htmlFor="inputPassword">Password</label>
                    <input type="password" 
                          className="[ form-control ] "
                          id="inputPassword"
                          placeholder="Type Password"
                          onChange={this.handleChange} 
                          noValidate // Disable HTML5 Validation
                    />
                    { (() => { if ( this.state.isPassword && this.state.submitted ) {
                              return <span className="[ text-muted form-invalid ]"></span>
                    } })() }
                </div>

            </div>

            <div className="[ col-12 ][ my-3 ][ text-center text-md-right ]">
              <button type="submit" className="[ btn btn-color1 btn-contact ][ mr-md-3 ]">Submit</button>
            </div>
                
        </div>
        </form>
      
    );
  }
}

export default withRouter(LoginAuth);