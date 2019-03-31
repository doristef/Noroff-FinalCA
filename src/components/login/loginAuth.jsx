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
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { inputUsername, inputPassword } = this.state;
    this.testUserDetails({ inputUsername, inputPassword });

}

testUserDetails(userdetails) {
    if (userdetails.inputUsername !==  this.userObj.username || userdetails.inputPassword !== this.userObj.password) {
      
      userdetails.inputUsername !== this.userObj.username ? this.setState({ isUsername: true }) : this.setState({ isUsername: false }); 
      userdetails.inputPassword !== this.userObj.password ? this.setState({ isPassword: true }) : this.setState({ isPassword: false }); 

    } else {

      localStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
      this.props.history.push('/'); // If the form is valid and submitted, redirect to website

    }
}




  render() {

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
                          className={`[ form-control ] 
                                      [ ${( this.state.isUsername && this.state.submitted ) && '[ text-muted form-invalid ]'} ]`}  
                          id="inputUsername"
                          placeholder="Type Username"
                          onChange={this.handleChange} 
                    />
                </div>

            </div>


            <div className="[ col-sm-12 ][ my-1 ]">

                <div className="[ input-group ]">
                  <div className="[ input-group-prepend ]">
                      <div className="[ input-group-text ]"><FontAwesomeIcon icon={faKey} size="lg" /> </div>
                  </div>
              
                  <label className="[ sr-only ]" htmlFor="inputPassword">Password</label>
                    <input type="password" 
                          className={`[ form-control ] 
                                      [ ${( this.state.isPassword && this.state.submitted ) && '[ text-muted form-invalid ]'} ]`}  
                          id="inputPassword"
                          placeholder="Type Password"
                          onChange={this.handleChange} 
                    />   
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