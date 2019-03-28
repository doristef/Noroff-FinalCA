import React from 'react'
import CardComponent from '../components/cardComponent/cardComponent'
import Search from '../components/search/search'

export default class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            charactersObj: [],
            characterCardsFiltered: [],
            characterCards: [],
            cardsFilter: false,
            cardMsg: '',
            loaded: false
        }
    }

    componentDidMount(){
        const app = this;
        app.state.loaded = true;
        app.getData();
    }
    
    getData(){
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards?page=255')
            .then(response => {
                return response.json()
            })
            .then(results => {
                app.setState({
                    charactersObj: results.cards
                })
            });
    }

    handleSearchTerm = (searchTerm) => {
        const app = this;
        let characterObj = app.state.charactersObj;

        let characters = characterObj.filter((character) => {
            return character.name.toLowerCase().indexOf(searchTerm.toLowerCase().trim()) !== -1;
        });
        app.setState({
            characterCards: [],
            characterCardsFiltered: characters,
            cardsFilter: true
        },app.createCards());
    }

    createCards = () => {
        const app = this;
        let charactersArray;
        charactersArray = app.state.cardsFilter ? app.state.characterCardsFiltered : app.state.charactersObj; // Check if user is searching

        // Set cardMsg for loading or nothing found.
        if( charactersArray.length === 0 ){ 
            if( app.state.loaded ){
                app.state.cardMsg = <h1> Card Not Found </h1>;
            }else{
                app.state.cardMsg = <h1> Loading... </h1>;
            }
        }else{
            app.state.cardMsg = '';
        }


        charactersArray.forEach((value, key) => {
            app.state.characterCards.push(
                <CardComponent imageURL={value.imageUrl ? value.imageUrl : 'https://dummyimage.com/223x310/333/fff.png&text=' + value.name} // Check if image is available, if not Placeholder Image!
                                    name={value.name}
                                    rarity={value.rarity}
                                    id={value.id}
                                    key={key}
                ></CardComponent>
            );
        });
        
    }

    render() {
        const app = this;
        app.createCards();

        return (
                <div className="[ row ] ">
                    <div className="[ col-sm-12 ]">
                        <div className="[ row ][ justify-content-center ]">
                            <div className="[ col-md-8 ][ my-3 ]">
                                <Search onSearchTerm={app.handleSearchTerm}></Search>
                            </div>
                        </div>
                    </div>

                    <div className="[ col-sm-12 ]">
                        <div className="[ row ][ mt-2 mb-5 ]">
                            <div className="[ text-center ]">{ app.state.cardMsg }</div>
                            {app.state.characterCards}
                        </div>
                    </div>
                </div>
                
        )
    }
}