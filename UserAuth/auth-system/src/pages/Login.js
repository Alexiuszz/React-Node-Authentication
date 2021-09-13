import React, { useState } from 'react';
import { useAuth } from '../auth_setup/use-auth.js';

import UserLogin from '../Components/forms/UserLogin';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Link } from 'react-router-dom'
import {
    Breadcrumbs,
    AppBar,
    Toolbar,
    Link as MUILink,
} from '@material-ui/core';
import useStyles from '../styles/login-signup';


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