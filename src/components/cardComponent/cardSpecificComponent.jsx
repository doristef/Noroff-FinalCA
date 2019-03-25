import React from 'react'

export default class CardSpecificComponent extends React.Component {

    render() {
        return (
            
            <div className="[ card card-character ]">
                    <div className="[ card-body ]">
                        <div className="[ row ]">
                            <div className="[ col-sm-4 ]">
                                <img src={this.props.imageURL} className="[ card-img card-img-specific ][ h-100 ]"  alt={this.props.name} />
                            </div>
                            <div className="[ col-sm-6 ]">
                                <h1 className="[ card-title m-3 ]"> {this.props.name ? this.props.name : 'No name to show.'}</h1>
                                <div className="[ card-text ][ px-2 ml-4 mb-5 ]">
                                    <h5 className="[ mt-2 ]">Rarity:</h5> <span className="[ ml-3 ]"> {this.props.rarity ? this.props.rarity : 'Nothing to show.'} </span>
                                    <h5 className="[ mt-2 ]">Colors:</h5> <span className="[ ml-3 ]"> {this.props.colors ? this.props.colors : 'Nothing to show.'} </span>
                                    <h5 className="[ mt-2 ]">About:</h5> <span className="[ ml-3 ]"> {this.props.text ? this.props.text : 'Nothing to show.' } </span>
                                    <h5 className="[ mt-2 ]">Flavor:</h5> <span className="[ ml-3 ]"> {this.props.flavor ? this.props.flavor : 'Nothing to show.' } </span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        )
    }
}