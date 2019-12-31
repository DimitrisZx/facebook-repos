import React from 'react';
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Pagination({ currentPage, numOfPages, goToPage }) {
    const classes = useStyles();
    console.log(numOfPages)

    const handleClick = (pageIndex, numOfPages=undefined) => {
        if ((numOfPages !== undefined && pageIndex > numOfPages) || pageIndex < 0) {
            return; // Cancel operation if index is bigger than last page or smaller than 1
        } else { 
            goToPage(pageIndex);
        }
    }

    const pageBtnTemplate = numOfPage => 
        <li 
            key={numOfPage} 
            onClick={() => goToPage(numOfPage)} 
            className={ numOfPage === currentPage ? classes.currentPageBtn : classes.pageBtnStyles }
        >
            {numOfPage+1}
        </li>
    
    const generatePages = (currentPage, numOfPages) => {
        
        const pages = [];
        const fillPages = numOfPages => {
            if (pages.length === numOfPages+1) {
                return;
            } else if (pages.length === 0) {
                pages.push(0);
            } else {
                pages.push(pages.length)
            }

            fillPages(numOfPages);
        }
        fillPages(numOfPages);
        console.log(pages);

        const generatePageButtons = numOfPage => {
            return pageBtnTemplate(numOfPage);
        }


        const pagesToShow = pages.slice(0, );
        return (
            <>
                <li onClick={() => handleClick(currentPage-1)} className={classes.arrowButton}><FontAwesomeIcon icon={faChevronLeft} /></li> 
                
                { pagesToShow.map(generatePageButtons) }
                
                <li onClick={() => handleClick(currentPage+1, numOfPages)}className={classes.arrowButton}><FontAwesomeIcon icon={faChevronRight} /></li>
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
        color: "#f0f0f0",
        width: "20px",
        height: "20px",
        border: "1px solid #f0f0f0",
        listStyle: 'none',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        padding: "15px",
        cursor: "pointer",
        marginRight: "5px"
    },
    arrowButton : {
        color: "#737373",
        borderColor: "#e5e7ec",
        width: "20px",
        height: "20px",
        border: "1px solid #fff",
        listStyle: 'none',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        cursor: "pointer",
        marginRight: "5px"
    },  
    currentPageBtn: {
        color: "#fff",
        width: "20px",
        height: "20px",
        border: "1px solid #f0f0f0",
        listStyle: 'none',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#3b5998",
        padding: "15px",
        cursor: "pointer",
        marginRight: "5px"
    },
    paginationStyles: {
        display: "flex",
        justifyContent: "flex-end"
    }
})

