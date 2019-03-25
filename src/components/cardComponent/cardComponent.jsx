import React from 'react'

export default class CardComponent extends React.Component {
    render() {
        return (
            <div className="[ col-md-4 col-lg-3 ] [ h-100 ][ my-3 ]">
                <div className="[ card card-character card-character-hovering ][ h-100 ][ m-0 p-0 ]">
                    <a href={'#/cardspecific/' + this.props.id} title={this.props.name}>
                    
                        <img src={this.props.imageURL} className="[ card-img card-img-top ]" alt={this.props.name} />

                        <div className="[ overlay ]"><h2 className="[ text-muted ]">Click to<br /> View More</h2></div>

                    </a>
                </div>
            </div>
        );
    }
}