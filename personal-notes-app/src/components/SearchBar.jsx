import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {query: ""};

        this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this);
    }

    onQueryChangeEventHandler(event) {
        this.setState({query: event.target.value}, () => {
            return this.props.searchNote(this.state);
        });
    }

    render() {
        return (
            <div className="search-note">
                <input type="text" placeholder="Cari Catatan..." value={this.state.query} onChange={this.onQueryChangeEventHandler} />
            </div>
        );
    }
}

export default SearchBar;