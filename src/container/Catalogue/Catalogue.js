import { Container } from "@material-ui/core";
import React from "react";
import Community from "./Community";
import Research from "./Research";

const Catalogue = () => {
    return (
        <Container>
            <Research />
            <Community/>
        </Container>
    )
}

export default Catalogue;