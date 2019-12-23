import React from 'react';
import ListItem from "../ListItem/ListItem";
import { createUseStyles } from "react-jss";

export default function List({ reposData, itemsPerPage, toggleItem, expandedItem }) {
    console.log(expandedItem)
    const classes = useStyles();
    return (
        <ul className={classes.listStyle}>
            { reposData.map((repo, index) => index < itemsPerPage 
                ?   <ListItem 
                        key={ index }
                        toggleItem={ toggleItem }
                        isExpanded={ parseInt(repo.id) === parseInt(expandedItem) }
                        repoDetails={ repo }
                    /> 
                : null
            )}
        </ul>
    );
}

const useStyles = createUseStyles({
    listStyle: {
        overflowY: "auto",
        border: "1px solid #3b5998",
        background: "white",
        padding: "15px",
        borderRadius: "3px",
        height: "75%",
    },
});
