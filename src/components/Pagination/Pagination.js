import React from 'react';
import { createUseStyles } from "react-jss";

export default function Pagination({ currentPage, numOfPages, goToPage }) {
    const classes = useStyles();
    console.log(numOfPages)

    const handleClick = pageIndex => {
        goToPage(pageIndex)
        Array(numOfPages)
    }

    const generatePages = (firstPage, numOfPages) => {
        // const pages = [0,1,2,3,4,5,6];
        const firstPagesToShow = pages.slice(0, 3);
        const pages = [firstPage];

        return (
            <>
                <button className={classes.pageBtnStyles}>{"<"}</button> 
                {firstPagesToShow.map(numOfPage => <li key={numOfPage} className={classes.pageBtnStyles}>{numOfPage+1}</li>)}
                <div className={classes.dividerStyles}>...</div>
                <li className={classes.pageBtnStyles}>{numOfPages}</li>
                <button className={classes.pageBtnStyles}>{">"}</button>
            </>
        )
    }
    
    return (
        <nav>
            <ul className={classes.paginationStyles}>
                { generatePages(currentPage, numOfPages) }
            </ul> 
        </nav>
    )
}

const useStyles = createUseStyles({
    dividerStyles: {
        color: "white",
        fontSize: "1.4rem"
    },
    pageBtnStyles: {
        width: "20px",
        height: "20px",
        border: "1px solid grey",
        listStyle: 'none',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        padding: "none",
    },
    
    paginationStyles: {
        display: "flex",
        justifyContent: "flex-end"
    }
})

