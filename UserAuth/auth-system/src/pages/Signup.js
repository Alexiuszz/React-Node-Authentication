import React, { useState } from 'react';
import axios from 'axios';

import UserSignUp from './UserSignUp';
import { emphasize } from '@material-ui/core/styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Link } from 'react-router-dom';
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
    selectEmpty: {
        width: '34ch',

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


function SignUp() {
    //State
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        sex: '',
        email: '',
        username: '',
        password: '',
        terms: false,
        showPassword: false,
    })

    const classes = useStyles();
    const reqFirstNameError = user.firstName === "";
    const reqLastNameError = user.lastName === "";
    const reqGenderError = user.sex === "";
    const reqEmailError = user.email === "";
    const reqUsernameError = user.username === "";
    const reqPasswordError = user.password === "";
    const LinkRouter = (props) => <MUILink {...props} component={Link} />;

    const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();
        if (user.username === "" || user.password === "" || user.email === "" || user.firstName === "" || user.lastName === "" || user.sex === "") {
            alert("Required filled");
            return;
        }
        if (!user.terms) {
            alert("Please accept terms and conditions.");
            return;
        }
        axios({
            url: "/newUser",
            method: 'post',
            data: user
        })
            .then(function (response) {
                console.log(response.data);
                !response.data ?
                    alert("Username already exists") :
                    window.location.href = "http://localhost:3000/login";
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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

            <UserSignUp
                user={user}
                classes={classes}
                reqFirstNameError={reqFirstNameError}
                reqLastNameError={reqLastNameError}
                reqGenderError={reqGenderError}
                reqEmailError={reqEmailError}
                reqUsernameError={reqUsernameError}
                reqPasswordError={reqPasswordError}
                LinkRouter={LinkRouter}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
            />
        </>
    )
}

export default SignUp