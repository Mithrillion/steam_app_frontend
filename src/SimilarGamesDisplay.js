import React, {Component} from 'react';

class SimilarGamesDisplay extends Component {
    constructor(props) {
        super();
    }

    render() {
        let listItems = this.props.apps.map(function (app) {
            return (
                <tr key={app.app_id}>
                    <td>{app.app_id}</td>
                    <td><a target="_blank" href={"http://store.steampowered.com/app/" + app.app_id}>{app.app_name}</a></td>
                    <td>{app.distance}</td>
                    <td>{app.pos}</td>
                    <td>{app.neg}</td>
                    <td>{app.steam_score}</td>
                    <td>{app.wilson}</td>
                </tr>
            );
        });
        return (
            <div>
                <p className="App-intro">
                    Similar games:
                </p>
                <table>
                    <thead>
                    <tr>
                        <th>App ID</th>
                        <th>App Name</th>
                        <th>Distance</th>
                        <th>Positive Reviews</th>
                        <th>Negative Reviews</th>
                        <th>Steam Rating</th>
                        <th>Wilson Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SimilarGamesDisplay;
