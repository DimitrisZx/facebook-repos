import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

export default function SortByButton({ sortingFunction }) {
    const classes = useStyles();
    const sortingOptions = document.querySelector("#sorting-options");

    const expandOptions = e => {
        if (sortingOptions.hasAttribute("style")) {
            sortingOptions.removeAttribute("style");
        } else {
            sortingOptions.style.display = "flex"
        }
    };

    const handleClick = (sortingFunction, fieldToSort) => {
        sortingOptions.removeAttribute("style");
        sortingFunction(fieldToSort)
    }
    return (
        <div >
            <button onClick={ expandOptions }>Sort By <FontAwesomeIcon icon={faCaretDown}/></button>
            <section id="sorting-options" className={classes.sortingOptions}>
                <ul>
                    <li onClick={() => handleClick(sortingFunction, "full_name")} className={classes.sortingOption}>Name</li>
                    <li onClick={() => handleClick(sortingFunction, "stargazers_count")} className={classes.sortingOption}>Stars Count</li>
                </ul>  
            </section> 
        </div>
    )
}

const useStyles = createUseStyles({
    sortingOptions: {
        border: "1px solid black",
        "&  *": {
            listStyle: "none",
            padding: "0",
            margin: "5",
            cursor: "pointer"
        },
        display: "none"
    },
});
