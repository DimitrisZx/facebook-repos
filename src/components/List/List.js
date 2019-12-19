import React from 'react';

export default function List({ reposData, itemsPerPage }) {
    return (
        <ul className="reposList">
          { reposData.map((repo, index) => index < itemsPerPage ? <li>{repo.full_name}</li> : null) }
        </ul>
    );
}
