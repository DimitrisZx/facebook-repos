import React from 'react'

export default function Pagination({ numOfPages }) {
    
    const generatePages = numOfPages => {
        const pages = [0,1,2,3,4,5,6];
        const firstPagesToShow = pages.slice(0, 3);
        const lastPagesToShow = pages.reverse().slice(0, 3).reverse();
        return (
            <>
                {firstPagesToShow.map(numOfPage => <li style={pageBtnStyles}>{numOfPage+1}</li>)}
                <div style={dividerStyles}>...</div>
                {lastPagesToShow.map(numOfPage => <li style={pageBtnStyles}>{numOfPage+1}</li>)}
            </>
        )
    }
    
    return (
        <nav>
            <ul style={paginationStyles}>
                { generatePages(10) }
            </ul> 
        </nav>
    )
}

const dividerStyles = {
    color: "white",
    fontSize: "1.4rem"
}

const pageBtnStyles = {
    width: "20px",
    height: "20px",
    border: "1px solid blue",
    listStyle: 'none',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    padding: "none"
}

const paginationStyles = {
    display: "flex",
    justifyContent: "flex-end"
}
