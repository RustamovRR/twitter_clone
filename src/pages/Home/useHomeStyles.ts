import { createStyles, InputBase, makeStyles, TextField, Theme, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        margin: '15px 0'
    },
    logoIcon: {
        fontSize: 36
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    sideMenuListItem: {
        '&:hover': {
            cursor: 'pointer',
            '& div': {
                background: 'rgba(29,161,242,0.1)',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg ': {
                    color: theme.palette.primary.main
                }
            }
        },
        '& div': {
            height: 50,
            borderRadius: 30,
            marginBottom: 10,
            padding: '0 25px 0 20px',
            alignItems: 'center',
            display: 'inline-flex',
            position: 'relative',
            transition: 'background-color 0.1s ease-in-out'
        }
    },
    sideMenuListLabel: {
        fontSize: 20,
        marginLeft: 10
    },
    sideMenuListIcon: {
        fontSize: 32,
        marginLeft: -5
    },
    sideMenuTweetButton: {
        width: 230,
        padding:theme.spacing(3),
        marginTop:theme.spacing(2)
    },
    tweetsWrapper: {
        height: '100%'
    },
    tweetsHeader: {
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800
        }
    },
    tweet: {
        cursor: 'pointer',
        '&:hover': {
            background: 'rgb(245,248,250)'
        }
    },
    tweetUserName: {
        color: grey[500]
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    },
    tweetFooter: {
        width: 450,
        position: 'relative',
        left: -13,
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#e6ecf0',
            height: 45,
            padding: 0
        }
    })
)(InputBase)