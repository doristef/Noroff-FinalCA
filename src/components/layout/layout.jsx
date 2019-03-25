import React from 'react';
import NavbarPage from './nav';

export default class Layout extends React.Component {

  render() {
    return (
      <div>
          <NavbarPage />
        <div className="[ container ]">
            <div className="[ row ]">
              <div className="[ col-sm-12 ]">
                {this.props.children}
              </div>
            </div>
        </div>
      </div>
    );
  }
}