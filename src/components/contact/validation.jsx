
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );



/* jshint esversion: 6 */
/** FORM VALIDATION v.1 by doristef.me **/

// Create a CONST for the submit button.
const btn = document.getElementById('submitContact');

/**  EMAIL VALIDATION
 * Let's validate the email address
 * @param {string} email , Email Address.
 * @param {string} errorId , errorId in HTML.
 * @return {boolean} true , returns true if it's valid.
 *
 */
function checkEmail(email, errorId) {
  let emailRegex = /^[a-zA-Z0-9\.\-_]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,4}$/;
    if ( !email ) {
      // Error, email empty.
      document.getElementById(errorId).style.display = 'block';
    } else if ( !emailRegex.test( email ) ) {
      // Error, email not valid
      document.getElementById(errorId).style.display = 'block';
    } else {
      // It works
      document.getElementById(errorId).style.display = 'none';
      return true;
    }
}

/**  NAME VALIDATION
 * Check if name is valid
 * @param {string} name , Name, with scandinavian characters.
 * @param {string} errorId , errorId in HTML.
 * @return {boolean} true , returns true if it's valid.
 *
 */
function checkName(name, errorId) {
  let nameRegex = /^[a-z,A-Z,á,é,í,ó,ú,æ,å,ø,Á,É,Í,Ó,Ú,Æ,Å,Ø]{2,30}$/;
  if ( !name ) {
    // Error, Name is empty.
    document.getElementById(errorId).style.display = 'block';
  } else if ( !nameRegex.test( name ) ) {
    // Error, Name not valid.
    document.getElementById(errorId).style.display = 'none';
  } else {
    // It works
    document.getElementById(errorId).style.display = 'none';
    return true;
  }
}

/**  TELEPHONE VALIDATION
 * Check if telephone is valid
 * @param {string} tel , Phone number (xxx( -.)xxx( -.)xxxx).
 * @param {string} errorId , errorId in HTML.
 * @return {boolean} true , returns true if it's valid.
 *
 */
function checkTel(tel, errorId) {
  // Works with: xxx xxx xxxx, xxx-xxx-xxxx, xxx.xxx.xxxx
  let telRegex = /^[+[0-9]{3}[\-\. ]{1}[0-9]{3}[\-\. ]{1}[0-9]{4}$/;
  if ( !tel ) {
    // Error, telephone Empty
    document.getElementById(errorId).style.display = 'block';
  } else if ( !telRegex.test( tel ) ) {
    // Error, telephone not valid.
    document.getElementById(errorId).style.display = 'block';
  } else {
    // It works
    document.getElementById(errorId).style.display = 'none';
    return true;
  }
}

/**  BUTTON OnClick Validation Function
 *
 * Check if telephone is valid
 * Call All Functions onClick!
 *
 */
btn.onclick = function() {
  // Create variables for all elements, easier to use.
  let fName = document.getElementById('firstName').value;
  let lName = document.getElementById('lastName').value;
  let tel = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  // Call all check Functions.
  checkName(fName, 'firstNameError');
  checkName(lName, 'lastNameError');
  checkTel(tel, 'phoneError');
  checkEmail(email, 'emailError');

/* IF all check Functions deliver true, success!
  if ( checkName(fName, 'firstNameError') && checkName(lName, 'lastNameError') && checkTel(tel, 'phoneError') && checkEmail(email, 'emailError') ) {
      // Post the Form?
      console.log('Form Submitted! Thank You!');
  }
*/

};
/* PASSWORD LOGIN


<div className="[ col-sm-12 ][ my-1 ]">
<div className="[ input-group ]">
    <div className="[ input-group-prepend ]">
        <div className="[ input-group-text ]"><FontAwesomeIcon icon={faKey} /></div>
    </div>

    <label className="[ sr-only ]" for="inputPassword">Password</label>
    <input type="password" className="[ form-control ]" id="inputPassword" placeholder="Password" />

</div>
</div>
    <div className="[ col-sm-12 ][ my-1 ]">
    <div className="[ input-group ]">
        <div className="[ input-group-prepend ]">
            <div className="[ input-group-text ]"><FontAwesomeIcon icon={faAddressBook} /></div>
        </div>
    
    <label className="[ sr-only ]" for="inputName">First Name</label>
    <input type="text" className="[ form-control form-control-firstName ][ mr-2 ]" id="inputName" placeholder="First name" />
    
    </div>
</div> */