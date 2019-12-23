import React from 'react'

export default function SearchBar({ searchFunction }) {
    
    const handleChange = e => {
        const searchTerm = e.target.value;
        console.log(searchTerm);
        searchFunction(searchTerm);
    }
    
    return (


        <form>
            <label style={labelStyles} htmlFor="search">Search: </label>
            <input onChange={handleChange} id="search" name="search" type="text"/>
        </form>
    )
}


const labelStyles = {
    border: "1px solid black"
}