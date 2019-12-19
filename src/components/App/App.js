import React from 'react';
import './App.css';
import Loader from "../Loader/Loader";
import List from "../List/List";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchingData: true,
      reposData: [],
      itemsPerPage: 8, // or 16
      searchTerm: ""
    }
    this.fetchRepositoryData = this.fetchRepositoryData.bind(this);
  }

  async fetchRepositoryData () {
    const URL = "https://api.github.com/users/facebook/repos?per_page=100";
    const responseJSON = await fetch(URL);
    const parsedData = await responseJSON.json();
    console.log(parsedData)
    this.setState({ 
      reposData: parsedData,
      fetchingData: false
    });
  }
  
  componentDidMount() {
    this.fetchRepositoryData();
  }
  
  render() {
    const { fetchingData, reposData, itemsPerPage } = this.state;
    return (
      <div className="App" style={appStyles}>
        { fetchingData ? <Loader /> : null }
        <section style={contentsStyles} id="contents">
          <section style={topNavStyles}>
            <SearchBar />
            <section style={displayOptionsStyles}>
              <button>Filter</button>
              <button>Display</button>
            </section>
          </section>
          <List reposData={ reposData } itemsPerPage={ itemsPerPage } />
          <Pagination />
        </section>
      </div>
    );
  }
}


const displayOptionsStyles = {
  display: "flex",
  justifyContent: "space-evenly",
}

const topNavStyles = {
  display: "flex",
  justifyContent: "space-between"
}

const contentsStyles = {
  width: "55%",
}

const appStyles = {
  display: "flex",
  height: "100vh",
  width: "100vw",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "teal"
}

export default App;
