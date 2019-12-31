import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

export default function SortByButton({ sortingFunction }) {
    const classes = useStyles();
    const sortingOptions = document.querySelector("#sorting-options");

    const expandOptions = e => {
        if (sortingOptions.hasAttribute("style")) {
            document.querySelector("#sorting-options").style.display = "flex"
        } else {
            sortingOptions.style.display = "flex"
            const optionsList = document.querySelector("#sorting-btn");
            optionsList.addEventListener("mouseleave", () => {
                document.querySelector("#sorting-options").style.display = "none"
            })
        }
    };

    const handleClick = (sortingFunction, fieldToSort) => {
        sortingOptions.removeAttribute("style");
        sortingFunction(fieldToSort)
    }
    return (
        <div id="sorting-btn" className={classes.displayBtn}>
            <button className={classes.button} onClick={ expandOptions }><span>Sort By</span> <FontAwesomeIcon icon={faCaretDown}/></button>
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
    button : {
        background: "#fff",
        padding: "7px",
        width: "100px",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "3px",
        border: "1px solid #6a81b1",
        fontSize: ".8rem",
        borderRadius: "3px"
    },
    displayBtn: {
        position: "relative",
        marginRight: "50px",
        zIndex: "3",
    },
    sortingOptions: {
        position: "absolute",
        top: "30px",
        "&  *": {
            listStyle: "none",
            padding: "0",
            margin: "5",
            cursor: "pointer"
        },
        display: "none"
    },
    sortingOption : {
        background: "#fff",
        marginTop: "2px",
        border: "1px solid #3b5998",
        padding: "10px",
        textAlign: "left",
        color: "#3b5998"
    }
});
