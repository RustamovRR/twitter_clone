import React from 'react'
import { Grid, Typography, Paper, Container, CircularProgress, Button, InputAdornment, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { SearchTextField, useHomeStyles } from './useHomeStyles';
import Tweet from '../../components/Tweet';
import SideMenu from '../../components/SideMenu';
import AddTweetForm from '../../components/AddTweetForm';
import { Search } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';

const Home = () => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    useEffect(() => {
        dispatch(fetchTweets())
    }, [])

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
                        {isLoading
                            ? <CircularProgress />
                            : tweets.map((tweet) => (
                                <Tweet
                                    text={tweet.text}
                                    classes={classes}
                                    user={tweet.user}
                                />
                            ))
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