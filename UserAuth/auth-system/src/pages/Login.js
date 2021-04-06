import React, { useState } from 'react';
import { useAuth } from '../use-auth.js';

import UserLogin from './UserLogin';
import { emphasize } from '@material-ui/core/styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Link } from 'react-router-dom'
import {
    makeStyles,
    Breadcrumbs,
    AppBar,
    Toolbar,
    Link as MUILink,
} from '@material-ui/core';

//material UI styles *** needs  work ***
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '36ch',
        },
        background: 'linear-gradient(to right, #a599eb, #ffff)',
        margin: 'auto',
        marginTop: '50px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: "55%",
        '@media (min-width:800px)': {
            width: '40%',
        },
        alignItems: 'center',
        border: '1px solid #efefef',
        padding: '20px',
    },
    margin: {
        margin: theme.spacing(1.5),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
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
        color: "#fff"
    },
    nav: {
        marginLeft: "95%",
        justifyContent: 'space-around',
        textTransform: 'uppercase',
    },
    appBar: {
        height: '7ch',
        boxShadow: 'none',
    },
    textField: {
        width: '36ch',
    },
}));

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        keepSignedin: false,
        showPassword: false,
    })

    const classes = useStyles();
    const reqUsernameError = user.username === "";
    const reqPasswordError = user.password === "";
    const LinkRouter = (props) => <MUILink {...props} component={Link} />
    const auth = useAuth();

    const handleClickShowPassword = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
            showPassword: !user.showPassword
        })
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        type === "checkbox" ?
            setUser({
                ...user,
                [name]: checked
            }) :
            setUser({
                ...user,
                [name]: value
            })
    }

    return (
        <>
            <AppBar color="transparent" className={classes.appBar} position="static">
                <Toolbar>
                    <Breadcrumbs separator="" aria-label="breadcrumb" className={classes.nav}>
                        <LinkRouter color="primary" to="/" className={classes.navStyles}>
                            <CloseRoundedIcon />
                        </LinkRouter>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
            
            <UserLogin
                user={user}
                auth={auth}
                classes={classes}
                reqUsernameError={reqUsernameError}
                reqPasswordError={reqPasswordError}
                LinkRouter={LinkRouter}
                handleChange={handleChange}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
            />
        </>

    )
}

export default Login