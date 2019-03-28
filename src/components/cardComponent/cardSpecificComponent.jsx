import React from 'react'

export default class CardSpecificComponent extends React.Component {

    render() {
        return (
                <div className="[ row ]">
                    <div className="[ col-xs-12 col-sm-4 ][ mt-2 ]">
                        <img src={this.props.imageURL} className="[ card-img card-shadow card-img-specific ]"  alt={this.props.name} />
                    </div>

                    <div className="[ col-xs-12 col-sm-6 ][ mt-2 ][ smallScreen-noPadding ]">
                        <div className="[ card card-shadow card-specific ]">
                            <div className="[ card-body ]">
                            <h1 className="[ card-title card-specific-title ][ m-3 ]"> {this.props.name ? this.props.name : 'No name to show.'}</h1>
                                <div className="[ card-text ][ px-2 ml-0 ml-md-4 mb-5  ]">
                                    <h5 className="[ mt-2 ][ card-specific-title ]">Rarity:</h5> 
                                        <span className="[ ml-md-3 ml-0 ]"> {this.props.rarity ? this.props.rarity : 'Nothing to show.'} </span>
                                    <h5 className="[ mt-2 ][ card-specific-title ]">Colors:</h5> 
                                        <span className="[ ml-md-3 ml-0 ]"> {this.props.colors ? this.props.colors : 'Nothing to show.'} </span>
                                    <h5 className="[ mt-2 ][ card-specific-title ]">About:</h5> 
                                        <span className="[ ml-md-3 ml-0 ]"> {this.props.text ? this.props.text : 'Nothing to show.' } </span>
                                    <h5 className="[ mt-2 ][ card-specific-title ]">Flavor:</h5> 
                                        <span className="[ ml-md-3 ml-0 ]"> {this.props.flavor ? this.props.flavor : 'Nothing to show.' } </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}