import React from 'react'
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faUser, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'

const iconColor = '#281f13';

    /* Regex from http://emailregex.com/ */
    const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   
    /* Regex from doristef.me  */
    const telRegex = /^[+[0-9]{3}[\-\. ]{1}[0-9]{3}[\-\. ]{1}[0-9]{4}$/;
    
    /* Form Validation created after Tutorial by Code Life (https://youtu.be/4CeTFW4agRw) */
    const formValid = ({ formErrors, ...rest }) => {
        let valid = true;
      
        // validate form errors being empty
        Object.values(formErrors).forEach(val => {
          val.length > 0 && (valid = false);
        });
      
        // validate the form was filled out
        Object.values(rest).forEach(val => {
          val === null && (valid = false);
        });
      
        return valid;
      };

class ContactForm extends React.Component {
    
        constructor(props) {
            super(props);
        
            this.state = {
            inputFirstName: '',
            inputLastName: '',
            inputEmail: '',
            inputTel: '',
            inputMessage: '',
            inputEmailValid: false,
            inputTelValid: false,
    
            formErrors: {
                inputFirstName: "",
                inputLastName: "",
                inputEmail: "",
                inputTel: "",
                inputMessage: "",
            }
            };
        }
    
        handleSubmit = e => {  
            e.preventDefault();
            if( formValid(this.state) ){ // Check the form
                this.props.history.push('/thankyou'); // If the form is valid and submitted, redirect to Thank You.
            }
        };
        
        handleChange = e => {
            e.preventDefault();
            const { id, value } = e.target;
            let formErrors = { ...this.state.formErrors }; // Create a deep copy of the object
        
            // Switch through error checking
            switch (id) {
            case "inputFirstName":
                formErrors.inputFirstName =
                value.length < 4 ? "min. 4 char" : "";
                break;
                case "inputLastName":
                formErrors.inputLastName =
                value.length < 4 ? "min. 4 char" : "";
                break;
                case "inputEmail":
                formErrors.inputEmail =
                !emailRegex.test( value ) ? "Format: xx@xx.xx" : "";
                emailRegex.test( value ) ? this.setState({inputEmailValid: true}) : this.setState({inputEmailValid: false});
                break;
                case "inputTel":
                formErrors.inputTel =
                !telRegex.test( value ) ? "Format: xxx xxx xxxx" : "";
                telRegex.test( value ) ? this.setState({inputTelValid: true}) : this.setState({inputTelValid: false});
                break;
                case "inputMessage":
                formErrors.inputMessage =
                value.length < 25 ? "min. 25 char" : "";
                break;
            default:
                break;
            }
            
            this.setState({ formErrors, [id]: value }); // Set value of name inside formError 
    }
    
        render() {
            const { formErrors } = this.state;
            const app = this.state;
    
            return (
                        <form className="[ form-contact ]" onSubmit={this.handleSubmit.bind(this)} noValidate>
                                <div className="[ form-row ][ align-items-center ][ mt-5 ]">
        
                                    <div className="[ col-sm-12 ][ my-1 ]">
                                        <div className="[ input-group ]">
                                            <div className="[ input-group-prepend ]">
                                                <div className="[ input-group-text ]"><FontAwesomeIcon icon={faUser} color={iconColor} size="lg" /> </div>
                                            </div>
                                        
                                        <label className="[ sr-only ]" htmlFor="inputFirstName">First Name</label>

                                        <input type="text" 
                                                    className={`[ form-control ] 
                                                                [ ${formErrors.inputFirstName.length > 0 ? 'form-invalid' : ''} ]
                                                                [ ${app.inputFirstName.length >= 4 ? 'form-valid' : ''} ]`}
                                                    id="inputFirstName"
                                                    placeholder="First name"
                                                    onChange={this.handleChange} 
                                                    noValidate // Disable HTML5 Validation
                                        />
                                            
                                            {formErrors.inputFirstName.length > 0 && (
                                                <span className="[ ml-2 ]"><small className="[ text-muted ]"> {formErrors.inputFirstName} </small></span>
                                            )}

                                        </div>
                                    </div>
    
                                    <div className="[ col-sm-12 ][ my-1 ]">
                                        <div className="[ input-group ]">
                                            <div className="[ input-group-prepend ]">
                                                <div className="[ input-group-text ]"><FontAwesomeIcon icon={faUser} color={iconColor} size="lg"  /></div>
                                            </div>
                                        
                                            <label className="[ sr-only ]" htmlFor="inputLastName">Last Name</label>
                                            <input type="text" 
                                                        className={`[ form-control ] 
                                                                    [ ${formErrors.inputLastName.length > 0 ? 'form-invalid' : ''} ]
                                                                    [ ${app.inputLastName.length >= 4 ? 'form-valid' : ''} ]`}
                                                        id="inputLastName"
                                                        placeholder="Last name" 
                                                        onChange={this.handleChange} 
                                                        noValidate // Disable HTML5 Validation
                                            /> 

                                            {formErrors.inputLastName.length > 0 && (
                                                <span className="[ ml-2 ]"><small className="[ text-muted ]"> {formErrors.inputLastName} </small></span>
                                            )}

                                        </div>
                                    </div>
                                                                    
                                    <div className="[ col-sm-12 ][ my-1 ]">
                                    <div className="[ input-group ]">
                                        <div className="[ input-group-prepend ]">
                                            <div className="[ input-group-text ]"><FontAwesomeIcon icon={faAt} color={iconColor} size="lg"  /></div>
                                        </div>
        
                                        <label className="[ sr-only ]" htmlFor="inputEmail">Email Address</label>
                                        <input type="email" 
                                                    className={`[ form-control ] 
                                                                [ ${formErrors.inputEmail.length > 0 ? 'form-invalid' : ''} ]
                                                                [ ${app.inputEmailValid ? 'form-valid' : ''} ]`}
                                                    id="inputEmail"
                                                    placeholder="Email Address" 
                                                    onChange={this.handleChange}
                                                    noValidate // Disable HTML5 Validation
                                        />

                                        {formErrors.inputEmail.length > 0 && (
                                                <span className="[ ml-2 ]"><small className="[ text-muted ]"> {formErrors.inputEmail} </small></span>
                                            )}

                                    </div>
        
                                    </div>
        
                                    <div className="[ col-sm-12 ][ my-1 ]">
                                        <div className="[ input-group ]">
                                            <div className="[ input-group-prepend ]">
                                                <div className="[ input-group-text ]"><FontAwesomeIcon icon={faPhone} color={iconColor} size="lg"  /></div>
                                            </div>
                                            <label className="[ sr-only ]" htmlFor="inputTel">Telephone Number</label>
                                            <input type="tel" 
                                                        className={`[ form-control ] 
                                                        [ ${formErrors.inputTel.length > 0 ? 'form-invalid' : ''} ]
                                                        [ ${app.inputTelValid ? 'form-valid' : ''} ]`} 
                                                        id="inputTel"
                                                        placeholder="xxx xxx xxxx" 
                                                        onChange={this.handleChange} 
                                                        noValidate // Disable HTML5 Validation
                                            /> 

                                            {formErrors.inputTel.length > 0 && (
                                                <span className="[ ml-2 ]"><small className="[ text-muted ]"> {formErrors.inputTel} </small></span>
                                            )}

                                        </div>
                                    </div>
        
                                    <div className="[ col-12 ][ my-1 ]">
                                        <div className="[ input-group ]">
                                            <div className="[ input-group-prepend ]">
                                                <div className="[ input-group-text ]"><FontAwesomeIcon icon={faCommentAlt} color={iconColor} size="lg"  /></div>
                                            </div>
                                            <label className="[ sr-only ]" htmlFor="inputMessage">Message</label>
                                            <textarea  
                                                        className={`[ form-control ] 
                                                        [ ${formErrors.inputMessage.length > 0 ? 'form-invalid' : ''} ]
                                                        [ ${app.inputMessage.length >= 24 ? 'form-valid' : ''} ]`}
                                                        id="inputMessage"
                                                        placeholder="Message"                                                 
                                                        onChange={this.handleChange}
                                                        noValidate // Disable HTML5 Validation
                                            />
        
                                            {formErrors.inputMessage.length > 0 && (
                                                    <span className="[ ml-2 ]"><small className="[ text-muted ]"> {formErrors.inputMessage} </small></span>
                                                )}
                                                
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