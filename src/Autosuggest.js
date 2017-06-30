import Autosuggest from 'react-autosuggest';
import React, {Component} from 'react';

class AutosuggestInput extends Component {
    constructor(props) {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = ({
            meta: props.meta,
            value: '',
            suggestions: [],
            getSuggestionValue: () => {},
            renderSuggestion: () => {}
        });
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.state.getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        // const { value, suggestions } = this.state;
        const value = this.state.value;
        const suggestions = this.state.suggestions;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type a game name...',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.state.getSuggestionValue}
                renderSuggestion={this.state.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }

    onGameClicked = (app) => {
        console.log("app " + app.app_id + " clicked!");
        this.props.clickedCallback(app);
    };

    componentWillMount = function(){
        this.state.meta.then(res => {
            res.json().then(json => {
                let appMeta = json;
                this.setState({
                    appMeta: json,
                    getSuggestions: value => {
                        const inputValue = value.trim().toLowerCase();
                        const inputLength = inputValue.length;

                        return inputLength === 0 ? [] : appMeta.filter(app =>
                                app.app_name.toLowerCase().slice(0, inputLength) === inputValue
                            );
                    },
                    getSuggestionValue: suggestion => suggestion.app_name,
                    renderSuggestion: suggestion => (
                        <div className="link" onClick={() => {this.onGameClicked(suggestion)}}>
                            {suggestion.app_id} - {suggestion.app_name}
                        </div>
                    )
                })
            })
        });

    }
}

export default AutosuggestInput;
