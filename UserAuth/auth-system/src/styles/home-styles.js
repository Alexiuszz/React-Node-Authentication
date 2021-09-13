import { makeStyles, emphasize } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[200],
    },
    grow: {
        flexGrow: 1,
    },

    icon: {
        marginRight: theme.spacing(0.5),
        width: 15,
        height: 15,
    },

    secondLayer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    //image display
    wrapper: {
        width: "863px",
        marginTop: "20px",
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        backgroundColor: "white",
        margin: 'auto',
        borderLeft: '0px',
    },
    sliderImg: {
        zIndex: 2,
        position: 'relative',
    },
    sliderButton: {
        zIndex: 3,
        color: '#2e2853'
    },
    sliderPrev: {
        position: "absolute",
        top: "218px",
        left: "30px",
    },
    sliderNext: {
        position: "absolute",
        top: "218px",
        right: "30px",
    },

    thirdFourth: {
        margin: 'auto',
        width: '1510px'
    },
    //third layer
    thirdLayer: {
        color: '#000',
        backgroundColor: "#fff",
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '1190px',
            borderBottomLeftRadius: '70px',
            borderTopRightRadius: '70px',
        },
        marginTop: '10ch',

    },
    info: {
        width: '50ch',
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
        },
    },
    infoText: {
        padding: '30px 0px ',
    },
    homeInfoImg: {
        padding: '30px 0px',
        borderTopRightRadius: '50px',
        borderBottomLeftRadius: '70px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },

    },
    // fourth layer
    fourthLayer: {
        color: '#000',
        backgroundColor: "#cec9eb",
        display: 'block',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '1190px',
            borderBottomLeftRadius: '70px',
            borderTopRightRadius: '70px',
            marginLeft: '320px',
        },
    },
    //cardLayer
    cardLayer: {
        width: '863px',
        margin: 'auto',
        marginTop: '10ch',
        marginBottom: '10ch'
    },
    //footer
    
    footer: {
        backgroundColor: '#211d35',
        height: '50ch',
        color: '#fff',
    },
    footerBlock: {
        width: '1190px',
        margin: 'auto',
        marginTop: '10ch',
    },    
    footerWrap: {
        display: 'flex',
        flexDirection: 'row',        
        color: '#fff',
        margin: 'auto',
        fontSize: '16px',
    },
    footers: {
        marginTop: '40px',
        marginRight: '50px',        
        color: '#fff',
    },
    footerStyles: {
        fontSize: "16px",
        color: theme.palette.grey[400],
        '&:hover, &:focus': {
            color: theme.palette.grey[500],
            textDecoration: 'none',
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            color: emphasize(theme.palette.grey[300], 0.12),
        },
    },
    footerBottomText:{
        display: 'flex',
        flexDirection: 'row',        
    },
    footerLogo: {
        margin: '1ch 1.3ch 0ch 0ch'
    },
    footerCopyRight: {
        marginTop: '5ch',
        fontSize: '14px',
        color: theme.palette.grey[400],

    },
    divider: {
        fontSize: '18px',
        color: theme.palette.grey[400],

    },
}));

export default useStyles;