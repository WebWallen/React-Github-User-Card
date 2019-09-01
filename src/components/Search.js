import React from "react";
import "../App.css";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.changeUserName(this.state.search);
        this.setState({ search: "" })
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <p>Search for Any User Below!</p>
                <input type="text" 
                       name="search" 
                       className="search-input"
                       value={this.state.search}
                       onChange={this.handleChange}
                       placeholder="Search criteria go here..." 
                />
                <button className="search-button" type="submit">Search for a User</button>
            </form>
        )
    }
}

export default Search;