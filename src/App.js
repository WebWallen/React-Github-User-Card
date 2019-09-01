import React from 'react';
import './App.css';
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/WebWallen')
      .then(res => res.json()) // fetch only grabs the URL's general info, must explicitly convert to JSON and then request data
      .then(data => this.setState({ user: data}))
    
    fetch('https://api.github.com/users/WebWallen/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers: data}))
  }

  componentDidUpdate() {
    console.log(this.state); // sneaky way of accessing data set to state, which isn't available in the above method
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user}/>
      </div>
    )
  }
}

export default App;
