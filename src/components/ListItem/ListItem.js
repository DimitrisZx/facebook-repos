import React from 'react';
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import ListItemDesc from "./ListItemDesc"

export default function ListItem({ isExpanded, toggleItem, repoDetails }) {
    const classes = useStyles();
    const { full_name, id, stargazers_count, description } = repoDetails;
    if (isExpanded) console.log("expanded ", full_name )
    return (
        <li onClick={() => toggleItem(id)} className={classes.listItem}>
            <header className={classes.listItemHeader}>
                <h3 className={classes.repoName}>{full_name}</h3>
                <div className={classes.repoStars}>
                    <FontAwesomeIcon className={classes.starIcon} icon={faStar} />
                    <span className={classes.starsCount}>{stargazers_count}</span>
                </div>
            <FontAwesomeIcon className={ classes.caretIcon } icon={ faCaretDown } />
            </header> 
            
            {
                isExpanded 
                    ?   <section className={classes.listItemDesc}>
                            <h4>Description:</h4>
                            <ListItemDesc descriptionText={description} />
                        </section>
                    : null
            }
        </li>
    )
}

const useStyles = createUseStyles({
    starsCount: {
        color: "#713bdb",
        fontWeight: "bold"
    },
    listItemDesc: {
        padding: "15px 25px",
        borderRadius: "16px",
        "& h4": {
            margin: "0px",
            color: "#713bdb"
        }
    },
    listItemHeader: {
        display: "flex",
        background: "#713bdb",
        padding: "15px 20px",
        borderRadius: "16px"
    },
    caretIcon: {
        color: "white",
        flex:1,
    },
    starIcon: {
        color: "#713bdb",
        margin: "0px 15px"
    },
    repoName: {
        color: "white",
        fontSize: "1rem",
        margin: 0,
        padding: 0,
        flex:2
    },
    repoStars: {
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid #3b5998",
        display: "flex",
        alignItems: "center",
        margin: 0,
        flex:1,
        width: "3000px"
    },
    listItem: {
        display: "flex",
        color: "darkgrey",
        flexDirection: "column",
        background: "none",
        border: "1px solid #ced5e5",
        marginBottom: '5px',
        borderRadius: "16px",
        cursor: "pointer",
        "& .listItem:last-child": {
            marginBottom: 10,
            backgroundColor: "red",
            flexDirection: "row",
        }
        
    },
})

