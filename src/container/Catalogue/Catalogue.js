import { Container } from "@material-ui/core";
import React from "react";
import Community from "./Community";
import Research from "./Research";

const imgVariants = {
    right: {
        initial: {
            x: '5vw',
            opacity: 0,
        },
        inView: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5
            }
        },
        exit: {
            y: '-5vw',
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.5
            }
        }
    },
    left: {
        initial: {
            x: '-5vw',
            opacity: 0,
        },
        inView: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5
            }
        },
        exit: {
            y: '-5vw',
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.5
            }
        }
    }
}

const textVariants = {
    initial: {
        y: '5vw',
        opacity: 0
    },
    inView: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5
        }
    },
    exit: {
        y: '-5vw',
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 0.5
        }
    }
}

const Catalogue = () => {
    return (
        <Container>
            <Research variants={imgVariants.left} text ={textVariants}/>
            <Community variants={imgVariants.right} text={textVariants}/>
        </Container>
    )
}

export default Catalogue;