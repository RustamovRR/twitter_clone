import React, { FC, ReactElement } from 'react'
import { Button, IconButton, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListIcon from '@material-ui/icons/List';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { useHomeStyles } from '../../pages/Home/useHomeStyles';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: FC<SideMenuProps> = ({ classes }): ReactElement => {
    return (
        <div>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <IconButton className={classes.logo} color="primary">
                        <TwitterIcon className={classes.logoIcon} />
                    </IconButton>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <SearchIcon className={classes.sideMenuListIcon} />
                        <Typography className={classes.sideMenuListLabel} variant="h6">Search</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <NotificationsIcon className={classes.sideMenuListIcon} />
                        <Typography className={classes.sideMenuListLabel} variant="h6">Notification</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <MessageIcon className={classes.sideMenuListIcon} />
                        <Typography className={classes.sideMenuListLabel} variant="h6">Messages</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <BookmarkIcon className={classes.sideMenuListIcon} />
                        <Typography className={classes.sideMenuListLabel} variant="h6">Bookmark</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <ListIcon className={classes.sideMenuListIcon} />
                        <Typography className={classes.sideMenuListLabel} variant="h6">List</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <PersonOutlineOutlinedIcon className={classes.sideMenuListIcon} />
                        <Typography className={classes.sideMenuListLabel} variant="h6">Profil</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Button className={classes.sideMenuTweetButton} variant="contained" color="primary" fullWidth>
                        Tweet
                    </Button>
                </li>
            </ul>
        </div>
    )
}
