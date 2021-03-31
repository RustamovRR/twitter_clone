import React from 'react'
import { Grid, Typography, Paper, Container, Avatar, TextareaAutosize, IconButton, CircularProgress, Button, InputAdornment, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { SearchTextField, useHomeStyles } from './useHomeStyles';
import Tweet from '../../components/Tweet';
import SideMenu from '../../components/SideMenu';
import AddTweetForm from '../../components/AddTweetForm';
import { Search } from '@material-ui/icons';

const Home = () => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item sm={1} md={3} xs={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item sm={8} md={6} xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        <Paper>
                            <AddTweetForm classes={classes} maxRows={15} />
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
                <Grid item sm={3} md={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            fullWidth
                            variant="outlined"
                            placeholder="search in twitter"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} >
                                <b>Actual theme</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem} >
                                    <ListItemText
                                        primary="Las-Vegas"
                                        secondary={
                                            <Typography component="span" variant="body1" >
                                                Tweets 3 331
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home