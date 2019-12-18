import React from 'react';
import './App.css';
import Loader from "../Loader/Loader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchingData: true,
      reposData: []
    }
    this.fetchRepositoryData = this.fetchRepositoryData.bind(this);
  }

  async fetchRepositoryData () {
    const URL = "https://api.github.com/users/facebook/repos?per_page=100";
    const responseJSON = await fetch(URL);
    const parsedData = await responseJSON.json();
    this.setState({ 
      reposData: parsedData,
      fetchingData: false
    });
  }
  
  componentDidMount() {
    this.fetchRepositoryData();
  }
  
  render () {
    const { fetchingData } = this.state;
    return (
      <div className="App">
        { fetchingData ? <Loader /> : null }
        <ul>
          { this.state.reposData.map(repo => <li>{repo.full_name}</li>) }
        </ul>
      </div>
    );
  }
}

export default App;
