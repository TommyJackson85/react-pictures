// Import the React and ReactDOM libraries
import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    /*arrow function fixes this reference, 
    in which was previously undefined*/
    onFormSubmit = (event) => {
        event.preventDefault();
        //why reference props?
        this.props.onSubmit(this.state.term);
    }
    /*passing value input to state first instead 
    of allowing the input to do automatically
    */
    //this.onInputChange() - this will be automate, so its best to remove the parenthesis
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search:</label>
                        <input 
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;