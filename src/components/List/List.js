import React from 'react';
import ListItem from "../ListItem/ListItem";

export default function List({ reposData, itemsPerPage }) {
    return (
        <ul style={listStyle} className="reposList">
          { reposData.map((repo, index) => index < itemsPerPage ?<ListItem title={repo.full_name} starsCount={repo.stargazers_count}/> : null) }
        </ul>
    );
}

const listStyle = {
    border: "1px solid blue",
    background: "white"
}
