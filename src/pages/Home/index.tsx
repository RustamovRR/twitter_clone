import React from 'react'
import { Grid, Typography, Paper, Container } from '@material-ui/core'
import { SearchTextField, useHomeStyles } from './useHomeStyles';
import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';

export const Home = () => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        {
                            [...new Array(20).fill(
                                <Tweet
                                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam doloremque impedit reprehenderit illum maxime ducimus veritatis, exercitationem facere. Sunt architecto doloremque quos impedit voluptatibus vero quia eius numquam provident!"
                                    classes={classes}
                                    user={{
                                        fullname: 'Hayrullo Ahmad',
                                        username: '@Hayrullo',
                                        avatarUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'
                                    }}
                                />
                            )]
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField fullWidth />
                </Grid>
            </Grid>
        </Container>
    )
}
