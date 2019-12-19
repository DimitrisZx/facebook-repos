import React from 'react';
import './App.css';
import Loader from "../Loader/Loader";
import List from "../List/List";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchingData: true,
      reposData: [],
      itemsPerPage: 8 // or 16
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
    const { fetchingData, reposData, itemsPerPage } = this.state;
    return (
      <div className="App">
        { fetchingData ? <Loader /> : null }
        <List reposData={ reposData } itemsPerPage={ itemsPerPage } />
      </div>
    );
  }
}

export default App;
