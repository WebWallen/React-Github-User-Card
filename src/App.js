import React from 'react';
import './App.css';
import logo from './img/logo.png'
import UserCard from "./components/UserCard";
import Search from "./components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = { // sets the initial state that should render when the app loads -- values can change later with setState
      userName: 'WebWallen',
      user: {},
      followers: [] // user and followers are set to match the data structure returned from the Github API
    };
  }

  changeUserName = (userName) => {
    this.setState({ userName }) // sets state to new username based on user's search criteria
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.userName}`) // template literal necessary when URL is based on the user's input
      .then(res => res.json()) // fetch only grabs the URL's general info, must explicitly convert to JSON to get the specifics
      .then(data => this.setState({ user: data})) // passes the user's info into the empty object declared in this.state
      .catch(err => console.log(err));
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => res.json())
      .then(data => this.setState ({ followers: data})) // passes the user's followers into the empty array in this.state
      .catch(err => console.log(err));
  }

  componentDidMount() { // when the component mounts, fetch the user's profile information and followers
    this.fetchUser();
    this.fetchFollowers();
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(this.state); // If you want to confirm you're getting the right info, gotta console it here versus in ComponentDidMount
    if (prevState.userName !== this.state.userName) { // if the user requests a profile other than the one currently in screen view...
      this.fetchUser(); // Grab that profile's information and render it instead
      this.fetchFollowers(); // ^ ditto with their followers
    }
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="Big, black and white Github logo" />
        <Search changeUserName={this.changeUserName} />  {/* Remember: don't have to call state on functions or methods */}
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }
}
  
export default App;
