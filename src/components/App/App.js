import React from 'react';
import './App.css';
import Loader from "../Loader/Loader";
import List from "../List/List";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import SortByButton from "../SortByButton/SortByButton";
import ResultsPerPageBtn from "../ResultsPerPageBtn/ResultsPerPageBtn";
import { response } from "../../savedResponse";

console.log(response)
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchingData: true,
      reposData: [],
      itemsPerPage: 8, // or 16
      searchTerm: "",
      expandedItem: undefined,
      searchedResults: [],
      currentPageIndex: 0 // 0 ... n
    }
    this.fetchRepositoryData = this.fetchRepositoryData.bind(this);
    this.setNumOfResults = this.setNumOfResults.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.sortResults = this.sortResults.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.goToPage = this.goToPage.bind(this);
  }

  async fetchRepositoryData () {
    
    // const URL = "https://api.github.com/users/facebook/repos?per_page=100";
    // const responseJSON = await fetch(URL);
    // const parsedData = await responseJSON.json();
    // const requiredData = parsedData.map(
    //   repo => ({
    //       id: repo.id, 
    //       full_name: repo.full_name.split("/")[1], 
    //       stargazers_count: repo.stargazers_count, 
    //       description: repo.description
    //   }))
    // console.log(requiredData)
    const requiredData = response.map(
        repo => ({
            id: repo.id, 
            full_name: repo.full_name.split("/")[1], 
            stargazers_count: repo.stargazers_count, 
            description: repo.description
        }));
    this.setState({ 
      reposData: requiredData,
      fetchingData: false,
    });
  }
  
  setNumOfResults(numOfResults) {
    this.setState({itemsPerPage: parseInt(numOfResults)});
  }

  toggleItem(itemToExpand){
    console.log(itemToExpand)

    if (itemToExpand === this.state.expandedItem) {
      this.setState({ expandedItem: undefined })
    } else {
      this.setState({ expandedItem: itemToExpand })
    }
  }

  sortResults(fieldToSortBy) {
    const { reposData: results } = this.state;
    console.log(results.forEach(result => console.log(result[fieldToSortBy])))
    if (fieldToSortBy === "full_name") {
      const sortedResults = results.sort((a,b) => a[fieldToSortBy].toLowerCase() < b[fieldToSortBy].toLowerCase() ? -1 : 1 );
      const sortedSearchResults = results.sort((a,b) => a[fieldToSortBy].toLowerCase() < b[fieldToSortBy].toLowerCase() ? -1 : 1 );
      this.setState({ 
        reposData: sortedResults, 
        searchedResults: sortedSearchResults
      }) 
    } else {
      const sortedResults = results.sort((a,b) => b[fieldToSortBy] - a[fieldToSortBy]);
      const sortedSearchResults = results.sort((a,b) => b[fieldToSortBy] - a[fieldToSortBy]);
      this.setState({ 
        reposData: sortedResults,
        searchedResults: sortedSearchResults
      }) 
    }
  }

  searchResults(searchTerm) {
    if (searchTerm === "") {
      this.setState({searchedResults: []})
    } else {
      const foundItems = this.state.reposData.filter(repo => repo.full_name.includes(searchTerm));
      this.setState({
        searchedResults: foundItems,
        currentPageIndex: 0
      })
    }
  }

  componentDidMount() {
    this.fetchRepositoryData();
  }

  goToPage(pageIndex) {
    this.setState({ currentPageIndex: pageIndex })
  }
  
  render() {
    const { fetchingData, reposData, itemsPerPage, expandedItem, searchedResults, currentPageIndex } = this.state;
    return (
      <div className="App" style={appStyles}>
        { fetchingData ? <Loader /> : null }
        <section style={contentsStyles} id="contents">
          <SearchBar searchFunction={this.searchResults}/>
          <section style={topNavStyles}>
            <h1 style={titleStyles}>Repository Results</h1>
            <section style={displayOptionsStyles}>
              <SortByButton sortingFunction={this.sortResults} />
              <ResultsPerPageBtn resultsNumFunction={this.setNumOfResults} itemsPerPageNum={itemsPerPage} />
            </section>
          </section>
          <List 
            expandedItem={ expandedItem }
            reposData={  searchedResults.length === 0 ? reposData : searchedResults } 
            itemsPerPage={ itemsPerPage } 
            toggleItem={ this.toggleItem } 
            pageIndex={ currentPageIndex }
          />
          <Pagination 
            currentPage={currentPageIndex} 
            numOfPages={parseInt(reposData.length / itemsPerPage)}  
            goToPage={this.goToPage}
          />
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
  alignItems: "center",
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
