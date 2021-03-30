import React from 'react'
import { Grid, Typography, Paper, Container, Avatar, TextareaAutosize, IconButton, CircularProgress, Button, InputAdornment, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { SearchTextField, useHomeStyles } from './useHomeStyles';
import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import classNames from 'classnames';
import { ImageOutlined, Search } from '@material-ui/icons';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { classicNameResolver } from 'typescript';

export const Home = () => {
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
                            <div className={classes.addForm}>
                                <div className={classes.addFormBody}>
                                    <Avatar
                                        className={classes.tweetAvatar}
                                        src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
                                    />
                                    <TextareaAutosize
                                        className={classes.addFormTextarea}
                                        placeholder="what search?"
                                    />
                                </div>
                                <div className={classes.addFormBottom}>
                                    <div className={classNames(classes.tweetFooter)}>
                                        <IconButton color="primary">
                                            <ImageOutlined style={{ fontSize: 26 }} />
                                        </IconButton>
                                        <IconButton color="primary">
                                            <EmojiEmotionsIcon style={{ fontSize: 26 }} />
                                        </IconButton>
                                    </div>
                                    <div className={classes.addFormBottomRight}>
                                        <span>280</span>
                                        <div className={classes.addFormCircleProgress}>
                                            <CircularProgress variant="static" size={20} />
                                            <CircularProgress
                                                style={{ color: 'rgba(0,0,0,0.1)' }}
                                                variant="static"
                                                size={20}
                                                thickness={4}
                                                value={100}
                                            />
                                        </div>
                                        <Button color="primary" variant="contained" >
                                            Tweet
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.addFormBottomLine} />
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
