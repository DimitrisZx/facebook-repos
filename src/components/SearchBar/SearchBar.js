import React from 'react'

export default function SearchBar() {
    return (
        <form>
            <label style={labelStyles} htmlFor="search">Search: </label>
            <input id="search" name="search" type="text"/>
        </form>
    )
}


const labelStyles = {
    border: "1px solid black"
}