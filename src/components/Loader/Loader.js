import React from 'react';
import { createUseStyles } from "react-jss";

import spinner from "./Spinner-0.9s-204px.svg"

export default function Loader() {
    const classes = useStyles();
    return (
        <>
            <section className={ classes.containerStyles }>
                <section className={classes.title}><div className={classes.F}>F</div> Repository</section>
                <div className={classes.spinnerContainer}>
                    <img src={spinner} />
                    <span className={classes.loading}>loading</span>
                </div>
            </section>
        </>
    )
}

const useStyles = createUseStyles({
    F: {
        marginRight: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#713bdb",
        boxShadow: "3px 3px 9px -1px  rgba(0,0,0,0.19)",
        borderRadius: "100%",
        color: "white",
        textAlign: "center",
        width: "100px",
        height: "100px"
    },
    spinnerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: "4rem",
        display: "flex",
        color: "#989898"
    },
    loading : {
        marginLeft: "-30px",
        fontSize: "1.8rem",
    },
    containerStyles: {
        background: "#fff", 
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    loaderStyles: {
        color: "#fff",
        fontSize: "3rem"
    }
})

