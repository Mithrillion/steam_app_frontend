import React, {Component} from 'react';
import logo from './gaben.png';
import './App.css';
import AutosuggestInput from './Autosuggest';
import ReactDOM from 'react-dom';
import GameInfoDisplay from './GameInfoDisplay';
import SimilarGamesDisplay from './SimilarGamesDisplay'

class App extends Component {
    constructor(props){
        super();
        // load data
        this.state = {
            appMeta: fetch("../data/ratings.json")
        };
    }

    onGameSelected = (app) => {
        console.log("app " + app.app_id + " selected!");
        console.log("displaying game info!");
        ReactDOM.render(<GameInfoDisplay app={app} />, document.getElementById("selectedGame"));
        console.log("requesting similarity data...");
        fetch('http://localhost:5000/query/' + app.app_id).then(res => {
            res.json().then(json => {
                console.log(json);
                ReactDOM.render(<SimilarGamesDisplay apps={json}/>, document.getElementById("similarGames"))
            })
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Steam Similar Game Finder</h2>
                </div>
                <p className="App-intro">
                    Find similar games on Steam, similar to Steam store's suggested games.
                </p>
                <AutosuggestInput meta={this.state.appMeta} clickedCallback={this.onGameSelected}/>
                <div id="selectedGame"></div>
                <br />
                <div id="similarGames"></div>
            </div>
        );
    }
}

export default App;
