import React from 'react';
import { Container, Typography, makeStyles, createTheme, Grid, Link } from '@material-ui/core';
import { ThemeProvider, ceateTheme } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        marginLeft: 0,
        marginRight: 0,
        background: '#141414',
        paddingBottom: '4.75rem',
        width: '100%'
    },
    links: {
        color: '#d7d7d7',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: '1.5vw',
        '&:hover': {
            color: '#fff'
        }
    }
})

const Footer = () => {
    const classes = useStyles();
    const links = ['About', 'Projects', 'Community', 'Team'];
    const social = ['Instagram', 'LinkedIn', 'Facebook', 'Twitter'];

    return (
        <Container style={{ background: '#141414', paddingBottom: '4.75rem', width: '100%' }}>
            <hr style={{ height: '2px', color: '#878787', background: '#878787' }} />
            <Grid container spacing={7} style={{ marginTop: '2.2rem' }}>
                <Grid item sm={12} md={8} spacing={10}>
                    <Typography
                        variant='caption'
                        color='primary'
                        style={{ fontSize: '2.8vw', lineHeight: '3.4vw' }}
                    >
                        NeuralAI aims to bring the power of&#160;
                        <Typography
                            variant='caption'
                            color='textPrimary'
                            style={{ fontSize: '2.8vw', lineHeight: '3.4vw' }}

                        >
                            Artificial Intelligence to DTU
                        </Typography>
                        &#160;by harnessing the true potential of its students.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    {links.map((link) => {
                        return (
                            <Link>
                                <Typography
                                    className={classes.links}
                                    variant='body1'
                                    textAlign='center'
                                    gutterBottom
                                >
                                    {link}
                                </Typography>
                            </Link>
                        )
                    })}


                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    {social.map((sm) => {
                        return (
                            <Link>
                                <Typography
                                    className={classes.links}
                                    variant='body1'
                                    textAlign='center'
                                    gutterBottom
                                >
                                    {sm}
                                </Typography>
                            </Link>
                        )
                    })}
                </Grid>
                <Grid item sm={6} spacing={10}>
                    <img style={{ width: '60%', padding: 20 }} src={require('../../img/logoFooter.png')} />
                </Grid>
                <Grid item sm={6} spacing={10}>
                    <br />
                    <br />
                    <Typography
                        variant='body1'
                        color='secondary'
                        style={{ textAlign: 'right', fontSize: '1.8vw', padding: 20, paddingBottom: 0 }}
                    >
                        neural.ai.dtu@gmail.com
                    </Typography>
                    <Typography
                        variant='body1'
                        color='primary'
                        style={{ textAlign: 'right', fontSize: '1.8vw', padding: 20, paddingTop: 0 }}
                    >
                        &copy; 2022 NeuralAI DTU. All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;