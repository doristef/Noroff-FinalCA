import React from 'react'

export default class CardLoading extends React.Component {
    
    render() {
        return (
            <div className="[ row ]">
            <div className="[ col-xs-12 col-md-4 ]">
                <img src="https://dummyimage.com/223x310/333/fff.png&text=Loading" className="[ card-img card-img-specific ][ h-100 ]"  alt="Loading..." />
            </div>

            <div className="[ col-xs-12 col-md-6 ]">
                <div className="[ card card-shadow card-specific ]">
                    <div className="[ card-body ]">
                    <h1 className="[ card-title card-specific-title ][ m-3 ]"> Loading Card...</h1>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}