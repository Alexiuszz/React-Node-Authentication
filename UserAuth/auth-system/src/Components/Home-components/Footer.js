import React from "react";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
    Typography,
    Input,
    InputLabel,
    FormControl,
    IconButton,
    Button
} from '@material-ui/core';

import useStyles from "../../styles/footerStyles";

export default function Footer(props) {
    const [email, setEmail] = React.useState('');
    const classes = useStyles();
    const LinkRouter = props.LinkRouter;

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    return (
        <div className={classes.footerBlock}>
            <div className={classes.footerWrap}>

                <List
                    className={classes.footers}
                    component="footer"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableSticky classes={{ root: classes.footerWrap }} >
                            ABOUT
                        </ListSubheader>
                    }
                >
                    <ListItem button>
                        <LinkRouter to="/about-us" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="About Us" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/contact-us" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Contact Us" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/privacy-policy" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Privacy Policy" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/terms" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Terms of Use" />
                        </LinkRouter>
                    </ListItem>

                </List>

                <List
                    className={classes.footers}
                    component="footer"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableSticky classes={{ root: classes.footerWrap }} >
                            BUSINESS
                        </ListSubheader>
                    }
                >
                    <ListItem button>
                        <LinkRouter to="/" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Logistics" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/market" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Market" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/tracker" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Tracker" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/terms" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Invest" />
                        </LinkRouter>
                    </ListItem>

                </List>

                <List
                    className={classes.footers}
                    component="footer"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableSticky classes={{ root: classes.footerWrap }} >
                            HELP AND SUPPORT
                        </ListSubheader>
                    }
                >
                    <ListItem button>
                        <LinkRouter to="/request-and-delivery" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Request and Delivery" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/tracking" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Tracking" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/technical-support" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Technical Support" />
                        </LinkRouter>
                    </ListItem>

                </List>

                <List
                    className={classes.footers}
                    component="footer"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader disableSticky classes={{ root: classes.footerWrap }} >
                            PEOPLE
                        </ListSubheader>
                    }
                >
                    <ListItem button>
                        <LinkRouter to="/affiliate-program" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Affilite Program" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/couriers" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Couriers" />
                        </LinkRouter>
                    </ListItem>
                    <ListItem button>
                        <LinkRouter to="/career" color="inherit" className={classes.footerStyles}>
                            <ListItemText primary="Career" />
                        </LinkRouter>
                    </ListItem>

                </List>

                <div className={classes.footerSocials}>
                    <Typography variant="body" color='inherit' className={classes.footerCopyRight}>
                        Newsletter
                    </Typography>

                    <div className={classes.newsletter}>
                        <FormControl className={classes.input} variant="outlined" >
                            <InputLabel htmlFor="component-outlined">E-mail</InputLabel>
                            <Input id="component-outlined" value={email} onChange={handleChange} label="Name" type="email" classes={classes.input}/>
                        </FormControl>
                        <Button variant="contained" className={classes.button}>Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className={classes.divider}>______________________________________________________________________________________________________________</div>
            <div className={classes.footerBottomText}>
                <Typography variant="h4" color='inherit' className={classes.footerLogo}>
                    MarketPlace
                </Typography>
                <Typography variant="body" color='inherit' className={classes.footerCopyRight}>
                    MarketPlace Copyright &copy; 2021. All Rights Reserved.
                </Typography>
            </div>
        </div>

    )
}