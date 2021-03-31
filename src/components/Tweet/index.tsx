import React, { FC, ReactElement } from 'react'
import classnames from 'classnames'
import { Grid, IconButton, Typography, Paper, Container, TextField, Avatar } from '@material-ui/core'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { useHomeStyles } from '../../pages/Home/useHomeStyles';

interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}


const Tweet: FC<TweetProps> = ({ text, user, classes }: TweetProps): ReactElement => {
    return (
        <div>
            <Paper className={classnames(classes.tweetsHeader, classes.tweet)} variant="outlined">
                <Avatar
                    className={classes.tweetAvatar}
                    src={user.avatarUrl}
                    alt={`user profile ${user.fullname}`}
                />
                <div >
                    <Typography>
                        <b>{user.fullname}</b>
                        <span className={classes.tweetUserName}>{user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>.</span>
                        <span className={classes.tweetUserName}>1 h</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton>
                                <CommentIcon fontSize="small" />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepostIcon fontSize="small" />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <LikeIcon fontSize="small" />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <ReplyIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default Tweet