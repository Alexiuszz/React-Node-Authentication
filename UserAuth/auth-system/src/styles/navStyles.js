import { makeStyles, emphasize } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    // Navigation Bar
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[200],
        '&:hover, &:active': {
            backgroundColor: theme.palette.grey[50],
            border: '1.5px solid #b7adf6 '
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    inputRoot: {
        color: 'black',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appBar: {
        color: '#fff',
        backgroundColor: '#211d35',
        height: '10ch',
    },
    homeStyles: {
        flexGrow: 1,
        textDecoration: "none",
    },
    nav: {
        margin: 0,
        color: '#fff',
        justifyContent: 'space-around',
        textTransform: 'uppercase',
    },
    navStyles: {
        fontSize: "14px",
        '&:hover, &:focus': {
            color: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            color: emphasize(theme.palette.grey[300], 0.12),
        },
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 15,
        height: 15,
    },

}));

export default useStyles;