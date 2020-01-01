import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

export default function ResultsPerPageBtn({ resultsNumFunction, itemsPerPageNum }) {
    const classes = useStyles();
    

    const expandOptions = () => {
        const resultsOptions = document.querySelector("#display-options");
        if (resultsOptions.hasAttribute("style")) {
            document.querySelector("#display-options").style.display = "flex";
        } else {
            resultsOptions.style.display = "flex";
            const optionsList = document.querySelector("#results-btn");
            optionsList.addEventListener("mouseleave", () => {
                document.querySelector("#display-options").style.display = "none";
            })
        }
    };

    const handleClick = (resultsNumFunction, resultsNum) => {
        const resultsOptions = document.querySelector("#display-options");
        resultsOptions.removeAttribute("style");
        resultsNumFunction(resultsNum);
    }

    return (
        <div id="results-btn" className={classes.displayBtn}>
            <span style={{color: "#713bdb"}}>results per page</span>
            <button className={classes.button} onClick={ expandOptions }><span>{itemsPerPageNum}</span><FontAwesomeIcon icon={faCaretDown}/></button>
            <section id="display-options" className={classes.resultsOptions}>
                <ul>
                    <li onClick={() => handleClick(resultsNumFunction, "8")} className={classes.resultsOption}>8</li>
                    <li onClick={() => handleClick(resultsNumFunction, "16")} className={classes.resultsOption}>16</li>
                </ul>  
            </section> 
        </div>
    )
}

const useStyles = createUseStyles({
    button: {
        background: "#fff",
        border: "none",
        boxShadow: "3px 3px 9px -1px  rgba(0,0,0,0.19)",
        fontSize: ".8rem",
        borderRadius: "3px",
        marginLeft: "10px",
        padding: "7px",
        display: "flex",
        justifyContent: "space-between",
        width: "40px"
    },
    displayBtn: {
        position: "relative",
        display: "flex",
        zIndex: 3
    },
    resultsOptions: {
        position: "absolute",
        top: "30px",
        width: "100%",
        "&  *": {
            listStyle: "none",
            padding: "0",
            margin: "0",
            cursor: "pointer"
        },
        display: "none",
        justifyContent: "flex-end"
    },
    resultsOption : {
        background: "#fff",
        marginTop: "2px",
        border: "1px solid #713bdb",
        padding: "5px 15px",
        borderRadius: "3px",
        textAlign: "left",
        color: "#713bdb",
        width: "100%",
    }
});
