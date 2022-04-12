import { Container, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import './catalogue.css'

const Research = () => {
    return (
    <Container>
            <Grid container style={{ margin: '2.5rem' }}>
                <Grid item sm={6} gutterBottom>
                    <img
                    className="section-img"
                    alt="Community Logo"
                    src={require("../../img/C-research.jpg")}
                    />
                </Grid>
                <Grid item sm={6} gutterBottom style={{padding:'5%'}}>
                    <Typography
                        variant='h1'
                        color='secondary'
                        style={{ textAlign: 'left', paddingTop: '1rem', fontSize: '3.5rem', paddingBottom: '3rem', fontWeight: 'bold'}}
                    >
                        Research Papers
                    </Typography>
                    <Typography
                        variant='body'
                        color='secondary'
                        style={{fontSize: '1.3rem'}}
                    >
                        As AI is still a developing field, a lot has been left unexplored and untouched. The support systems provided by NeuralAI will help students conduct research in this field by providing them with the support they need.
                    </Typography>
                    <br/>
                    <Button
                        href='#Research'
                        variant='outlined'
                        style={{ marginTop: '3rem', padding:'1rem'}}
                        color='secondary'
                        size='large'
                    >
                        Learn More
                    </Button>
                </Grid>
            </Grid>        
    </Container>
)
}

export default Research;