import React from 'react';

export default function Loader() {
    return (
        <section style={ containerStyles } className="loader">
            <div style={ loaderStyles } >LOADER GOES HERE</div>
        </section>
    )
}

const containerStyles = {
    background: "grey",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const loaderStyles = {
    color: "#fff",
    fontSize: "3rem"
}