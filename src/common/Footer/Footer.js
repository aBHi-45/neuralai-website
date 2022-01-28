import React from 'react';
import { Container, Typography, makeStyles, Grid, Link } from '@material-ui/core';
import { motion } from 'framer-motion';

const introVariants = {
    initial: {
        y: '2vw',
        opacity: 0
    },
    inView: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.7
        }
    }
}

const useStyles = makeStyles({
    links: {
        color: '#d7d7d7',
        textAlign: 'center',
        fontSize: '1.5vw',
        '&:hover': {
            color: '#00b7eb'
        }
    }
})

const Footer = () => {
    const classes = useStyles();
    const links = [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Community',
            href: '/community'
        },
        {
            text: 'Team',
            href: '/team'
        }
    ];
    const social = [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/neuralaidtu/?hl=en'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.instagram.com/neuralaidtu/?hl=en'
        },
        {
            text: 'Facebook',
            href: 'https://www.instagram.com/neuralaidtu/?hl=en'
        },
        {
            text: 'Twitter',
            href: 'https://www.instagram.com/neuralaidtu/?hl=en'
        }
    ];

    return (
        <motion.div
            variants={introVariants}
            initial='initial'
            whileInView='inView'
        >
            <Container style={{ background: '#141414', paddingBottom: '4.75rem', width: '100%' }}>
                <hr/>
                <Grid container spacing={7} style={{ marginTop: '2.2rem' }}>
                    {/* NeuralAI Intro */}
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
                                variants={introVariants}
                                animate='inView'
                                initial='initial'
                            >
                                Artificial Intelligence to DTU
                            </Typography>
                            &#160;by harnessing the true potential of its students.
                        </Typography>
                    </Grid>

                    {/* NeuralAI Links */}
                    <Grid item xs={12} sm={6} md={2}>
                        {links.map((link) => {
                            return (
                                <Link href={link.href} style={{textDecoration:'none'}}>
                                    <Typography
                                        className={classes.links}
                                        variant='body1'
                                        textAlign='center'
                                        gutterBottom
                                    >
                                        {link.text}
                                    </Typography>
                                </Link>
                            )
                        })}
                    </Grid>

                    {/* NeuralAI Social Media */}
                    <Grid item xs={12} sm={6} md={2}>
                        {social.map((sm) => {
                            return (
                                <a href={sm.href} style={{textDecoration:'none'}}>
                                    <Typography
                                        className={classes.links}
                                        variant='body1'
                                        textAlign='center'
                                        gutterBottom
                                    >
                                        {sm.text}
                                    </Typography>
                                </a>
                            )
                        })}
                    </Grid>

                    {/* NeuralAI Logo */}
                    <Grid item sm={6} spacing={10}>
                        <img style={{ width: '60%', padding: 20 }} src={require('../../img/logoFooter.png')} />
                    </Grid>

                    {/* NeuralAI Email & Rights */}
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
        </motion.div>
    )
}

export default Footer;