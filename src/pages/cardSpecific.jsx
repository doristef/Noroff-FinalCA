import React from 'react';
import { Link } from 'react-router-dom';
import CardSpecificComponent from '../components/cardComponent/cardSpecificComponent'
import CardLoading from '../components/cardComponent/cardLoading'

export default class CardSpecific extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            charactersObj: [],
            characterID: this.props.match.params.id,
            fetchLoading: true
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }

    getData(){
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards/' + app.state.characterID)
            .then(response => {
                return response.json()
            })
            .then(result => {
                app.setState({
                    fetchLoading: false,
                    charactersObj: result.card
                })
            });
    }

    render() {
        const app = this;
       
        let specificCard = <CardSpecificComponent 
                                imageURL={app.state.charactersObj.imageUrl ? app.state.charactersObj.imageUrl : 'https://dummyimage.com/223x310/333/fff.png&text=' + app.state.charactersObj.name }
                                name={app.state.charactersObj.name}
                                rarity={app.state.charactersObj.rarity}
                                colors={app.state.charactersObj.colors}
                                text={app.state.charactersObj.text}
                                flavor={app.state.charactersObj.flavor}
                            ></CardSpecificComponent>;

        return (
            <div className="[ row ][ justify-content-center ]">
                <div className="[ col-md-6 ][ mb-3 ]">
                    <Link className="nav-link nav-link__orange" to="/">
                    <button className="[ btn btn-lg btn-orange ]"><i class="fas fa-arrow-alt-circle-left"></i> Go back</button>
                    </Link>
                </div>
                <div className="[ col-sm-12 ][ mb-3 ]">
                        {app.state.fetchLoading ? <CardLoading /> : specificCard}
                </div>
            </div>
        )
    }
}