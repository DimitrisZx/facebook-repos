import React from 'react';
import { createUseStyles } from "react-jss";

export default function Loader() {
    const classes = useStyles();
    return (
        <section className={ classes.containerStyles }>
            <div className={ classes.loaderStyles } >LOADER GOES HERE</div>
        </section>
    )
}

const useStyles = createUseStyles({
    containerStyles: {
        background: "grey", 
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    loaderStyles: {
        color: "#fff",
        fontSize: "3rem"
    }
})

