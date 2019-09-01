import React from 'react';
import './App.css';
import UserCard from "./components/UserCard";
import Search from "./components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'WebWallen',
      user: {},
      followers: []
    };
  }

  changeUserName = (userName) => {
    this.setState({ userName: userName })
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json()) // fetch only grabs the URL's general info, must explicitly convert to JSON and then request data
      .then(data => this.setState({ user: data}))
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => res.json())
      .then(data => this.setState({ followers: data}))
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(this.state); // sneaky way of accessing data set to state, which isn't available in the above method
    if (prevState.userName !== this.state.userName) {
      this.fetchUser();
      this.fetchFollowers();
    }
  }

  render() {
    return (
      <div className="App">
         <Search changeUserName={this.changeUserName} />
        <UserCard user={this.state.user} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
