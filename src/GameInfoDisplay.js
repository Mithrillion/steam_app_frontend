import React, {Component} from 'react';

class GameInfoDisplay extends Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    Selected game:
                </p>
                <table>
                    <thead>
                    <tr>
                        <th>App ID</th>
                        <th>App Name</th>
                        <th>Positive Reviews</th>
                        <th>Negative Reviews</th>
                        <th>Steam Rating</th>
                        <th>Wilson Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.app.app_id}</td>
                        <td>{this.props.app.app_name}</td>
                        <td>{this.props.app.pos}</td>
                        <td>{this.props.app.neg}</td>
                        <td>{this.props.app.steam_score}</td>
                        <td>{this.props.app.wilson}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GameInfoDisplay;
