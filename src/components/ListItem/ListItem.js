import React from 'react'

export default function ListItem({ title, starsCount }) {
    return (
        <li style={listItemStyle}>
            <h3>{title}</h3>
            <h4>{starsCount}</h4>
        </li>
    )
}

const listItemStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
}