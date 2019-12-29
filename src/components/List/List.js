import React from 'react';
import ListItem from "../ListItem/ListItem";
import { createUseStyles } from "react-jss";

export default function List({ reposData, itemsPerPage, toggleItem, expandedItem, pageIndex }) {
    console.log(expandedItem)
    const classes = useStyles();

    const firstRepoIndex = itemsPerPage * pageIndex;
    const lastRepoIndex = firstRepoIndex + itemsPerPage;
    const reposToShow = reposData.slice(firstRepoIndex, lastRepoIndex)
    return (
        <ul className={classes.listStyle}>
            { reposToShow.map((repo, index) => 
                <ListItem 
                    key={ index }
                    toggleItem={ toggleItem }
                    isExpanded={ parseInt(repo.id) === parseInt(expandedItem) }
                    repoDetails={ repo }
                /> 
            )}
        </ul>
    );
}

const useStyles = createUseStyles({
    listStyle: {
        border: "1px solid #3b5998",
        background: "white",
        padding: "15px",
        borderRadius: "3px",
        marginTop: "5px"
    },
});
