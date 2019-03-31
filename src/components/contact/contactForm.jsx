import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faUser, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
const iconColor = '#281f13'; // Set the FontAwesome color


function validate(firstName, lastName, email, telephone, message) {

    /* Regex from http://emailregex.com/ */
    const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   
    /* Regex from doristef.me  */
    const telRegex = /^[+[0-9]{3}[\-\. ]{1}[0-9]{3}[\-\. ]{1}[0-9]{4}$/;
    const nameRegex = /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{1,20}$/; // Only check for characters that are not allowed

    const errors = [];
        
        (firstName.value.length < 2 || !nameRegex.test( firstName.value )) ? 
            (errors.push("First name should be min. 2 char / only characters"), firstName.classList.add('form-invalid')) : firstName.classList.remove('form-invalid');

        (lastName.value.length < 2 || !nameRegex.test( lastName.value )) ? 
            (errors.push("Last name should be min. 2 char / only characters"), lastName.classList.add('form-invalid')) : lastName.classList.remove('form-invalid');
        
        !emailRegex.test( email.value ) ? 
            (errors.push("Email format: xx@xx.xx"), email.classList.add('form-invalid')) : email.classList.remove('form-invalid');

        !telRegex.test( telephone.value ) ? 
            (errors.push("Phone number format: xxx xxx xxxx"), telephone.classList.add('form-invalid')) : telephone.classList.remove('form-invalid');

        message.value.length < 25 ? 
            (errors.push("Message should be min. 25 char"), message.classList.add('form-invalid')) : message.classList.remove('form-invalid');

    return errors;
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    // Set all dom elements
    const firstName = ReactDOM.findDOMNode(this._firstNameInput);
    const lastName = ReactDOM.findDOMNode(this._lastNameInput);
    const email = ReactDOM.findDOMNode(this._emailInput);
    const telephone = ReactDOM.findDOMNode(this._telephoneInput);
    const message = ReactDOM.findDOMNode(this._messageInput);

    // Check for errors
    const errors = validate(firstName, lastName, email, telephone, message);
        // Show errors
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
    // If there are no errors -> redirect to thank you
    this.props.history.push('/thankyou');

  }

  render() {
    const { errors } = this.state;
    return (
        <form className="[ form-contact ]" 
                onSubmit={this.handleSubmit.bind(this)} 
                noValidate // Disable HTML5 validation 
        >

        <div className="[ form-row ][ align-items-center ][ mt-5 ]">
        { errors.length > 0 && (
            <div className="[ col-sm-12 ][ my-1 ]">
               <div className="[ alert alert-danger ]">
               {errors.map(error => (
                 <p key={error}><strong>Error:</strong> {error}</p>
               ))}</div> 
            </div>                                        
        )}

            <div className="[ col-sm-12 ][ my-1 ]">
                <div className="[ input-group ]">
                    <div className="[ input-group-prepend ]">
                        <div className="[ input-group-text ]"><FontAwesomeIcon icon={faUser} color={iconColor} size="lg" /> </div>
                    </div>
                
                <label className="[ sr-only ]" htmlFor="inputFirstName">First Name</label>

                <input type="text" 
                            className={`[ form-control ] `}            
                            id="inputFirstName"
                            placeholder="First name"
                            ref={firstNameInput => (this._firstNameInput = firstNameInput)}
                />
                    

                </div>
            </div>

            <div className="[ col-sm-12 ][ my-1 ]">
                <div className="[ input-group ]">
                    <div className="[ input-group-prepend ]">
                        <div className="[ input-group-text ]"><FontAwesomeIcon icon={faUser} color={iconColor} size="lg"  /></div>
                    </div>
                
                    <label className="[ sr-only ]" htmlFor="inputLastName">Last Name</label>
                    <input type="text" 
                                className={`[ form-control ]`}
                                id="inputLastName"
                                placeholder="Last name" 
                                ref={lastNameInput => (this._lastNameInput = lastNameInput)}
                    /> 

                </div>
            </div>
                                            
            <div className="[ col-sm-12 ][ my-1 ]">
            <div className="[ input-group ]">
                <div className="[ input-group-prepend ]">
                    <div className="[ input-group-text ]"><FontAwesomeIcon icon={faAt} color={iconColor} size="lg"  /></div>
                </div>

                <label className="[ sr-only ]" htmlFor="inputEmail">Email Address</label>
                <input type="email" 
                            className={`[ form-control ]`}
                            id="inputEmail"
                            placeholder="Email Address" 
                            ref={emailInput => (this._emailInput = emailInput)}
                />


            </div>

            </div>

            <div className="[ col-sm-12 ][ my-1 ]">
                <div className="[ input-group ]">
                    <div className="[ input-group-prepend ]">
                        <div className="[ input-group-text ]"><FontAwesomeIcon icon={faPhone} color={iconColor} size="lg"  /></div>
                    </div>
                    <label className="[ sr-only ]" htmlFor="inputTel">Telephone Number</label>
                    <input type="tel" 
                                className={`[ form-control ]`} 
                                id="inputTel"
                                placeholder="xxx xxx xxxx" 
                                ref={telephoneInput => (this._telephoneInput = telephoneInput)}
                    /> 

                </div>
            </div>

            <div className="[ col-12 ][ my-1 ]">
                <div className="[ input-group ]">
                    <div className="[ input-group-prepend ]">
                        <div className="[ input-group-text ]"><FontAwesomeIcon icon={faCommentAlt} color={iconColor} size="lg"  /></div>
                    </div>
                    <label className="[ sr-only ]" htmlFor="inputMessage">Message</label>
                    <textarea  
                                className={`[ form-control ]`}
                                id="inputMessage"
                                placeholder="Message"                                                 
                                ref={messageInput => (this._messageInput = messageInput)}
                    />
                        
                </div>
            </div>
            
            <div className="[ col-12 ][ my-3 ][ text-center text-md-right ]">
            <button type="submit" className="[ btn btn-color1 btn-contact ][ mr-md-5 ]">Submit</button>
            </div>
        </div>
    </form>
    );
  }
}

export default withRouter(ContactForm);