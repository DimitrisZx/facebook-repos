import React from 'react'
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({ searchFunction }) {
    
    const handleChange = e => {
        const searchTerm = e.target.value;
        console.log(searchTerm);
        searchFunction(searchTerm);
    }
    const classes = useStyles();
    return (


        <form className={classes.searchBar} >
            <input className={classes.input} onChange={handleChange} placeholder="Search" id="search" name="search" type="text"/>
            <FontAwesomeIcon icon={ faSearch } />
        </form>
    )
}

const useStyles = createUseStyles({
    searchBar: {
        borderRadius: "30px",
        border: "2px solid #8598c0",
        padding: "10px 25px",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "75%",
        marginBottom: "25px",

    },
    input: {
        border: "none",
        fontSize: "1.42rem",
        outline: "none"
    }
})
