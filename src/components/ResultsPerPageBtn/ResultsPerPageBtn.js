import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

export default function SortByButton({ resultsNumFunction }) {
    const classes = useStyles();
    const resultsOptions = document.querySelector("#display-options");

    const expandOptions = () => {
        if (resultsOptions.hasAttribute("style")) {
            resultsOptions.removeAttribute("style");
        } else {
            resultsOptions.style.display = "flex";
        }
    };

    const handleClick = (resultsNumFunction, resultsNum) => {
        resultsOptions.removeAttribute("style");
        resultsNumFunction(resultsNum);
    }

    return (
        <div >
            <button onClick={ expandOptions }>8<FontAwesomeIcon icon={faCaretDown}/></button>
            <section id="display-options" className={classes.resultsOptions}>
                <ul>
                    <li onClick={() => handleClick(resultsNumFunction, "8")} className={classes.sortingOption}>8</li>
                    <li onClick={() => handleClick(resultsNumFunction, "16")} className={classes.sortingOption}>16</li>
                </ul>  
            </section> 
        </div>
    )
}

const useStyles = createUseStyles({
    resultsOptions: {
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
