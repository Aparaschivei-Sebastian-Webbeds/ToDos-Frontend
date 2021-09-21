import { makeStyles } from "@material-ui/core";

export const styles = makeStyles(theme => ({
    root: {
        backgroundColor: '#c1e3ca'

    },
    title: {
        backgroundColor: '#f2320c'
    },
    counter: {
        fontFamily: 'Apple Chancery, cursive'
    },
    form: {
        backgroundColor: '#dee2fc',
        display: "flex",
        flexDirection: "inline",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"

    },
    tasksList: {
        backgroundColor: '#a1acc4',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1",
        borderColor: "grey",
        mx: "20%"
    },
    loader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
    },
    listItem: {
        display: "flex",
        width: "100%",
        flexDirection: "inline",
        alignSelf: "center",
        justifyContent: "space-around",
        alignItems: "center"
    },
    taskText: {
        display: "flex",
        width: "100%",
        flexDirection: "inline",
        justifyItems: "flex-start",
        marginLeft: "0"
    },
    taskButtons: {
        display: "flex",
        width: "100%",
        flexDirection: "inline",
        justifyContent: "flex-end",
        marginRight: "0"
    },
    checked: {
        size: "large",
        style: "italic",
        color: "#3f51b5",
        textDecoration: "line-through"

    },
    unchecked: {
        size: "large",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "white"
    },
    flexInline: {
        display: "flex",
        flexDirection: "inline",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "0"
    }
}));

