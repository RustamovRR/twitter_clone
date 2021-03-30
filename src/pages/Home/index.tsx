import React from 'react'
import { Grid, IconButton, Typography, Paper, Container, TextField, Avatar } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListIcon from '@material-ui/icons/List';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { SearchTextField, useHomeStyles } from './useHomeStyles';

export const Home = () => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} color="primary">
                                <TwitterIcon className={classes.logoIcon} />
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton >
                                <SearchIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant="h6">Search</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton >
                                <NotificationsIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant="h6">Notification</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton >
                                <MessageIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant="h6">Messages</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton >
                                <BookmarkIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant="h6">Bookmark</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton >
                                <ListIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant="h6">List</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton >
                                <PersonOutlineOutlinedIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant="h6">Profil</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Avatar
                                        src="https://images.unsplash.com/photo-1560241804-02b7b1bc9d55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=328&q=80"
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <b>mxhxvoid</b>
                                        <span className={classes.tweetUserName}>@maxavoid</span>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam doloremque impedit reprehenderit illum maxime ducimus veritatis, exercitationem facere. Sunt architecto doloremque quos impedit voluptatibus vero quia eius numquam provident!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField fullWidth />
                </Grid>
            </Grid>
        </Container>
    )
}
