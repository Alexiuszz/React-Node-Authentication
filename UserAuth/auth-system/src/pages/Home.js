import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../use-auth.js';
import Container from '@material-ui/core/Container';
import { emphasize } from '@material-ui/core/styles';
import {
    makeStyles,
    Typography,
    Box,
    Toolbar,
    AppBar,
    Link as MUILink,
    Breadcrumbs,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: "#fff"
    },
    home: {
        color: '#fff',
        background: 'linear-gradient(to right, #a599eb, #2e2853)',
        height: '100vh',
        '@media (max-width:800px)': {
            height: '60vh',
        },

    },
    homeTextBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30vh',
        '@media (max-width:800px)': {
            marginTop: '10vh',
        },
    },
    homeText: {
        '@media (max-width:800px)': {
            fontSize: "5rem"
        },
        '&:hover, &:focus': {
            textDecoration: "none",
        },
    },
    appBar: {
        height: '50px',
        boxShadow: 'none',
    },
    homeStyles: {
        flexGrow: 1,
        textTransform: 'uppercase',
        textDecoration: "underline",
    },
    nav: {
        margin: 0,
        color: '#fff',
        justifyContent: 'space-around',
        textTransform: 'uppercase',
    },
    navStyles: {
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

function Home() {
    const classes = useStyles();
    return (
        <Container component="div" className={classes.home} maxWidth="false" disableGutters>
            <Nav />
            <Box className={classes.homeTextBox}>
                <Typography variant="h1" className={classes.homeText} component="h1" gutterBottom>
                    <LinkRouter to="/" color="inherit" className={classes.homeText}>
                        Track Logistics
                    </LinkRouter>
                </Typography>
            </Box>

        </Container>

    )
}

const LinkRouter = (props) => <MUILink {...props} component={Link} />



function Nav() {
    const classes = useStyles();
    let auth = useAuth();
    return (
        <AppBar color="transparent" className={classes.appBar} position="static">
            <Toolbar>
                <Typography  className={classes.homeStyles}>
                    <HomeIcon fontSize="small" className={classes.icon} />Home
                </Typography>
                {auth.token ?
                    <Breadcrumbs separator="" aria-label="breadcrumb" className={classes.nav}>
                        <LinkRouter color="inherit" to="/account">Account</LinkRouter>
                        <button onClick={() => auth.signout()}>Logout</button>

                    </Breadcrumbs>
                    :
                    <Breadcrumbs separator="" aria-label="breadcrumb" className={classes.nav}>
                        <LinkRouter color="inherit" to="/login" className={classes.navStyles}>
                            <LockOpenIcon fontSize="small" className={classes.icon} />Log in
                        </LinkRouter>
                        <LinkRouter color="inherit" to="/signup" className={classes.navStyles}>
                            <AssignmentIndIcon fontSize="small" className={classes.icon} />Sign Up
                        </LinkRouter>

                    </Breadcrumbs>
                }
            </Toolbar>
        </AppBar>

    )
}

export default Home;