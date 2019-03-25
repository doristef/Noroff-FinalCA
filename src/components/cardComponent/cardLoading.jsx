import React from 'react'

export default class CardLoading extends React.Component {
    
    render() {
        return (
            
            <div className="[ card card-character ]">
                    <div className="[ card-body ]">
                        <div className="[ row ]">
                            <div className="[ col-sm-4 ]">
                                <img src="https://dummyimage.com/223x310/333/fff.png&text=Loading" className="[ card-img card-img-specific ][ h-100 ]"  alt="Loading..." />
                            </div>
                            <div className="[ col-sm-6 ]">
                                <h1 className="[ card-title m-3 ]"> Loading Card...</h1>
                            </div>
                        </div>
                    </div>
            </div>

        )
    }
}