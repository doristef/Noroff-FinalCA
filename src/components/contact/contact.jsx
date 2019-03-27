import React from 'react';
import ContactForm from './contactForm';
import logo from './../../assets/clintBustrillos.jpg'; // Photo by Clint Bustrillos on Unsplash

export default class Contact extends React.Component {

    render() {
        return (
            <div class="card card-shadow card-contact">
                <div class="row no-gutters">
                    <div class="col-auto">
                        <img src={logo} className="[ img-fluid ][ card-contact-img ][ m-0 p-0 ]" />
                    </div>
                    <div class="col">
                        <div class="card-block px-2 [ ml-3 my-3 ]">
                            <h3 className="card-title">Contact Us</h3>
                                <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}
