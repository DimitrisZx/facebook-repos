import React from 'react';
import './App.css';
import Loader from "../Loader/Loader";
import List from "../List/List";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchingData: true,
      reposData: [],
      itemsPerPage: 8, // or 16
      searchTerm: "",
      expandedItem: undefined
    }
    this.fetchRepositoryData = this.fetchRepositoryData.bind(this);
    this.setNumOfResults = this.setNumOfResults.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.sortResults = this.sortResults.bind(this);
  }

  async fetchRepositoryData () {
    
    const URL = "https://api.github.com/users/facebook/repos?per_page=100";
    const responseJSON = await fetch(URL);
    const parsedData = await responseJSON.json();
    const requiredData = parsedData.map(
      repo => ({
          id: repo.id, 
          full_name: repo.full_name, 
          stargazers_count: repo.stargazers_count, 
          description: repo.description
      }))
    console.log(requiredData)
    this.setState({ 
      reposData: requiredData,
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

  toggleItem(itemToExpand){
    console.log(itemToExpand)

    if (itemToExpand === this.state.expandedItem) {
      this.setState({ expandedItem: undefined })
    } else {
      this.setState({ expandedItem: itemToExpand })
    }
  }

  sortResults(fieldToSortBy="") {
    const { results } = this.state;
    const sortedResults = results.sort((a,b) => a.stargazers_count - b.stargazers_count);
    this.setState({ reposData: sortedResults }) 
  }

  componentDidMount() {
    this.fetchRepositoryData();
  }
  
  render() {
    const { fetchingData, reposData, itemsPerPage, expandedItem } = this.state;
    return (
      <div className="App" style={appStyles}>
        { fetchingData ? <Loader /> : null }
        <section style={contentsStyles} id="contents">
          <section style={topNavStyles}>
            <h1 style={titleStyles}>Repository Results</h1>
            <section style={displayOptionsStyles}>
              <button onClick={this.sortResults}>Sort By <FontAwesomeIcon icon={faCaretDown}/></button>
              <button onClick={this.setNumOfResults}>8/16</button>
            </section>
          </section>
          <List 
            expandedItem={ expandedItem }
            reposData={ reposData } 
            itemsPerPage={ itemsPerPage } 
            toggleItem={ this.toggleItem } 
          />
          <Pagination />
        </section>
      </div>
    );
  }
}

const titleStyles = {
  padding: '0',
  margin: "5px",
  fontSize: "1.6rem",
  color: "#3b5998"
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
  width: "40%",
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
