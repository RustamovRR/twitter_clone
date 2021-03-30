import { createStyles, InputBase, makeStyles, TextField, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";


export const useHomeStyles = makeStyles((theme) => ({
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
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListLabel: {
        fontSize: 20
    },
    sideMenuListIcon: {
        fontSize: 28
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
    tweetUserName: {
        color: grey[500]
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