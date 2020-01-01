import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

export default function SortByButton({ sortingFunction }) {
    const classes = useStyles();

    const expandOptions = e => {
        const sortingOptions = document.querySelector("#sorting-options");
        if (sortingOptions.style.display !== "flex") {
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
        const sortingOptions = document.querySelector("#sorting-options");
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
        border: "none",
        boxShadow: "3px 3px 9px -1px  rgba(0,0,0,0.19)",
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
        marginTop: "1px",
        border: "1px solid #713bdb",
        borderRadius: "3px",
        padding: "5px 7px",
        textAlign: "left",
        color: "#713bdb"
    }
});
