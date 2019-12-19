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
    this.setNumOfResults = this.setNumOfResults.bind(this);
  }

  async fetchRepositoryData () {
    const URL = "https://api.github.com/users/facebook/repos?per_page=100";
    const responseJSON = await fetch(URL);
    const parsedData = await responseJSON.json();
    console.log(parsedData)
    this.setState({ 
      reposData: parsedData,
      fetchingData: false,
      currentPage: 0
    });
  }
  
  setNumOfResults() {
    const { itemsPerPage } = this.state;
    let newItemsPerPage;
    if (itemsPerPage === 8) {
      newItemsPerPage = 16;
    } else {
      newItemsPerPage = 8;
    }
    this.setState({itemsPerPage: newItemsPerPage})
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
              <button>Sort By</button>
              <button onClick={this.setNumOfResults}>8/16</button>
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
  background: "#fff"
}

export default App;
