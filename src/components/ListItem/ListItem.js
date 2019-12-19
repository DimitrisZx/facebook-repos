import React from 'react';
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/react-fontawesome/free-solid-svg-icons"

export default function ListItem({ title, starsCount }) {
    const classes = useStyles();
    return (
        <li className={classes.listItem}>
            <h3 className={classes.repoName}>{title}</h3>
            <h4 className={classes.repoStars}>{starsCount}</h4>
        </li>
    )
}

const useStyles = createUseStyles({
    repoName: {
        fontSize: "1rem",
        margin: 0,
        padding: 0
    },
    repoStars: {
        fontSize: "1rem",
        margin: 0,
        padding: 0
    },
    listItem: {
        display: "flex",
        color: "#3b5998",
        justifyContent: "space-between",
        background: "#e8ebf3",
        border: "1px solid #ced5e5",
        marginBottom: '5px',
        padding: "15px 20px",
        borderRadius: "3px",
        cursor: "pointer"
    }
})

