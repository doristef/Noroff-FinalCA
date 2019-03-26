import React from 'react'

export default class CardComponent extends React.Component {
    constructor () {
        super()
        this.state = {
          isHidden: [true, true]
        }
      }

    toggleElement(num) {
        this.setState((prevState) => {
            const newItems = [...prevState.isHidden];
            newItems[num] = !newItems[num];
            return {isHidden: newItems};
        });
    }
    
    render() {
        return (
            <div className="[ col-sm-12 ] [ h-100 ][ my-3 ]">

                <div className="[ row ]">
                    <div className="[ col-sm-12 ][ my-2 ]">
                        <div className="[ card card-showHide ][ my-2 p-0 ][ cursor-pointer ]" onClick={(evt) => this.toggleElement(0)}>
                            <div className="[ card-body ]">
                                <h3>
                                    <i class="[ fas fa-chevron-circle-down ][ mr-3 ][ float-right ]"></i> 
                                    <span> About the Card Game </span> 
                                </h3>
                                
                                    {!this.state.isHidden[0] && <HiddenTextMain />}
                            </div>
                            
                        </div>

                        <div className="[ card card-showHide ][ my-2 p-0 ][ cursor-pointer ]" onClick={(evt) => this.toggleElement(1)}>
                            <div className="[ card-body ]">
                                <h3>
                                    <i class="[ fas fa-chevron-circle-down ][ mr-3 ][ float-right ]"></i> 
                                    <span> Defeat Your Opponent </span> 
                                </h3>
                                
                                    {!this.state.isHidden[1] && <HiddenTextDefeat />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    
}

const HiddenTextMain = () => (

    <div className="[ card-text ][ my-4 ]">
        <p>
            First published in 1993 by Wizards of the Coast, Magic was the first trading card game produced and it continues to thrive, with approximately twenty million players as of 2015. Magic can be played by two or more players in various formats, which fall into one of two categories: constructed or limited. Limited formats involve players building a deck spontaneously out of a pool of random cards with a minimum deck size of 40 cards. The other major category of formats is constructed. In constructed, players created decks from cards they own, usually 60 cards with no more than 4 of any given card. Magic is played in person with printed cards, or using a deck of virtual cards through the Internet-based Magic: The Gathering Online, or on a smartphone or tablet, or through other programs.
        </p>
        <p>
            Each game represents a battle between wizards known as "planeswalkers", who employ spells, artifacts, and creatures depicted on individual Magic cards to defeat their opponents. Although the original concept of the game drew heavily from the motifs of traditional fantasy role-playing games such as Dungeons Dragons, the gameplay of Magic bears little similarity to pencil-and-paper adventure games, while having substantially more cards and more complex rules than many other card games.
        </p>
        <p> 
            New cards are released on a regular basis through expansion sets. An organized tournament system played at an international level and a worldwide community of professional Magic players has developed, as well as a substantial secondary market for Magic cards. Certain Magic cards can be valuable due to their rarity and utility in game play, with prices ranging from a few cents to thousands of dollars.
        </p>
    </div>

);

const HiddenTextDefeat = () => (

    <div className="[ card-text ][ my-4 ]">
        <p>
            Each player starts the game with 20 life. Knock your opponent down to 0 life, and you win. The most common way to do this is to summon creatures and attack with them.
        </p>
        <p>
            Creature cards are the most important part of many Magic decks. They’re really easy to spot—just look at the lower right of a card. If you see a pair of numbers separated by a slash, you’ve got a creature card. Once it’s on the battlefield, a creature continues to attack and defend for you until your opponent can find a way to take it out.
        </p>  
        <p>
            Most games become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. Check out the section on casting creature spells.
        </p>
    </div>

);
