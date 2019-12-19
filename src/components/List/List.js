import React, { useState } from 'react';
import ListItem from "../ListItem/ListItem";
import { createUseStyles } from "react-jss";

export default function List({ reposData, itemsPerPage }) {
    const classes = useStyles();
    return (
        <ul className={classes.listStyle}>
          { reposData.map((repo, index) => index < itemsPerPage ?<ListItem title={repo.full_name} starsCount={repo.stargazers_count}/> : null) }
        </ul>
    );
}

const useStyles = createUseStyles({
    listStyle: {
        border: "1px solid blue",
        background: "white",
        padding: 0,
    },
});
