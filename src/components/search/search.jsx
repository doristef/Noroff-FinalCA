import React from 'react'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleCharacterSearchTerm = this.handleCharacterSearchTerm.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleCharacterSearchTerm(){
        const app = this;
        let phrase = app.refs.searchTerm.value;
        app.props.onSearchTerm(phrase);
    }

    clearForm(){
        const app = this;
        app.refs.searchTerm.value = '';
        let phrase = app.refs.searchTerm.value;
        app.props.onSearchTerm(phrase); 
    }

        render() {
            const app = this;

            return (
                <div>
                <label className="[ sr-only ]" for="search">Search in character card database</label>
                    <div className="[ input-group mb-2 ]">
                        <div className="[ input-group-prepend ]">
                            <div className="[ input-group-orange input-group-text ]">Search: </div>
                        </div>
                        <input type="text"
                            id="search"
                            ref="searchTerm"
                            onChange={app.handleCharacterSearchTerm}
                            className="[ form-control ]"
                            placeholder="Type in a character"
                        />
                        <div className="[ input-group-append ]">
                            <button type="button" className="[ btn btn-search ][ input-group-btn ]" onClick={this.clearForm} > reset </button>
                        </div>
                    </div>
                </div>
            )
        }
}