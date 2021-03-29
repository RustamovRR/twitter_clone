import { makeStyles } from "@material-ui/core";


export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        height: "100vh",
    },
    blueSideBigIcon: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate( -50%, -50%)",
        width: "350%",
        height: "350%",
    },
    blueSide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#65d6ce",
        flex: "0 0 50%",
        overflow: "hidden",
        position: "relative",
    },
    loginSide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 50%",
    },
    blueSideListInfo: {
        position: "relative",
        listStyle: "none",
        padding: 0,
        margin: 0,
        width: 380,
        "& h5": {
            display: "flex",
            alignItems: "center",
            color: "white",
            fontWeight: 700,
            fontSize: 20,
        },
    },

    loginSideTwitterIcon: {
        fontSize: 45,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSideWrapper: {
        width: 380,
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    loginSideTitle: {
        fontWeight: 600,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
}));