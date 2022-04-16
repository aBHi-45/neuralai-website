import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./catalogue.css";
import { motion } from "framer-motion";

const Community = (props) => {
  return (
    <Container>
      <Grid container style={{ margin: "2.5rem" }}>
        <Grid item sm={6} gutterBottom style={{ padding: "5%" }}>
          <motion.div
            variants={props.text}
            initial="initial"
            whileInView="inView"
            exit="exit"
          >
            <Typography
              variant="h1"
              color="secondary"
              style={{
                textAlign: "left",
                paddingTop: "4rem",
                fontSize: "3.5rem",
                paddingBottom: "3rem",
                fontWeight: "bold",
              }}
            >
              Community
            </Typography>
            <Typography
              variant="body"
              color="secondary"
              style={{ fontSize: "1.3rem" }}
            >
              Community members are encouraged to express their ideas, think
              inquisitively, ask questions and form Special Interest Groups to
              work on different topics.
            </Typography>
            <br />
            <Button
              href="#Community"
              variant="outlined"
              style={{ marginTop: "3rem", padding: "1rem" }}
              color="secondary"
              size="large"
            >
              Learn More
            </Button>
          </motion.div>
        </Grid>
        <Grid item sm={6}>
          <motion.img
            className="section-img"
            alt="Community Logo"
            src={require("../../img/C-community.jpg")}
            variants={props.variants}
            initial="initial"
            whileInView="inView"
            exit="exit"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Community;
