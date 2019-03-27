import React from 'react';
import ContactForm from '../components/contact/contactForm';
import UnsplashImage from './../assets/clintBustrillos.jpg'; // Photo by Clint Bustrillos on Unsplash

export default class Contact extends React.Component {

    render() {
        return (
            <div className="[ card card-shadow card-contact ]">
                <div className="[ row ][ no-gutters ]">
                    <div className="[ col-auto ]">
                        <img src={UnsplashImage} className="[ img-fluid ][ card-contact-img ][ m-0 p-0 ]" />
                    </div>
                    <div className="[ col ]">
                        <div className="[ card-block ][ px-2 ml-xs-0 ml-md-3 my-3 ]">
                            <h3 className="[ card-title ]">Contact Us</h3>
                                <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}
