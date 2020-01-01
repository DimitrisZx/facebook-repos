import React from 'react';
import ListItem from "../ListItem/ListItem";
import { createUseStyles } from "react-jss";

export default function List({ reposData, itemsPerPage, toggleItem, expandedItem, pageIndex }) {
    const classes = useStyles();
    const firstRepoIndex = itemsPerPage * pageIndex;
    const lastRepoIndex = firstRepoIndex + itemsPerPage;
    const reposToShow = reposData.slice(firstRepoIndex, lastRepoIndex)
    if (reposData === '') {
        reposData = "No matching repos";
    }
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
        background: "white",
        boxShadow: "3px 3px 9px -1px  rgba(0,0,0,0.19)",
        padding: "15px",
        borderRadius: "15px",
        margin: "15px 0px",
        height: "510px",
        overflow: "auto"
    },
});
