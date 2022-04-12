import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from "react";
import './catalogue.css'

const Community = () => {
    return (
        <Container>
            <Grid container style={{ margin: '2.5rem' }}>
                <Grid item sm={6} gutterBottom style={{padding:'5%'}}>
                    <Typography
                        variant='h1'
                        color='secondary'
                        style={{ textAlign: 'left', paddingTop: '4rem', fontSize: '3.5rem', paddingBottom: '3rem', fontWeight: 'bold'}}
                    >
                        Community
                    </Typography>
                    <Typography
                        variant='body'
                        color='secondary'
                        style={{fontSize: '1.3rem'}}
                    >
                        Community members are encouraged to express their ideas, think inquisitively, ask questions and form Special Interest Groups to work on different topics.
                    </Typography>
                    <br/>
                    <Button
                        href='#Community'
                        variant='outlined'
                        style={{ marginTop: '3rem', padding:'1rem'}}
                        color='secondary'
                        size='large'
                    >
                        Learn More
                    </Button>
                </Grid>
                <Grid item sm={6}>
                    <img
                    className="section-img"
                    alt="Community Logo"
                    src={require("../../img/C-community.jpg")}    
                    />
                </Grid>
            </Grid>
        </Container>
)
}

export default Community;