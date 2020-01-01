import React from 'react'
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({ searchFunction }) {
    
    const handleChange = e => {
        const searchTerm = e.target.value;
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
        border: "2px solid #fff",
        padding: "10px 25px",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "75%",
        marginBottom: "15px",
        boxShadow: "3px 3px 9px -1px  rgba(0,0,0,0.19)",
        transition: "all .2s ease-in",
        "&:hover" : {
            borderColor: "#713bdb",
        }
    },
    input: {
        border: "none",
        fontSize: "1.42rem",
        outline: "none",
        width: "100%"
    }
})