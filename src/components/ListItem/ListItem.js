import React from 'react';
import { createUseStyles } from "react-jss";

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
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    }
})

